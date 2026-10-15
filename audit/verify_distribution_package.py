#!/usr/bin/env python3
"""Fail-closed audit of ACTUAL extracted Web assets in an app package.

Usage:
    python3 audit/verify_distribution_package.py /path/to/Web
    python3 audit/verify_distribution_package.py /path/to/Periodic.ipa
    python3 audit/verify_distribution_package.py /path/to/App.msix

Supports extracted folders and flat ZIP-format .zip/.ipa/.msix/.appx archives.
Does NOT validate signatures, legal license grants, live behavior, nested
MSIX/Appx bundles, or external downloads. Refuses unsupported cases.
This script reads package contents and does not modify the candidate package.
"""
import hashlib
import re
import sys
import zipfile
from pathlib import Path

from package_web_assets import CORE_FILES, EXPECTED_EXCLUDED, ROOT, catalog, visible

PHOTO_MARKER = re.compile(r"(?:^|/)images/elements/", re.I)
PHOTO_NAME = re.compile(r"^(?P<prefix>(?:[^/]+/)*)images/elements/(?P<file>[^/]+)$", re.I)
NESTED_FORMATS = {".zip", ".ipa", ".msix", ".appx", ".msixbundle", ".appxbundle"}
SENSITIVE_FILES = tuple(CORE_FILES) + (
    "icons/icon-192.png", "icons/icon-512.png",
    "icons/periodic-table-icon.svg", "images/bay-city-city-hall.jpg"
)


def safe_name(name):
    if not name or name.startswith("/") or "\\" in name or "\x00" in name:
        raise ValueError(f"Unsafe package entry path: {name!r}")
    parts = name.split("/")
    if any(p in {"", ".", ".."} or ":" in p for p in parts):
        raise ValueError(f"Unsafe package entry path: {name!r}")
    return name


class Package:
    def __init__(self, target):
        self.target = Path(target)
        if not self.target.exists():
            raise FileNotFoundError(f"Package path not found: {self.target}")
        self.zip = None
        self.directory = self.target.is_dir()
        self.members = {}
        self.casefolded = set()
        if self.directory:
            for p in self.target.rglob("*"):
                if p.is_symlink():
                    raise ValueError(f"Unsafe symlink in package directory: {p}")
                if not p.is_file():
                    continue
                self.add(safe_name(p.relative_to(self.target).as_posix()), p)
        else:
            if self.target.suffix.lower() not in {".zip", ".ipa", ".msix", ".appx"}:
                raise ValueError("Unsupported archive: supply extracted Web directory or flat .zip/.ipa/.msix/.appx")
            if not zipfile.is_zipfile(self.target):
                raise ValueError("Not a readable ZIP-format package; no release approval")
            self.zip = zipfile.ZipFile(self.target)
            for member in self.zip.infolist():
                if member.is_dir():
                    continue
                # ZIP symlinks are not valid package files to audit.
                if ((member.external_attr >> 16) & 0o170000) == 0o120000:
                    raise ValueError("ZIP symlink refused: " + member.filename)
                if member.flag_bits & 1:
                    raise ValueError("Encrypted package member refused: " + member.filename)
                self.add(safe_name(member.filename), member)
        if not self.members:
            raise ValueError("Package has no files")

    def add(self, name, ref):
        folded = name.casefold()
        if folded in self.casefolded:
            raise ValueError("Duplicate or case-colliding package entry: " + name)
        self.casefolded.add(folded)
        self.members[name] = ref

    def read(self, name):
        ref = self.members[name]
        if self.directory:
            return ref.read_bytes()
        # ZIP decompression ratio and size caps avoid ambiguous/unbounded payloads.
        if ref.file_size > 20_000_000:
            raise ValueError("Oversized package member: " + name)
        return self.zip.read(ref)

    def close(self):
        if self.zip is not None:
            self.zip.close()


def hash_bytes(data):
    return hashlib.sha256(data).hexdigest()


