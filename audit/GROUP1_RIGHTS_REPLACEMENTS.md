# Four element photographs: subject and reuse-rights replacement audit

**Repository:** [comctx/Periodic-Table-Explorer](https://github.com/comctx/Periodic-Table-Explorer)  
**Audit branch:** `scientific-audit-2026-10` (published `main` unchanged; no merge)  
**Audit date:** 2026-10-15 UTC  
**Image-fingerprint validation:** Original Commons images fetched via Wikimedia imageinfo (or a read-only CDN proxy when rate-limited), re-encoded/downscaled using Pillow, compared visually/hash against the original, and committed to the existing local JPEG file path.

## Outcome

**Four actual, different JPEG binaries were replaced** to avoid unreliable subject identification or disputed original reuse terms. Each original file has a specific Commons description and rights statement; metadata credits the new original rather than the removed JPEG.

| Z | Element | Old concern | New photo depiction and correct context | Author / rights | New committed Git blob SHA |
|---:|---|---|---|---|---|
| 29 | Copper | Ambiguous native copper specimen | Native copper specimen from Michigan, photographed at the Muséum de Toulouse ([source page](https://commons.wikimedia.org/wiki/File:Mus%C3%A9um_Toulouse_-_cuivre_natif.JPG)) | Pymouss; CC BY-SA 3.0 (adaptation/share-alike terms) | `fa0edefbd301bf0a03961091af799a1feeddb9b5` |
| 94 | Plutonium | LANL ring with full-notice requirement | Historic 1941 plutonium-239 sample displayed at the Smithsonian National Museum of American History — tiny specimen in an exhibit case ([source page](https://commons.wikimedia.org/wiki/File:Plutonium-239,_1941,_first_sample_in_which_nuclear_fission_was_detected,_University_of_California,_Berkeley,_gift_of_Glenn_T._Seabort_and_Emilio_Segre_-_National_Museum_of_American_History_-_DSC06250.JPG)) | Daderot; CC0 1.0, 2013 museum photograph | `67ed7105938e171ccc72de670588f34a7be24391` |
| 96 | Curium | EU/JRC-ITU glowing sample, unverified grant | Curium-248 oxide targets mounted on a RIKEN wheel for a nuclear research experiment — not pure curium metal ([source page](https://commons.wikimedia.org/wiki/File:Curium_oxide_targets.jpg)) | RIKEN; CC BY 4.0, 2024 curium-oxide research target photo | `9a3952713916d85e4e79b5768b965cfdca4ab05c` |
| 98 | Californium | Californium-249 metal disc with copyright contradiction | Historical californium-252 neutron-source capsules, U.S. Department of Energy, circa 1972 — not a bare californium-metal sample ([source page](https://commons.wikimedia.org/wiki/File:HD.5A.048_(10348254595)_(cropped).jpg)) | U.S. Department of Energy; U.S. federal government public-domain work, historic ca. 1972 | `71faa4c83c18c3c750ff3d119a80b5679bffbb4a` |

## Correct scientific interpretation

- **Copper (29):** Native copper in a **Michigan** mineral specimen held by the Muséum de Toulouse. Copper-colored parts are embedded in other mineral matrix. The image is not a guaranteed chemically pure isolated copper ingot.
- **Plutonium (94):** A tiny historical plutonium-239 museum exhibit photographed in 2013, tied to a 1941 sample. The replacement is a historic display **not** the previously used electrorefined Los Alamos ring. The source photographer personally dedicated the photo to CC0. No old LANL ring should remain in the app's current replacement image.
- **Curium (96):** A RIKEN wheel loaded with **curium-248 oxide targets**, not elemental curium metal; its associated experiment sought element 119. The previously catalogued glowing sample with © European Union/JRC-ITU rights was physically replaced.
- **Californium (98):** A historical **californium-252 neutron-source capsule** photo from ENERGY.GOV, not a bare californium-249 metal disc. The previous disc photo had contradictory original-upload copyright history and was physically replaced.

## Image-specific sources and license obligations

1. [Copper museum photograph](https://commons.wikimedia.org/wiki/File:Mus%C3%A9um_Toulouse_-_cuivre_natif.JPG): photographer Pymouss, **CC BY-SA 3.0**. Preserve attribution, original link, transformation description and ShareAlike requirements for the resized JPEG.
2. [Plutonium-239 Smithsonian display](https://commons.wikimedia.org/wiki/File:Plutonium-239,_1941,_first_sample_in_which_nuclear_fission_was_detected,_University_of_California,_Berkeley,_gift_of_Glenn_T._Seabort_and_Emilio_Segre_-_National_Museum_of_American_History_-_DSC06250.JPG): photo by Daderot, **CC0 1.0**.
3. [RIKEN curium oxide target wheel](https://commons.wikimedia.org/wiki/File:Curium_oxide_targets.jpg): author RIKEN, **CC BY 4.0**. Preserve author, image credit, license URL and resizing disclosure.
4. [U.S. DOE californium neutron-source capsules](https://commons.wikimedia.org/wiki/File:HD.5A.048_(10348254595)_(cropped).jpg): federal employee **public domain** statement for this file, original DOE photo cropped by KOKUYO (2024), then downscaled/reencoded for this app.

The original photographed images were inspected on Commons as well as inspecting the four newly committed JPEGs in the audit branch. Important: this is a **source-identity and specific reuse-terms repair**, **not a final sign-off for all app images**.

## Branch checks and remaining work

- All four image metadata records now have a named original, real license/public-domain source, carefully worded title, and **no old `withholdReason`**.
- Image replacements were committed through successful isolated audit-branch jobs: [Copper/curium/californium replacement run 38685174037](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38685174037) and [Plutonium replacement run 38685303121](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38685303121).
- Earlier direct Wikimedia downloads hit temporary HTTP 429, so a verified fallback retrieval was used after direct retries. The Commons page remains the **primary source and attribution**.
- **10 other entries** remain explicitly withheld for unrelated subject/illustration/rights reasons (#61, #84–87, #100–104); **14** superheavy elements (#105–118) still use a generic hidden placeholder. This leaves **94 potential visible photos/research images** and **24 entries without a displayed image**.
- **Never claim a full Store release approval** merely because these four records have improved rights evidence. Recheck file-specific rights, credits, any ShareAlike derivatives, offline rendering and the actual distributable package; remove non-cleared assets from any app bundle. In particular, `main` remains unchanged until explicit review/merge.

