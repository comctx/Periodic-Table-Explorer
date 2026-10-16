# Scientific accuracy — cross-field QA and superheavy-state correction (2026-10-15)

**Branch:** `scientific-audit-2026-10`. **Scope:** targeted final science QA *using* 118 previously reviewed element records and source fixture tests; **not** repeating the scientific sessions 1–21 or claiming independent certification of every historical or narrative sentence.

## Existing science evidence retained, not redone

- [Master audit](MASTER_AUDIT_RECORD.md), [original science audit](SCIENCE_AUDIT.md) and `audit/check-data.mjs` already record all 118 elements, CIAAW 2024 abridged standard weights where assigned, 354 PubChem numeric property slots, targeted RSC/NIST properties, history and quiz-generation checks. Previously compiled browser and offline testing does not certify every sentence.
- **New second-layer cross-field validation** now checks all 118 neutral-atom configurations for *both* (a) total electrons including noble-gas core and (b) maximum occupants in s/p/d/f subshells; all 34 representative isotope mass labels remain whole-number mass numbers and **not standard atomic weights**; numeric melting and boiling order; 20 °C liquid/solid/gas consistency for entries with both figures and direct state labels; canonical quiz premise/answer safeguards.
- The 506-question quiz pool still predominantly consists of unique symbol, atomic number, family and selected source-reviewed fact questions; the pre-existing test verifies no duplicate IDs or answer-choice collisions. Some history/fact wording still needs individual human context review before exhaustive science sign-off.

## Verified science communication correction — elements 104–109

**Defect:** The audit-branch data previously displayed Rutherfordium, Dubnium, Seaborgium, Bohrium, Hassium and Meitnerium (`Z=104–109`) with unqualified state **“Solid”**, despite the source describing only a handful of produced atoms and no measured bulk melting/boiling/density. Neighboring superheavy elements `Z=110–118` were already explicitly labeled as expected or unknown. This could mislead users into thinking that a macroscopic solid sample had been directly observed.

**Primary-source reconciliation:** The RSC fact boxes [rutherfordium](https://periodic-table.rsc.org/element/104/rutherfordium), [seaborgium](https://periodic-table.rsc.org/element/106/seaborgium), [bohrium](https://periodic-table.rsc.org/element/107/bohrium), [hassium](https://periodic-table.rsc.org/element/108/hassium) and [meitnerium](https://periodic-table.rsc.org/element/109/meitnerium) print “Solid” for the 20 °C *classification* but acknowledge only a few atoms made. [Nature's original hassium chemistry experiment](https://www.nature.com/articles/nature00980) characterized only **seven detected atoms**, not a measured macroscopic bulk phase. The app now **preserves the RSC “solid” classification as an expected state** while clearly distinguishing that classification from direct experimental verification.

**Code changes (audit branch only):**
1. `elements-data.js` `standardState` for **exactly #104–109** now “Expected solid (RSC classification; unverified)” rather than unqualified “Solid”.
2. `index.html` grid `state` for **exactly #104–109** now “Unknown / predicted”. The detailed science cards continue to show the expected solid classification with uncertainty instead of a deceptively certain claim.
3. `element.html` generated concise fact sentence uses “Its bulk physical state has not been established by direct measurement; the listed state is a prediction or periodic-table classification” for records already labeled expected, rather than “Its standard state is expected...”. The uncertainty note also applies to previously qualified `Z=110–118`.
4. `audit/check-data.mjs` fixture strings and new scientific cross-field checks guard against accidental reversion. No changing atomic numbers, weights, thermal figures, density, electron configuration, quiz answers or photo assets.

## Independently rechecked quiz fact examples

| Fact / potential confusion | Audited finding | External primary reference |
|---|---|---|
| The second defined by caesium-133 | Correct: unperturbed ground-state hyperfine transition frequency fixed at 9,192,631,770 Hz | [BIPM second](https://www.bipm.org/en/si-base-units/second) |
| Tungsten highest melting point among metals | Correct, RSC lists **3687 K / 3414 °C**, and our known-value dataset has no higher metallic melt | [RSC tungsten](https://periodic-table.rsc.org/element/74/tungsten) |
| Gallium melts around 29.8 °C | Correct, **302.9146 K / 29.7646 °C** | [RSC gallium](https://periodic-table.rsc.org/element/31/gallium) |
| Bromine and mercury liquid at 20 °C | The app records bromine nonmetal and mercury metal as the two room-temperature liquid elements. This is for **20 °C**, not every warm room. | [RSC bromine](https://periodic-table.rsc.org/element/35/bromine), [RSC mercury](https://periodic-table.rsc.org/element/80/mercury) |

**Automated result:** [GitHub Actions science/packaging run 38828376454](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828376454) completed with conclusion **success** on cross-field test-fix commit [`8cf37d559f786cbc809fe8dac0e78d2216f097b9`](https://github.com/comctx/Periodic-Table-Explorer/commit/8cf37d559f786cbc809fe8dac0e78d2216f097b9). Earlier runs [38828280165](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828280165) and [38828336990](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828336990) failed because the old state fixture and an incorrectly escaped new-regex assertion did not match the corrected science QA; both were fixed before run 38828376454. These are transparent CI history, **not separate evidence that the chemistry was wrong**.

## SI temperature display precision — second verified correction

The original `index.html` temperature slider converted Celsius to Kelvin correctly internally (`K = °C + 273.15`) but **rounded Kelvin to a whole integer in the displayed readout**. As a result its lowest slider value `−273 °C` incorrectly *appeared* as **0 K** instead of **0.15 K**, and `20 °C` appeared as `293 K` rather than the exact conversion **293.15 K**. These are display precision issues, not bad chemistry source data.

Source: [BIPM SI Brochure, ninth edition](https://www.bipm.org/en/publications/si-brochure) and [NIST SP 330](https://www.nist.gov/pml/special-publication-330/sp-330-section-2) define the Celsius relation exactly as `t/°C = T/K − 273.15`.

- Changed **only** the `index.html` temperature readout from whole Kelvin/Fahrenheit rounding to **two decimal Kelvin** and **one decimal Fahrenheit**, retaining integer slider Celsius increments: [`21f56b8`](https://github.com/comctx/Periodic-Table-Explorer/commit/21f56b890d209f1f370d96a87d580f60c4c3e86b).
- Added explicit `−273 °C → 0.15 K` and `20 °C → 293.15 K` regression assertions to `audit/check-data.mjs`: [`3adc000`](https://github.com/comctx/Periodic-Table-Explorer/commit/3adc0002f5d345821081422fa42bb00f1835dba2).
- Post-change science/package CI [38828608956](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828608956), browser [38828590135](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828590135), genuine HTTPS offline [38828590161](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828590161) and unsigned iPhone simulator [38828590155](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38828590155) were initially running; inspect **actual completed GitHub conclusions** before marking passed.
- No element property measurements, 92/26 photo selection, release configurations or `main` branch changes.

## What this review does NOT certify

- No claim every element's full `appearance`, `typicalUses`, history and narrative paragraph has received an independent fresh primary-source comparison in this pass; those are the remaining scientific-content review, **not a need to repeat all 118 numerical fixtures**.
- Only selected quiz premises received independent verification here, not every interpretation of the 506 generated question texts.
- Surface photos, their rights, final adapted-license credits, Windows/MSIX or signed iOS release package, native device and Microsoft Store submission are separately open; no merge to `main` or release authorized.
