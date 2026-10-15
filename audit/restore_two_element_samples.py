#!/usr/bin/env python3
"""Replace two misleading sample photos with original CC BY 3.0 Commons images.

Runs only in the audit branch through GitHub Actions.
The full release/package license/credits audit remains separately pending.
"""
import io,json,urllib.request
from pathlib import Path
from PIL import Image, ImageOps
from compare_image_identity import decode,distance,mean_luma_difference

PHOTOS={
  "14":{
    "originalUrl":"https://upload.wikimedia.org/wikipedia/commons/2/2c/Silicon.jpg",
    "commonsPage":"https://commons.wikimedia.org/wiki/File:Silicon.jpg",
    "sourceUrl":"https://images-of-elements.com/silicon.php",
    "title":"Chunk of ultrapure elemental silicon, approximately 2 × 2 cm",
    "attribution":"Jurii, original photograph 'Silicon.jpg', Creative Commons Attribution 3.0 Unported (CC BY 3.0) <https://creativecommons.org/licenses/by/3.0/>; original file https://commons.wikimedia.org/wiki/File:Silicon.jpg; source publisher https://images-of-elements.com/silicon.php.",
    "note":"Replacement for an unrelated photovoltaic-panel picture. This JPEG was produced from the separately licensed original Silicon.jpg from Wikimedia Commons and downscaled/reencoded for the app. Identify image creator Jurii, file source and CC BY 3.0 license in About & Credits. Final desktop/Store packaging rights audit remains pending."
  },
  "47":{
    "originalUrl":"https://upload.wikimedia.org/wikipedia/commons/e/e4/Silver-nugget.jpg",
    "commonsPage":"https://commons.wikimedia.org/wiki/File:Silver-nugget.jpg",
    "sourceUrl":"https://images-of-elements.com/silver.php",
    "title":"Natural elemental silver nugget, approximately 1 cm long",
    "attribution":"Jurii, original photograph 'Silver-nugget.jpg', Creative Commons Attribution 3.0 Unported (CC BY 3.0) <https://creativecommons.org/licenses/by/3.0/>; original file https://commons.wikimedia.org/wiki/File:Silver-nugget.jpg; source publisher https://images-of-elements.com/silver.php.",
    "note":"Replacement for a 925 sterling-silver chain (silver alloy jewelry). This JPEG was produced from original Silver-nugget.jpg under CC BY 3.0, resized/reencoded for app. Preserve photographer, license and change statement in About & Credits. Final release packaging/rights review remains pending."
  }
}
def main():
  path=Path("element-photo-data.js")
  photo=json.loads(path.read_text(encoding="utf-8").split("=",1)[1].strip().rstrip(";"))
  for z,fields in PHOTOS.items():
    rec=photo[z]
    if z=="14":
      assert rec["symbol"]=="Si" and "solar-cell" in rec["title"]
    else:
      assert rec["symbol"]=="Ag" and "Sterling silver chain" in rec["title"]
    url=fields["originalUrl"]
    with urllib.request.urlopen(urllib.request.Request(url,headers={
      "User-Agent":"PeriodicTableExplorer/1.0 (educational photo source verification)"}),timeout=40) as response:
      blob=response.read(5_000_001)
    assert len(blob)<5_000_000 and len(blob)>10000,"Unexpected image size"
    original=decode(blob)
    assert original.width>=500 and original.height>=500,"Resolution too low"
    converted=ImageOps.exif_transpose(original).convert("RGB")
    converted.thumbnail((1200,1200),Image.Resampling.LANCZOS)
    temp=Path(rec["localUrl"]+".audit.tmp")
    with temp.open("wb") as f:
      converted.save(f,format="JPEG",quality=88,optimize=True,progressive=True)
    saved=decode(temp.read_bytes())
    score=distance(saved,original)
    assert score<=4,f"Transformed image does not match credited original: {z}: {score}"
    assert mean_luma_difference(saved,original)<10,"Reencoded image differs"
    temp.replace(rec["localUrl"])
    photo[z].update(fields)
    photo[z]["licenseUrl"]="https://creativecommons.org/licenses/by/3.0/"
    photo[z].pop("withholdReason",None)
    print(f"REPLACED {z} {rec['symbol']} -> {url} dHash={score} bytes={Path(rec['localUrl']).stat().st_size}",flush=True)
  assert len(photo)==118
  path.write_text("window.ELEMENT_PHOTOS = "+json.dumps(photo,ensure_ascii=False,indent=2)+";\n",encoding="utf-8")
  print("Two authentic elemental sample photos staged; CC BY 3.0 attribution carried; further release review required.")
if __name__=="__main__":main()
