#!/usr/bin/env python3
"""Non-destructive image identity triage. Never confuses an image match with rights clearance.

Usage: python audit/compare_image_identity.py 31 60
Dependencies: Pillow; internet access to original-source photo URLs.
"""
import io
import json
import math
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from urllib.parse import urlparse, unquote
from PIL import Image, ImageOps

CATALOG=Path("element-photo-data.js")
ALLOWED={"upload.wikimedia.org", "images-of-elements.com", "www.images-of-elements.com"}
HEADERS={"User-Agent":"Periodic-Table-Explorer-Image-Audit/1.0 (educational image verification; https://github.com/comctx/Periodic-Table-Explorer)"}

def source(url):
    host=(urlparse(url).hostname or "").lower()
    if host not in ALLOWED or urlparse(url).scheme!="https":
        raise ValueError("External image origin not allowlisted: "+url)
    req=urllib.request.Request(url,headers=HEADERS)
    with urllib.request.urlopen(req,timeout=22) as response:
        raw=response.read(10000001)
    if len(raw)>10000000:
        raise ValueError("Original file too large for auditing")
    return decode(raw)

def decode(raw):
    with Image.open(io.BytesIO(raw)) as img:
        img=ImageOps.exif_transpose(img)
        return img.convert("RGB")

def dhash(im):
    pixels=list(im.convert("L").resize((9,8),Image.Resampling.LANCZOS).getdata())
    result=0
    for y in range(8):
        for x in range(8):
            result=(result<<1)|int(pixels[y*9+x]>pixels[y*9+x+1])
    return result

def distance(im1,im2):
    a=dhash(im1); b=dhash(im2)
    return (a^b).bit_count()

def mean_luma_difference(a,b):
    a=a.convert("L").resize((64,64),Image.Resampling.LANCZOS)
    b=b.convert("L").resize((64,64),Image.Resampling.LANCZOS)
    x=list(a.getdata());y=list(b.getdata())
    return round(sum(abs(m-n) for m,n in zip(x,y))/len(x),1)

def crop_variants(im):
    yield "full",im
    w,h=im.size
    for frac in (0.90,0.80,0.65):
        cw,ch=int(w*frac),int(h*frac)
        left=(w-cw)//2; top=(h-ch)//2
        yield f"center_{frac}",im.crop((left,top,left+cw,top+ch))

def examine(local,original):
    candidates=[]
    for mode,cropped in crop_variants(original):
        candidates.append((distance(local,cropped),mean_luma_difference(local,cropped),mode))
    candidates.sort()
    best=candidates[0]
    return {"dhash_distance":best[0],"mean_luma_difference":best[1],"best_variant":best[2],
            "local_dimensions":list(local.size),"original_dimensions":list(original.size),
            "classification":"LIKELY_SAME_PHOTO__NOT_CLEARED" if best[0]<=8 and best[1]<=38
               else "MANUAL_REVIEW_REQUIRED"}

def main():
    if len(sys.argv)!=3:
        raise SystemExit("Use: compare_image_identity.py START END")
    first,last=map(int,sys.argv[1:])
    if not 1<=first<=last<=118:raise ValueError("Range 1..118 only")
    catalog=json.loads(CATALOG.read_text(encoding="utf-8").split("=",1)[1].strip().rstrip(";"))
    out=[]
    for num in range(first,last+1):
        meta=catalog[str(num)];path=Path(meta["localUrl"]);url=meta["originalUrl"]
        item={"atomic_number":num,"element":meta["name"],"local_file":str(path),
              "original_url":url,"withheld":bool(meta.get("withholdReason")),
              "release_cleared":False}
        try:
            item.update(examine(decode(path.read_bytes()),source(url)))
        except Exception as exc:
            item["classification"]="SOURCE_FETCH_OR_IMAGE_ERROR"
            item["reason"]=str(exc)[:260]
        out.append(item)
        print(f"{num:03d} {meta['symbol']:2s} {item['classification']} dhash={item.get('dhash_distance','-')} delta={item.get('mean_luma_difference','-')} {item.get('reason','')}",flush=True)
        time.sleep(0.6)
    outfile=Path("audit")/f"machine-image-matches-{first}-{last}.json"
    outfile.parent.mkdir(parents=True,exist_ok=True)
    outfile.write_text(json.dumps(out,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
    print("IMAGE_IDENTITY_REPORT="+str(outfile),flush=True)
    print("All results are computational triage, NEVER copyright or authenticity certification.",flush=True)
    summary=Path(__import__('os').environ.get("GITHUB_STEP_SUMMARY",""))
    if __import__('os').environ.get("GITHUB_STEP_SUMMARY"):
        with summary.open("a",encoding="utf-8") as s:
            s.write(f"## Cached element images {first}–{last}: automatic image similarity (not license clearance)\n\n")
            s.write("| # | Element | Result | dHash | Pixel brightness difference |\n|---:|---|---|---:|---:|\n")
            for x in out:
                s.write(f"| {x['atomic_number']} | {x['element']} | {x['classification']} | {x.get('dhash_distance','—')} | {x.get('mean_luma_difference','—')} |\n")
    if all(x["classification"]=="SOURCE_FETCH_OR_IMAGE_ERROR" for x in out):
        raise SystemExit("No original image fetch succeeded; do not interpret as completed identity checks.")

if __name__=="__main__":main()
