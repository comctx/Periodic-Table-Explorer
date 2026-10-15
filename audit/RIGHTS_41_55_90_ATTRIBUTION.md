# Targeted image-rights attribution check — Niobium 41, Cesium 55 and Thorium 90

**Date:** 2026-10-15  
**Repo/branch:** `comctx/Periodic-Table-Explorer` / `scientific-audit-2026-10`  
**Scope:** Focused source-specific author, license and existing-derivative history for **three already-candidate displayed JPEGs**. The prior actual cached-JPEG source-identity checks were **not** repeated. This file does not grant copyright permission or final redistribution sign-off.

## Previously completed identity evidence

- **#41 Niobium:** `audit/LOCAL_IMAGE_MATCH_31_60.md` shows likely match to original Commons photo (dHash 0, brightness difference 0.2).
- **#55 Cesium:** same report shows likely match (dHash 0, brightness difference 0.1).
- **#90 Thorium:** `audit/LOCAL_IMAGE_MATCH_61_90.md` shows likely match (dHash 0, brightness difference 0.1).
- These metrics establish *probable image identity*, not copyright permission, byte-for-byte identity or full derivative lineage.

## Verified primary Commons source findings

| Z | Commons evidence checked | License statement | Attribution refinement made in `element-photo-data.js` |
|---|---|---|---|
| 41 — Niobium | [File:Niobium strips.JPG](https://commons.wikimedia.org/wiki/File:Niobium_strips.JPG) identifies original photographer **Mauro Cateb**, own work, description **niobium strips**, dated **11 July 2011** | [CC BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/) | Named photographer, original-file link, licensed version, resized/reencoded copy and ShareAlike conditions |
| 55 — Cesium | [File:Cesium.jpg](https://commons.wikimedia.org/wiki/File:Cesium.jpg) identifies original 12 December 2007 **Dnn87 self-made** photo of caesium metal in the Dennis S.K. collection; **Anrie transferred** the file to Commons in 2008, not the original photographic creator | [CC BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/) | Separates photographer from transfer user; adds origin, credit and derivative-license notice |
| 90 — Thorium | [File:Thorium-1.jpg](https://commons.wikimedia.org/wiki/File:Thorium-1.jpg) identifies photographer **W. Oelen**, 24 July 2007, corrosion in ampoule; Commons file history says **retouched on 2 April 2016 by account 'Konto na chwilę'**, so the current derivative's retouch must not be omitted | [CC BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/) | Adds retoucher and retouch date to on-device attribution, separate from app's later re-encoding, with precise CC BY-SA attribution |

**License logic:** The [CC BY-SA 3.0 legal code](https://creativecommons.org/licenses/by-sa/3.0/legalcode) allows reuse subject to its specific conditions, including author attribution, source and license information, required modification disclosure and appropriate ShareAlike treatment for adaptations. The original Commons page is the recorded license grant; a source notice must still be connected to the *actual file redistributed*.

## What changed / what did not

- **Changed:** exactly three entries' `attribution` and `note` fields in `element-photo-data.js`. New wording is shown in existing About & Credits and element-page credits; no new source fields or license claims were invented.
- **Unchanged:** all JPG binaries, 118-element record count, 92 displayed candidate / 26 withheld or placeholder image selection, chemistry, quiz and package configuration.
- **Still open:** independent release audit for all 92 images and the Bay City photo; final CC BY-SA adapted-JPEG licensing and credits in *actual signed release artifacts*; source-by-source commercial-rights conditions; physical iPhone/TestFlight and Microsoft packages. These three are **better documented, not finally certified for commercial redistribution**.

## Evidence links and existing tests

- Previous image-identity comparison reports: [31–60](LOCAL_IMAGE_MATCH_31_60.md), [61–90](LOCAL_IMAGE_MATCH_61_90.md).
- New metadata commit: [2e0bcba19380e26fe667cded858720aabf885040](https://github.com/comctx/Periodic-Table-Explorer/commit/2e0bcba19380e26fe667cded858720aabf885040).
- Audit-only GitHub Actions may re-run based on the metadata change. Their actual job outcomes must be checked before calling these edits regression-tested.

**Release warning:** no merge to `main`, no new IPA signing or Store publishing approved or performed by this update.
