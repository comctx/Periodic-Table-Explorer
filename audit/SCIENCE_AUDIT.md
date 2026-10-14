# Periodic Table Explorer — scientific accuracy audit
**Started:** 2026-10-14  
**Branch:** `scientific-audit-2026-10` (not the published `main` branch)  
**Release gate:** Do not advertise the app as fully fact-checked and do not resubmit to the Microsoft Store until every element record, dynamic display, quiz fact, and associated image has been reviewed and corrected. Source disagreements must be recorded, not silently guessed away.

## Method
- Each of 118 elements must have its name, symbol, atomic number, atomic-mass *meaning*, configuration, physical/chemical properties, historical discovery credits, and examples of uses checked against authoritative sources. Record units, state, temperature, pressure, isotope, and uncertainty where relevant.
- Use IUPAC/CIAAW for standardized atomic weights, NIST and NIH/PubChem for tabulated physical/atomic data, and Royal Society of Chemistry (RSC) for readable historical accounts. Independent corroboration is encouraged where accounts conflict.
- Explicitly distinguish **discovered**, **recognized as an element**, **isolated**, and **named**. For synthetic elements, distinguish first reported synthesis from verification/recognition.
- Do not infer an unknown property from a missing value. Missing is *unknown*, not numeric zero.
- Verify every quiz answer against the corrected element dataset and separately assess whether distractors or historical wording make questions ambiguous.
- Run structural checks, numerical/unit checks, representative physical-state tests, link/image-credit checks, and a manual on-screen review.

## Progress: preliminary, not yet complete
- [x] Structural check: all 118 atomic numbers occur once, in numerical order, with 118 unique entries.
- [x] Structural check: the two internal element tables agree on chemical symbols; aluminum/aluminium is a harmless regional spelling difference.
- [x] Inspect the source code's temperature classification algorithm and locate the missing-value defect.
- [x] Fix `Number(null) === 0` causing 15 entries with unknown melting and boiling points to display falsely as gases in the temperature view.
- [x] Seven narrow unit-level phase-calculation test cases passed. Browser and full integration tests remain outstanding.
- [x] Initial *historical discovery review* for elements 1–10 against RSC histories. Several entries corrected in this audit branch.
- [x] Normalize and cross-check abridged CIAAW 2024 atomic weights for elements 1–20
- [x] Initial historical review for elements 11–20 (not complete property verification)
- [x] Add a reusable structural / key-source regression test
- [ ] Complete field-by-field reference review for elements 1–10 (numerical measurements, density conventions, chemistry).
- [ ] Full field-by-field audit for elements 11–118.
- [ ] Review all element images and license attribution.
- [ ] Full quiz-question verification and hands-on app testing.
- [ ] Validate a fresh Microsoft Store build and resubmit.

## Elements 1–10: historical findings and unresolved science
| # | Element | Discovery-history review | Outstanding scientific checks |
|---:|---|---|---|
| 1 | Hydrogen | Cavendish, 1766: supported by RSC | Melting point listed 13.81 K vs RSC 13.99 K; identify measurement/convention |
| 2 | Helium | Corrected to Janssen + Lockyer, 1868; RSC notes helium was found on Earth later, in 1895 | App lists a 0.95 K melting point; RSC lists melting at ordinary pressure as unknown. Phase/pressure model needs expert-level qualification |
| 3 | Lithium | Arfwedson, 1817: supported | Mass app 7 u vs RSC 6.94; investigate standard atomic weight interval and source conventions rather than simply choosing one |
| 4 | Beryllium | Vauquelin, 1798: supported | Measurement/unit review still outstanding |
| 5 | Boron | Corrected 1808 discovery credits to Gay-Lussac, Thénard, and Davy | App 2348 K melting vs RSC 2350 K; source-convention check |
| 6 | Carbon | Ancient history: broadly appropriate | App presents melting/boiling thresholds despite normal-pressure sublimation of graphite; simulator needs better treatment |
| 7 | Nitrogen | Rutherford, 1772: supported | Measurement/unit review still outstanding |
| 8 | Oxygen | Corrected to recognize Scheele, Priestley, and Lavoisier; noted discovery period 1771–1774 | Validate how the year is presented to users; different discovery milestones have different dates |
| 9 | Fluorine | Corrected credit from Ampère to Moissan (1886 isolation); Ampère acknowledged for naming in 1812 | PubChem's *Year Discovered* field lists 1670, based on earlier recorded fluorine-compound use; app's 1886 is specifically the elemental-isolation milestone. Present that distinction clearly |
| 10 | Neon | Corrected to Ramsay and Travers, 1898 | Measurement/unit review still outstanding |

**These 10 historical reviews are NOT 10 completely verified scientific records.** All detailed measurements must still be evaluated individually.

## Cross-app discrepancy queue
1. **Internal mass discrepancies:** 19 element numbers have a main-table mass versus detail-page mass difference >0.1 u; many are synthetic elements for which an isotope mass should not be misrepresented as a natural standard atomic weight. The source and meaning must be standardized before editing all masses.
2. **Density measurement context:** standard-density values vary between published references with conditions; display density units and temperature/pressure conventions clearly.
3. **Incomplete phase data:** 15 entries lack melting points; 25 lack boiling points. Missing-values algorithm patched on this branch; full pressure-sensitive scientific modeling is not yet validated.
4. **Historical question pool:** quiz questions derive their discovery answers from `elements-data.js`; re-check the complete pool after source corrections.
5. **Images:** verify photographs depict actual samples or are clearly labeled as illustrations and preserve credits and licenses.
6. **No automatic accuracy percentage:** no claim of 100% accuracy or a numerical accuracy score until the review is complete.

