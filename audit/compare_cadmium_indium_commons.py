#!/usr/bin/env python3
"""Read-only test: is an independently credited Commons file the same cached photo?

Two existing publisher-original matches (#48 and #49) are documented already;
this deliberately tests DIFFERENT Commons filenames, and does not replace
old identity evidence, inspect authorship certificates, or grant release rights.
"""
import json
import urllib.request
from pathlib import Path
from urllib.parse import urlencode
from compare_image_identity import decode, examine

CANDIDATES=(
    (48,"Pure cadmium.jpg","https://commons.wikimedia.org/wiki/File:Pure_cadmium.jpg"),
    (49,"Liquid-indium.jpg","https://commons.wikimedia.org/wiki/File:Liquid-indium.jpg")
)
HEADERS={"User-Agent":"Periodic-Table-Explorer-Image-Audit/1.0 (read-only photo identity verification; comctx/Periodic-Table-Explorer)"}

def commons_download(filename):
    params={"action":"query","format":"json","prop":"imageinfo","iiprop":"url",
            "titles":"File:"+filename}
    api="https://commons.wikimedia.org/w/api.php?"+urlencode(params)
    with urllib.request.urlopen(urllib.request.Request(api,headers=HEADERS),timeout=35) as stream:
        response=json.load(stream)
    pages=list(response["query"]["pages"].values())
    if len(pages)!=1 or not pages[0].get("imageinfo"):
        raise ValueError("Commons file unavailable: "+filename)
    original=pages[0]["imageinfo"][0]["url"]
    if not original.startswith("https://upload.wikimedia.org/wikipedia/commons/"):
        raise ValueError("Unexpected original domain: "+original)
    request=urllib.request.Request(original,headers=HEADERS)
    with urllib.request.urlopen(request,timeout=35) as stream:
        content=stream.read(8_000_001)
    if len(content)>8_000_000 or len(content)<15000:
        raise ValueError("Original file size outside limit: "+filename)
    return decode(content),original

def main():
    results=[]
    for atomic,filename,page in CANDIDATES:
        local_name=Path("images/elements")/(f"{atomic:03d}-"+("cd" if atomic==48 else "in")+".jpg")
        try:
            cached=decode(local_name.read_bytes())
            original,url=commons_download(filename)
            detail=examine(cached,original)
            result={"z":atomic,"local_file":str(local_name),"commons_page":page,
                    "commons_original_url":url,**detail,
                    "release_cleared":False,
                    "interpretation":"Same photo likely, NOT legally release-cleared" if detail["classification"]=="LIKELY_SAME_PHOTO__NOT_CLEARED"
                    else "Different/version uncertain; DO NOT assign Commons file creator to the local image"}
        except Exception as error:
            raise RuntimeError(f"Unable to independently compare element {atomic}: {error}") from error
        results.append(result)
        print(json.dumps(result,indent=2),flush=True)
    print("Both comparisons finished; neither source-page authorship nor license permission inferred from similarity.")
    Path("audit/commons-candidate-comparison.json").write_text(json.dumps(results,indent=2)+"\n")
if __name__=="__main__":
    main()
