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
- [x] **Source photo identity checked against the actual archived local JPEG** in [successful GitHub Actions run 38773309259](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38773309259): visual dHash difference **0**, grayscale brightness difference **0.1**, 1468 × 1600 local against 2400 × 2616 original. Classification: **likely same photograph, not copyright-cleared**.
- [ ] **Still pending:** independently confirm final adapted-image attribution/ShareAlike terms in the actual signed package, and inspect author/usage rights for logo/icon assets. A strong binary visual match is **not** a complete legal redistribution certification.
- [ ] Evaluate other app delivery paths (Windows/Microsoft), and inspect signed iOS IPA; this record alone cannot verify final packages.

**No change** to the element photo inventory: 92 candidate / 12 expressly withheld / 14 placeholders. **Do not describe all included image rights as cleared.**

## 4B. Real-package inspection safeguards — 2026-10-15

**Evidence:** [`DISTRIBUTION_INSPECTION.md`](DISTRIBUTION_INSPECTION.md) and [successful GitHub Actions run **38774165966**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38774165966).

- [x] Checked this repository's actual Git tree. An iOS Xcode project and Codemagic pipeline exist, but **no Windows/MSIX/Appx packaging manifest, Windows-specific build script or distributable is checked into this repository**. This does **not** prove a Microsoft Store build does not exist elsewhere.
- [x] Added `audit/verify_distribution_package.py`, a **read-only, fail-closed byte-level checker** for an extracted `Web` folder or flat ZIP-format `.zip`, `.ipa`, `.msix`, or `.appx` archive. It rejects the 26 known excluded filenames anywhere in the package, unexpected/missing element images, changed credit/science/manifest content, mismatched bytes of the 92 cached photos or Bay City/branding/icon assets, and unsupported embedded bundles.
- [x] GitHub Actions executed real tests of the checker: a clean staged folder and **synthetic** ZIP/IPA/MSIX-shaped archives passed; deliberately invalid zip with withheld #61, altered About page, and contaminated staged folder were **all rejected**. The previous science regression and 92/26 staging tests also passed.
- [ ] **Not done:** inspect a **real signed iOS IPA**, **real Microsoft/Windows Store package**, or original Windows packaging setup; no such artifact or build workflow was provided or identified in this repository. Test archive filenames `.ipa` and `.msix` were **not** genuine signed distributables. Nested `.msixbundle`/`.appxbundle` formats are intentionally unsupported until their real structure is inspected.
- [ ] **Not done:** legal permission checks for the 92 image candidates, Bay City photo and branding/icon assets; signed-package presence alone would not establish copyright clearance.

## 4C. Targeted photo-creator correction: #48 Cadmium / #49 Indium — 2026-10-15

- [x] Confirmed there were **already** local-to-publisher original matches and source-page license checks for both #48 and #49. **Did not repeat or reset #41–60** scientific/identity review.
- [x] Verified independent Commons original for **indium #49**, [`Liquid-indium.jpg`](https://commons.wikimedia.org/wiki/File:Liquid-indium.jpg), photographer **Jurii**, source date **10 August 2009**, CC BY 3.0. Read-only original-to-local image test [**38775178783 (success)**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38775178783) found **dHash 0 / grayscale 0.1**, both local and Commons 856 × 856. Updated exact Commons file link and explicit author credit in live **audit-branch** photo catalog.
- [x] **Did not misattribute cadmium #48:** similarly named separate [Commons `Pure cadmium.jpg`](https://commons.wikimedia.org/wiki/File:Pure_cadmium.jpg) is **not** the saved publisher `cadmium-4.jpg` (dHash **24**, grayscale delta **64.4**). Its author must not be assigned to the app JPEG. Clarified the exact publisher image, original CC BY 3.0 general claim, and unresolved individual photographer and unmeasured sample purity.
- [x] Added regression checks for both original-photo decisions, preserved 92/26 exclusion and zero physical image changes. See [`IMAGE_RIGHTS_48_49_FOLLOWUP.md`](IMAGE_RIGHTS_48_49_FOLLOWUP.md), [`IMAGE_REVIEW.md` Phase 9](IMAGE_REVIEW.md).
- [x] [**GitHub Actions scientific, photo-metadata and packaging regression 38775571334 passed**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38775571334) on code commit `4e271519cd759cbccad19c5b636c9a1653ed3623`. This is CI evidence, **not** a Store release approval.
- [ ] Individual photographer remains not independently established for #48's exact image. Neither image's final legal distribution compliance is declared cleared; signed app packages, credits in actual release, and general licensor obligations still require approval.

## 4D. Real Chromium browser QA — 2026-10-15

**Successful audit-branch run:** [GitHub Actions **38776854552**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38776854552), real Playwright Chromium against a locally served copy of the app, source revision `4f93e1ddf6c5b8c9d492bd8637979b3e2eac42c6`. Complete precise scope and earlier test-only failures are in [`BROWSER_QA.md`](BROWSER_QA.md).