## Primary sources reviewed to date
- RSC hydrogen: https://periodic-table.rsc.org/element/1/hydrogen
- RSC helium: https://periodic-table.rsc.org/element/2/helium
- RSC lithium: https://periodic-table.rsc.org/element/3/lithium
- RSC beryllium: https://periodic-table.rsc.org/element/4/beryllium
- RSC boron: https://periodic-table.rsc.org/element/5/boron
- RSC carbon: https://periodic-table.rsc.org/element/6/carbon
- RSC nitrogen: https://periodic-table.rsc.org/element/7/nitrogen
- RSC oxygen: https://periodic-table.rsc.org/element/8/oxygen
- RSC fluorine: https://periodic-table.rsc.org/element/9/fluorine
- RSC neon: https://periodic-table.rsc.org/element/10/neon
- NIH PubChem periodic atomic mass table: https://pubchem.ncbi.nlm.nih.gov/periodic-table/atomic-mass
- NIH PubChem fluorine: https://pubchem.ncbi.nlm.nih.gov/element/Fluorine
- NIST periodic table: https://www.nist.gov/pml/periodic-table-elements
- IUPAC/CIAAW atomic weights: https://www.ciaaw.org/atomic-weights.htm

## Audit-branch changes
- `index.html`: prevent null melting/boiling values from being interpreted as 0 K; add phase-model limitations beside temperature controls.
- `elements-data.js`: refine source-supported discovery dates, credits, and naming for He, B, O, F, Ne.
- `element.html`: source-supported discovery summaries for He and F.
- `audit/SCIENCE_AUDIT.md`: this log.

Next: finish the detailed chemistry/numerical audit for 1–10, validate the 15 unknown-phase cases, then move through remaining elements in numbered batches.

## Audit session 2 — 2026-10-14: CIAAW atomic weights (1–20), RSC discovery review (11–20)

**Official mass reference:** [CIAAW Abridged Standard Atomic Weights 2024](https://ciaaw.org/abridged-atomic-weights.htm). The first 20 `atomicMass` / main-table `mass` entries now use its abridged *central values* in both datasets, avoiding accidental disagreements. **Caution:** an abridged value is not an exact fixed atomic mass for every sample; for some elements CIAAW reports intervals and uncertainty. The user-facing text should eventually explain isotope/standard-weight conventions.

| # | Element | RSC discovery-history result | Action in audit branch |
|---:|---|---|---|
| 11 | Sodium | Davy isolated metal in 1807 | Kept; source supported |
| 12 | Magnesium | Black recognized distinct element in 1755; Davy isolated small amount in 1808 | Year updated to 1755; distinct milestones explained |
| 13 | Aluminium / Aluminum | Ørsted first obtained impure metal in 1825; Wöhler improved isolation in 1827 | Corrected erroneous 'Ancient' year to 1825; Ørsted credited |
| 14 | Silicon | Berzelius obtained elemental silicon in 1824; earlier work had produced impure material | Corrected erroneous 1854 date to 1824 |
| 15 | Phosphorus | Hennig Brand, 1669 | Kept; source supported |
| 16 | Sulfur | Known since antiquity; no unique discoverer established | Retained 'Ancient'; removed exclusive 'Ancient china' discoverer |
| 17 | Chlorine | Scheele produced chlorine gas in 1774; Davy recognized element status later | Kept; source supported |
| 18 | Argon | Rayleigh and Ramsay, 1894 | Corrected lone Rayleigh attribution to both |
| 19 | Potassium | Davy isolated in 1807 | Kept; source supported |
| 20 | Calcium | Davy isolated calcium metal in 1808; lime compounds were known for millennia | Corrected erroneous 'Ancient' discovery to 1808 |

**Supporting history sources:** [RSC sodium](https://periodic-table.rsc.org/element/11/sodium), [magnesium](https://periodic-table.rsc.org/element/12/magnesium), [aluminium](https://periodic-table.rsc.org/element/13/aluminium), [silicon](https://periodic-table.rsc.org/element/14/silicon), [phosphorus](https://periodic-table.rsc.org/element/15/phosphorus), [sulfur](https://periodic-table.rsc.org/element/16/sulfur), [chlorine](https://periodic-table.rsc.org/element/17/chlorine), [argon](https://periodic-table.rsc.org/element/18/argon), [potassium](https://periodic-table.rsc.org/element/19/potassium), [calcium](https://periodic-table.rsc.org/element/20/calcium).

**Helium:** Changed the previously supplied 0.95 K melting point to `null` for this simple near-ordinary-pressure model because [RSC helium](https://periodic-table.rsc.org/element/2/helium) lists its ordinary-pressure melting point as unknown. Helium can be solidified only with applied pressure; a specific pressure-dependent phase boundary requires special modeling and sourced context.

**Additional corrections:** Distinct, manually reviewed discovery narratives were added for elements 12, 13, 14, and 20, instead of letting the generic discovery text imply an unverified procedure.

**Repeatable checks:** New `audit/check-data.mjs` tests 118-entry uniqueness/numbering, symbol alignment, CIAAW 2024 mass values for 1–20 in both representations, selected corrected history fields, and protection against treating unknown transition data as zero. Run with `node audit/check-data.mjs` from the repository root. These automated checks do **not** certify the remaining chemical information.

**Remaining priority:** Full field-level property verification, pressure-dependent phase model and carbon sublimation; density and electron affinity conventions; quiz disambiguation after historical correction; isotope-mass representation for elements lacking a standard atomic weight; review of all photos and their credits; browser testing; Store build testing. **Do not merge to main yet.**
