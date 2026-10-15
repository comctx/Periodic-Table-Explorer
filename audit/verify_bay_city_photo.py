#!/usr/bin/env python3
"""Read-only Bay City Easter egg JPEG source identity check.

This checks likely visual identity, not image copyright/ShareAlike compliance.
Run from repository root using: python3 audit/verify_bay_city_photo.py
"""
import json
import time
import urllib.request
import urllib.error
from pathlib import Path
from urllib.parse import quote
from compare_image_identity import decode, examine

ORIGINAL="https://upload.wikimedia.org/wikipedia/commons/7/7b/Bay_City_MI_City_Hall.JPG"
# Prefer to resolve the canonical source page, which lists Andrew Jameson as author.
SOURCE_PAGE="https://commons.wikimedia.org/wiki/File:Bay_City_MI_City_Hall.JPG"
LOCAL=Path("images/bay-city-city-hall.jpg")
HEADERS={"User-Agent":"PeriodicTableExplorerAudit/1.0 (read-only Commons source verification; comctx/Periodic-Table-Explorer)"}

def get(url):
    request=urllib.request.Request(url,headers=HEADERS)
    with urllib.request.urlopen(request,timeout=35) as response:
        raw=response.read(8000001)
    if not 15000<=len(raw)<=8000000:
        raise ValueError("Unexpected original photo byte count")
    return decode(raw)

def original_photo():
    try:
        import json as js
        api="https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&titles=File:Bay_City_MI_City_Hall.JPG"
        with urllib.request.urlopen(urllib.request.Request(api,headers=HEADERS),timeout=30) as resp:
            info=js.load(resp)
        p=next(iter(info["query"]["pages"].values()))
        url=p["imageinfo"][0]["url"]
        if not url.startswith("https://upload.wikimedia.org/wikipedia/commons/"):
            raise ValueError("Unexpected Commons original-image domain")
    except Exception as e:
        print("Source imageinfo lookup unavailable; falling back to Special:FilePath:",str(e)[:140],flush=True)
        url="https://commons.wikimedia.org/wiki/Special:FilePath/Bay_City_MI_City_Hall.JPG"
    for delay in (0,3,7):
        if delay: time.sleep(delay)
        try:
            return get(url)
        except urllib.error.HTTPError as err:
            if err.code not in (429,500,502,503,504):raise
            print("Original Wikimedia CDN throttled:",err.code,flush=True)
    proxy="https://wsrv.nl/?url="+quote(url,safe="")+"&output=jpg"
    print("Checking source through read-only image cache after Wikimedia throttling",flush=True)
    return get(proxy)

def main():
    if not LOCAL.is_file() or LOCAL.stat().st_size < 15000:
        raise ValueError("Missing or suspiciously small Bay City JPEG")
    local=decode(LOCAL.read_bytes())
    original=original_photo()
    match=examine(local,original)
    match["local_file"]=str(LOCAL)
    match["source_page"]=SOURCE_PAGE
    match["classification_note"]="Computer-assisted identity only; no final copyright/ShareAlike clearance."
    print(json.dumps(match,indent=2),flush=True)
    report=Path("audit/bay-city-photo-match.json")
    report.write_text(json.dumps(match,indent=2)+"\n",encoding="utf-8")
    if match["classification"]!="LIKELY_SAME_PHOTO__NOT_CLEARED":
        raise ValueError("Easter egg photo identity requires manual review; do not mark verified")
    print("PASS likely same Bay City City Hall photograph — redistribution conditions STILL PENDING",flush=True)

if __name__=="__main__":
    main()
