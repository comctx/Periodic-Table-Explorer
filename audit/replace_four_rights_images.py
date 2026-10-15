#!/usr/bin/env python3
"""Replace three unclear image files with accurately labeled public/CC image originals.
Only run on scientific-audit-2026-10. NOT a final blanket Microsoft Store clearance.
"""
import json,io,urllib.request,urllib.error,time
from pathlib import Path
from PIL import Image, ImageOps
from compare_image_identity import decode,distance,mean_luma_difference
PHOTO={
 "29":{
  "commons_title":"Muséum Toulouse - cuivre natif.JPG",
  "title":"Native copper specimen from Michigan, photographed at the Muséum de Toulouse",
  "attribution":"Pymouss, 'Muséum Toulouse - cuivre natif.JPG', own photograph of a native copper specimen from Michigan held by the Muséum de Toulouse. CC BY-SA 3.0 Unported, https://creativecommons.org/licenses/by-sa/3.0/. File https://commons.wikimedia.org/wiki/File:Mus%C3%A9um_Toulouse_-_cuivre_natif.JPG. Photograph resized/reencoded for this app; photo adaptation remains subject to CC BY-SA 3.0.",
  "licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/",
  "note":"Replaces the old disputed native-copper photo with a museum-catalogued specimen photographed by Pymouss, showing Michigan native copper as part of a mineral matrix. Source photo resized/reencoded, with original credited, link to CC BY-SA 3.0 and ShareAlike adaptation terms. Do not represent non-copper mineral matrix as pure copper. Final release/package license audit remains pending."
 },
 "96":{
  "commons_title":"Curium oxide targets.jpg",
  "title":"Curium-248 oxide targets mounted on a RIKEN wheel for a nuclear research experiment — not pure curium metal",
  "attribution":"RIKEN, 'Curium oxide targets.jpg', target-wheel research photograph; source https://commons.wikimedia.org/wiki/File:Curium_oxide_targets.jpg. CC BY 4.0, https://creativecommons.org/licenses/by/4.0/. Photograph resized/reencoded for this app; changes indicated.",
  "licenseUrl":"https://creativecommons.org/licenses/by/4.0/",
  "note":"This is real research equipment with curium-248 oxide targets used in an experiment investigating element 119, not a chunk of pure curium metal. Replaces an EU/JRC-ITU image whose redistribution permission was unverified. The exact Commons source identifies RIKEN as author and CC BY 4.0. Final image grant, attribution and distribution-package checks remain pending."
 },
 "98":{
  "commons_title":"HD.5A.048 (10348254595) (cropped).jpg",
  "title":"Historical californium-252 neutron-source capsules, U.S. Department of Energy, circa 1972 — not a bare californium-metal sample",
  "attribution":"U.S. Department of Energy (ENERGY.GOV), circa 1972, 'HD.5A.048 (10348254595) (cropped).jpg', cropped on Wikimedia Commons by KOKUYO. Source https://commons.wikimedia.org/wiki/File:HD.5A.048_(10348254595)_(cropped).jpg. Identified as U.S. federal government public-domain material; this app resized/reencoded the source photograph.",
  "licenseUrl":"",
  "note":"Authentic historical photo of californium-252 neutron-source capsules, not a photograph of unencapsulated californium metal. Replaces an older californium-249 metal-disc photo with contradictory Commons public-domain/nonfree historical upload records. U.S. Department of Energy federal employee work is marked public domain on the specific replacement file; physical image package and credits still need final verification."
 }
}
def commons_url(name):
    import urllib.parse
    title=urllib.parse.quote(name.replace(' ','_'),safe='()')
    uri='https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&titles=File:'+title
    with urllib.request.urlopen(urllib.request.Request(uri,headers={"User-Agent":"PeriodicTableExplorerAudit/1.0 (file license verification)"}),timeout=30) as response:
        d=json.load(response)
    p=next(iter(d["query"]["pages"].values()))
    if "imageinfo" not in p: raise ValueError("Commons missing image: "+name)
    url=p["imageinfo"][0]["url"]
    from urllib.parse import urlparse
    if urlparse(url).scheme!="https" or urlparse(url).hostname!="upload.wikimedia.org": raise ValueError("Unexpected host "+url)
    return url
def main():
    meta=Path("element-photo-data.js")
    catalog=json.loads(meta.read_text(encoding="utf-8").split("=",1)[1].strip().rstrip(";"))
    for z,fields in PHOTO.items():
        item=catalog[z]
        if not item.get("withholdReason"):raise ValueError("Only replace currently withheld "+z)
        url=commons_url(fields["commons_title"])
        raw=None
        direct=url.split("?",1)[0]
        # Try Wikimedia directly. Some automated runners receive persistent 429s.
        for delay in (0,3,7):
            if delay: time.sleep(delay)
            try:
                with urllib.request.urlopen(urllib.request.Request(direct,headers={
                    "User-Agent":"PeriodicTableExplorerAudit/1.0 (educational image licensing)"
                }),timeout=35) as response:
                    raw=response.read(10000001)
                break
            except urllib.error.HTTPError as exc:
                if exc.code not in (429,500,502,503,504):raise
                print(f"Wikimedia CDN HTTP {exc.code} for {z}",flush=True)
        if raw is None:
            # Alternate read-only image CDN proxy. Still credits the ORIGINAL Commons
            # file, not the proxy; the output is decoded and visually checked later.
            from urllib.parse import quote
            mirror="https://wsrv.nl/?url="+quote(direct,safe="")+"&output=jpg"
            with urllib.request.urlopen(urllib.request.Request(mirror,headers={
                "User-Agent":"PeriodicTableExplorerAudit/1.0",
                "Accept":"image/jpeg,image/png,*/*"}),timeout=45) as response:
                raw=response.read(10000001)
            print(f"Image proxy fetched source for {z}; original URL retained in credits",flush=True)
        if raw is None:raise ValueError("Source image not downloaded")
        if len(raw)>10000000 or len(raw)<15000:raise ValueError("Invalid Commons image size for "+z)
        img=decode(raw)
        if img.width<800 or img.height<700:raise ValueError("Insufficient image resolution "+z)
        resized=ImageOps.exif_transpose(img).convert("RGB")
        resized.thumbnail((1200,1200),Image.Resampling.LANCZOS)
        f=Path(item["localUrl"]+".audit.tmp")
        resized.save(f,format="JPEG",quality=88,optimize=True,progressive=True)
        test=decode(f.read_bytes())
        if distance(test,img)>7 or mean_luma_difference(test,img)>15:raise ValueError("Source matching failed for "+z)
        f.replace(item["localUrl"])
        item["title"]=fields["title"];item["attribution"]=fields["attribution"]
        item["note"]=fields["note"];item["licenseUrl"]=fields["licenseUrl"]
        item["commonsPage"]="https://commons.wikimedia.org/wiki/File:"+__import__('urllib.parse',fromlist=['quote']).quote(fields["commons_title"].replace(' ','_'),safe='()')
        item["originalUrl"]=url
        item["sourceUrl"]=item["commonsPage"]
        item.pop("withholdReason",None)
        print("RESTORED",z,item["symbol"],"url",url,"bytes",Path(item["localUrl"]).stat().st_size,"title",fields["title"],flush=True)
    if len(catalog)!=118:raise ValueError("Catalog size")
    meta.write_text("window.ELEMENT_PHOTOS = "+json.dumps(catalog,ensure_ascii=False,indent=2)+";\n",encoding="utf-8")
if __name__=="__main__":main()
