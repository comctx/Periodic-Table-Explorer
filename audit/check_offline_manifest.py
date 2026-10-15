#!/usr/bin/env python3
"""Fail-closed manifest integrity gate, independent of service-worker assumptions.

The offline photo manifest is a staging list only, NOT commercial rights approval.
"""
import json
from pathlib import Path
from package_web_assets import ROOT, catalog, visible, EXPECTED_EXCLUDED, PHOTO_PATH

MANIFEST=ROOT/"offline-photos.json"

def verify():
    manifest=json.loads(MANIFEST.read_text(encoding="utf-8"))
    if not isinstance(manifest,dict) or set(manifest)!={"format","photos"} or manifest["format"]!="pte-offline-photos-v1":
        raise ValueError("Unexpected offline photo manifest format")
    actual=manifest["photos"]
    if not isinstance(actual,list) or len(actual)!=92 or len(set(actual))!=92:
        raise ValueError("Offline manifest must list exactly 92 unique image paths")
    records=catalog()
    excluded={z for z in range(1,119) if not visible(z,records[str(z)])}
    if excluded!=EXPECTED_EXCLUDED:
        raise ValueError("Withheld-image inventory changed: manual rights review required")
    expected=[records[str(z)]["localUrl"] for z in range(1,119) if z not in excluded]
    if actual!=expected:
        raise ValueError("Offline manifest does not match reviewed 92-photo allowlist in order")
    for path in actual:
        if not PHOTO_PATH.fullmatch(path) or not (ROOT/path).is_file():
            raise ValueError("Manifest includes untrusted or missing file: "+str(path))
    print("PASS: Offline manifest contains precisely the 92 allowed-to-stage photos, excluding all 26 withheld/placeholder entries.")
    print("NOTICE: Visible and cacheable is NOT permission for commercial redistribution.")

if __name__=="__main__":
    verify()
