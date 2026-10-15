#!/usr/bin/env python3
"""Use Daderot's CC0 museum photograph instead of conditional-rights LANL ring.

This photo documents a historical plutonium-239 exhibit, NOT a large metal ring.
Only run this script on the scientific-audit-2026-10 branch.
"""
import json,urllib.request,urllib.error,time
from pathlib import Path
from PIL import Image
from compare_image_identity import decode,distance,mean_luma_difference
from replace_four_rights_images import commons_url

NAME=("Plutonium-239, 1941, first sample in which nuclear fission was detected, "
      "University of California, Berkeley, gift of Glenn T. Seabort and Emilio Segre "
      "- National Museum of American History - DSC06250.JPG")
PAGE="https://commons.wikimedia.org/wiki/File:"+__import__('urllib.parse',fromlist=['quote']).quote(NAME.replace(" ","_"),safe="(),")
def fetch(url):
    direct=url.split("?",1)[0]
    for delay in (0,3,7):
        if delay:time.sleep(delay)
        try:
            with urllib.request.urlopen(urllib.request.Request(direct,headers={
              "User-Agent":"PeriodicTableExplorerAudit/1.0"}),timeout=40) as r:
                return r.read(10000001)
        except urllib.error.HTTPError as exc:
            if exc.code not in (429,500,502,503,504):raise
            print("Commons source temporarily throttled",exc.code,flush=True)
    from urllib.parse import quote
    mirror="https://wsrv.nl/?url="+quote(direct,safe="")+"&output=jpg"
    with urllib.request.urlopen(urllib.request.Request(mirror,headers={
      "User-Agent":"PeriodicTableExplorerAudit/1.0"}),timeout=55) as r:
        print("Retrieved original via cache proxy; original Commons page retained as source",flush=True)
        return r.read(10000001)

def main():
    p=Path("element-photo-data.js")
    d=json.loads(p.read_text(encoding="utf-8").split("=",1)[1].strip().rstrip(";"))
    item=d["94"]
    assert item["symbol"]=="Pu" and item.get("withholdReason") and item["localUrl"]=="images/elements/094-pu.jpg"
    url=commons_url(NAME)
    image=decode(fetch(url))
    assert image.width>=1500 and image.height>=1500,"Unexpected original photo size"
    image.thumbnail((1200,1200),Image.Resampling.LANCZOS)
    temp=Path(item["localUrl"]+".audit.tmp")
    image.save(temp,format="JPEG",quality=88,optimize=True,progressive=True)
    local=decode(temp.read_bytes())
    assert distance(local,image)<=4 and mean_luma_difference(local,image)<8
    temp.replace(item["localUrl"])
    item.update({
      "title":"Historic 1941 plutonium-239 sample displayed at the Smithsonian National Museum of American History — tiny specimen in an exhibit case",
      "originalUrl":url,
      "sourceUrl":PAGE,
      "commonsPage":PAGE,
      "attribution":"Photograph by Daderot (2013), Smithsonian National Museum of American History exhibit of an early 1941 plutonium-239 specimen. Image released by the photographer under CC0 1.0 Universal Public Domain Dedication; source "+PAGE+". The app resized/reencoded this photo. This is a museum exhibit, not the former Los Alamos metal-ring photograph.",
      "licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/",
      "note":"Replaces a Los Alamos plutonium ring photo with conditional attribution/reproduction notice. The new photo is independently made by Daderot (2013) of a Smithsonian historic plutonium-239 specimen and marked CC0 on its exact Commons source page. Its subject is a museum display and tiny original specimen, not a macroscopic plutonium ring. Final package review and app testing still pending."
    })
    item.pop("withholdReason",None)
    p.write_text("window.ELEMENT_PHOTOS = "+json.dumps(d,ensure_ascii=False,indent=2)+";\n",encoding="utf-8")
    print("PLUTONIUM_REPLACED",url,"bytes",Path(item["localUrl"]).stat().st_size,flush=True)

if __name__=="__main__":main()
