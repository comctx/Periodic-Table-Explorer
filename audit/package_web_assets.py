#!/usr/bin/env python3
"""Stage the iPhone Web assets without hidden, placeholder, or unresolved-rights images.

This is a DISTRIBUTION GUARD, not a legal clearance of any included photograph.
The public repository can still contain images that must not ship in the app.
"""
import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
# Fail closed: additional element images require explicit review before shipping.
EXPECTED_EXCLUDED = {61, 84, 85, 86, 87, 93, 99} | set(range(100, 119))
CORE_FILES = (
    "index.html", "element.html", "quiz.html", "about.html",
    "privacy.html", "support.html", "elements-data.js",
    "element-photo-data.js", "sw.js", "offline-photos.json", "manifest.webmanifest",
    "donco_logo_footer.png",
)
PHOTO_PATH = re.compile(r"images/elements/\d{3}-[a-z]{1,2}\.jpg\Z")


def catalog():
    raw = (ROOT / "element-photo-data.js").read_text(encoding="utf-8")
    match = re.fullmatch(r"\s*window\.ELEMENT_PHOTOS\s*=\s*(\{.*\})\s*;\s*", raw, re.S)
    if not match:
        raise ValueError("Unexpected element-photo-data.js format")
    records = json.loads(match.group(1))
    if set(records) != {str(n) for n in range(1, 119)}:
        raise ValueError("Photo catalog must have exactly elements 1 through 118")
    return records


def visible(z, item):
    title = str(item.get("title") or "")
    original = str(item.get("originalUrl") or "")
    attribution = str(item.get("attribution") or "")
    license_url = str(item.get("licenseUrl") or "")
    placeholder = (
        bool(re.fullmatch(r"No Image Found", title, re.I))
        or bool(re.search(r"/s/transactinoid\.png$", original, re.I))
    )
    illustration = bool(re.search(r"only an illustration|not .* itself|unrelated particle", title, re.I))
    rights_unknown = not re.match(r"https?://", license_url, re.I) and not re.search(
        r"public domain", attribution, re.I
    )
    no_direct_sample = z in (84, 85, 86, 87) or z >= 100
    return not (
        placeholder or illustration or rights_unknown
        or bool(item.get("withholdReason")) or no_direct_sample
    )


def stage(destination):
    dst = Path(destination).resolve()
    if dst.name != "Web" or dst == ROOT or ROOT in dst.parents:
        raise ValueError("Destination must be an external build directory named Web")
    records = catalog()
    excluded = {z for z in range(1, 119) if not visible(z, records[str(z)])}
    if excluded != EXPECTED_EXCLUDED:
        raise ValueError(
            "Image visibility/rights inventory changed; do not package without review: "
            f"expected excluded {sorted(EXPECTED_EXCLUDED)}, actual {sorted(excluded)}"
        )

    safe_photos = []
    for z in range(1, 119):
        item = records[str(z)]
        relative = str(item.get("localUrl") or "")
        if not PHOTO_PATH.fullmatch(relative) or not relative.startswith(f"images/elements/{z:03d}-"):
            raise ValueError(f"Unsafe or inconsistent photo path for element {z}: {relative}")
        source = ROOT / relative
        if z not in excluded:
            if not source.is_file():
                raise FileNotFoundError(f"Missing eligible photo {source}")
            safe_photos.append((source, relative))

    for name in CORE_FILES:
        if not (ROOT / name).is_file():
            raise FileNotFoundError(f"Missing app resource: {name}")
    for name in ("icons", "images/bay-city-city-hall.jpg"):
        if not (ROOT / name).exists():
            raise FileNotFoundError(f"Missing app resource: {name}")

    if dst.exists():
        shutil.rmtree(dst)
    dst.mkdir(parents=True)
    for name in CORE_FILES:
        shutil.copy2(ROOT / name, dst / name)
    shutil.copytree(ROOT / "icons", dst / "icons")
    (dst / "images/elements").mkdir(parents=True)
    shutil.copy2(ROOT / "images/bay-city-city-hall.jpg", dst / "images/bay-city-city-hall.jpg")
    for source, relative in safe_photos:
        shutil.copy2(source, dst / relative)

    actual = {p.relative_to(dst).as_posix() for p in (dst / "images/elements").iterdir()}
    expected = {relative for _, relative in safe_photos}
    if actual != expected or len(actual) != 92:
        raise ValueError(f"Packaged photo mismatch: {len(actual)} files")
    print(f"Staged {len(actual)} locally displayable element pictures; excluded {len(excluded)} "
          "hidden/placeholder/rights-pending pictures.")
    print("NOTICE: included images still need final file-specific legal/credit verification.")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("Usage: python3 audit/package_web_assets.py /outside/build/path/Web")
    stage(sys.argv[1])
