#!/usr/bin/env python3
"""Check staged PWA files needed for *future* Microsoft Store PWABuilder packaging.

Engineering preflight only: this is not a Windows MSIX test or a copyright clearance.
PWABuilder requires a live HTTPS hosted PWA and Partner Center package identity
to generate a real Store-compatible Windows package.
"""
import json
import re
import sys
from pathlib import Path

def check(root: Path) -> None:
    root = root.resolve()
    if not root.is_dir():
        raise ValueError(f"Missing staged PWA directory: {root}")
    required = (
        "index.html", "element.html", "quiz.html", "about.html", "privacy.html",
        "support.html", "elements-data.js", "element-photo-data.js",
        "sw.js", "offline-photos.json", "manifest.webmanifest",
        "icons/icon-192.png", "icons/icon-512.png", "donco_logo_footer.png",
    )
    for name in required:
        if not (root / name).is_file():
            raise AssertionError(f"PWA asset not staged: {name}")

    manifest = json.loads((root / "manifest.webmanifest").read_text(encoding="utf-8"))
    if manifest.get("name") != "Periodic Table Explorer":
        raise AssertionError("PWA name changed; confirm reserved Store name before packaging")
    if manifest.get("display") != "standalone":
        raise AssertionError("Windows PWA requires standalone app display")
    start = str(manifest.get("start_url", ""))
    scope = str(manifest.get("scope", ""))
    if not start.startswith("./") or ".." in start or not (root / start[2:]).is_file():
        raise AssertionError(f"Missing or invalid PWA start_url: {start}")
    if scope != "./":
        raise AssertionError(f"Unexpected PWA relative scope: {scope}")
    icons = manifest.get("icons")
    if not isinstance(icons, list):
        raise AssertionError("PWA missing icon catalog")
    for size in ("192x192", "512x512"):
        found = [icon for icon in icons
                 if size in str(icon.get("sizes", "")).split()
                 and str(icon.get("src", "")).startswith("./")
                 and ".." not in str(icon.get("src", ""))]
        if not found or not (root / found[0]["src"][2:]).is_file():
            raise AssertionError(f"PWA missing required {size} icon")
        if (root / found[0]["src"][2:]).read_bytes()[:8] != b"\\x89PNG\\r\\n\\x1a\\n":
            raise AssertionError(f"PWA {size} icon is not a PNG")

    html = (root / "index.html").read_text(encoding="utf-8")
    for snippet in ('rel="manifest"', "sw.js"):
        if snippet not in html:
            raise AssertionError(f"Main page does not advertise PWA {snippet}")
    for page in ("index.html", "element.html", "quiz.html", "about.html"):
        body = (root / page).read_text(encoding="utf-8")
        if "manifest.webmanifest" not in body:
            raise AssertionError(f"Missing PWA manifest link: {page}")

    offline = json.loads((root / "offline-photos.json").read_text(encoding="utf-8"))
    paths = offline.get("photos", [])
    if offline.get("format") != "pte-offline-photos-v1" or len(paths) != 92 or len(set(paths)) != 92:
        raise AssertionError("Current engineering candidate requires the exact 92-photo staging inventory")
    images = sorted(p.relative_to(root).as_posix()
                    for p in (root / "images" / "elements").glob("*.jpg"))
    if images != sorted(paths):
        raise AssertionError("Staged photo bytes/filenames do not match offline allowlist")
    if not (root / "images" / "bay-city-city-hall.jpg").is_file():
        raise AssertionError("Separate Bay City image missing; do not silently omit licensed content")

    assert "Every effort has been taken" in (root / "about.html").read_text(encoding="utf-8")
    assert (root / "privacy.html").stat().st_size > 300
    assert (root / "support.html").stat().st_size > 300
    print("PASS: audited PWA staging has manifest, correct icons, core pages, privacy/support, quiz and exact photo inventory")
    print("NOT A RELEASE PASS: 92 photo rights and Bay City image still require final approval.")
    print("NOT A WINDOWS PACKAGE: hosted HTTPS audit build + Partner Center identity + PWABuilder MSIX are still required.")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("Usage: python3 audit/check_ms_pwa.py /path/to/staged/Web")
    try:
        check(Path(sys.argv[1]))
    except (AssertionError, ValueError, OSError, KeyError, json.JSONDecodeError) as exc:
        sys.exit(f"FAIL: {exc}")