- [x] **All 118** actual element detail pages rendered name, symbol, science/uses sections in Chromium.
- [x] **All 92** included element-photo candidate JPEGs decoded and **all 26** excluded/placeholder records kept hidden with explanatory text.
- [x] Interactive 20-question quiz ran through answer disabling/correct-answer marking, scoring and round-completion controls.
- [x] Main-table 118 tiles, search/clear, 20 °C mercury/bromine liquids and oganesson unknown, temperature presets, About & Credits 118 items/search, and Bay City Easter egg confirmed.
- [x] Simulated 390-pixel iPhone viewport checked six major pages (table, elements 48/49/118, quiz, Credits) without document-level overflow; no unhandled browser JavaScript errors detected.
- [x] Two earlier test runs failed on **incorrect test assertions**, not verified product bugs: collapsed Indium credit reading (run 38776449781) and CSS-uppercase label comparison (run 38776639609). Assertions were corrected; the full third run passed.
- [x] **Since this earlier online run, HTTPS network-disconnected PWA testing has been completed separately**, with all 92 photos preloaded and decoded offline; see **Section 4E**. Still open: real Safari/TestFlight signed IPA, native WKWebView, Android device accessibility, actual Microsoft package, photo/license release sign-off.

**The actual app's science facts, JPEG binaries, and core UI code were unchanged by this browser QA.** Passing automated runtime checks are **not** permission to merge/release.

## 4E. Real HTTPS service worker and disconnected-network QA — 2026-10-15

**Detailed evidence:** [`OFFLINE_QA.md`](OFFLINE_QA.md); successful [**GitHub Actions run 38783188109**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783188109) on commit `c70d61355f1180c2b2f7045f424d8dedb40561bb`. Job conclusion **success**.

- [x] **Confirmed original defect:** old `pte-core-v2` service worker cached core pages but **not the 92 element JPEGs**, so never-visited element photos were not guaranteed offline. The Bay City additional JPEG was also not core preloaded.
- [x] Created exact **92-photo** `offline-photos.json` allowlist, validated by `audit/check_offline_manifest.py` against the same catalogue/exclusions used for isolated iOS staging. **26 withheld/placeholder images remain excluded.**
- [x] Updated `sw.js` to `pte-core-v3`: cache the site's core pages, credits, manifest, icons, Bay City City Hall photo, and all 92 currently displayable candidates in manageable groups. Fail installation rather than partially preloading. Updated `audit/package_web_assets.py` and future-IPA package assertions in `codemagic.yaml`; no signed IPA built.
- [x] Staging/science and exact 92/26 manifest regression tests **passed** in [run **38782704143**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38782704143) (earlier code/staging commit `cce35535f8a40002adc7c54082f7f94a180d5f9d`).
- [x] **True offline test**: GitHub served the **isolated/staged `Web` app** over HTTPS, installed the actual service worker, waited for **108 cached files (92 element photos)** and took control of page, then **disabled the browser's network**. **All 118 element detail pages worked** and all **92 previously unvisited element JPEGs decoded offline**; the **26** did not appear in cache or UI. A **20-question quiz**, main search, temperature presets, 118 Credits entries, Bay City image and five mobile-width routes also worked; no unhandled JS errors.
- [x] [Initial run 38783009704](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783009704) **failed before offline navigation** because the test needed to wait for service-worker page control separately from cache installation. Follow-up amended the test and reran; only [run **38783188109**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783188109) establishes full offline success.
- [ ] **Not a release sign-off:** physical iPhone Safari and native `WKWebView`, first-run TestFlight, genuine signed IPA and Windows distribution package, and **final author/licensing rights** for the 92 staged photos and separate Bay City image remain unverified. An HTTPS Chromium worker does not prove all those delivery modes use the same storage semantics.

## 4F. Precisely scoped publisher-original attribution cases — 2026-10-15

**Evidence:** [`PUBLISHER_30_RIGHTS_CLARIFICATION.md`](PUBLISHER_30_RIGHTS_CLARIFICATION.md) lists the **30 exact original publisher-hosted photo URLs**, their app source-page links and author-status cases. Publisher website's own [general CC BY 3.0 licensing statement](https://images-of-elements.com/) requires attribution to each element page and says **"unless otherwise noted"**.

