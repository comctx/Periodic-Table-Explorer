# Periodic Table Explorer — stored photo identity triage, elements 31–60

**Audit branch:** `scientific-audit-2026-10`  
**Actual GitHub Actions run:** [Image identity triage — run 38681018215](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38681018215)  
**Date:** 2026-10-14/15 (US Central / UTC)  
**Method:** Python/Pillow `audit/compare_image_identity.py 31 60`, executed on an Ubuntu GitHub Actions runner with access to every checked-in local JPEG and the catalog's original external photo URL. The machine comparison calculated a 64-bit difference hash (dHash; smaller distance means more visually similar) and a mean grayscale brightness difference after normalized resizing and optional central cropping. Git blob SHA uniquely identifies the cached file version. **The original-image SHA was not checked for exact pixel identity.**

## Outcome

- **30/30 saved JPEGs fetched and compared to actual downloaded source-image bytes.** The automated job completed successfully.
- **24/30 `LIKELY_SAME_PHOTO__NOT_CLEARED`** based on image similarity; these are evidence of probable photo identity, **not copyright/license approval**.
- **6/30 `MANUAL_REVIEW_REQUIRED`: #31 gallium, #44 ruthenium, #45 rhodium, #47 silver, #50 tin, #58 cerium.** These are flagged for cautious withholding pending actual source mapping, photo version examination, or replacement. A weaker image-hash score does not prove a different original, particularly with significantly different exposures, cropping or edited artwork.
- **#47 silver is also scientifically misdescribed:** the saved JPEG shows a **silver chain**; the listed Commons `Silver-nugget.jpg` source is a 1 cm natural silver nugget. The publisher has distinct chain and natural nugget photos on its [silver page](https://images-of-elements.com/silver.php). A sterling chain is a silver alloy/product, not a photograph of natural native silver. Keep it out of the element-sample photo panel.
- **0 of these 30 photographs cleared for redistribution.** The source-photo similarity test cannot grant reproduction permission. Verify author, image/license page, CC/ShareAlike requirements, alteration indication, chain-of-rights and final packaged image files separately.
- **Do not change `main` or delete the original cached assets** during this triage.

## Per-file reproducible comparison

