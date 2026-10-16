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

## 4G. Publisher CC BY 3.0 license legal-code check and future signed-IPA gate — 2026-10-15

**Primary rights sources:** [publisher's actual general image-license statement](https://images-of-elements.com/) and [Creative Commons Attribution 3.0 Unported full legal code](https://creativecommons.org/licenses/by/3.0/legalcode), especially license §§ 1, 3, 4(a)–(b). Technical release evidence: [audit package-guard **38806534768**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38806534768) **success**.

- [x] **Specific correction to previously overstated barrier:** the 29 publisher-hosted original photos without an *independently named individual photographer* are **not necessarily 29 separately unlicensed files**. CC BY 3.0 allows commercial reuse under its conditions; the legal code's “Original Author” definition explicitly includes **publisher when no individual/entity author can be identified**. The site's general offer specifies **CC BY 3.0 unless otherwise noted** and credits to the **element-specific page**, which all 30 recorded publisher-hosted original photos already include. Missing an individual name alone is **not** proof a file needs individually obtained permission or must be withdrawn.
- [x] Updated [`PUBLISHER_30_RIGHTS_CLARIFICATION.md`](PUBLISHER_30_RIGHTS_CLARIFICATION.md) with the legal terms. **Publisher clarification email remains unsent**; a separate email reply is **not inherently required by a valid CC BY license**. We must still identify actual file-level exceptions and rights-holder authority and ensure license/credit/change notices in the released version; **none of these 30 is newly marked final-clear**.
- [x] Strengthened `codemagic.yaml`: the future **real signed IPA** is now passed directly to the existing `audit/verify_distribution_package.py` SHA-256 inspection prior to configured TestFlight publishing, in addition to the existing manifest/Info.plist checks. The staging CI confirms this required command and failure behavior, and [**38806534768 passed**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38806534768).
- [ ] **Not yet performed:** real signed build, any TestFlight submission, native offline WKWebView tests, actual Microsoft Store package inspection, 92-photo individual source rights/ShareAlike signoff and user release authorization. A test of the *future-build guard* is **not an inspected signed output**.

## 4H. Actual native iOS Simulator build and startup — 2026-10-15

**Verified GitHub Actions:** [**38807251973 — success**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38807251973), source `9fe2ca55b79959aade0b7ca4ab2537d9bf821ae5`; detailed [`IOS_SIMULATOR_QA.md`](IOS_SIMULATOR_QA.md).

- [x] Built real native SwiftUI/`WKWebView` iPhone application for **iOS Simulator**, `CODE_SIGNING_ALLOWED=NO`, on macOS/Xcode in the audit branch.
- [x] Checked actual built `PeriodicTableExplorer.app/Web`: SHA-256 content matches audit sources for all **92** images, full image/source/credit data, icons, Bay City photo and core pages, with **26** excluded, and confirmed expected bundle ID.
- [x] Booted iPhone Simulator, installed and launched the compiled app, and collected a real startup screenshot showing title, Search, Quiz and Temperature controls. [Workflow artifact ID 12006143961](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38807251973) (temporary retention). This visual startup pass does **not** establish complete tap-through QA.
- [ ] **Still open:** real signed iOS IPA, physical iPhone/TestFlight, full native UI interaction/VoiceOver and landscape testing. The prior Chromium/HTTPS PWA checks have their own completed records and should not be repeated unnecessarily.
- [ ] **App Review status is separate:** See [\`APP_REVIEW_PREPARATION.md\`](APP_REVIEW_PREPARATION.md) for an evidence-based current feature list and a clearly **UNSENT** clarification draft. Prior user-submitted Apple review discussion concerned **Guideline 4.3 Design/Spam** and extended review for an earlier version. We have **not independently retrieved the exact current Apple review message** or established that 4.3 is resolved. Apple's [§4.3 rules](https://developer.apple.com/app-store/review/guidelines/) concern duplicate/similar apps; native build success cannot by itself remove this approval blocker. Current exact review text and response should be retrieved before any new App Store submission.

## 4I. Targeted ShareAlike credit corrections — #41, #55, #90 — 2026-10-15

**Evidence:** [`RIGHTS_41_55_90_ATTRIBUTION.md`](RIGHTS_41_55_90_ATTRIBUTION.md), specific Commons source and file-history pages, and cached-JPEG identity comparisons **already completed** in `LOCAL_IMAGE_MATCH_31_60.md` and `LOCAL_IMAGE_MATCH_61_90.md`.

- [x] **Niobium #41:** Original Wikimedia [file](https://commons.wikimedia.org/wiki/File:Niobium_strips.JPG) names Mauro Cateb as photographer, own work (2011), under CC BY-SA 3.0. Strengthened explicit file and creator source, resized/reencoded image and ShareAlike credit in app.
- [x] **Cesium #55:** Original [file](https://commons.wikimedia.org/wiki/File:Cesium.jpg) and original upload log identify Dnn87 as the 2007 photographer; Anrie subsequently transferred it to Commons, not photographed it. App source notes now distinguish these credits and link the exact license.
- [x] **Thorium #90:** Original [file](https://commons.wikimedia.org/wiki/File:Thorium-1.jpg) names W. Oelen (2007), and its file history records a **2016 retouch by Commons user 'Konto na chwilę'**. App attribution now records this derivative step, rather than crediting only the original photographer, alongside app resizing/reencoding.
- [x] The three `element-photo-data.js` entries received targeted creator/change-license clarifications in [metadata commit `2e0bcba`](https://github.com/comctx/Periodic-Table-Explorer/commit/2e0bcba19380e26fe667cded858720aabf885040). A dedicated evidence report was added in [record commit `449538b`](https://github.com/comctx/Periodic-Table-Explorer/commit/449538b760f2207a34eccba522a0e4f465bfc1d3). No JPEG binaries, exclusions, chemistry or app UI behavior altered.
- [x] **Automated science/image staging package regression passed:** [Actions run 38824103557](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38824103557), on the exact metadata commit.
- [x] **Additional automated post-edit checks passed:** Chromium browser [38824103579](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38824103579) and genuine HTTPS/offline [38824103561](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38824103561), both on metadata commit `2e0bcba`.
- [ ] **At this update:** native iPhone simulator [38824103622](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38824103622) still in progress. **Do not mark passed until confirmed.**
- [ ] No photos, including these three, newly classified **fully release-cleared**. Existing initial source-author/license evidence is not independent final approval of the exact distributed adapted JPEG, rights chain or signed IPA. **92 candidate / 26 hidden/placeholder inventory unchanged; no merge or Store upload.**

## 4J. Source-specific photo-credit follow-up — #42, #43, #46, #51–53 — 2026-10-15

**Detailed evidence:** [`RIGHTS_42_43_46_51_53.md`](RIGHTS_42_43_46_51_53.md), individual current Wikimedia Commons file/license pages, original-publisher page where relevant, and previously documented local-image match reports. Scope was six specific subjects; this is **not** a renewed 41–60 batch or final redistribution license sign-off.

- [x] **#42 molybdenum**: named Jurii's exact Commons photograph and CC BY 3.0 license; distinguished it from a different molybdenum sample appearing on the publisher's photo gallery.
- [x] **#43 technetium**: retained photographer Marco Cardin, identified Double sharp's 2021 crop as an independent derivative step, the original photo and cropped photo links, the selected CC BY-SA 4.0 license option (as opposed to a separate GFDL option), and this app's subsequent resizing/re-encoding.
- [x] **#46 palladium**: retained publisher-level photographic credit without falsely equating upload user Stas1995 with an individual photographer; confirmed photo subject in publisher's page and Commons CC BY 3.0 statement.
- [x] **#51 antimony / #52 tellurium**: original Commons pages explicitly say individual photographer **unknown**. App already credits the element publisher and gives their recorded CC BY 3.0 source, so neither item was altered or fictitiously marked resolved.
- [x] **#53 iodine**: Commons creator Benjah-bmm27 explicitly gave a worldwide **public domain** dedication, **not CC0**. The app now links the exact source page, retains photographer credit, records a resize/reencode notice, and intentionally leaves `licenseUrl` blank rather than invent a CC license.
- [x] Only #42, #43, #46, #53 metadata and one outdated automated text assertion changed; **zero actual JPEG changes**, no chemistry/quiz or display policy changes. Photo candidate / exclusion inventory remains **92/26**.
- [x] Commit sequence: [photo credits `955d8d4`](https://github.com/comctx/Periodic-Table-Explorer/commit/955d8d4128d19c3b5b9430dd9c9a772514cf6427); [iodine public-domain normalization `9ecdd9c`](https://github.com/comctx/Periodic-Table-Explorer/commit/9ecdd9c524521c6ab360e70f384ff034707c0d43); [scope-correct GFDL text assertion `3668ea0`](https://github.com/comctx/Periodic-Table-Explorer/commit/3668ea0c79c1e7c7105610777ff5e38427f7b370); [technetium exact CC BY-SA 4.0 label `c841617`](https://github.com/comctx/Periodic-Table-Explorer/commit/c841617bdcddb82d6c1207da618c88dad70d1aec).
- [x] **Intermediate CI failures explicitly preserved rather than concealed:** [science/package run 38825023419](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38825023419) rejected a source-credit assertion requiring `GFDL` inside the technetium *attribution field*; actual selected Commons CC BY-SA 4.0 was not removed. [Offline run 38825023395](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38825023395) flagged the iodine record because the fail-closed parser matched only the literal `public domain` but credit said `public-domain`. The iodine credit was normalized without changing public-domain rights. [Follow-up run 38825147658](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38825147658) flagged the missing short-form `CC BY-SA 4.0` substring; its accurate full-name source attribution was made explicit with that abbreviation. **These failed runs are not product sign-off.**
- [x] **Successful corrected-version automated regressions on metadata commit `c841617`:** package/science [38825202249](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38825202249), live Chromium browser [38825202140](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38825202140), and true HTTPS/offline Chromium [38825202133](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38825202133), each with GitHub conclusion **success**.
- [ ] **At this record update** native unsigned iPhone Simulator [38825202123](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38825202123) was still **in progress**, not passed; the earlier pre-update iPhone simulator [38824103622](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38824103622) passed but is a different commit. Check actual outcome separately.
- [ ] Unresolved external rights grant/individual photographer questions for publisher-credited originals and full signed-package ShareAlike obligations stay open. 92 candidate images remain candidates, **not release-cleared**, and no `main` merge or release was authorized.

## 4K. Focused file-specific credit follow-up — 54–60 — 2026-10-15

**Evidence:** [`RIGHTS_54_60_ATTRIBUTION.md`](RIGHTS_54_60_ATTRIBUTION.md), exact current Wikimedia Commons original/derivative file-history and CC BY 3.0 records, related original-publisher pages and prior saved-JPEG comparisons. Five precisely scoped photo candidates, **not a replay of the earlier completed 51–60 photo matching**.

- [x] **#54 xenon:** photographer Jurii original 2009 photo, the specific 2010 white-speck retouch by Papa Lima Whiskey, and the app's re-encoding all identified in displayed photo credits with original-file link and CC BY 3.0.
- [x] **#56 barium:** publisher-level identity Hi-Res Images of Chemical Elements and exact source/subject recognized; Commons uploader Stas1995 **not assumed to be original photographer**. The individual photographer remains unverified despite source's CC BY 3.0 claim and gallery licensing notice.
- [x] **#57 lanthanum:** Jurii's 2009 photograph and CC BY 3.0 source link recorded; app resize/reencode notice improved.
- [x] **#59 praseodymium:** named Jurii's original 2009 photo, DePiep's 2012 shadow/border cleanup and subsequent app re-encoding separately. Commons CC BY 3.0.
- [x] **#60 neodymium:** publisher-level photo identity and exact Commons/gallery links and source CC BY 3.0 license statement corroborated. As with barium, **the uploader is not a verified photographer**, and personal rights lineage remains unresolved.
- [x] Existing **#55 cesium** follow-up was **already completed** in Section 4I and [`RIGHTS_41_55_90_ATTRIBUTION.md`](RIGHTS_41_55_90_ATTRIBUTION.md). **#58 cerium** publisher-hosted exact-original recovery and rights uncertainties were **already separately documented**. Those two were **not modified** or newly claimed cleared.
- [x] Exact code change: `element-photo-data.js` `attribution` and `note` only for **#54 #56 #57 #59 #60**; [metadata commit `319bdb8`](https://github.com/comctx/Periodic-Table-Explorer/commit/319bdb8b372bee67a8e67caa7b38abc09b211d16). No binary JPEGs, paths, licenses, science, quiz, packaging or display selection changed. Remains **92 candidate photos / 26 excluded**.
- [x] **Completed post-change science/package test succeeded**: [run 38826022767](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38826022767) on metadata commit `319bdb8`.
- [x] **Additional post-change automated tests succeeded** on commit `319bdb8`: real Chromium browser [38826022716](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38826022716) and true HTTPS/offline Chromium [38826022712](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38826022712), GitHub conclusion **success** for both.
- [ ] **At this record update** unsigned iOS Simulator [38826022705](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38826022705) was **in progress**; no successful result claimed until GitHub completes it.
- [ ] **Release still blocked:** no newly certified individual photo or package rights, no signed IPA, no real iPhone/TestFlight or Windows Store package, no Apple 4.3 decision, no owner release approval. No merge or submission.

**Late status correction to §4J:** prior native unsigned iPhone simulator [run 38825202123](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38825202123) **completed successfully** on commit `c841617`. That record's earlier "in progress" notation was a truthful historical snapshot, now superseded by actual GitHub run conclusion. It does not establish the later `319bdb8` simulator result.

## 4L. Final science cross-field QA and superheavy phase honesty — 2026-10-15

**Detailed evidence and exact references:** [`FINAL_SCIENCE_CROSSFIELD_2026_10_15.md`](FINAL_SCIENCE_CROSSFIELD_2026_10_15.md). Builds on *completed*, prior CIAAW, PubChem, RSC, NIST and 118-element science sessions instead of redoing them.

- [x] Extended `audit/check-data.mjs` with a second-layer **118 neutral-atom electron subshell-capacity and core-count check**, 34 isotope-reference vs standard-weight separation checks, noncontradictory measured temperature/20 °C phase consistency, and selected anchored quiz scientific premises (BIPM caesium-133 second, RSC tungsten and gallium, bromine/mercury phase at 20 °C). All passed the actual corrected regression.
- [x] **Verified science-communication correction:** `Z=104–109` (Rf Db Sg Bh Hs Mt) previously showed definite “Solid” despite RSC fact boxes reflecting inferred classification and the source text confirming only a handful of short-lived atoms. In `elements-data.js`, the displayed state is now `Expected solid (RSC classification; unverified)`; in `index.html` the grid says `Unknown / predicted`. `element.html` expresses that bulk phase has not been measured. This respects the RSC's classification without portraying it as directly observed. All other scientific figures and isotope labels remain unchanged.
- [x] **Automated scientific/package regression completed successfully** on corrected `check-data.mjs` commit [`8cf37d5`](https://github.com/comctx/Periodic-Table-Explorer/commit/8cf37d559f786cbc809fe8dac0e78d2216f097b9): [run 38828376454](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828376454) (GitHub conclusion **success**). [Browser 38828280157](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828280157) and [true offline 38828280163](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828280163) also **succeeded** on `element.html` update commit `2e97f3a`; later test code edits did not alter browser app resources.
- [x] **Intermediate failures transparently kept**: [science regression 38828280165](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828280165) failed against an obsolete fixture expecting unqualified “Solid” after app data was deliberately corrected, and [38828336990](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828336990) failed due to escaping in the new regular-expression test. Both assertions were corrected; actual subsequent science regression run passed. These were **test-regression errors**, not new external chemistry validation.
- [ ] At this record update, audit-only unsigned iOS simulator [run 38828280172](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828280172) still **in progress** on the updated app commit; do not claim it passed without completed run confirmation.
- [ ] **Science sign-off not yet complete:** exhaustive independent source review of every remaining free-text discovery narrative, `typicalUses` and `appearance` and the subjective wording of every selected quiz premise still outstanding; do not call the previous numerical/structural results a 118-article scientific certification. This is a distinct *remaining content scope*, **not** repeating earlier numerical checks.
- [x] `main` and Store submissions unchanged, no photos or image-rights status altered. The app remains unreleased from this audit branch.

## 4M. Exact SI temperature conversion in interactive view — 2026-10-15

- [x] **Verified separate display-precision issue in temperature simulator**, not an element source-number error: Celsius slider already computed Kelvin as `C + 273.15` internally, but it then **rounded the displayed Kelvin to a whole integer**: −273 °C became a misleading “0 K” instead of **0.15 K**. With the exact BIPM/NIST offset, 20 °C is **293.15 K**.
- [x] Fixed `index.html` readout to show **Kelvin to 2 decimal places, Fahrenheit to 1** and retain Celsius slider in 1 °C increments. The Celsius/Kelvin conversion follows [BIPM SI Brochure](https://www.bipm.org/en/publications/si-brochure) and [NIST SP 330](https://www.nist.gov/pml/special-publication-330/sp-330-section-2). [Readout commit `21f56b8`](https://github.com/comctx/Periodic-Table-Explorer/commit/21f56b890d209f1f370d96a87d580f60c4c3e86b).
- [x] Added explicit expected `−273 °C → 0.15 K`, `20 °C → 293.15 K`, and output precision regression checks: [test commit `3adc000`](https://github.com/comctx/Periodic-Table-Explorer/commit/3adc0002f5d345821081422fa42bb00f1835dba2).
- [x] **GitHub science/packaging workflow [38828608956](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828608956) completed successfully** after both edits.
- [x] **Chromium browser smoke [38828590135](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828590135) and genuine HTTPS offline [38828590161](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828590161)** completed with GitHub conclusion **success** on the new index/temperature update commit `21f56b8`.
- [ ] At this follow-up check, unsigned iPhone simulator [38828590155](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828590155) remained **in progress**, not passed.
- [x] No main merge, content-photo edit, image-rights approval or Store submission; this correction belongs to scientific display integrity. See [science cross-field report](FINAL_SCIENCE_CROSSFIELD_2026_10_15.md).

## 4N. NIST rare-element phase and hand-written quiz source follow-up — 2026-10-15/16

**Detailed evidence:** [`SCIENCE_RARE_PHASES_AND_QUIZ_2026_10_15.md`](SCIENCE_RARE_PHASES_AND_QUIZ_2026_10_15.md). This is an actual **new cross-source science correction**, not a repetition of the CIAAW/PubChem fixtures, earlier 118-element sessions or resolved picture-rights reviews.

- [x] **#87 francium measured-vs-estimated mismatch:** earlier app used [RSC](https://periodic-table.rsc.org/element/87/francium) **294 K melting / 923 K boiling** estimates without explaining their status. [NIST Technical Note 2273 (2024)](https://doi.org/10.6028/NIST.TN.2273), tables 9 and 13, evaluates trends and **recommends 300 ± 3 K melting / 936 ± 6 K boiling** at normal pressure, explicitly **not direct measurements**. Audit-branch app numerical fields now use NIST estimates and a separate `phaseNote` visibly reports NIST uncertainty and differences from RSC. Atomic weight, isotope [223], other science fields unchanged.
- [x] **#85 astatine, #87 francium, #100 fermium, #101 mendelevium, #102 nobelium, #103 lawrencium**: RSC's *solid* classification was presented as experimentally certain despite only trace/microgram/individual atom evidence. The detailed app now says `Expected solid (RSC classification; unverified)`, shows a **source-specific phase evidence paragraph** and labels displayed melting/boiling **(estimated)**. Main table shows **Unknown / predicted** for these six. Distinct from previously corrected #104–109; those earlier fixes stay untouched.
- [x] **Interactive temperature viewer** now returns `unknown` for all `Expected…` phase records even when numeric estimated melting/boiling values exist, preventing misleading phase color transitions. Actual function exercised in a new test at 20 °C: six new rare-element cases plus #104–109 unknown; bromine/mercury liquid, hydrogen gas and copper solid stay as expected.
- [x] **All fifteen manually authored quiz facts/history prompts** independently compared with [RSC element articles](https://periodic-table.rsc.org/) and the [BIPM SI-second definition](https://www.bipm.org/en/si-base-units/second): no incorrect fact answer found; 15 explicit ID/answer fixtures added to the GitHub scientific regression. This does not claim every remaining user-facing historical sentence independently proofread or the full 506-question pool manually source-verified (the rest is generated mostly from earlier verified element symbols/numbers).
- [x] **Latest actual science/package regression passed**: [GitHub Actions **38829366214**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829366214) on quiz-fixture commit [`dbd30c4`](https://github.com/comctx/Periodic-Table-Explorer/commit/dbd30c4a561196d9dfb3a0d0bfa6bd3e3cc7bec6); earlier full phase-function check also passed [38829220578](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829220578).
- [x] **Actual updated HTML browser/offline smoke passed**: Chromium browser [38829205412](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829205412) and genuine HTTPS offline [38829205545](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829205545) (latest app markup-fix commit `3b50a17`). The later audit-only test changes did not modify browser runtime app files.
- [x] **Historical failed runs preserved, not concealed**: interim [38829087387](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829087387) found an obsolete RSC-only "Solid" fixture; [38829087418](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829087418) and [38829087405](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829087405) caught a temporary detail-page JavaScript quoting typo; [38829137918](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829137918) caught an overly literal source-text assertion. They were repaired, followed by completed green regressions. Old failures cannot be presented as final passing tests.
- [ ] **At latest check** native **unsigned** iPhone Simulator [38829205431](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829205431) still **in progress** on final HTML correction. Check actual completion before claiming success. This is not a signed IPA, real iPhone or TestFlight test.
- [ ] Independent review of **remaining** element free-text appearance, uses and discovery narratives is still the science-content gate; numerical source fixtures were already checked and do not need repeating. No photo rights, release binaries, public `main` or Apple/Microsoft Store submission changed.

## 4O. NIST 2024 full alkali series and exact uncertainty notes — 2026-10-15/16

The prior Section 4N initially treated #87 Francium as a one-element NIST exception. We have now **extended the same 2024 NIST source comparison across all six alkali metals**, not a new review of 118 original scientific records. Exact before/after table, expanded uncertainties and evidence are appended to [`SCIENCE_RARE_PHASES_AND_QUIZ_2026_10_15.md`](SCIENCE_RARE_PHASES_AND_QUIZ_2026_10_15.md).

- [x] Reconciled six `meltingPoint` and `boilingPoint` source figures (#3 Li, #11 Na, #19 K, #37 Rb, #55 Cs, #87 Fr) to **NIST TN 2273 (2024), table 2**, explicitly recording the published 95%-coverage expanded uncertainties. #87 Fr had already been updated in Section 4N; the five other records were then updated. No other element temperatures or independent mass/chemistry fields changed. [NIST source](https://doi.org/10.6028/NIST.TN.2273).
- [x] Added a visible `temperatureReference` field for #3, #11, #19, #37, #55, with exact NIST citation, pressure, uncertainty and units in the scientific details. Unlike #87 Fr, these five records are **not falsely labeled unmeasured**. Francium's original `phaseNote` still notes it is estimated, not measured.
- [x] Exact science/package regression **[38829702240](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829702240) passed** after fixtures and source text were updated in [commit `41912d5`](https://github.com/comctx/Periodic-Table-Explorer/commit/41912d527b2828c9b05fc0427c77ff8f3760c3a0). Prior fixture failure [38829660864](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829660864) remains transparently recorded; it expected previous RSC figures after app numbers had deliberately changed, and was superseded by the actual success.
- [x] **Browser [38829660872](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829660872) and genuine HTTPS/offline [38829660847](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829660847) passed** on the final updated runtime/credit UI commit `c9e41fe`.
- [x] Previous rare-phase simulator [38829205431](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829205431) **completed successfully**. It was for the app *before* the five additional NIST data changes.
- [ ] **At this record update** the latest unsigned iPhone simulator [38829660857](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829660857) was **in progress**, and must be checked before calling passed. This does not establish physical iPhone, Windows Store package or signed IPA QA.
- [ ] **Science content remaining:** other free-text scientific/use/history narratives have not been independently exhaustively source-verified as part of this new precision and quiz review. Keep this open rather than redoing existing CIAAW/PubChem checks. No `main` merge or Store submission.

## 4P. Source-specific element-versus-compound applications — 11 factual wording corrections

**Review and primary RSC evidence:** [`SCIENCE_USES_COMPOUND_DISTINCTIONS_2026_10.md`](SCIENCE_USES_COMPOUND_DISTINCTIONS_2026_10.md), 2026-10-15/16. This is a **targeted remaining scientific free-text pass**, not a re-run of the previously completed 118-element numerical/source science audit.

- [x] **11 app descriptions corrected**: atomic numbers **32 Ge, 34 Se, 39 Y, 41 Nb, 42 Mo, 49 In, 55 Cs, 59 Pr, 60 Nd, 68 Er and 75 Re**. Previous short lists implied the elemental metal itself was used in applications where a **compound, alloy, doped glass or oxide** is actually used. Edited **only** `elements-data.js` `typicalUses` for those records. Each correction grounded in the individual Royal Society of Chemistry element article; Cs atomic clock fact also referenced BIPM SI definition. Photos and numeric chemistry data untouched.
- [x] Added all **11 source-specific wording regression checks** in `audit/check-data.mjs`, protecting distinctions such as MoS2 lubricant versus elemental molybdenum, ITO touchscreen coating versus elemental indium, YAG laser/oxide versus yttrium metal, erbium fibre dopants and neodymium-boron magnet alloy.
- [x] **Actual final science+packaging GitHub Actions [38830349756](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830349756) succeeded**, test-fix commit [`b1eb82c`](https://github.com/comctx/Periodic-Table-Explorer/commit/b1eb82c58cc840a8da7174a465e9c5ba20e55164). Seven description changes: [`8f8b0bc`](https://github.com/comctx/Periodic-Table-Explorer/commit/8f8b0bc0ed9789c5ead89e3771d2a4e9e235b000); four more [`b60fdf0`](https://github.com/comctx/Periodic-Table-Explorer/commit/b60fdf0e405888f02d0c4ea927ad83ac3bccec4c). **Actual Chromium run [38830299418](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830299418) succeeded** on second app text commit.
- [x] **Intermediate test failures retained, not treated as science changes**: [38830241804](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830241804) and [38830315724](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830315724) expected capitalized “Indium metal and alloys” in a correct sentence that used lowercase; assertion switched to case-insensitive matching. Passing corrected result is the one above.
- [ ] At report update, unsigned iPhone simulator [38830299469](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830299469) was **still in progress**. Do not count as passed until conclusion is success. Later test/documentation commits have no HTML runtime asset change.
- [ ] Remaining science effort is independent examination of other source-specific *free-text* summaries and any inaccuracies found; this does not undo earlier complete atomic-weight, 354 PubChem reference slots, 118 element structures, earlier source reviews and quiz regression. No `main` change or signed Microsoft/Apple release has occurred.

## 4Q. Fifteen RSC use descriptions and discharge appearance safeguards — 2026-10-15/16

**Evidence and individual RSC original references:** [`SCIENCE_USES_RSC_15_FOLLOWUP_2026_10.md`](SCIENCE_USES_RSC_15_FOLLOWUP_2026_10.md). This is the **next distinct content review after completed 11-use correction in §4P**, not a repetition of the previously finished source/numbered atomic-data audits.

- [x] **15 newly source-reviewed `typicalUses` prose entries corrected** — atomic #**13, 18, 36, 37, 44, 45, 46, 47, 48, 50, 54, 62, 66, 67, 69**. Distinguished pure metals and noble gases from alloys, compounds, laser dopants and named radionuclides. Especially #36 krypton fluoride lasers versus krypton gas lamps, #69 thulium-170 X-ray sources versus doped lasers, and #66 dysprosium alloy uses versus oxide/iodide uses.
- [x] **Two noble-gas `appearance` descriptions corrected**: #36 krypton and #54 xenon are **colourless gases under ordinary conditions**; emission/glow is specifically under electrical excitation, not a normal visible colour. Only those two fields and 15 `typicalUses` fields changed in `elements-data.js`, verified against original JSON field-by-field. [App data commit `a3604eb`](https://github.com/comctx/Periodic-Table-Explorer/commit/a3604eb27f0793fbe08b117aa9690aff8411b157).
- [x] **15 source-specific word/chemistry regression checks plus two gas appearance guards** appended to `audit/check-data.mjs` on [commit `c933e20`](https://github.com/comctx/Periodic-Table-Explorer/commit/c933e206a28704898d2213f8841c287433bef195).
- [x] **Actual science/package GitHub run [38830816558](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830816558) completed successfully** on final test commit `c933e20`. **Actual live Chromium smoke run [38830732601](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830732601) completed successfully** on updated app data commit `a3604eb`.
- [x] **Previous section 4P pending simulator update:** prior iOS unsigned simulator [38830299469](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830299469) has **completed success**, but it tests the previous 11-description version.
- [ ] **At this update** current unsigned iPhone simulator [38830732587](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830732587) for the 15-description version was **in progress**. Do not claim it passed until checking its final conclusion.
- [ ] Remaining **independent free-text scientific/discovery context verification** is still open, distinct from existing 118 element structure, CIAAW, RSC, PubChem and NIST numeric/reference work. **No image/photo rights, signed packaging, real phone, Windows/Microsoft Store or `main` changes.**

## 4R. CIAAW official numerical meaning now correctly labeled in both science views

**Full primary-source evidence and exact before/after diff:** [`SCIENCE_CIAAW_WEIGHT_LABELS_2026_10.md`](SCIENCE_CIAAW_WEIGHT_LABELS_2026_10.md).

- [x] **Actual factual communication error identified independently**: app's source values are **CIAAW 2024 abridged *standard atomic weights***, yet two views displayed the value as **“Atomic mass”** whenever the value was known. [CIAAW's official FAQ](https://www.ciaaw.org/info.htm) differentiates an individual atom's atomic mass from abundance-weighted standard atomic weight. The app did not have to change a single source number to correct this.
- [x] In `element.html` [commit `93afe52`](https://github.com/comctx/Periodic-Table-Explorer/commit/93afe52964a87f784e922eb8182ea4fd727e3c13) and `index.html` [commit `05ca592`](https://github.com/comctx/Periodic-Table-Explorer/commit/05ca592f71c6e56648112975c7adb2f25d3d4157), both UI views now call the quantity **“Standard atomic weight (CIAAW 2024, abridged)”** whether assigned or not. The original isotope mass-number distinction and exact CIAAW source values remain untouched.
- [x] Regression guard [commit `29d4e2b`](https://github.com/comctx/Periodic-Table-Explorer/commit/29d4e2bef033f3df669f227d938ae258468681fc) asserts accurate labels and rejects original erroneous ternary. Previous science/package regression on first detail change [38830993955](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830993955) **completed successfully**.
- [ ] At this initial record update the final full test/version runs were still executing. Post-correction science/package [38831022951](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831022951), Chromium [38830997925](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830997925), HTTPS offline [38830997809](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830997809), unsigned iPhone simulator [38830997829](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830997829): verify **each** completed conclusion rather than assume success.
- [ ] Scope remains final free-text science verification, photo-commercial-licensing and signed package QA. `main` and Store submissions unchanged.

## 5. Remaining release gates — exact next work only

- [ ] **Licensing / authorship**: For the 92 staged element images **and additional Bay City photograph**, confirm *actual file-specific* ownership/rights, the original adapted-version lineage and commercial reuse requirements. Complete and review photographer uncertainty especially for publisher gallery originals (including examples in #3–5, #15, #22, #26–27, #30–31, #33–34 and several later batches); fix particular cases only.
- [ ] **ShareAlike obligations**: Ensure the actual redistributed adapted JPEGs, their license/credit text, source links and attribution change notices satisfy the specific CC BY-SA version(s), including offline access to appropriate information where needed.
- [ ] **Source code review**: Confirm image metadata and UI consistently describe actual specimens vs chemical compounds, historical imagery, equipment, products or simulations; ensure “No Image Found” is not misrepresented.
- [ ] **Independent science QA**: Verify remaining per-element scientific prose/discovery/usage/physical-context nuances against named reference materials and run integrated runtime checks; test critical paths for all 118 rather than redoing already verified data comparisons.
- [x] **Automated Chromium quiz/desktop/mobile smoke**: 118 pages, all 92 JPEGs, 26 withheld, quiz/score, search, temperature modes, Credits and simulated iPhone viewport passed on [run 38776854552](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38776854552). **[ ] Full hands-on Safari/real iPhone, keyboard, screen-reader and additional screen sizes** are separate outstanding gates.
- [x] **HTTPS PWA browser offline**: The service worker now preloads exactly **92 allowed-to-stage photos** and the separate Bay City photo; [true network-off Chromium run 38783188109](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783188109) passed for all 118 pages/photos and quiz. **[ ] Native `WKWebView`/iPhone Safari offline behavior, external source-link handling and low-storage persistence** remain separately unverified.
- [ ] **Actual iOS IPA**: [**Unsigned actual iPhone Simulator build and startup passed, run 38807251973**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38807251973), including byte-identical 92-image Web bundle and screenshot. Codemagic's future actual signed IPA hash inspector is tested, but a **signed IPA and physical/TestFlight testing have NOT occurred**. Pipeline retains `submit_to_testflight: true`; **do not trigger it without explicit approval** and licensing checks.
- [ ] **Windows/Microsoft package**: Locate the real desktop packaging route and its **actual** package, make it apply the 92/26 filtering, and run the new archive inspector **against that real result**. A general inspector has been written and passed controlled CI fixtures but cannot change an absent/unidentified Windows build pipeline or certify a Microsoft Store package.
- [ ] **Apple App Review**: [Draft and feature evidence](APP_REVIEW_PREPARATION.md) are ready for the owner's review; prior discussion indicated **4.3 Design/Spam**. Full live rejection and Apple response/status not verified from authenticated App Store Connect. A distinctive feature explanation and specific Apple issue resolution must precede resubmission. Do not assume a compilation or photo test fixes review policy.
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
- [`DISTRIBUTION_INSPECTION.md`](DISTRIBUTION_INSPECTION.md) updated 2026-10-15 with Codemagic's future real-IPA byte-check wiring and the exact successful dry-run evidence; this is **not** a completed signed IPA.
- Current source-of-truth app assets: [`element-photo-data.js`](../element-photo-data.js), [`elements-data.js`](../elements-data.js), [`element.html`](../element.html), [`about.html`](../about.html), [`codemagic.yaml`](../codemagic.yaml).

**Master-record creation changes no chemistry, photos, quiz code or distribution settings.** It documents the audited baseline so that future changes are intentional and verifiable.