- [x] Verified **30 displayed candidate photos** currently cite originals hosted at `images-of-elements.com`; **every one** has the matching `https://images-of-elements.com/<element>.php` attribution page in `element-photo-data.js`. **No missing element-page source links** were found in that exact group.
- [x] **29/30 do not have independently documented named individual photographers in this catalog**, whereas **#49 indium has independently verified Jurii / Commons original** from prior specific run 38775178783. This is a **limited authorship-evidence status**, **not proof 29 images lack licenses** or a new source-identity issue.
- [x] No earlier source-identity/photo comparisons were repeated, no JPEG binaries, element chemistry or exclusions changed. The **92 displayed candidate / 26 withheld** inventory is unchanged.
- [x] Corrected a stale About & Credits note that still said the **Bay City original-photo identity comparison** had not been performed. The successful visual match **was** recorded in [run 38773309259](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38773309259). This match does **not** establish byte-identical images or final legal signed-package compliance.
- [x] Prepared **one publisher clarification message** in the new case file asking whether the exact 30 JPEGs fall under the site's CC BY 3.0 offer, whether specific exceptions exist, and whether publisher credit is enough for images without named photographers. **The message was NOT sent. No permission or reply was obtained.**
- [ ] **Still open**: third-party confirmation or independently defensible item-specific evidence, attribution review and the actual image-derivative/signed-package legal obligations. Do not equate a general publisher license notice or this inventory with 30 individual image clearances.

## 5. Remaining release gates — exact next work only

- [ ] **Licensing / authorship**: For the 92 staged element images **and additional Bay City photograph**, confirm *actual file-specific* ownership/rights, the original adapted-version lineage and commercial reuse requirements. Complete and review photographer uncertainty especially for publisher gallery originals (including examples in #3–5, #15, #22, #26–27, #30–31, #33–34 and several later batches); fix particular cases only.
- [ ] **ShareAlike obligations**: Ensure the actual redistributed adapted JPEGs, their license/credit text, source links and attribution change notices satisfy the specific CC BY-SA version(s), including offline access to appropriate information where needed.
- [ ] **Source code review**: Confirm image metadata and UI consistently describe actual specimens vs chemical compounds, historical imagery, equipment, products or simulations; ensure “No Image Found” is not misrepresented.
- [ ] **Independent science QA**: Verify remaining per-element scientific prose/discovery/usage/physical-context nuances against named reference materials and run integrated runtime checks; test critical paths for all 118 rather than redoing already verified data comparisons.
- [x] **Automated Chromium quiz/desktop/mobile smoke**: 118 pages, all 92 JPEGs, 26 withheld, quiz/score, search, temperature modes, Credits and simulated iPhone viewport passed on [run 38776854552](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38776854552). **[ ] Full hands-on Safari/real iPhone, keyboard, screen-reader and additional screen sizes** are separate outstanding gates.
- [x] **HTTPS PWA browser offline**: The service worker now preloads exactly **92 allowed-to-stage photos** and the separate Bay City photo; [true network-off Chromium run 38783188109](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783188109) passed for all 118 pages/photos and quiz. **[ ] Native `WKWebView`/iPhone Safari offline behavior, external source-link handling and low-storage persistence** remain separately unverified.
- [ ] **Actual iOS IPA**: Build a *signed* IPA from approved branch/revision, inspect the real ZIP contents including exact 92 JPEGs and 26 exclusions, ensure no remote/network dependency breaks local browsing, and carry out TestFlight device testing. Existing Codemagic config can submit to TestFlight: **do not trigger a build/publishing job without specific authorization**.
- [ ] **Windows/Microsoft package**: Locate the real desktop packaging route and its **actual** package, make it apply the 92/26 filtering, and run the new archive inspector **against that real result**. A general inspector has been written and passed controlled CI fixtures but cannot change an absent/unidentified Windows build pipeline or certify a Microsoft Store package.
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
- [`DISTRIBUTION_INSPECTION.md`](DISTRIBUTION_INSPECTION.md) and [`verify_distribution_package.py`](verify_distribution_package.py) — actual-package inspector specification and passing positive/negative synthetic CI fixtures; **not** a real signed-package approval.
- [`BROWSER_QA.md`](BROWSER_QA.md) and [`browser-smoke.mjs`](browser-smoke.mjs) — verified real Chromium 118-page/media/quiz/mobile browser tests, with historical test-assertion failures distinguished from production defects.
- [`OFFLINE_QA.md`](OFFLINE_QA.md), [`offline-browser-smoke.mjs`](offline-browser-smoke.mjs), [`offline-photos.json`](../offline-photos.json) — full **true HTTPS/offline** element/photo/quiz results, source cache allowlist and release caveats.
- [`IMAGE_RIGHTS_48_49_FOLLOWUP.md`](IMAGE_RIGHTS_48_49_FOLLOWUP.md) — image-specific authorship comparison (indium corroborated / different cadmium Commons original rejected) with [live passing source-test run 38775178783](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38775178783).
- [`PUBLISHER_30_RIGHTS_CLARIFICATION.md`](PUBLISHER_30_RIGHTS_CLARIFICATION.md) — exact publisher original-image inventory and **unsent** clarification request, avoiding repeated image-matching reviews.
- Current source-of-truth app assets: [`element-photo-data.js`](../element-photo-data.js), [`elements-data.js`](../elements-data.js), [`element.html`](../element.html), [`about.html`](../about.html), [`codemagic.yaml`](../codemagic.yaml).

**Master-record creation changes no chemistry, photos, quiz code or distribution settings.** It documents the audited baseline so that future changes are intentional and verifiable.
