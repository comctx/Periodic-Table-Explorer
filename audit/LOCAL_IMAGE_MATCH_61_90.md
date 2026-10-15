# Periodic Table Explorer — stored image identity audit: elements 61–90

**Branch:** `scientific-audit-2026-10`  
**Reproducible GitHub Actions run:** [Run 38681396126](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38681396126) (completed successfully)  
**Date:** 2026-10-14 / 2026-10-15 UTC  
**Method:** `python audit/compare_image_identity.py 61 90` on an Ubuntu runner using actual checked-in JPEG bytes and the downloaded photo specified in each element's `originalUrl`. Image matching uses normalized dHash distance and grayscale luminance difference with limited center-crop alternatives.

## Initial comparison results

- **30/30 saved JPEGs were opened and compared or download attempted.**
- **14/30 likely same picture** by machine similarity. Four (#84–87) are correctly marked as **illustrations**, not real chemical-element sample photographs; a pixel match never changes their non-photographic classification or pre-existing withholding.
- **15/30 external originals differed significantly enough to require source-image investigation.** Differences can arise from an alternate photo from the same publisher, another view of a sample, a misleading caption, a resized/recolored image, or the wrong original credit. Do **not** infer that the metal shown is wrong on the basis of a dHash discrepancy.
- **1/30 original source unavailable:** #61 promethium source file returns HTTP 404; its pictured metal is explicitly an illustration/photomontage, and its existing `withholdReason` stays in force.
- **0/30 release-cleared images.** A similarity result is *not* license clearance, proof of commercial permission, correct scientific attribution, or an audit of assets shipped with a desktop app.

## Machine image comparison and local repository version

| Z | Element | Local JPEG Git blob SHA | Image dHash distance | Mean brightness difference | Comparison status | Original source page |
|---:|---|---|---:|---:|---|---|
| 61 | Promethium | `4108244171ebdf0b17c11e8519a5ff5fc077b890` | - | - | Fetch error — illustration already withheld | [Original/attribution](https://images-of-elements.com/promethium.php) |
| 62 | Samarium | `b0e7f351e82e3f251e22c86afe116ee29b51631b` | 21 | 44.7 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Samarium-2.jpg) |
| 63 | Europium | `faee4fdb0bf33fdb007b66a4895fa9826e885138` | 25 | 67.4 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Europium.jpg) |
| 64 | Gadolinium | `0aa77f730390ebbe293c9cecadb81025d22065f5` | 12 | 18.6 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Gadolinium-2.jpg) |
| 65 | Terbium | `03aacae8aa8eab167e2c82926d3730b70b17394b` | 30 | 63.6 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Terbium-2.jpg) |
| 66 | Dysprosium | `1e8caa1c1aa87eafbad889a0e8a7ff768ff7dd64` | 30 | 58.6 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Dysprosium-2.jpg) |
| 67 | Holmium | `e3fd9e4239346a649438fbe130494a90648f5876` | 13 | 27.2 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Holmium2.jpg) |
| 68 | Erbium | `00a793cfb48d13a4886dcd83ca0965d92f3778a4` | 1 | 1.2 | Likely source match (not cleared) | [Original/attribution](https://commons.wikimedia.org/wiki/File:Erbium-2.jpg) |
| 69 | Thulium | `f200159d1ac7df9aacb6c4e2cf89147f07fbb6e6` | 3 | 0.4 | Likely source match (not cleared) | [Original/attribution](https://commons.wikimedia.org/wiki/File:Thulium-2.jpg) |
| 70 | Ytterbium | `eb844be61ad0872fa080970a3afc159bcb5ef558` | 21 | 39.8 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Ytterbium-3.jpg) |
| 71 | Lutetium | `3485830edce25dd5fc93dc7f166b587b6f3b1f28` | 0 | 0.5 | Likely source match (not cleared) | [Original/attribution](https://commons.wikimedia.org/wiki/File:Lutetium.jpg) |
| 72 | Hafnium | `14e6614ab764d38da46750423ea94ed59cb7a938` | 32 | 34.4 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Hafnium_(72_Hf).jpg) |
| 73 | Tantalum | `2212b8e0f8e611920a43ed4172c66e468b5b4a04` | 22 | 63.8 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Tantalum.jpg) |
| 74 | Tungsten | `e431196ea0fd66a14b86f37d5e785900eeed5aa8` | 2 | 0.2 | Likely source match (not cleared) | [Original/attribution](https://commons.wikimedia.org/wiki/File:Tungsten_rod_with_oxidised_surface.jpg) |
| 75 | Rhenium | `a422b74ce5407aafaf048a51475026df58fd7bc9` | 28 | 66.1 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Pure_rhenium_bead,_arc_melted,_21_grams._Original_size_in_cm_-_1.5_x_1.7.jpg) |
| 76 | Osmium | `499dbb355652e00da605f2944e0952b365831595` | 0 | 1.6 | Likely source match (not cleared) | [Original/attribution](https://commons.wikimedia.org/wiki/File:Osmium-bead.jpg) |
| 77 | Iridium | `ffae538b50c57665981c9831675a8be4ece38bde` | 28 | 56.1 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Iridium-2.jpg) |
| 78 | Platinum | `7610af6dd783fa12a9c1ef83604c779711ca862f` | 0 | 0.8 | Likely source match (not cleared) | [Original/attribution](https://commons.wikimedia.org/wiki/File:Platinum_crystals.jpg) |
| 79 | Gold | `d9791e1145a36bcdd0a483cff128ef485b4ad615` | 26 | 58.3 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Gold_(79_Au).jpg) |
| 80 | Mercury | `05484ff1ce7ee52668c53de8937a7c48e8d8d130` | 33 | 48.8 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Hydrargyrum_(80_Hg).jpg) |
| 81 | Thallium | `fc2d1a2e972efdc5931b7432f30739ea4181c200` | 20 | 58.1 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Thallium_(81_Tl).jpg) |
| 82 | Lead | `841373f27c1bd5c9c9b51d699ccfff43c897ede9` | 23 | 33.0 | Manual source investigation required | [Original/attribution](https://commons.wikimedia.org/wiki/File:Lead-2.jpg) |
| 83 | Bismuth | `66b98e140fb8119cdfc2f2c273f2cac0ba4c3c96` | 1 | 0.7 | Likely source match (not cleared) | [Original/attribution](https://commons.wikimedia.org/wiki/File:Bismuth-2.jpg) |
| 84 | Polonium | `4845811ff3d6133c0b95a1de3e68cf175d2561bd` | 0 | 0.1 | Likely source match (not cleared) | [Original/attribution](https://images-of-elements.com/polonium.php) |
| 85 | Astatine | `f6d14f3026a719f8c7e1a35ee9414585ecda179c` | 0 | 0.1 | Likely source match (not cleared) | [Original/attribution](https://images-of-elements.com/astatine.php) |
| 86 | Radon | `bfea37a342e96cfac2d3fef891c2ff350a980f46` | 0 | 0.0 | Likely source match (not cleared) | [Original/attribution](https://images-of-elements.com/radon.php) |
| 87 | Francium | `49383b028b8598ad21a9855564fba9cba62521f3` | 0 | 0.1 | Likely source match (not cleared) | [Original/attribution](https://images-of-elements.com/francium.php) |
| 88 | Radium | `b44fa95c3a3f7ec03a28ad864a431fa3464913ca` | 0 | 0.1 | Likely source match (not cleared) | [Original/attribution](https://commons.wikimedia.org/wiki/File:Radium226.jpg) |
| 89 | Actinium | `db35498a9e49fca6ba6b0861855987f37f3982a2` | 2 | 0.4 | Likely source match (not cleared) | [Original/attribution](https://commons.wikimedia.org/wiki/File:Actinium_sample_(31481701837).png) |
| 90 | Thorium | `32628e4a75cb3de71aa4504b2bf0b5cd9f79387c` | 0 | 0.1 | Likely source match (not cleared) | [Original/attribution](https://commons.wikimedia.org/wiki/File:Thorium-1.jpg) |

## Completed publisher-gallery recovery — image identities resolved for 15 entries

A second read-only [GitHub Actions run 38681550877](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38681550877) completed successfully, using `audit/find_publisher_image_matches.py 61 90` to fetch image links from the original element publisher pages and compare each against the saved JPEG.

**Result:** All **15 previously flagged actual element photographs** match a *different, specifically identified original* from the publisher's own gallery, with **dHash distance 0–2 and grayscale brightness difference ≤0.2**. The repository's catalog `originalUrl` for each was corrected to the exact matching image URL; the app's `withholdReason` was removed for these identity-resolved picture candidates. The publisher asks for attribution linking to the element page and broadly advertises CC BY 3.0 for site images unless otherwise noted; **individual photographer, image-specific grant, and release packaging compliance are not yet fully verified**. No image was declared approved for Store redistribution.

| # | Element | New exact matched gallery photo | dHash distance | Brightness difference | Attribution stage |
|---:|---|---|---:|---:|---|
| 62 | Sm | [Publisher image](https://images-of-elements.com/s/samarium.jpg) | 0 | 0.2 | Photo identified; final permissions still pending |
| 63 | Eu | [Publisher image](https://images-of-elements.com/s/europium.jpg) | 0 | 0.2 | Photo identified; final permissions still pending |
| 64 | Gd | [Publisher image](https://images-of-elements.com/s/gadolinium.jpg) | 0 | 0.2 | Photo identified; final permissions still pending |
| 65 | Tb | [Publisher image](https://images-of-elements.com/s/terbium.jpg) | 0 | 0.1 | Photo identified; final permissions still pending |
| 66 | Dy | [Publisher image](https://images-of-elements.com/s/dysprosium.jpg) | 0 | 0.2 | Photo identified; final permissions still pending |
| 67 | Ho | [Publisher image](https://images-of-elements.com/s/holmium.jpg) | 0 | 0.2 | Photo identified; final permissions still pending |
| 70 | Yb | [Publisher image](https://images-of-elements.com/s/ytterbium.jpg) | 2 | 0.2 | Photo identified; final permissions still pending |
| 72 | Hf | [Publisher image](https://images-of-elements.com/s/hafnium.jpg) | 0 | 0.2 | Photo identified; final permissions still pending |
| 73 | Ta | [Publisher image](https://images-of-elements.com/s/tantalum.jpg) | 1 | 0.2 | Photo identified; final permissions still pending |
| 75 | Re | [Publisher image](https://images-of-elements.com/s/rhenium.jpg) | 1 | 0.2 | Photo identified; final permissions still pending |
| 77 | Ir | [Publisher image](https://images-of-elements.com/s/iridium.jpg) | 1 | 0.2 | Photo identified; final permissions still pending |
| 79 | Au | [Publisher image](https://images-of-elements.com/s/gold.jpg) | 1 | 0.2 | Photo identified; final permissions still pending |
| 80 | Hg | [Publisher image](https://images-of-elements.com/s/mercury.jpg) | 0 | 0.2 | Photo identified; final permissions still pending |
| 81 | Tl | [Publisher image](https://images-of-elements.com/s/thallium.jpg) | 1 | 0.2 | Photo identified; final permissions still pending |
| 82 | Pb | [Publisher image](https://images-of-elements.com/s/lead.jpg) | 0 | 0.2 | Photo identified; final permissions still pending |

**#61 promethium:** the original Commons file returned 404, but the publisher gallery identifies the exact cached file as [promethium.jpg](https://images-of-elements.com/s/promethium.jpg) (dHash 0). This is a **photomontage**, not a real sample photograph. The broken URL was corrected, but the image **remains withheld** from the photo panel.

**#84–87:** Images are source-matched **illustrations** and remain withheld from the actual-sample photo panel. #68–69, #71, #74, #76, #78, #83, #88–90 already had high-confidence original matches from the first comparison; their photo rights are still pending.

**Updated batch identity classification:** **25/30 likely real-element/sample or research images** have a matching source image; **5/30 are illustrated representations** (#61 and #84–87) and not actual element photographs. Thus **30/30 cached-image identities can now be traced to source files at the visual/pHash level**, but **0/30 are finally cleared for distribution**. Scientifically accurate subjects and third-party rights must still be checked.

## Release verification after source recovery

The audit branch now records the 15 publisher-gallery originals that match the actual cached files, replacing mismatched `originalUrl` references. An exact visual/source match is not copyright clearance. Check the individual author's credit, publishing rights statement, CC conditions, required element-page link, photo alterations, and final Store bundle.

**Existing scientific safeguards remain:** #61 promethium is explicitly an illustration and withheld; #84–87 polonium, astatine, radon and francium are illustrations and withheld. The 15 recovered pictures have an identified publisher image but must not be treated as fully licensed until attribution and final release review are complete.

**Next:** review final author/license obligations for the newly identified photos, then compare #91–118. The physical images in every Store bundle still require an offline/permissions audit. `main` remains unchanged.