| Z | Element | Git blob SHA of app's JPEG | dHash distance | Mean grayscale difference | Machine result | Original named in catalog |
|---:|---|---|---:|---:|---|---|
| 31 | Gallium | `45052ffca86ec4e88aaa713a829805092b208c53` | 27 | 53.3 | Manual review required | [Source](https://commons.wikimedia.org/wiki/File:Solid_gallium_(Ga).jpg) |
| 32 | Germanium | `a2d513477ac880151a9346dc84d7054778c5c408` | 1 | 1.4 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Polycrystalline-germanium.jpg) |
| 33 | Arsenic | `38346ae9a683440b0727f3368d158181f640dbbf` | 2 | 0.4 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Arsenic_(33_As).jpg) |
| 34 | Selenium | `10b4ffb9413c8a83cce1f9e26996457f157f28f1` | 1 | 0.9 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Selenium.jpg) |
| 35 | Bromine | `660ca35ebffc5fdee0b691ddd4b3065597e1e108` | 1 | 0.4 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Bromine-ampoule.jpg) |
| 36 | Krypton | `9bf100cccdffad5b43da7f85f01e9de3c182d02f` | 3 | 0.6 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Krypton-glow.jpg) |
| 37 | Rubidium | `f623a1814dc9ad3e92e5df2dc9be7b55f496c671` | 0 | 0.2 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Rb5.JPG) |
| 38 | Strontium | `c8f36f975ef491484c3b49086127a444af783fc9` | 0 | 1 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Strontium-1.jpg) |
| 39 | Yttrium | `1932f0b66bbe839263b6430aad762d4cf9c6c5a7` | 1 | 0.4 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Piece_of_Yttrium.jpg) |
| 40 | Zirconium | `b23ef809b5b82f08bfe0a0689bf514fbd946ab9b` | 2 | 1.4 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Zirconium-pieces.jpg) |
| 41 | Niobium | `366f001e2b3da3e2b8ca54de030860093412f480` | 0 | 0.2 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Niobium_strips.JPG) |
| 42 | Molybdenum | `da557eef92bf1e28f33559afce0167fe4b361c20` | 0 | 1 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Molybdenum.jpg) |
| 43 | Technetium | `caa62686c6ea50a7d24880b9f15ddb0138826fb5` | 0 | 0.1 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Technetium-sample-cropped.jpg) |
| 44 | Ruthenium | `5f370821638bd0b3a01b1025d0923d6ddb612a6f` | 21 | 55.4 | Manual review required | [Source](https://commons.wikimedia.org/wiki/File:Ruthenium_crystal.jpg) |
| 45 | Rhodium | `4bd84dc814aae99bb774ad047e77cc1bba2f576b` | 10 | 23.9 | Manual review required | [Source](https://commons.wikimedia.org/wiki/File:Rhodium_(Rh).jpg) |
| 46 | Palladium | `306132671f622694b16c521d2b62399ca8fb0e52` | 2 | 0.5 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Palladium_(46_Pd).jpg) |
| 47 | Silver | `c029097b00022ee49ce38c0337b851d13f7165e8` | 28 | 65.1 | Manual review required | [Source](https://commons.wikimedia.org/wiki/File:Silver-nugget.jpg) |
| 48 | Cadmium | `d7df576e4400997123d1608fb5dafda991ca7f4d` | 1 | 0.1 | Likely same photo; NOT cleared | [Source](https://images-of-elements.com/cadmium.php) |
| 49 | Indium | `b71444fc5090d60857414d80f1b4516669b999f1` | 0 | 0.1 | Likely same photo; NOT cleared | [Source](https://images-of-elements.com/indium.php) |
| 50 | Tin | `96cd4a2a79101bb4b96746d6d922349728cbcaab` | 35 | 78.3 | Manual review required | [Source](https://commons.wikimedia.org/wiki/File:Tin-2.jpg) |
| 51 | Antimony | `825443a26370c84061c7f4c2468da351b8b76514` | 0 | 0.1 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Antimony-4.jpg) |
| 52 | Tellurium | `2a80e3cd6912cb8d4898750299206a14b5c95296` | 1 | 27.9 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Tellurium2.jpg) |
| 53 | Iodine | `f8f985cd4a2320fc8e55c860ee921355967320b4` | 0 | 0.3 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Iodine-sample.jpg) |
| 54 | Xenon | `4f5b1a4c29d8326aa764bfb255ea5e1298b68d28` | 0 | 0.4 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Xenon-glow.jpg) |
| 55 | Cesium | `07044786c3abdf569a521f9c8e3976a81f3b0abc` | 0 | 0.1 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Cesium.jpg) |
| 56 | Barium | `94646409300ef57448299c7e6a871d442805e77b` | 0 | 0.5 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Barium_(56_Ba).jpg) |
| 57 | Lanthanum | `a161855a65fb3f07753c6216bcc52dfc69917404` | 1 | 0.6 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Lanthanum.jpg) |
| 58 | Cerium | `3fdb077cd1aa57a510711eaf1e230fd12a7e788a` | 15 | 26.1 | Manual review required | [Source](https://commons.wikimedia.org/wiki/File:Cerium2.jpg) |
| 59 | Praseodymium | `b6645b1736de7037ecb6fedf437a7133bc51f649` | 7 | 5.4 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Praseodymium.jpg) |
| 60 | Neodymium | `f5434314b4853c458627791d77bc34d0d0b43487` | 0 | 0.4 | Likely same photo; NOT cleared | [Source](https://commons.wikimedia.org/wiki/File:Neodymium_(60_Nd).jpg) |

## Required human review

- **Gallium #31**: visually different gallium crop/form than the named multi-stage gallium photograph; identify the correct original.
- **Ruthenium #44**: high difference score; inspect whether the saved metallic specimen is a different ruthenium photograph.
- **Rhodium #45**: intermediate difference score; do not call it a proven mismatch without inspecting alternate views and color/exposure changes.
- **Silver #47**: confirmed incompatible object description (silver chain vs native nugget); replace with a licensed pure-silver sample, or clearly label the chain as an application with an exact chain-specific credit.
- **Tin #50**: high difference score; confirm whether cached image is another version or photograph of tin.
- **Cerium #58**: moderate difference score; identify the source/version before reusing.

## Reproducibility, scope and limitations

To rerun in a Python environment with Internet connectivity: `python -m pip install pillow`, then `python audit/compare_image_identity.py 31 60`. GitHub Action workflow `.github/workflows/image-identity-audit.yml` is deliberately read-only and currently configured for the audit branch. The saved JSON artifact is available from the linked run. Errors in downloading or decoding are always reported as errors rather than interpreted as photo matches. This report records computer-assisted **image identity triage**, not scientific authentication of the photographed material, permission to redistribute an adapted work, or successful Store/desktop/offline testing.
