# Photo recovery report — 14 previously unmatched elements

**Repository:** `comctx/Periodic-Table-Explorer`, branch `scientific-audit-2026-10` (do not merge without release checks)  
**Verified recovery date:** 2026-10-15 UTC / 2026-10-14 CDT  
**Finding:** The 14 discrepancies from the initial image/original comparison are now **resolved at the level of source image identity**. This is **NOT final legal approval** for redistribution.

## Outcome

- **12 images kept** and correctly matched to their actual existing publisher-gallery originals. Original metadata had claimed a different Commons photograph, which gave incorrect author/license provenance. Each `originalUrl` and `attribution` was changed to the matching image and the publisher's general stated CC BY 3.0 terms; `commonsPage` references for unrelated originals were deleted. `withholdReason` was removed when the *identity* discrepancy was resolved, while full rights verification remains pending.
- **2 images physically replaced** in the audit branch rather than simply retitled: `images/elements/014-si.jpg` now shows elemental silicon rather than photovoltaic panels; `images/elements/047-ag.jpg` shows a natural elemental silver nugget rather than a sterling-silver chain.
- Both new photos are **Jurii's work explicitly published under CC BY 3.0 on the exact Wikimedia Commons file pages**, with original photograph link, photographer, license link, and altered-file explanation included in app metadata. The publisher also asks that credits link to each element page. [Silicon Commons](https://commons.wikimedia.org/wiki/File:Silicon.jpg), [Silver Commons](https://commons.wikimedia.org/wiki/File:Silver-nugget.jpg).
- GitHub Actions [Run 38683282141](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38683282141) recovered every one of the 14 source identities using actual cached JPEG bytes (publisher-site similarity dHash 0–1 and brightness differences 0.1–0.2).
- GitHub Actions [Run 38683490522](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38683490522) downloaded and re-encoded the two verified specimen photo originals and committed both JPEGs plus metadata directly to the **audit branch only**, with SHA change verification and validation of image subjects and credits.
- **0/118 images are counted as final Store-release-cleared** by this source-recovery batch. The app's actual offline credits and Store package must be checked as a whole, including multiple CC licenses, ShareAlike changes and image exclusions. Final clearance is a separate sign-off.

## Per-image action and exact source

| Z | Image subject | Action | Exact source currently credited | Image-fingerprint match of previous cached file |
|---:|---|---|---|---|
| 3 | Lithium | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/lithium.jpg) | dHash 0; luminance Δ0.2 |
| 4 | Beryllium | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/beryllium.jpg) | dHash 0; luminance Δ0.2 |
| 5 | Boron (amorphous powder) | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/brown-boron.jpg) | dHash 0; luminance Δ0.2 |
| 14 | Silicon (elemental) | **Replaced actual JPEG** with separately verified CC BY 3.0 elemental sample; retained Commons authorship and source in metadata | [Source image](https://upload.wikimedia.org/wikipedia/commons/2/2c/Silicon.jpg) | Old file intentionally replaced (new file comparison passed in Run 38683490522) |
| 15 | Phosphorus (white allotrope) | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/white-phosphorus.jpg) | dHash 0; luminance Δ0.2 |
| 22 | Titanium (sponge) | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/titanium.jpg) | dHash 0; luminance Δ0.2 |
| 27 | Cobalt (metal) | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/cobalt.jpg) | dHash 0; luminance Δ0.2 |
| 30 | Zinc (metal) | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/zinc.jpg) | dHash 0; luminance Δ0.1 |
| 31 | Gallium (metal) | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/gallium.jpg) | dHash 0; luminance Δ0.2 |
| 44 | Ruthenium (metal) | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/ruthenium.jpg) | dHash 0; luminance Δ0.1 |
| 45 | Rhodium (bead) | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/rhodium.jpg) | dHash 0; luminance Δ0.2 |
| 47 | Silver (natural nugget) | **Replaced actual JPEG** with separately verified CC BY 3.0 elemental sample; retained Commons authorship and source in metadata | [Source image](https://upload.wikimedia.org/wikipedia/commons/e/e4/Silver-nugget.jpg) | Old file intentionally replaced (new file comparison passed in Run 38683490522) |
| 50 | Tin (metal) | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/tin.jpg) | dHash 0; luminance Δ0.2 |
| 58 | Cerium (metal) | **Corrected existing JPEG's original URL** and source/publisher license notice | [Source image](https://images-of-elements.com/s/cerium.jpg) | dHash 1; luminance Δ0.2 |

## What this does—and does not—settle

The machine/gallery checks make it highly likely the existing 12 images are edited/resized versions of the exact identified publisher images. **The publisher's general CC BY 3.0 statement applies unless otherwise noted**; final checks should determine whether any photo is third-party, creator names, source page links, dates, and adaptation disclosures. **The two new Commons files have file-specific author/license statements**, so their attribution is stronger.

A source mismatch and a scientific-subject mismatch are separate issues. For example, the earlier silicon *panel* image was traced to its publisher but did not show elemental silicon, so it was physically replaced; the older sterling-silver *chain* photo was a silver alloy product, so it was physically replaced. The true boron powder and titanium sponge pictures are allowed to remain as **precisely labeled elemental forms**, not falsely described as crystalline boron or van Arkel–de Boer crystal.

## Remaining release blockers

- **Copper #29:** identification of alleged native copper remains disputed; keep withheld until replaced/verified.
- **Other withheld rights/accuracy records:** illustrative, unrelated, or rights-unknown images (#61, #84–87, #94, #96, #98, #100–104).
- **Elements #105–118:** one repeating generic question-mark placeholder, not an actual sample photograph. The image is hidden; consider permitted research or detector images or a deliberately labeled diagram.
- **Final image package rights/credits, device/WebView/offline checks and Microsoft Store submission testing** remain undone. Hidden unlicensed binaries must be excluded before redistribution.

**After this repair:** 14 previous image-origin mismatches corrected; 14 entries still intentionally withheld for scientific/rights reasons; 14 generic placeholders hidden; **90 candidate photos shown** on the audit branch (not licensed/release-cleared as a set). Published `main` branch is unchanged.
