#!/usr/bin/env python3
"""Read-only source picture recovery. Run in GitHub Actions with Pillow.
Usage: python audit/recover_unresolved_gallery.py early|later
No image is marked as license-cleared by this utility.
"""
import json,sys,time
from pathlib import Path
from find_publisher_image_matches import qualified_image_urls,get_bytes
from compare_image_identity import decode,distance,mean_luma_difference,crop_variants

GROUPS={"early":[3,4,5,14,15,22,27,30],"later":[31,44,45,47,50,58]}
def run(group):
  zlist=GROUPS[group]
  metadata=json.loads(Path("element-photo-data.js").read_text().split("=",1)[1].strip().rstrip(";"))
  results=[]
  for z in zlist:
    m=metadata[str(z)]
    result={"atomic_number":z,"symbol":m["symbol"],"name":m["name"],
      "publisher_page":m.get("sourceUrl"),"old_original":m["originalUrl"],
      "image_path":m["localUrl"],"candidates":[],"cleared_for_redistribution":False}
    try:
      local=decode(Path(m["localUrl"]).read_bytes())
      candidates=qualified_image_urls(m["sourceUrl"])
      for url in candidates:
        try:
          remote=decode(get_bytes(url))
          if min(remote.size)<150:continue
          score=min((distance(local,cropped),mean_luma_difference(local,cropped),mode)
            for mode,cropped in crop_variants(remote))
          result["candidates"].append({"url":url,"dhash":score[0],"brightness_difference":score[1],
            "crop":score[2],"original_dimensions":list(remote.size)})
        except Exception as exc:
          pass
        time.sleep(0.12)
      result["candidates"].sort(key=lambda x:(x["dhash"],x["brightness_difference"]))
      result["candidates"]=result["candidates"][:8]
      result["same_photo_candidate"]=bool(result["candidates"] and
        result["candidates"][0]["dhash"]<=8 and result["candidates"][0]["brightness_difference"]<=35)
    except Exception as exc:
      result["error"]=str(exc)[:200];result["same_photo_candidate"]=False
    results.append(result)
    top=result["candidates"][0] if result["candidates"] else {}
    print(f"RESULT {z:03d} {m['symbol']} matched={result['same_photo_candidate']} "
      f"dhash={top.get('dhash','-')} delta={top.get('brightness_difference','-')} "
      f"url={top.get('url','NOT_FOUND')} error={result.get('error','')}",flush=True)
  path=Path("audit")/f"recovered-originals-{group}.json"
  path.write_text(json.dumps(results,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
  print(f"RECOVERY_REPORT={path} matched={sum(x['same_photo_candidate'] for x in results)} of {len(results)}")
  print("Similarity is NOT proof of licensing, creator, subject or Store-bundle clearance.")
if __name__=="__main__":
  if len(sys.argv)!=2 or sys.argv[1] not in GROUPS:raise SystemExit("Use: recover_unresolved_gallery.py early|later")
  run(sys.argv[1])
