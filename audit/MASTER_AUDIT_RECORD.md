# Periodic Table Explorer — master audit record

**Created from GitHub evidence:** 2026-10-15  
**Repository:** [comctx/Periodic-Table-Explorer](https://github.com/comctx/Periodic-Table-Explorer)  
**Working branch:** `scientific-audit-2026-10` (**never merge without explicit user approval**)  
**Baseline branch commit (before this report):** [`44eef82dcf1dd45d626e36aef7688a293dadc7a7`](https://github.com/comctx/Periodic-Table-Explorer/commit/44eef82dcf1dd45d626e36aef7688a293dadc7a7)  
**Published `main` commit at inspection:** [`418db5dc3c9d20747c7de615369fe79d435346f5`](https://github.com/comctx/Periodic-Table-Explorer/commit/418db5dc3c9d20747c7de615369fe79d435346f5) — unchanged by this review  
**Record type:** Factual evidence snapshot, not final scientific certification, copyright license opinion, Store approval, or a signed build. Read *this record plus the live code/catalog and test results* before any new review. Keep historical audit sections intact but do not elevate superseded counts to current status.

## 1. Current, explicitly scoped truth

| Workstream | Evidence-backed result | What it does **not** establish |
|---|---|---|
| Scientific element list | **118/118** records exist, with name, symbol, atomic number and reference-aligned properties in `elements-data.js`; sessions 1–21 in `SCIENCE_AUDIT.md`. | Not 118 independently and exhaustively certified science articles. Some isotope, history, appearance, use and conditions details still need final field-by-field QA. |
| Official atomic weights | CIAAW 2024 abridged standard atomic-weight convention used where defined, null where not; cross-checked across both app datasets. | Not exact atomic mass of an isolated isotope. |
| PubChem numeric fixtures | **354/354 source-defined slots** across van der Waals radii, first ionization and electron affinity matched cited PubChem tables in `check-data.mjs`. | Not independent measurements or a guarantee against upstream dataset errors. |
| Targeted RSC/NIST chemistry | RSC physical properties, Pauling values, selected oxidation states, and NIST electron configurations reviewed in successive numbered sessions, with unknown/predicted values distinguished. | Not exhaustive verification of every scientific sentence. |
| Scientific display & temperature | Missing melt/boil data no longer interpreted as 0 K; carbon sublimation and superheavy element predictions handled with qualifications. | Browser/device and live simulator integration not yet fully tested. |
| Quiz | Automated builder/data regressions, including a **506-question generated pool** verified for programmed answer/choice structure in the science audit. Ambiguous automatically generated discoverer/use types removed. | Not an interactive multi-device QA pass or a guarantee every explanatory premise is unambiguous. |
| Photo catalog and stored-file identity | **118/118** photo metadata entries and **118/118** tracked local JPEG paths. Archived source-match reports cover the 118 cached files, including illustrations/placeholders; formerly mismatched originals recovered and some binaries replaced. | Not 118 real element photos, and a visual match is not rights clearance. |
| Audit-branch image display | **92 candidate displayed** images, **12 expressly withheld** and **14 generic placeholders** not displayed. | The 92 candidates do **not** have final individually signed-off commercial redistribution rights. |
| iOS resource packaging | Audit-only packaging dry-run stages **exactly 92 JPEGs**, excluding the 26 withheld/placeholder files; latest successful GitHub Actions run: [38687890992](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38687890992). | Not an inspected, signed IPA built using this exact commit. Files omitted from the app may still exist in the repository. |
| About & Credits | Linked disclaimer, four scientific sources and searchable 118-element credit catalog in `about.html`. | Not proof that every on-screen attribution or derivative license is release-compliant. |
| Release / Store | **Not approved.** No merge; production remains `main`. | No claim that Apple TestFlight, Microsoft Store, web/mobile/offline, and licensing tests have been fully passed. |

**Priority rule:** “Reviewed,” “source traced,” “test passed,” “candidate,” and “fully release-cleared” are different labels. A record is marked **fully done** only with specific independent evidence for that exact stage. **No image in this inventory is classified as finally approved for Store redistribution.**

## 2. Original science review — completed stages, not to repeat

The original work **has already progressed across all 118 elements**. These are existing audit sessions, not work to start over:

| Atomic numbers | Existing science sessions | Recorded scope | Remaining scope |
|---|---|---|---|
| 1–10 | 1, 13, 16, 21 | Discovery corrections, CIAAW weights, PubChem fixtures, RSC state/phase/uses/oxidation/Pauling review | End-to-end article and simulator verification |
| 11–20 | 2, 13, 16, 21 | Discovery/date corrections, CIAAW/PubChem/RSC, isotope/allotrope distinctions | End-to-end field/quiz/manual QA |
| 21–30 | 3, 13, 16, 21 | Discovery histories, physical properties, selected oxidation/uses, PubChem | Final cross-field/interactive testing |
| 31–40 | 4, 14–17 | Scientific property and source review; RSC chemistry / PubChem fixtures | Final cross-field/interactive testing |
| **41–50** | **5, 14–17** | **Already reviewed**: scientific facts, RSC chemistry and PubChem numeric checks | Final field-by-field / practical app verification, not repeating the original review |
| **51–60** | **6, 14–17** | **Already reviewed**: scientific facts, RSC chemistry and PubChem numeric checks | Final field-by-field / practical app verification, not repeating the original review |
| 61–70 | 7, 15–16, 18 | Discovery, property, configuration, RSC oxidation / Pauling, selected uses | Final field-by-field / practical app verification |
| 71–80 | 8, 15–16, 19 | Source-specific chemistry and physical/historical fields | Final field-by-field / practical app verification |
| 81–90 | 9, 15–16, 19 | Source-specific chemistry and physical/historical fields | Final field-by-field / practical app verification |
| 91–100 | 10, 15–16, 20 | Radioisotope, discovery and RSC heavy-element chemistry cautions | Final field-by-field / practical app verification |
| 101–110 | 11, 15–16, 20 | Predicted vs observed properties; synthesis/history and source-specific values | Final field-by-field / practical app verification |
| 111–118 | 12, 15–16, 20 | Source-specific superheavy nuclear/synthesis review, unmeasured thermal fields not invented | Final field-by-field / practical app verification |

Sources: [`SCIENCE_AUDIT.md`](SCIENCE_AUDIT.md), [`check-data.mjs`](check-data.mjs), `elements-data.js`, `element.html`, `index.html`.

## 3. Photo work already completed — never start from zero

- [x] Metadata and original-source records for all 118 element numbers reviewed.
- [x] Local photo identity comparisons conducted in **1–30**, **31–60**, **61–90** and **91–118** batches. The four archived visual-match reports are evidence of **prior comparisons**, not current clearance certificates.
- [x] The old 14 photo-source mismatch cases were investigated; 12 exact publisher originals identified and two original JPEGs (silicon #14, silver #47) replaced. See [`PHOTO_RECOVERY_14.md`](PHOTO_RECOVERY_14.md).
- [x] Copper #29, plutonium #94, curium #96 and californium #98 were physically replaced with more defensible identified subjects and credits. See [`GROUP1_RIGHTS_REPLACEMENTS.md`](GROUP1_RIGHTS_REPLACEMENTS.md).
- [x] Carbon #6 physically replaced with a licensed photographed graphite mineral specimen; [successful replacement run 38687240867](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38687240867).
- [x] Uranium #92 and berkelium #97 gained improved source-rights evidence and carefully labeled sample/solution context. Neptunium #93 and einsteinium #99 remain explicitly withheld; see [`FOUR_RIGHTS_CASES_92_99.md`](FOUR_RIGHTS_CASES_92_99.md).
- [x] Image-credit follow-ups for **1–20** and **21–40** completed and documented; see [`IMAGE_RIGHTS_1_20_FOLLOWUP.md`](IMAGE_RIGHTS_1_20_FOLLOWUP.md) and [`IMAGE_RIGHTS_21_40_FOLLOWUP.md`](IMAGE_RIGHTS_21_40_FOLLOWUP.md).
- [x] **41–50 source-rights pages reviewed** and original JPEGs compared in the historical 31–60 local-image audit; 41–50 have a dedicated section in [`IMAGE_REVIEW.md`](IMAGE_REVIEW.md), and current exact publisher files were recovered for #44, #45 and #50.
- [x] **51–60 source-rights pages reviewed** and original JPEGs compared in the historical 31–60 local-image audit; 51–60 have their own section in [`IMAGE_REVIEW.md`](IMAGE_REVIEW.md), and the current exact publisher file was recovered for #58. No need to redo these initial reviews.
- [x] 92/26 packaging-selection logic tested and protected against silent inventory changes.
- [ ] Final **individual author, source, adaptation, commercial license and ShareAlike** release sign-off for every one of the 92 staged photo candidates.
- [ ] Specific follow-up on unclear publisher photographers and altered image versions, particularly photos documented in source-licensing reports. Resolve issues individually with evidence; don't reopen entire source batches without a new reason.
- [ ] Find valid substitutes for withheld false-subject pictures when scientifically honest and legally permitted. Do **not** invent a macroscopic photograph of a superheavy element that exists only atom-by-atom.

## 4. Current 118-element picture ledger

**Codes:** **C** = candidate, visible in audit UI and staged iOS resource set; **W** = intentionally withheld from the audit UI and staged iOS package; **P** = identical generic “No Image Found” placeholder, *not* a sample photograph and excluded from iOS package. **All three statuses still require human approval for any final media distribution policy.** License column is the catalog's *recorded source claim*, **not a legal clearance certificate**. The individual photo's details remain in `element-photo-data.js`; raw files remain tracked under `images/elements/`.

### Elements 1–30

| Z | Element | Image status | Source of catalogued image | Source license claim | Status detail / caution |
|---:|---|:---:|---|---|---|
| 1 | H — Hydrogen | C | [Source](https://commons.wikimedia.org/wiki/File:Hydrogenglow.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 2 | He — Helium | C | [Source](https://commons.wikimedia.org/wiki/File:Helium-glow.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 3 | Li — Lithium | C | [Source](https://images-of-elements.com/lithium.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |
| 4 | Be — Beryllium | C | [Source](https://images-of-elements.com/beryllium.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |
| 5 | B — Boron | C | [Source](https://images-of-elements.com/boron.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |
| 6 | C — Carbon | C | [Source](https://commons.wikimedia.org/wiki/File:Native_graphite_Chardonnet_MNHN_Min%C3%A9ralogie.jpg) | CC BY 4.0 | Graphite museum photo replaced; final reuse check |
| 7 | N — Nitrogen | C | [Source](https://commons.wikimedia.org/wiki/File:Nitrogen-glow.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 8 | O — Oxygen | C | [Source](https://commons.wikimedia.org/wiki/File:Liquid_oxygen_in_a_beaker_(cropped_and_retouched).jpg) | Public domain claimed | Per-image rights and final package review |
| 9 | F — Fluorine | C | [Source](https://commons.wikimedia.org/wiki/File:Fluoro_liquido_a_-196%C2%B0C_1.jpg) | CC CC BY-SA 3.0 | Per-image rights and final package review |
| 10 | Ne — Neon | C | [Source](https://commons.wikimedia.org/wiki/File:Neon-glow.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 11 | Na — Sodium | C | [Source](https://commons.wikimedia.org/wiki/File:Na_(Sodium).jpg) | CC CC BY-SA 3.0 | Per-image rights and final package review |
| 12 | Mg — Magnesium | C | [Source](https://commons.wikimedia.org/wiki/File:Magnesium_crystals.jpg) | CC CC BY-SA 3.0 | Per-image rights and final package review |
| 13 | Al — Aluminium | C | [Source](https://commons.wikimedia.org/wiki/File:Aluminium.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 14 | Si — Silicon | C | [Source](https://commons.wikimedia.org/wiki/File:Silicon.jpg) | CC BY 3.0 | Silicon specimen replaced earlier |
| 15 | P — Phosphorus | C | [Source](https://images-of-elements.com/phosphorus.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |
| 16 | S — Sulfur | C | [Source](https://commons.wikimedia.org/wiki/File:Native_sulfur_(Vodinskoe_Deposit%3B_quarry_near_Samara%2C_Russia)_9.jpg) | CC BY 2.0 | Per-image rights and final package review |
| 17 | Cl — Chlorine | C | [Source](https://commons.wikimedia.org/wiki/File:Chlorine-sample-flip.jpg) | Public domain claimed | Per-image rights and final package review |
| 18 | Ar — Argon | C | [Source](https://commons.wikimedia.org/wiki/File:Argon-glow.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 19 | K — Potassium | C | [Source](https://commons.wikimedia.org/wiki/File:Potassium.JPG) | CC BY 3.0 | Per-image rights and final package review |
| 20 | Ca — Calcium | C | [Source](https://commons.wikimedia.org/wiki/File:Calcium.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 21 | Sc — Scandium | C | [Source](https://commons.wikimedia.org/wiki/File:Scandium,_Sc.jpg) | CC CC BY-SA 3.0 | Per-image rights and final package review |
| 22 | Ti — Titanium | C | [Source](https://images-of-elements.com/titanium.php) | CC BY 3.0 | Titanium sponge rather than crystal |
| 23 | V — Vanadium | C | [Source](https://commons.wikimedia.org/wiki/File:Vanadium-pieces.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 24 | Cr — Chromium | C | [Source](https://commons.wikimedia.org/wiki/File:Chromium.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 25 | Mn — Manganese | C | [Source](https://commons.wikimedia.org/wiki/File:Manganese_element.jpg) | CC CC BY-SA 3.0 | Per-image rights and final package review |
| 26 | Fe — Iron | C | [Source](https://images-of-elements.com/iron.php) | CC BY 3.0 | Iron-rich meteorite (~92% Fe), not pure iron |
| 27 | Co — Cobalt | C | [Source](https://images-of-elements.com/cobalt.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |
| 28 | Ni — Nickel | C | [Source](https://commons.wikimedia.org/wiki/File:Nickel_chunk.jpg) | CC CC BY-SA 3.0 | Per-image rights and final package review |
| 29 | Cu — Copper | C | [Source](https://commons.wikimedia.org/wiki/File:Mus%C3%A9um_Toulouse_-_cuivre_natif.JPG) | CC CC BY-SA 3.0 | Museum native-copper specimen replaced earlier |
| 30 | Zn — Zinc | C | [Source](https://images-of-elements.com/zinc.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |

### Elements 31–60

| Z | Element | Image status | Source of catalogued image | Source license claim | Status detail / caution |
|---:|---|:---:|---|---|---|
| 31 | Ga — Gallium | C | [Source](https://images-of-elements.com/gallium.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |
| 32 | Ge — Germanium | C | [Source](https://commons.wikimedia.org/wiki/File:Polycrystalline-germanium.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 33 | As — Arsenic | C | [Source](https://commons.wikimedia.org/wiki/File:Arsenic_(33_As).jpg) | CC BY 3.0 | Individual photographer unnamed on source |
| 34 | Se — Selenium | C | [Source](https://commons.wikimedia.org/wiki/File:Selenium.jpg) | CC BY 3.0 | Individual photographer unnamed on source |
| 35 | Br — Bromine | C | [Source](https://commons.wikimedia.org/wiki/File:Bromine-ampoule.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 36 | Kr — Krypton | C | [Source](https://commons.wikimedia.org/wiki/File:Krypton-glow.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 37 | Rb — Rubidium | C | [Source](https://commons.wikimedia.org/wiki/File:Rb5.JPG) | CC BY 3.0 | Per-image rights and final package review |
| 38 | Sr — Strontium | C | [Source](https://commons.wikimedia.org/wiki/File:Strontium-1.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 39 | Y — Yttrium | C | [Source](https://commons.wikimedia.org/wiki/File:Piece_of_Yttrium.jpg) | CC CC BY-SA 4.0 | Per-image rights and final package review |
| 40 | Zr — Zirconium | C | [Source](https://commons.wikimedia.org/wiki/File:Zirconium-pieces.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 41 | Nb — Niobium | C | [Source](https://commons.wikimedia.org/wiki/File:Niobium_strips.JPG) | CC CC BY-SA 3.0 | Per-image rights and final package review |
| 42 | Mo — Molybdenum | C | [Source](https://commons.wikimedia.org/wiki/File:Molybdenum.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 43 | Tc — Technetium | C | [Source](https://commons.wikimedia.org/wiki/File:Technetium-sample-cropped.jpg) | CC CC BY-SA 4.0 | Per-image rights and final package review |
| 44 | Ru — Ruthenium | C | [Source](https://images-of-elements.com/ruthenium.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |
| 45 | Rh — Rhodium | C | [Source](https://images-of-elements.com/rhodium.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |
| 46 | Pd — Palladium | C | [Source](https://commons.wikimedia.org/wiki/File:Palladium_(46_Pd).jpg) | CC BY 3.0 | Per-image rights and final package review |
| 47 | Ag — Silver | C | [Source](https://commons.wikimedia.org/wiki/File:Silver-nugget.jpg) | CC BY 3.0 | Silver nugget replaced earlier |
| 48 | Cd — Cadmium | C | [Source](https://images-of-elements.com/cadmium.php) | CC BY 3.0 | Per-image rights and final package review |
| 49 | In — Indium | C | [Source](https://images-of-elements.com/indium.php) | CC BY 3.0 | Per-image rights and final package review |
| 50 | Sn — Tin | C | [Source](https://images-of-elements.com/tin.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |
| 51 | Sb — Antimony | C | [Source](https://commons.wikimedia.org/wiki/File:Antimony-4.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 52 | Te — Tellurium | C | [Source](https://commons.wikimedia.org/wiki/File:Tellurium2.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 53 | I — Iodine | C | [Source](https://commons.wikimedia.org/wiki/File:Iodine-sample.jpg) | Public domain claimed | Per-image rights and final package review |
| 54 | Xe — Xenon | C | [Source](https://commons.wikimedia.org/wiki/File:Xenon-glow.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 55 | Cs — Cesium | C | [Source](https://commons.wikimedia.org/wiki/File:Cesium.jpg) | CC CC BY-SA 3.0 | Per-image rights and final package review |
| 56 | Ba — Barium | C | [Source](https://commons.wikimedia.org/wiki/File:Barium_(56_Ba).jpg) | CC BY 3.0 | Per-image rights and final package review |
| 57 | La — Lanthanum | C | [Source](https://commons.wikimedia.org/wiki/File:Lanthanum.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 58 | Ce — Cerium | C | [Source](https://images-of-elements.com/cerium.php) | CC BY 3.0 | Recovered exact publisher image; image-specific author review |
| 59 | Pr — Praseodymium | C | [Source](https://commons.wikimedia.org/wiki/File:Praseodymium.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 60 | Nd — Neodymium | C | [Source](https://commons.wikimedia.org/wiki/File:Neodymium_(60_Nd).jpg) | CC BY 3.0 | Per-image rights and final package review |

### Elements 61–90

| Z | Element | Image status | Source of catalogued image | Source license claim | Status detail / caution |
|---:|---|:---:|---|---|---|
| 61 | Pm — Promethium | W | [Source](https://images-of-elements.com/promethium.php) | CC BY 3.0 | Illustration, not real sample |
| 62 | Sm — Samarium | C | [Source](https://images-of-elements.com/samarium.php) | CC BY 3.0 | Per-image rights and final package review |
| 63 | Eu — Europium | C | [Source](https://images-of-elements.com/europium.php) | CC BY 3.0 | Per-image rights and final package review |
| 64 | Gd — Gadolinium | C | [Source](https://images-of-elements.com/gadolinium.php) | CC BY 3.0 | Per-image rights and final package review |
| 65 | Tb — Terbium | C | [Source](https://images-of-elements.com/terbium.php) | CC BY 3.0 | Per-image rights and final package review |
| 66 | Dy — Dysprosium | C | [Source](https://images-of-elements.com/dysprosium.php) | CC BY 3.0 | Per-image rights and final package review |
| 67 | Ho — Holmium | C | [Source](https://images-of-elements.com/holmium.php) | CC BY 3.0 | Per-image rights and final package review |
| 68 | Er — Erbium | C | [Source](https://commons.wikimedia.org/wiki/File:Erbium-2.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 69 | Tm — Thulium | C | [Source](https://commons.wikimedia.org/wiki/File:Thulium-2.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 70 | Yb — Ytterbium | C | [Source](https://images-of-elements.com/ytterbium.php) | CC BY 3.0 | Per-image rights and final package review |
| 71 | Lu — Lutetium | C | [Source](https://commons.wikimedia.org/wiki/File:Lutetium.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 72 | Hf — Hafnium | C | [Source](https://images-of-elements.com/hafnium.php) | CC BY 3.0 | Per-image rights and final package review |
| 73 | Ta — Tantalum | C | [Source](https://images-of-elements.com/tantalum.php) | CC BY 3.0 | Per-image rights and final package review |
| 74 | W — Tungsten | C | [Source](https://commons.wikimedia.org/wiki/File:Tungsten_rod_with_oxidised_surface.jpg) | CC BY 1.0 | Per-image rights and final package review |
| 75 | Re — Rhenium | C | [Source](https://images-of-elements.com/rhenium.php) | CC BY 3.0 | Per-image rights and final package review |
| 76 | Os — Osmium | C | [Source](https://commons.wikimedia.org/wiki/File:Osmium-bead.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 77 | Ir — Iridium | C | [Source](https://images-of-elements.com/iridium.php) | CC BY 3.0 | Per-image rights and final package review |
| 78 | Pt — Platinum | C | [Source](https://commons.wikimedia.org/wiki/File:Platinum_crystals.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 79 | Au — Gold | C | [Source](https://images-of-elements.com/gold.php) | CC BY 3.0 | Per-image rights and final package review |
| 80 | Hg — Mercury | C | [Source](https://images-of-elements.com/mercury.php) | CC BY 3.0 | Per-image rights and final package review |
| 81 | Tl — Thallium | C | [Source](https://images-of-elements.com/thallium.php) | CC BY 3.0 | Per-image rights and final package review |
| 82 | Pb — Lead | C | [Source](https://images-of-elements.com/lead.php) | CC BY 3.0 | Per-image rights and final package review |
| 83 | Bi — Bismuth | C | [Source](https://commons.wikimedia.org/wiki/File:Bismuth-2.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 84 | Po — Polonium | W | [Source](https://images-of-elements.com/polonium.php) | CC BY 3.0 | Illustration, not real sample |
| 85 | At — Astatine | W | [Source](https://images-of-elements.com/astatine.php) | CC BY 3.0 | Illustration, not real sample |
| 86 | Rn — Radon | W | [Source](https://images-of-elements.com/radon.php) | CC BY 3.0 | Illustration, not real sample |
| 87 | Fr — Francium | W | [Source](https://images-of-elements.com/francium.php) | CC BY 3.0 | Illustration, not real sample |
| 88 | Ra — Radium | C | [Source](https://commons.wikimedia.org/wiki/File:Radium226.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 89 | Ac — Actinium | C | [Source](https://commons.wikimedia.org/wiki/File:Actinium_sample_(31481701837).png) | CC BY 2.0 | Per-image rights and final package review |
| 90 | Th — Thorium | C | [Source](https://commons.wikimedia.org/wiki/File:Thorium-1.jpg) | CC CC BY-SA 3.0 | Per-image rights and final package review |

### Elements 91–118

| Z | Element | Image status | Source of catalogued image | Source license claim | Status detail / caution |
|---:|---|:---:|---|---|---|
| 91 | Pa — Protactinium | C | [Source](https://commons.wikimedia.org/wiki/File:Protactinium-233.jpg) | Public domain claimed | Per-image rights and final package review |
| 92 | U — Uranium | C | [Source](https://commons.wikimedia.org/wiki/File:Ames_Process_uranium_biscuit.jpg) | Public domain claimed | Ames uranium historical photo; VRT/PD source |
| 93 | Np — Neptunium | W | [Source](https://commons.wikimedia.org/wiki/File:Neptunium2.jpg) | License to review | LANL original-use conditions unresolved |
| 94 | Pu — Plutonium | C | [Source](https://commons.wikimedia.org/wiki/File:Plutonium-239,_1941,_first_sample_in_which_nuclear_fission_was_detected,_University_of_California,_Berkeley,_gift_of_Glenn_T._Seabort_and_Emilio_Segre_-_National_Museum_of_American_History_-_DSC06250.JPG) | CC0 | Tiny historic plutonium exhibit, not LANL ring |
| 95 | Am — Americium | C | [Source](https://commons.wikimedia.org/wiki/File:Americium_microscope.jpg) | CC BY 3.0 | Per-image rights and final package review |
| 96 | Cm — Curium | C | [Source](https://commons.wikimedia.org/wiki/File:Curium_oxide_targets.jpg) | CC BY 4.0 | Curium-oxide target wheel, not elemental metal |
| 97 | Bk — Berkelium | C | [Source](https://commons.wikimedia.org/wiki/File:Berkelium.jpg) | CC BY 2.0 | Berkelium solution, not elemental metal |
| 98 | Cf — Californium | C | [Source](https://commons.wikimedia.org/wiki/File:HD.5A.048_(10348254595)_(cropped).jpg) | Public domain claimed | Californium neutron-source capsules, not bare metal |
| 99 | Es — Einsteinium | W | [Source](https://commons.wikimedia.org/wiki/File:Einsteinium.jpg) | License to review | Colorized/cropped derivative provenance unresolved |
| 100 | Fm — Fermium | W | [Source](https://commons.wikimedia.org/wiki/File:Ivy_Mike_-_mushroom_cloud.jpg) | License to review | Historical nuclear event, not fermium |
| 101 | Md — Mendelevium | W | [Source](https://images-of-elements.com/mendelevium.php) | CC BY 3.0 | Illustration, not real sample |
| 102 | No — Nobelium | W | [Source](https://images-of-elements.com/nobelium.php) | CC BY 3.0 | Illustration, not real sample |
| 103 | Lr — Lawrencium | W | [Source](https://images-of-elements.com/lawrencium.php) | CC BY 3.0 | Illustration, not real sample |
| 104 | Rf — Rutherfordium | W | [Source](https://images-of-elements.com/rutherfordium.php) | License to review | Unrelated CERN photograph; rights unverified |
| 105 | Db — Dubnium | P | [Source](https://images-of-elements.com/dubnium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 106 | Sg — Seaborgium | P | [Source](https://images-of-elements.com/seaborgium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 107 | Bh — Bohrium | P | [Source](https://images-of-elements.com/bohrium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 108 | Hs — Hassium | P | [Source](https://images-of-elements.com/hassium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 109 | Mt — Meitnerium | P | [Source](https://images-of-elements.com/meitnerium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 110 | Ds — Darmstadtium | P | [Source](https://images-of-elements.com/darmstadtium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 111 | Rg — Roentgenium | P | [Source](https://images-of-elements.com/roentgenium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 112 | Cn — Copernicium | P | [Source](https://images-of-elements.com/copernicium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 113 | Nh — Nihonium | P | [Source](https://images-of-elements.com/nihonium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 114 | Fl — Flerovium | P | [Source](https://images-of-elements.com/flerovium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 115 | Mc — Moscovium | P | [Source](https://images-of-elements.com/moscovium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 116 | Lv — Livermorium | P | [Source](https://images-of-elements.com/livermorium.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 117 | Ts — Tennessine | P | [Source](https://images-of-elements.com/tenessine.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |
| 118 | Og — Oganesson | P | [Source](https://images-of-elements.com/oganesson.php) | CC BY 3.0 | Generic question-mark graphic; no genuine sample photo |

**Computed from current catalog and element page visibility logic:** 92 C; 12 W; 14 P; total 118. Excluded atomic numbers: `61, 84, 85, 86, 87, 93, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118`.

## 4A. Non-element media audit — 2026-10-15

**Important inventory clarification:** **92** is the count of candidate `images/elements/*.jpg` specimen/research photos, **NOT** the entire app's picture count. The current Web bundle also includes a separate photographed **Bay City City Hall Easter egg** at `images/bay-city-city-hall.jpg`, plus app icons/branding assets.

- [x] Verified the original [Wikimedia Commons City Hall file](https://commons.wikimedia.org/wiki/File:Bay_City_MI_City_Hall.JPG): **Andrew Jameson**, own photograph, **20 February 2012**, [**CC BY-SA 3.0**](https://creativecommons.org/licenses/by-sa/3.0/). This is a **copyrighted, permissively licensed photo**, not public domain.
- [x] Checked both `index.html` and `element.html`: the secret Bay City overlays **already credited** Andrew Jameson, Commons source, the license, and app resizing. No need to rewrite existing correct popup credits.
- [x] Added a dedicated **Other Image Credits** section to `about.html`, with author, photo-page link, license link, and an explicit resized/reencoded and ShareAlike note.
- [x] Updated `audit/check-data.mjs` and the audit staging CI workflow to **fail** if this separately packaged photo or any of the author/source/license links disappears.
- [ ] **Still pending:** independently match the actual local JPEG binary to Andrew Jameson's original source and complete the adapted-image license obligations; inspect author/usage rights for logo/icon assets. The existence of a Commons license is **not** an approved redistribution package.
- [ ] Evaluate other app delivery paths (Windows/Microsoft), and inspect signed iOS IPA; this record alone cannot verify final packages.

**No change** to the element photo inventory: 92 candidate / 12 expressly withheld / 14 placeholders. **Do not describe all included image rights as cleared.**

## 5. Remaining release gates — exact next work only

- [ ] **Licensing / authorship**: For the 92 staged element images **and additional Bay City photograph**, confirm *actual file-specific* ownership/rights, the original adapted-version lineage and commercial reuse requirements. Complete and review photographer uncertainty especially for publisher gallery originals (including examples in #3–5, #15, #22, #26–27, #30–31, #33–34 and several later batches); fix particular cases only.
- [ ] **ShareAlike obligations**: Ensure the actual redistributed adapted JPEGs, their license/credit text, source links and attribution change notices satisfy the specific CC BY-SA version(s), including offline access to appropriate information where needed.
- [ ] **Source code review**: Confirm image metadata and UI consistently describe actual specimens vs chemical compounds, historical imagery, equipment, products or simulations; ensure “No Image Found” is not misrepresented.
- [ ] **Independent science QA**: Verify remaining per-element scientific prose/discovery/usage/physical-context nuances against named reference materials and run integrated runtime checks; test critical paths for all 118 rather than redoing already verified data comparisons.
- [ ] **Quiz / UI QA**: Hands-on test quiz flow, correct-answer selection, navigation, temperature-mode odd cases, narrow-phone/desktop display, keyboard behavior, all 118 detail pages and the complete About & Credits interface.
- [ ] **Offline / links**: Test local photo loading, local offline navigation/cache behavior and source/license link handling for PWA and native WebView.
- [ ] **Actual iOS IPA**: Build a *signed* IPA from approved branch/revision, inspect the real ZIP contents including exact 92 JPEGs and 26 exclusions, ensure no remote/network dependency breaks local browsing, and carry out TestFlight device testing. Existing Codemagic config can submit to TestFlight: **do not trigger a build/publishing job without specific authorization**.
- [ ] **Windows/Microsoft package**: Find the actual desktop packaging route, implement the same exclusion of invalid/unapproved image files, check bundled attribution and QA. Current iOS script alone does not protect a Windows packaging workflow.
- [ ] **Owner approval**: Do not merge to `main`, release a new binary or claim finished audit until release rights and QA gates are demonstrably satisfied and owner approves the change.

## 6. Source-of-truth and evidence policy for all subsequent work

1. **First read this file, then the live GitHub branch SHA**; inspect live code/data before editing. If a status here differs from current metadata, report the discrepancy explicitly and fix the record before changing the app.
2. Read the newest numbered scientific phase and image-rights follow-up. Older chronological inventory paragraphs inside historical audit files can be superseded. **Never infer “unreviewed” from an old heading or obsolete run.**
3. Before a change, identify the **specific currently unresolved defect**, affected atomic numbers, evidence needed and expected minimal diff. For a previously checked batch, work only on an open issue.
4. Make all edits on `scientific-audit-2026-10` and protect `main`. Don't trigger publishing/merging/Store submission without owner authorization.
5. After edits, run the GitHub test, inspect its **actual conclusion**, record commit SHA, link to passing/failing runs, and update this master file with the new evidence. **Do not state pass if queued or failed.**
6. Mark an item “finally release-cleared” **only if actual photo identity, original author/right, derivative/ShareAlike conditions, necessary credits and package inclusion/exclusion have all been verified with evidence**; never equate “CC license mentioned” with total app sign-off.
7. Keep separate statuses: (a) structural/reference science, (b) image identity, (c) license and attribution, (d) bundled assets, (e) signed package/UI QA. Always state which one is done.

## 7. Verification references and preserved audit history

- **Passing science + iOS dry-run regression on code commit** [`33fa06a0fd69fd9a2292e4e1b15b09ce7fb0f3b8`](https://github.com/comctx/Periodic-Table-Explorer/commit/33fa06a0fd69fd9a2292e4e1b15b09ce7fb0f3b8): [GitHub Actions run 38687890992](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38687890992). Later commits up to the baseline are documentation-only; they did **not** rerun a signed app build.
- **Earlier regression run** [38687733872](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38687733872) failed due to a mismatched assertion checking a photographer-uncertainty phrase; later test correction [`33fa06a`](https://github.com/comctx/Periodic-Table-Explorer/commit/33fa06a0fd69fd9a2292e4e1b15b09ce7fb0f3b8) was tested successfully. Historical failure is not being erased.
- [`SCIENCE_AUDIT.md`](SCIENCE_AUDIT.md) — scientific sessions 1–24; historical “to do” bullets may predate later improvements.
- [`IMAGE_REVIEW.md`](IMAGE_REVIEW.md) — source/license batches #1–118 and newer image-rights phases.
- [`LOCAL_IMAGE_MATCH_1_30.md`](LOCAL_IMAGE_MATCH_1_30.md), [`LOCAL_IMAGE_MATCH_31_60.md`](LOCAL_IMAGE_MATCH_31_60.md), [`LOCAL_IMAGE_MATCH_61_90.md`](LOCAL_IMAGE_MATCH_61_90.md), [`LOCAL_IMAGE_MATCH_91_118.md`](LOCAL_IMAGE_MATCH_91_118.md) — historical actual-image comparisons; old mismatch counts superseded by subsequent recovery.
- [`PHOTO_RECOVERY_14.md`](PHOTO_RECOVERY_14.md) — resolved old mismatched photo sources and the two physically restored element sample photos.
- [`GROUP1_RIGHTS_REPLACEMENTS.md`](GROUP1_RIGHTS_REPLACEMENTS.md), [`FOUR_RIGHTS_CASES_92_99.md`](FOUR_RIGHTS_CASES_92_99.md), [`IMAGE_RIGHTS_1_20_FOLLOWUP.md`](IMAGE_RIGHTS_1_20_FOLLOWUP.md), [`IMAGE_RIGHTS_21_40_FOLLOWUP.md`](IMAGE_RIGHTS_21_40_FOLLOWUP.md) — later media source-rights corrections.
- [`RELEASE_IMAGE_PACKAGING.md`](RELEASE_IMAGE_PACKAGING.md) and [`package_web_assets.py`](package_web_assets.py) — iOS app-image filtering.
- Current source-of-truth app assets: [`element-photo-data.js`](../element-photo-data.js), [`elements-data.js`](../elements-data.js), [`element.html`](../element.html), [`about.html`](../about.html), [`codemagic.yaml`](../codemagic.yaml).

**Master-record creation changes no chemistry, photos, quiz code or distribution settings.** It documents the audited baseline so that future changes are intentional and verifiable.