def assert_matching_source(pkg, package_name, source_name):
    expected = ROOT / source_name
    if not expected.is_file():
        raise FileNotFoundError("Missing audited source file: " + source_name)
    if package_name not in pkg.members:
        raise ValueError("Missing audited packaged file: " + package_name)
    if hash_bytes(pkg.read(package_name)) != hash_bytes(expected.read_bytes()):
        raise ValueError("Package differs from current audit-branch file: " + package_name)


def verify(path):
    records = catalog()
    excluded = {z for z in range(1, 119) if not visible(z, records[str(z)])}
    if excluded != EXPECTED_EXCLUDED or len(excluded) != 26:
        raise ValueError("Audit catalog exclusion inventory changed; reviewer sign-off required")
    expected = {records[str(z)]["localUrl"] for z in range(1, 119) if z not in excluded}
    if len(expected) != 92:
        raise ValueError("Expected exactly 92 unique approved-for-STAGING element filenames")

    pkg = Package(path)
    try:
        # Do not bless a bundle that hides additional nested app packages.
        nested = [s for s in pkg.members if Path(s).suffix.lower() in NESTED_FORMATS]
        if nested:
            raise ValueError("Nested packages not inspected; unpack and check each inner package: " + ", ".join(nested[:4]))

        # Check excluded image *filenames anywhere*, not only inside the main Web folder.
        excluded_names = {Path(records[str(z)]["localUrl"]).name.casefold() for z in excluded}
        for name in pkg.members:
            if Path(name).name.casefold() in excluded_names:
                raise ValueError("Withheld/placeholder image physically distributed: " + name)

        found = {}
        strange = []
        for name in pkg.members:
            if not PHOTO_MARKER.search(name):
                continue
            m = PHOTO_NAME.fullmatch(name)
            if not m:
                strange.append(name)
                continue
            prefix = m.group("prefix")
            found[name] = (prefix, m.group("file"))
        if strange:
            raise ValueError("Unexpected file under images/elements: " + ", ".join(strange[:6]))
        if not found:
            raise ValueError("Could not find packaged element pictures in a Web directory")

        prefixes = {pair[0] for pair in found.values()}
        if len(prefixes) != 1:
            raise ValueError("Multiple element-image folders; cannot safely certify distribution: " + str(sorted(prefixes)))
        prefix = prefixes.pop()
        if not (prefix.endswith("Web/") or (prefix == "" and pkg.directory and pkg.target.name == "Web")):
            raise ValueError("Cannot locate expected Web asset root; unsupported package layout: " + prefix)

        actual = {name[len(prefix):] for name in found}
        if actual != expected:
            missing = sorted(expected - actual)
            extra = sorted(actual - expected)
            raise ValueError(f"92-image manifest mismatch: missing={missing[:7]} extra={extra[:7]}")

        # Fail if any staged asset has changed since its audit-branch source.
        # This catches silently shipping an older dataset/credit page or edited JPEG.
        for name in SENSITIVE_FILES:
            assert_matching_source(pkg, prefix + name, name)
        for item in sorted(expected):
            assert_matching_source(pkg, prefix + item, item)

        print(f"PASS: exactly {len(actual)} matching element JPEGs, 26 excluded, "
              "source-identical credits, science pages and Bay City photograph")
        print("WARNING: release is NOT approved by this structural/hash comparison. "
              "Copyright and ShareAlike, signatures, browser QA, and Store packaging "
              "still require independent verification.")
        return True
    finally:
        pkg.close()


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("Usage: python3 audit/verify_distribution_package.py PATH_TO_WEB_FOLDER_OR_FLAT_ZIP")
    try:
        verify(sys.argv[1])
    except (ValueError, OSError, KeyError, zipfile.BadZipFile) as exc:
        print("FAIL: package not verified: " + str(exc), file=sys.stderr)
        sys.exit(1)
