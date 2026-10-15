# Targeted image attribution and derivative history — elements 54–60

**Audit date:** 2026-10-15 (US Central). **Repository:** `comctx/Periodic-Table-Explorer`. **Branch:** `scientific-audit-2026-10`.  
**Scope:** Five specific displayed photo-candidate credits #54, #56, #57, #59, #60. **#55 cesium already corrected in [RIGHTS_41_55_90_ATTRIBUTION.md](RIGHTS_41_55_90_ATTRIBUTION.md). #58 cerium's different publisher-hosted exact original was already recovered and is separately documented in [PUBLISHER_30_RIGHTS_CLARIFICATION.md](PUBLISHER_30_RIGHTS_CLARIFICATION.md).** Do not replace that identified photo with the older mismatched Commons file. No duplicate review claimed.

## Verified primary source evidence

| Number and element | Documented original photo / license grant | Focused attribution action |
|---|---|---|
| **54 xenon** | [Wikimedia Commons: Xenon-glow.jpg](https://commons.wikimedia.org/wiki/File:Xenon-glow.jpg) credits **Jurii**, 11 August 2009, **CC BY 3.0**. File history records **Papa Lima Whiskey** removed a white speck on **16 July 2010**. Sample is a sealed vial of xenon glowing by electrical excitation, not normal room-temperature luminescence. | Added the original photographer, retoucher, exact retouch date, Commons file link, publisher page and app resize/reencode notice to visible credits. |
| **56 barium** | [Commons Barium (56 Ba).jpg](https://commons.wikimedia.org/wiki/File:Barium_(56_Ba).jpg) lists **Hi-Res Images of Chemical Elements** as credited author, not a named individual. [Publisher barium page](https://images-of-elements.com/barium.php) identifies **1.5 g barium with an oxide layer under argon**, and an **unless otherwise noted CC BY 3.0** general gallery license. Commons user **Stas1995** uploaded the 2013 Commons file but is *not verified photographer*. | Explicit publisher-level attribution with photographer uncertainty; no invented creator or new image. |
| **57 lanthanum** | [Commons Lanthanum.jpg](https://commons.wikimedia.org/wiki/File:Lanthanum.jpg) states original photo uploaded by **Jurii, 28 September 2009**, ~1 cm piece of lanthanum, **CC BY 3.0**. | Added author, exact Commons link and image date; disclosed app resize/reencode. |
| **59 praseodymium** | [Commons Praseodymium.jpg](https://commons.wikimedia.org/wiki/File:Praseodymium.jpg) names **Jurii** as original photographer 11 August 2009. The current image was edited by **DePiep on 16 September 2012** to remove shadows and borders, and Commons lists **CC BY 3.0**. | Credit explicitly distinguishes original 2009 photo from 2012 retouch and app resize/reencode. |
| **60 neodymium** | [Commons Neodymium (60 Nd).jpg](https://commons.wikimedia.org/wiki/File:Neodymium_(60_Nd).jpg) names publishing project **Hi-Res Images of Chemical Elements**, **not an individual photographer**; Commons uploader **Stas1995** uploaded it in 2013, not proven creator. [Publisher page](https://images-of-elements.com/neodymium.php) calls the specimen **5 grams neodymium under argon**, larger piece ~1 cm, and gives a general **CC BY 3.0 unless otherwise noted** photo license. | Improved publisher credit, specific file/publisher source and app resizing; individual creator/rights chain remains open. |

## Previously established photo identity evidence (not repeated)

The archived [local source-match 31–60](LOCAL_IMAGE_MATCH_31_60.md) already records cached-JPEG dHash similarities to these present originals: **#54 distance 0**, **#56 0**, **#57 1**, **#59 7**, **#60 0**. This is only likely image correspondence, not exact-file provenance, legal permission or verification of all derivative versions. The former #58 Commons mismatch (historical distance 15) was **resolved separately** by recovery of the exact publisher JPEG; do not restore that older attribution.

## Exactly what changed and what did not

- New source-history wording in `element-photo-data.js`, **only the `attribution` and `note` fields** for #54, #56, #57, #59 and #60. All five already had valid `commonsPage`, `sourceUrl`, `originalUrl`, `licenseUrl`.
- Existing author-credit source pages, exact file URLs and license claims retained; no JPEG binary or scientific data was edited. **Still 92 staged photo candidates / 26 withheld or generic placeholders**.
- Metadata commit: [`319bdb8b372bee67a8e67caa7b38abc09b211d16`](https://github.com/comctx/Periodic-Table-Explorer/commit/319bdb8b372bee67a8e67caa7b38abc09b211d16).
- Publishing permission and signed-file redistribution certification **not granted** to any photo by this source audit. In particular barium and neodymium's publisher-level named project does not prove a separately named individual photographer or every image-specific licensing exception.
- Run automated GitHub package/science, browser, offline and unsigned iPhone simulator tests triggered by the metadata edit and **record only verified successful conclusions**. Do not merge, sign, publish or trigger TestFlight.

## Remaining decisions

Verify actual author/publisher's authority and any specific CC license exceptions for #56, #60 and the 30 publisher-hosted originals, as needed; preserve credits and adaptation notices for the stored exact JPEGs in the distribution archive; complete substantive signed-package and real-device QA. **No final rights sign-off** yet.
