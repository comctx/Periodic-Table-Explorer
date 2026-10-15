#!/usr/bin/env python3
"""Find original publisher gallery pictures that match stored JPEGs.
Read-only investigation, NOT copyright clearance.
Usage: python audit/find_publisher_image_matches.py 61 90
"""
import html
import io
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from html.parser import HTMLParser
from pathlib import Path
from PIL import Image, ImageOps

from compare_image_identity import decode, distance, mean_luma_difference, crop_variants, HEADERS

class Images(HTMLParser):
    def __init__(self):
        super().__init__()
        self.candidates=[]
    def handle_starttag(self,tag,attrs):
        pairs=dict(attrs)
        if tag in ("img","source","a"):
            for k in ("src","data-src","href","srcset"):
                if k in pairs:
                    self.candidates.extend(re.split(r"\s*,\s*",pairs[k]) if k=="srcset" else [pairs[k]])
def get_bytes(url):
    req=urllib.request.Request(url,headers=HEADERS)
    with urllib.request.urlopen(req,timeout=18) as response:
        b=response.read(8_000_001)
    if len(b)>8_000_000:raise ValueError("file too large")
    return b
def qualified_image_urls(page):
    if not page or not page.startswith("https://images-of-elements.com/"):return []
    raw=get_bytes(page).decode("utf-8","replace")
    scanner=Images();scanner.feed(raw)
    for x in re.findall(r'''(?:href|src)\s*=\s*['"]([^'"]+\.(?:jpg|jpeg|png)(?:\?[^'"]*)?)['"]''',raw,re.I):
        scanner.candidates.append(x)
    seen=set();r=[]
    for src in scanner.candidates:
        src=html.unescape(src.strip().split(" ")[0])
        link=urllib.parse.urljoin(page,src)
        parsed=urllib.parse.urlparse(link)
        if parsed.scheme!="https" or parsed.netloc.lower() not in ("images-of-elements.com","www.images-of-elements.com"):continue
        if not re.search(r"\.(jpg|jpeg|png)$",parsed.path,re.I):continue
        if any(x in parsed.path.lower() for x in ["logo","button","icon","flag","arrow","banner"]):continue
        if link not in seen:seen.add(link);r.append(link)
    return r[:30]

def run(first,last):
    catalog=json.loads(Path("element-photo-data.js").read_text(encoding="utf-8").split("=",1)[1].strip().rstrip(";"))
    out=[]
    for z in range(first,last+1):
        meta=catalog[str(z)]; item={"atomic_number":z,"name":meta["name"],"publisher_source_page":meta.get("sourceUrl",""),
             "localUrl":meta["localUrl"],"matches":[],"review_required":True,"license_cleared":False}
        try:
            local=decode(Path(meta["localUrl"]).read_bytes())
            urls=qualified_image_urls(meta.get("sourceUrl",""))
            for url in urls:
                try:
                    original=decode(get_bytes(url))
                    if min(original.size)<150:continue
                    scores=[(distance(local,c),mean_luma_difference(local,c),label) for label,c in crop_variants(original)]
                    best=min(scores)
                    item["matches"].append({"url":url,"hash_distance":best[0],"brightness_delta":best[1],
                                            "crop":best[2],"dimensions":list(original.size)})
                except Exception:continue
                time.sleep(0.15)
            item["matches"].sort(key=lambda m:(m["hash_distance"],m["brightness_delta"]))
            item["matches"]=item["matches"][:5]
            if item["matches"] and item["matches"][0]["hash_distance"]<=8 and item["matches"][0]["brightness_delta"]<=40:
                item["review_required"]=False
        except Exception as ex:item["error"]=str(ex)[:300]
        out.append(item)
        top=item["matches"][0] if item["matches"] else {}
        print(f"{z:03d} {meta['symbol']:2s} candidates={len(item['matches'])} "
              f"best_dhash={top.get('hash_distance','-')} delta={top.get('brightness_delta','-')} "
              f"file={top.get('url','NOT_FOUND')} error={item.get('error','')}",flush=True)
    p=Path("audit")/f"publisher-gallery-matches-{first}-{last}.json"
    p.write_text(json.dumps(out,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    print("PUBLISHER_GALLERY_REPORT="+str(p))
    print("Candidate image similarity alone does not verify the author, exact grant, subject or redistribution permission.")

if __name__=="__main__":
    if len(sys.argv)!=3:raise SystemExit("Usage: find_publisher_image_matches.py START END")
    a,b=map(int,sys.argv[1:]);assert 1<=a<=b<=118
    run(a,b)
