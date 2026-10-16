# Scientific follow-up: scarce-element phase evidence and all 15 curated quiz questions

**Reviewed:** 2026-10-15/16 UTC, **branch:** `scientific-audit-2026-10` (never `main`).  
**Scope:** Distinguish unobserved phase predictions from measured macroscopic properties, update one numerical element's estimates from a newer NIST evaluation, and source-check the quiz's **15 manually authored** history/science questions. Earlier 118-element CIAAW, PubChem and RSC fixtures and the 506-question pool construction are **not rerun as a new source review**. Work is *not* a final statement-by-statement certification of all descriptions.

## Francium: source disagreement is real, numbers are estimates

- Existing details for **francium (Z=87)** used [RSC's older displayed temperatures](https://periodic-table.rsc.org/element/87/francium): melting **294 K** and boiling **923 K** at 20°C state classified as solid.
- **More recently evaluated NIST source:** Nikhila Narayana and Donald R. Burgess Jr. (2024), *Melting Points and Boiling Points for the Alkali Metals*, NIST Technical Note 2273, [doi:10.6028/NIST.TN.2273](https://doi.org/10.6028/NIST.TN.2273), section **2.7 / table 9 (printed p. 25)** and **3.8 / table 13 (printed p. 49)** explicitly recommend **300 ± 3 K melting** and **936 ± 6 K boiling**, both *estimated by correlations*, NOT measured (francium has no stable isotopes and cannot be isolated as a macroscopic specimen).
- **Actual correction:** `elements-data.js` francium melting **294→300 K**, boiling **923→936 K**; new `phaseNote` on element detail gives NIST reference, uncertainties and notes RSC's older figures. This is a conscious **cross-source correction**, not a transcription error in the original RSC fixture. Existing atomic weight null, isotope [223], discoverer, year and electron configuration unchanged.
- The UI labels the melting and boiling entries **“(estimated)”** and shows source evidence directly below the figures. Rounding to °C produces **26.9°C** and **662.9°C**; the source uncertainty remains in Kelvin in the note, not erased.

## Unobserved bulk states: #85, #87, #100–103

| Element | Evidence checked | Corrected app disclosure |
|---|---|---|
| **85 Astatine** | [RSC element 85](https://periodic-table.rsc.org/element/85/astatine) lists **solid** and **573 / 623 K**, but says only tiny amounts can be made; bulk appearance/density cannot be verified from a macroscopic sample. | “Expected solid (RSC classification; unverified)” and a new note explaining the source-tabulated transition temperatures are **not direct bulk phase measurements**. |
| **87 Francium** | [RSC](https://periodic-table.rsc.org/element/87/francium) states solid, but NIST TN 2273 finds all published melting and boiling values are **estimates**. | Expected solid state; NIST 2024 estimates with published uncertainty; no simulation treating calculated phase as measured. |
| **100 Fermium** | [RSC element 100](https://periodic-table.rsc.org/element/100/) lists solid, 1800 K melt, and microgram amounts. Its [RSC Chemistry in its element podcast transcript](https://periodic-table.rsc.org/element/100/) notes a visually observable specimen has not been produced. | Expected solid; 1800 K clearly labeled estimated; no claim of observed bulk transition. |
| **101 Mendelevium** | [RSC element 101](https://periodic-table.rsc.org/element/101/mendelevium) lists solid, 1100 K, but describes only a few created atoms. | Expected solid, 1100 K estimated and explanatory note. |
| **102 Nobelium** | [RSC element 102](https://periodic-table.rsc.org/element/102/nobelium) lists solid, 1100 K, but describes only a few created atoms. | Expected solid, 1100 K estimated and explanatory note. |
| **103 Lawrencium** | [RSC element 103](https://periodic-table.rsc.org/element/103/lawrencium) lists solid, 1900 K, but describes only a few created atoms. | Expected solid, 1900 K estimated and explanatory note. |

The state-source wording was **not discarded**: RSC's solid category remains identified as a **classification/prediction**, rather than an experimental claim. Grid entries #85, #87, #100–103 are now “Unknown / predicted”. Combined with the previously qualified #104–118, the **temperature slider displays “Unknown”** for those unmeasured phases across temperatures, rather than asserting calculated solid/liquid/gas colors. Known Hg, Br, H and Cu still yield reference states at 20°C. `element.html` shows `phaseNote` in the Scientific Information section.

**Important distinction:** NIST provides quantified uncertainty for Fr; merely writing `±` next to a tabulated RSC estimate for the other rare elements would be inventing uncertainties, so none was invented.

## All 15 curated quiz-history/fact questions: reviewed against primary element/source pages

| Curated quiz ID | Verified answer | Supporting source |
|---|---|---|
| `fact-helium-sun` | Helium, discovered spectroscopically in Sun prior to Earth isolation | [RSC helium](https://periodic-table.rsc.org/element/2/helium) |
| `fact-gallium-hand` | Gallium, ~29.8 °C melting, can melt in a warm hand | [RSC gallium](https://periodic-table.rsc.org/element/31/gallium) |
| `fact-bromine-liquid` | Bromine, sole ordinary-room-temperature liquid **nonmetal** | [RSC bromine](https://periodic-table.rsc.org/element/35/bromine) |
| `fact-tungsten-melting` | Tungsten, highest melting point of a **metal** | [RSC tungsten](https://periodic-table.rsc.org/element/74/tungsten) |
| `fact-technetium-artificial` | Technetium, first **artificially produced** element (not absent in nature) | [RSC technetium](https://periodic-table.rsc.org/element/43/technetium) |
| `fact-carbon-allotropes` | Carbon, graphite, diamond, graphene and fullerenes | [RSC carbon](https://periodic-table.rsc.org/element/6/carbon) |
| `fact-cesium-second` | Caesium-133, standard SI-second transition | [BIPM definition](https://www.bipm.org/en/si-base-units/second) |
| `fact-mercury-liquid` | Mercury, metallic liquid at ordinary room temperature | [RSC mercury](https://periodic-table.rsc.org/element/80/mercury) |
| `history-francium-perey` | Francium identified by Marguerite Perey in 1939 | [RSC francium](https://periodic-table.rsc.org/element/87/francium) |
| `history-iodine-seaweed` | Iodine discovered by Bernard Courtois from seaweed ash in 1811 | [RSC iodine](https://periodic-table.rsc.org/element/53/iodine) |
| `history-niobium-columbium` | Niobium, Charles Hatchett first named columbium, 1801 | [RSC niobium](https://periodic-table.rsc.org/element/41/niobium) |
| `history-polonium-poland` | Polonium, named for Marie Curie's Poland | [RSC polonium](https://periodic-table.rsc.org/element/84/polonium) |
| `history-technetium-irradiated` | Technetium, 1937 Perrier & Segrè study of irradiated molybdenum | [RSC technetium](https://periodic-table.rsc.org/element/43/technetium) |
| `history-berzelius-thorium` | Thorium, Berzelius investigation in 1829 of thorite mineral | [RSC thorium](https://periodic-table.rsc.org/element/90/thorium) |
| `science-og-118` | Oganesson, element 118 named for Yuri Oganessian | [RSC oganesson](https://periodic-table.rsc.org/element/118/oganesson) |

**Result:** No incorrect answer was found among these **15 hand-authored** questions. Their answer IDs are now fixed in the automated `check-data.mjs` regression. This source check is **separate from the 472 symbol/atomic-number questions** and the smaller group/family questions whose correctness is already checked against the audited element list. This doesn't prove a reader couldn't find an ambiguity in untested future quiz content.

## Repo changes, reproducibility and limits

- `elements-data.js`: exactly six states/phase notes (#85, #87, #100–103), NIST francium numerical update.
- `index.html`: six main-grid state labels, `stateAtTemperature` fail-closed prediction safeguard, explanatory temperature legend; historical 118 other records untouched.
- `element.html`: extra scientific information/phase-note field and “estimated” label for relevant melting/boiling entries.
- `audit/check-data.mjs`: NIST estimates & notes, category and grid caveats, **actual executable temperature-view function** at 20°C, and 15 curated quiz answer IDs.
- Regression [GitHub Actions 38829220578](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829220578) **completed success**, with corrected assertions. Earlier transitional failures were real and should remain visible: the RSC-only old fixture expected “Solid”, an in-progress edit temporarily had a JavaScript quote typo, and an assertion's regex did not match its equivalent correct wording. These were repaired before successful science regression, rather than labeling incomplete runs as passes.
- [Chromium browser smoke 38829205412](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829205412) and [real HTTPS offline smoke 38829205545](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829205545) **completed success** on final HTML app fix. The latest native unsigned simulator run [38829205431](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38829205431) was still underway at this document's creation and requires an actual completed conclusion before claiming pass.
- No JPEGs, external rights, signed release package, `main` merge, Apple or Microsoft Store submission changed. Independent verification of the **remaining free-text appearance, uses and discovery narratives** remains open and should be reviewed as a distinct targeted content step, not redone numeric batch audits.
