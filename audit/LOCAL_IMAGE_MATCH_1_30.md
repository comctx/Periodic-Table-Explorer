# Periodic Table Explorer — cached JPEG versus credited source: elements 1–30

**Audit branch:** `scientific-audit-2026-10`  
**Checked:** 2026-10-14  
**Scope:** App's *actual* saved `images/elements/001-h.jpg` … `030-zn.jpg` viewed using the binary/base64 GitHub connector; compared visually with each named original image from Wikimedia Commons or the original element publisher. Git blob SHA recorded to identify which version was inspected.

## Results and limitations

- **30 of 30 cached JPEGs opened and inspected as rendered images.**
- **22 of 30 have a visible match to the catalogued source picture** (including copper #29, which is still withheld for scientific-subject dispute). These are *visual* matches, NOT pixel-identical confirmations or final license clearances.
- **8 of 30 do not establish an exact match to the currently cited original picture.** All 8 have an explicit `withholdReason` in `element-photo-data.js` as a precaution, pending finding their exact originals or using independently verified replacements.
- **0 of 30 cached photos cleared for a Store redistribution package.** Neither viewing an image nor matching it visually proves all author/notice/ShareAlike/crop requirements have been met. No local image binaries were replaced or deleted in this session.
- **Important correction:** Initially a comparison mistakenly used Wikimedia's *Hydrogen_discharge_tube.jpg* rather than the catalogued *Hydrogenglow.jpg*. Comparing against the **correct** latter original confirms a visual match for #1. Do not record a hydrogen mismatch based on the unrelated file.

**Status definitions:** *Visual match* = visually recognizable same photograph, often resized/cropped/recompressed; *Not exact/withheld* = cached JPEG differs substantially or exact source image could not be established; *Subject disputed/withheld* = photograph matches but scientific identification is contested. SHA below is the **Git blob SHA of the local JPEG**, not the original photographer's file hash.

| Z | Element | Git blob SHA (local JPEG) | Visual result | Observation |
|---:|---|---|---|---|
| 1 | H | `d0d98ced2eecddf5c66e5214da01c71e538d0348` | **Visual match** | Correct original is Hydrogenglow.jpg, not the unrelated Hydrogen_discharge_tube.jpg. Purple diagonal discharge vial matches. |
| 2 | He | `2e480857693b5fc4a60e942f4e188940b7759f00` | **Visual match** | Pink discharge tube matches the exact Helium-glow.jpg source. |
| 3 | Li | `737f91bdfaffadd9ea0c9da98eefd0888527016d` | **Not exact / withheld** | Lithium strips in ampoule, but saved view is not visibly the same as cited 0.5_grams_lithium_under_argon.jpg. |
| 4 | Be | `7fac856aa71114001e0262ded827c94bb19c3ffe` | **Not exact / withheld** | Different face/view of dark beryllium bead; could be another publisher image. Exact credit not established. |
| 5 | B | `6d13c2700b0b820abfae69abb3f2086b77793f91` | **Not exact / withheld** | App shows brown amorphous boron powder in jar; linked Boron.jpg shows black crystalline boron. Different allotrope / false caption. |
| 6 | C | `5a63ea1c3c4ecfba8d0b7eda612972f5f3ff0140` | **Visual match** | Same carbon chunk shown in Pure_Carbon.png; saved image converted to JPEG. CC BY-SA obligations pending. |
| 7 | N | `ed79f9ef68e42d97b0fbd565a32fee81ce1a107b` | **Visual match** | Nitrogen discharge tube matches. |
| 8 | O | `dd35d560723f1ae339353dcb8a885e8fd0659a92` | **Visual match** | Liquid oxygen in foil-covered beaker matches the credited photo. |
| 9 | F | `6d37757df63ebb7de42a1726cffc3a384e267784` | **Visual match** | Yellowish liquid fluorine in tube matches; CC BY-SA attribution still pending. |
| 10 | Ne | `7a6e171d49da779727a6b68b2309d30fe76bdc5b` | **Visual match** | Orange-red neon discharge tube matches. |
| 11 | Na | `2db848b0c26a9f1f7b13608d6b1d67d3dd1867c5` | **Visual match** | Three cut sodium pieces match. |
| 12 | Mg | `1b04f3c6ddfa43b1eba7b95494300ad5227bf3a2` | **Visual match** | Magnesium crystals match. |
| 13 | Al | `f987ba79eba14d8874acc90df3776203afa19d36` | **Visual match** | Crumpled aluminum foil matches. |
| 14 | Si | `9e9cef6acf70c36ca72fdfaf9299b3b1cd8bb336` | **Not exact / withheld** | App displays photovoltaic panels, not the silicon metal/metalloid chunk linked as Silicon.jpg. Publisher separately presents panels as a use. |
| 15 | P | `b8d6e4981988bca4a942ec37d6d1ae6038da4fbe` | **Not exact / withheld** | App shows pale-yellow white phosphorus; linked original is purple phosphorus. Publisher discusses yellowish white phosphorus separately. |
| 16 | S | `c7117eda8e584ac5ff10d5dbdc331a831b017b58` | **Visual match** | Yellow native sulfur crystal matches. |
| 17 | Cl | `a4e5ce31974df5381b4844b4c313b20a23ba83ca` | **Visual match** | Pale yellow-green chlorine sample matches. |
| 18 | Ar | `50c755a54dcab475f2cb1acb6f62ce998449c486` | **Visual match** | Violet argon discharge tube matches. |
| 19 | K | `7b4f1c9568cf791ad1076c896500d98f5f40a13c` | **Visual match** | Cut potassium metal pieces match. |
| 20 | Ca | `6b43e60f2f22c27cb50d364832d98a733df377a1` | **Visual match** | Calcium grains in tube match. |
| 21 | Sc | `cf5c2230317851ed3baf6d0c09e45ede3542a7d3` | **Visual match** | Scandium crystal matches author JanDerChemiker's exact Commons file. |
| 22 | Ti | `7ab7c0b7a551e9633d4ea04754b9454300c2b0f1` | **Not exact / withheld** | App shows porous titanium sponge, not the bright crystalline titanium source image. Publisher separately describes a 120 g sponge cylinder. |
| 23 | V | `cc54b6282cce6a598e1c11a2ed6a05324628e040` | **Visual match** | Vanadium pieces inside ampoule match. |
| 24 | Cr | `81b421a1ee8f21d875373cbb789bdc1a6b5cbdae` | **Visual match** | Jagged chromium metal piece matches. |
| 25 | Mn | `cb9e02a97b933a7fce4f6aa321bf10cb2d2d79a5` | **Visual match** | Two manganese metal chunks match. |
| 26 | Fe | `fbcb279a9cfb92fd8a1c5ab48a3c1375d8d91a9c` | **Visual match** | Iron meteorite fragments visually match the images-of-elements.com/iron-2.jpg source. |
| 27 | Co | `1a500445b0de8b0381b259facd6e482eaaaeb364` | **Not exact / withheld** | Same type of textured cobalt-cathode fragment, but image/composition differs from linked Cobalt_ore_2.jpg; seek corresponding original. |
| 28 | Ni | `843f4782eed95e392da11f9bfa4bdcbc64b1bf43` | **Visual match** | Nickel chunk matches Commons. |
| 29 | Cu | `fc21208be842f6eec706a1fc03ffe2dcc0f9a8d1` | **Visual match; subject disputed / withheld** | Same copper specimen photo as NatCopper.jpg, but its source history disputes classification as native copper. Already withheld. |
| 30 | Zn | `315a78f5f6c027d06812f6b18235597a39dd1db2` | **Not exact / withheld** | App shows smooth convex zinc face, while cited source shows a different, textured face. Publisher mentions two sides, but exact source JPG unconfirmed. |

## Key issues to fix before release

1. **#5 boron**: cached brown amorphous boron is an authentic *form* described on the publisher page but not the claimed crystalline original. Preserve the corrected title, locate the proper image file and attribution, or replace.
2. **#14 silicon**: cached photo is **photovoltaic cells**, an application of silicon, not a sample of raw silicon. Replace with a verified element photo rather than trying to pass this off as metal/metalloid appearance.
3. **#15 phosphorus**: cached photo shows **yellowish white phosphorus** with impurity, not the linked **purple phosphorus** specimen. Different allotrope, source caption and image must be corrected.
4. **#22 titanium**: cached rough **titanium sponge** is a different sample from the named van Arkel–de Boer crystal. Publisher separately describes a sponge cylinder; find exact original or replace.
5. **#3 lithium, #4 beryllium, #27 cobalt and #30 zinc**: look similar to other views of the named elements, but **not yet established as the exact credited source file**. Keep withheld until their true image URLs and attribution are documented.
6. **#29 copper**: visually matches the credited source but the source's own description disputes whether the specimen is natural native copper; remain withheld or substitute an indisputable sample.
7. Revisit **all 30** for pixel/revision comparisons where feasible, link required creators/licences, indicate changes, check ShareAlike licenses and final packaged files. Current browser-only visual checks are **not the full legal or scientific release sign-off**.

## External originals used

Consult the entry's `commonsPage`, `originalUrl` or `sourceUrl` in `element-photo-data.js`. For publisher cross-checks, see [boron](https://images-of-elements.com/boron.php), [silicon](https://images-of-elements.com/silicon.php), [phosphorus](https://images-of-elements.com/phosphorus.php), [titanium](https://images-of-elements.com/titanium.php), and [zinc](https://images-of-elements.com/zinc.php). In particular, the publisher notes the alternate boron allotrope, use of silicon in solar cells, yellowish white phosphorus, titanium sponge, and both faces of a zinc specimen.
