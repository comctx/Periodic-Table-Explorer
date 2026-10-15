#!/usr/bin/env python3
"""Replace ambiguously identified carbon artwork with a real museum graphite specimen.

Only run in the Periodic Table Explorer scientific-audit-2026-10 branch.
Photo: Marie-Lan Taÿ Pamart (Jastrow), Paris natural history museum, CC BY 4.0.
"""
import io
import json
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from PIL import Image, ImageOps

FILE = "Native_graphite_Chardonnet_MNHN_Minéralogie.jpg"
SOURCE = "https://commons.wikimedia.org/wiki/File:Native_graphite_Chardonnet_MNHN_Min%C3%A9ralogie.jpg"
ORIGINAL = "https://upload.wikimedia.org/wikipedia/commons/e/e5/Native_graphite_Chardonnet_MNHN_Min%C3%A9ralogie.jpg"
TARGET = Path("images/elements/006-c.jpg")

def fetch():
    for delay in (0, 3, 7):
        if delay:
            time.sleep(delay)
        try:
            request = urllib.request.Request(ORIGINAL, headers={
                "User-Agent": "PeriodicTableExplorerAudit/1.0 (source-identified CC BY specimen)"
            })
            with urllib.request.urlopen(request, timeout=40) as response:
                data = response.read(10000001)
            if len(data) < 50000 or len(data) > 10000000:
                raise ValueError("Unexpected Commons image byte count")
            return data
        except urllib.error.HTTPError as error:
            if error.code not in (429, 500, 502, 503, 504):
                raise
            print(f"Wikimedia original throttled: {error.code}", flush=True)
    mirror = "https://wsrv.nl/?url=" + urllib.parse.quote(ORIGINAL, safe="") + "&output=jpg"
    with urllib.request.urlopen(urllib.request.Request(mirror, headers={
        "User-Agent": "PeriodicTableExplorerAudit/1.0"
    }), timeout=50) as response:
        data = response.read(10000001)
    if len(data) < 50000 or len(data) > 10000000:
        raise ValueError("Unexpected cached image byte count")
    print("Original photo retrieved through read-only image proxy after Commons throttling", flush=True)
    return data

def main():
    import os
    if os.getenv("GITHUB_REF_NAME") != "scientific-audit-2026-10":
        raise RuntimeError("Wrong GitHub branch: carbon audit replace disabled")
    meta = Path("element-photo-data.js")
    text = meta.read_text(encoding="utf-8")
    items = json.loads(text.split("=", 1)[1].strip().rstrip(";"))
    item = items["6"]
    assert item["symbol"] == "C" and item["localUrl"] == TARGET.as_posix()
    assert "Pure_Carbon.png" in item["originalUrl"] and "Texas Lane" in item["attribution"]
    raw = fetch()
    with Image.open(io.BytesIO(raw)) as original:
        original.load()
        assert original.width >= 2500 and original.height >= 2500, "Source dimensions unexpected"
        rgb = ImageOps.exif_transpose(original).convert("RGB")
        rgb.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
        temp = TARGET.with_suffix(".jpg.audit.tmp")
        rgb.save(temp, format="JPEG", quality=88, progressive=True, optimize=True)
    with Image.open(temp) as test:
        test.verify()
    assert 20000 <= temp.stat().st_size <= 1500000, "Unexpected processed output"
    temp.replace(TARGET)
    item.update({
        "title": "Natural graphite (carbon) from Chardonnet, Haute-Savoie, France, photographed in the Paris Museum of Natural History mineralogy gallery",
        "attribution": "Photograph by Marie-Lan Taÿ Pamart (Wikimedia uploader Jastrow), 30 January 2020. Natural graphite specimen from Chardonnet, Haute-Savoie, France, held by the Muséum national d'histoire naturelle, Paris. Original " + SOURCE + ". Licensed CC BY 4.0 International, https://creativecommons.org/licenses/by/4.0/. The app photo is resized/reencoded; changes indicated.",
        "originalUrl": ORIGINAL,
        "commonsPage": SOURCE,
        "sourceUrl": SOURCE,
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
        "note": "Real photograph of naturally occurring graphite, one of carbon's elemental allotropes, from a museum mineral specimen. Not a representation of all carbon forms. Replaces a dark unverified 'Pure Carbon.png' depiction whose exact sample identity/allotrope was not documented. License grants reuse with named author, original photo link and change notice; image release-package review remains pending."
    })
    item.pop("withholdReason", None)
    assert len(items) == 118
    meta.write_text("window.ELEMENT_PHOTOS = " + json.dumps(items, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print("PASS: native graphite museum photo physically replaced and source metadata updated", flush=True)

if __name__ == "__main__":
    main()
