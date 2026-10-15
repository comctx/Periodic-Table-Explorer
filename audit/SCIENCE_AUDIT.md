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
- [x] Normalize and cross-check CIAAW 2024 weight conventions for all 118 elements (null where unassigned)
- [x] Initial historical review for elements 11–30 (not complete property verification)
- [x] RSC melting, boiling, and density conventions for elements 21–118, including electron configurations for 61–118
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

## Audit session 3 — 2026-10-14: elements 21–30 (Sc–Zn)

**Source standards:** [CIAAW 2024 abridged atomic weights](https://www.ciaaw.org/abridged-atomic-weights.htm) and each of the [Royal Society of Chemistry's element pages](https://periodic-table.rsc.org/). Scientific properties in the detailed records 21–30 were compared to RSC **melting points (K), boiling points (K), density (g/cm³ at room temperature), and room-temperature state**. The numerical values in this *specific set* now use RSC consistently. This does not imply all properties have been checked.

| # | Element | CIAAW mass | RSC history and correction |
|---:|---|---:|---|
| 21 | Scandium | 44.956 | Nilson identified a new element in 1879, confirming Mendeleev's prediction; metal isolated much later (1937). Kept discoverer |
| 22 | Titanium | 47.867 | Gregor recognized it in mineral form in 1791, Klaproth independently named it in 1795; pure metal prepared in 1910. Updated melt/density to chosen RSC table |
| 23 | Vanadium | 50.942 | Del Río's 1801 discovery was doubted; Sefström rediscovered and named vanadium in 1831. Fixed nonsensical `namedBy: Isotopes of vanadium` |
| 24 | Chromium | 51.996 | PubChem calls identification 1797 and metallic isolation 1798; RSC's summary dates discovery as 1798. **Kept 1797** for initial identification and documented both milestones |
| 25 | Manganese | 54.938 | RSC reports Kaim's earlier 1771 claim and Gahn's isolation in 1774; changed single-name discoverer credit from Bergman to Gahn, discussed others |
| 26 | Iron | 55.845 | Ancient iron has no one discoverer; removed the erroneous `discoveredBy: 5000 BC` |
| 27 | Cobalt | 58.933 | Georg Brandt studied the ore in the 1730s and published by 1739; retained 1735 approximation, needs closer historical dating if presenting as exact |
| 28 | Nickel | 58.693 | Cronstedt identified it in 1751, later Bergman produced purer metal; kept attribution |
| 29 | Copper | 63.546 | Ancient metal with no single discoverer; removed geographical region `Middle East` from the discoverer field |
| 30 | Zinc | 65.38 | Zinc was refined in India during the medieval period; Marggraf recognized it in Europe in 1746. Kept 1746 as a European milestone; changed discoverer to Marggraf and explained Indian history clearly |

**History reference pages:** [Scandium](https://periodic-table.rsc.org/element/21/scandium), [Titanium](https://periodic-table.rsc.org/element/22/titanium), [Vanadium](https://periodic-table.rsc.org/element/23/vanadium), [Chromium](https://periodic-table.rsc.org/element/24/chromium), [Manganese](https://periodic-table.rsc.org/element/25/manganese), [Iron](https://periodic-table.rsc.org/element/26/iron), [Cobalt](https://periodic-table.rsc.org/element/27/cobalt), [Nickel](https://periodic-table.rsc.org/element/28/nickel), [Copper](https://periodic-table.rsc.org/element/29/copper), [Zinc](https://periodic-table.rsc.org/element/30/zinc); see also [PubChem Chromium](https://pubchem.ncbi.nlm.nih.gov/element/Cr) for the 1797/1798 distinction.

**Code changes saved on audit branch:**
- `elements-data.js`: CIAAW central values, RSC melting/boiling and densities for 21–30, and corrected historical person/period fields.
- `index.html`: matching display atomic weights through 30.
- `element.html`: ten individualized, source-based discovery summaries for 21–30, distinguishing earlier mineral use, initial recognition, rediscovery and metal isolation.
- `audit/check-data.mjs`: extended regression checks through #30, including detailed physical-data values and selected discovery history.

**Still unverified for elements 21–30:** electron configurations should be compared systematically against NIST (RSC fact boxes were spot-checked); electron affinities and ionization energies require matching unit/measurement conventions; atomic radius definitions may differ substantially by source and must be labeled; all oxidation states, photography, image credits and ambiguous quiz questions remain on the open checklist.

**Release status:** Main branch and the submitted package are unchanged. No merge, no new package, no resubmission until the full audit completes.


## Audit session 4 — 2026-10-14: elements 31–40 (Ga–Zr)

**Scope:** Both displayed weights aligned to the [CIAAW 2024 abridged standards](https://ciaaw.org/abridged-atomic-weights.htm) for #31–40. Detailed melting/boiling temperatures (kelvin), density (g/cm³), and room-temperature states compared against the [Royal Society of Chemistry](https://periodic-table.rsc.org/) element fact boxes. Discovery milestones compared with RSC histories. This batch does not certify all chemistry, quiz logic, photography, or illustration rights.

| # | Element | CIAAW 2024 abridged central value | Specific historical and scientific notes |
|---:|---|---:|---|
| 31 | Gallium | 69.723 | Lecoq de Boisbaudran, 1875; identified by spectroscopy and isolated later that year. Updated boil to RSC 2502 K. |
| 32 | Germanium | 72.630 | Winkler, 1886; matched predicted eka-silicon. Main-table weight corrected from 72.61. |
| 33 | Arsenic | 74.922 | Early arsenic compounds were known in antiquity; elemental isolation traditionally attributed to Albertus Magnus in the 13th century. **RSC lists sublimation at 889 K near ordinary pressure**, not an ordinary melting or boiling point. Both ordinary melt/boil fields now `null`; new `sublimationPoint:889` field and labeled detail/UI temperature handling. |
| 34 | Selenium | 78.971 | Berzelius, 1817. RSC melt 494 K; source weights aligned. |
| 35 | Bromine | 79.904 | Balard publicly identified in 1826; Löwig obtained independently in 1825 before Balard's publication. RSC room state liquid. |
| 36 | Krypton | 83.798 | Ramsay **and Travers**, 1898. RSC measured density 0.003425 g/cm³; Pauling electronegativity is **unknown** (not 3). |
| 37 | Rubidium | 85.468 | Bunsen **and Kirchhoff**, 1861, spectral identification. |
| 38 | Strontium | 87.62 | Crawford investigated new earth in 1787; Hope showed new element in 1791; Davy isolated metal in 1808. App now uses 1791 recognition milestone. |
| 39 | Yttrium | 88.906 | Gadolin's oxide discovery, 1794; metal isolated by Wöhler later. |
| 40 | Zirconium | **91.222** | Klaproth's identification in zirconia, 1789; Berzelius obtained impure metal in 1824. **RSC currently shows 91.224, but CIAAW 2024 abridged standard is 91.222.** The app explicitly follows CIAAW for atomic weights, RSC for phase/density values. |

**RSC history/fact sources:** [31](https://periodic-table.rsc.org/element/31/gallium), [32](https://periodic-table.rsc.org/element/32/germanium), [33](https://periodic-table.rsc.org/element/33/arsenic), [34](https://periodic-table.rsc.org/element/34/selenium), [35](https://periodic-table.rsc.org/element/35/bromine), [36](https://periodic-table.rsc.org/element/36/krypton), [37](https://periodic-table.rsc.org/element/37/rubidium), [38](https://periodic-table.rsc.org/element/38/strontium), [39](https://periodic-table.rsc.org/element/39/yttrium), [40](https://periodic-table.rsc.org/element/40/zirconium).

**Data caveats:** RSC selenium melting point 494 K and bromine 266/332 K are rounded values; readers should not infer greater precision than published. Arsenic's 889 K transition is an atmospheric-pressure approximation, not a pressure-independent material constant. The temperature slider remains a simplified teaching model. Element photographs, other fields (configuration, radius definitions, electron affinity, oxidation states), and quiz behavior remain **unverified**.

**Code:** Updated `elements-data.js`, `index.html`, `element.html`, and `audit/check-data.mjs` on audit branch. Regression assertions extended to #40; full browser/packaged-app testing still required. No merge or Store submission.

**Post-commit check (session 4):** Re-fetched all five updated files from the audit branch. The exact JavaScript regression assertions in `audit/check-data.mjs` were executed with equivalent assertion and file-read shims in an isolated JavaScript test harness: **PASS**. Inline scripts in `index.html` and `element.html` passed syntax compilation; four direct temperature examples passed (arsenic below/above sublimation, room-temperature bromine and krypton). This is **not** a full Node invocation, actual-browser regression run, app package validation, or photograph/quiz certification. The `main` branch remains unmodified and retains older Ga–Zr values.

## Audit session 5 — 2026-10-14: elements 41–50 (niobium through tin)

**Method:** Aligned both displayed atomic-weight fields to [CIAAW abridged standard weights 2024](https://ciaaw.org/abridged-atomic-weights.htm), using `null` for technetium, which has *no standard atomic weight*. Checked element-specific melting/boiling values (K), density (g/cm³ at room temperature), phase at 20°C, and discovery stories against [RSC element fact boxes and histories](https://periodic-table.rsc.org/). This is a targeted pass, not exhaustive field-by-field verification.

| # | Element | CIAAW weight | Changes and history decisions |
|---:|---|---:|---|
| 41 | Niobium | 92.906 | Hatchett discovered columbium 1801; Rose reidentified/named niobium in 1844. RSC boiling 5014 K (was 5017). |
| 42 | Molybdenum | 95.95 | Scheele recognized the distinct chemistry 1778; Hjelm isolated metal 1781. RSC melting 2895 K. |
| 43 | Technetium | **None** | **Segrè and Perrier**, 1937. No stable isotopes or CIAAW standard atomic weight. Former detailed 96.90636 is approximately a **Tc-97 isotope mass**, not a standard weight; table's former 98 is a **representative isotope mass number**. Both weight fields now null. Separately label `referenceMassNumber:98`, which RSC prints as **[98]**. RSC boiling 4535 K. |
| 44 | Ruthenium | 101.07 | Osann proposed name in 1820s, Claus/Klaus isolated and confirmed metal, generally credited 1844. RSC's paragraph discusses his investigation beginning 1840; other RSC text and PubChem credit 1844. Previous 1827 date removed. RSC 2606/4420 K. |
| 45 | Rhodium | 102.91 | Wollaston 1803; melting 2236 K. |
| 46 | Palladium | 106.42 | Wollaston obtained metal in 1803, publicly revealed discovery 1805; melting 1828 K. |
| 47 | Silver | 107.87 | Ancient, no single discoverer; invalid vague personal attribution removed; density 10.5. |
| 48 | Cadmium | 112.41 | Stromeyer discovered and isolated 1817; Hermann's independent related work noted in story. Invalid `namedBy: Isotopes of cadmium` removed; melting 594.219 K. RSC lists 112.414 relative mass, CIAAW abridged says 112.41—intentional source convention. |
| 49 | Indium | 114.82 | Reich and Richter, spectroscopy, 1863; RSC boiling 2300 K. |
| 50 | Tin | 118.71 | Known since antiquity, no single discoverer; boiling 2859 K. Tin's solid-state allotropes below ~13°C remain outside simple phase model. |

**RSC references:** [41](https://periodic-table.rsc.org/element/41/niobium), [42](https://periodic-table.rsc.org/element/42/molybdenum), [43](https://periodic-table.rsc.org/element/43/technetium), [44](https://periodic-table.rsc.org/element/44/ruthenium), [45](https://periodic-table.rsc.org/element/45/rhodium), [46](https://periodic-table.rsc.org/element/46/palladium), [47](https://periodic-table.rsc.org/element/47/silver), [48](https://periodic-table.rsc.org/element/48/cadmium), [49](https://periodic-table.rsc.org/element/49/indium), [50](https://periodic-table.rsc.org/element/50/tin).
**Additional source checks:** [NIST technetium isotopic data](https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl?ele=Tc), [RSC technetium historical podcast](https://periodic-table.rsc.org/podcast/43/technetium), [PubChem ruthenium historical details](https://pubchem.ncbi.nlm.nih.gov/element/44), [PubChem cadmium](https://pubchem.ncbi.nlm.nih.gov/element/48).

**Scope caveats:** CIAAW's *abridged* weights are rounded and not fixed masses of individual isotopes; uncertainties aren't in numeric fields. All other elements with no standard atomic weight (particularly synthetic elements >50) still need the same isotope vs standard-weight policy. The other science fields (atomic radii, ionization energies, electron affinities, oxidation states), each photo's source and license, quiz wording, live browser use, full Node regression, and Windows package validation remain open. Do not merge or resubmit before completing the full scientific review.

## Audit session 6 — 2026-10-14: elements 51–60 (Sb–Nd)

**Source method:** Standard weights follow the [CIAAW 2024 abridged table](https://www.ciaaw.org/abridged-atomic-weights.htm) (five significant figures where applicable). Detailed melting/boiling data in kelvin, density in g/cm³ at room temperature, and state at 20°C follow the [Royal Society of Chemistry (RSC)](https://periodic-table.rsc.org/). History has been individually reviewed against RSC histories. Data edits are confined to `scientific-audit-2026-10`, not published `main`.

| # | Element | CIAAW abridged weight | Key verified properties / historical decisions |
|---:|---|---:|---|
| 51 | Antimony | 121.76 | Ancient; no identifiable single discoverer. `discoveredBy` changed from an unsourced pseudo-person to `null`. RSC melting 903.778 K and density 6.68 (rather than 6.685). |
| 52 | Tellurium | 127.60 | RSC dates Müller's work **1783** (previous entry 1782); Kitaibel found it independently by 1789; Klaproth confirmed and named it. `namedBy` now Klaproth. RSC melt 722.66 K, boil 1261 K, density 6.232. |
| 53 | Iodine | **126.90** | Courtois discovered in 1811; distinguishing discovery from other chemists' subsequent characterization. RSC melt **386.9 K**, boil **457.6 K**, density **4.933**. Note CIAAW's abridged weight differs from detailed isotope-precision values. |
| 54 | Xenon | 131.29 | Credit **Ramsay and Travers**, 1898; RSC density **0.005366** g/cm³, melt **161.4 K**, boil **165.051 K**. |
| 55 | Caesium/Cesium | **132.91** | Credit **Bunsen and Kirchhoff**, 1860, spectroscopic identification; metal isolated later by Setterberg. RSC density **1.873**, melt **301.7 K**; spelling Caesium is British, Cesium is US. |
| 56 | Barium | 137.33 | Scheele recognized compound chemistry earlier; **Humphry Davy** isolated elemental metal in **1808**. Corrected discoverer field; RSC boiling **2118 K** rather than 2170 K. |
| 57 | Lanthanum | **138.91** | Mosander recognized it in **1839**, Erdmann also found it in a mineral that year; RSC melting **1193 K** instead of 1191 K. |
| 58 | Cerium | **140.12** | Independent discovery credited to **Berzelius and Hisinger, and Klaproth**, around winter **1803–1804**; element identified in mineral compounds before the metal was obtained. RSC melt **1072 K**, boil **3716 K**. |
| 59 | Praseodymium | **140.91** | Auer von Welsbach separated didymium into Pr and Nd oxides in **1885**; pure Pr metal came later. RSC melt 1204 K, boil 3793 K, density 6.77. |
| 60 | Neodymium | 144.24 | Auer von Welsbach, **1885**, didymium separation; pure Nd metal in 1925. RSC melt **1289 K** instead of 1294 K; boil 3347 K, density 7.01. |

**Authoritative element sources:** [Sb](https://periodic-table.rsc.org/element/51/antimony), [Te](https://periodic-table.rsc.org/element/52/tellurium), [I](https://periodic-table.rsc.org/element/53/iodine), [Xe](https://periodic-table.rsc.org/element/54/xenon), [Cs](https://periodic-table.rsc.org/element/55/caesium), [Ba](https://periodic-table.rsc.org/element/56/barium), [La](https://periodic-table.rsc.org/element/57/lanthanum), [Ce](https://periodic-table.rsc.org/element/58/cerium), [Pr](https://periodic-table.rsc.org/element/59/praseodymium), [Nd](https://periodic-table.rsc.org/element/60/neodymium).

**Scope limit:** This is the atomic-weight, phase-property, and historical-discovery review, **not** a complete review of other chemistry fields. The unresolved list includes oxidation states, radius definitions, electron affinity and ionization energy measurement conventions, image authenticity/license, quiz ambiguity after history edits, and end-to-end browser/packaged Store testing. RSC physical values use specified conventions and measurement precision; CIAAW weights are abridged with uncertainty not represented in the app's numeric fields. No merge or store resubmission.

## Audit session 7 — 2026-10-14: 61–70 (promethium through ytterbium)

**Primary standards:** [CIAAW 2024 abridged standard weights](https://www.ciaaw.org/abridged-atomic-weights.htm) for element weights; [Royal Society of Chemistry (RSC) element fact boxes and histories](https://periodic-table.rsc.org/) for phase, melting and boiling (K), density (g/cm³ at room temperature), ground-state electron configurations, and historical milestones. Physical data and discovery credits for #61–70 were reviewed individually; *all other chemistry and images are not yet certified*.

| # | Element | CIAAW 2024 standard weight | RSC melt / boil (K), density | History / source-based correction |
|---:|---|---:|---|---|
| 61 | Promethium | None | 1315 / 3273, 7.26 g/cm³ | 1945: Jacob A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell |
| 62 | Samarium | 150.36 | 1345 / 2067, 7.52 g/cm³ | 1879: Paul-Émile Lecoq de Boisbaudran |
| 63 | Europium | 151.96 | 1095 / 1802, 5.24 g/cm³ | 1901: Eugène-Anatole Demarçay |
| 64 | Gadolinium | 157.25 | 1586 / 3546, 7.9 g/cm³ | 1880: Jean Charles Galissard de Marignac |
| 65 | Terbium | 158.93 | 1632 / 3503, 8.23 g/cm³ | 1843: Carl Gustaf Mosander |
| 66 | Dysprosium | 162.5 | 1685 / 2840, 8.55 g/cm³ | 1886: Paul-Émile Lecoq de Boisbaudran |
| 67 | Holmium | 164.93 | 1745 / 2973, 8.8 g/cm³ | 1878: Marc Delafontaine and Louis Soret; independently Per Teodor Cleve |
| 68 | Erbium | 167.26 | 1802 / 3141, 9.07 g/cm³ | 1843: Carl Gustaf Mosander |
| 69 | Thulium | 168.93 | 1818 / 2223, 9.32 g/cm³ | 1879: Per Teodor Cleve |
| 70 | Ytterbium | 173.05 | 1097 / 1469, 6.9 g/cm³ | 1878: Jean Charles Galissard de Marignac |

**History and provenance:**
- **61 Promethium:** RSC credits **Jacob A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell** for the 1945 production/separation from uranium-fission products at Oak Ridge. The earlier app's `Chien Shiung Wu` discoverer was incorrect. RSC names **Grace Coryell** as proposer of the element's name, not the nonsensical `Isotopes of promethium`. Like technetium it has **no CIAAW standard atomic weight**; the old `144.91276` detailed number represented an isotope mass, and `[145]` is a reference isotope **mass number**. Changed both weight displays to `null`, retained `referenceMassNumber:145` with explicit label.
- **62 Samarium:** Lecoq de Boisbaudran's 1879 identification; de Marignac observed possible spectroscopic evidence in 1853. Melt 1345 K rather than 1347.
- **63 Europium:** Demarçay, 1901, after extensive crystallisations.
- **64 Gadolinium:** de Marignac observed evidence in 1880; Lecoq de Boisbaudran isolated/named it in 1886. Distinguish discovery from naming. **CIAAW 2024** revised standard weight 157.25.
- **65 Terbium:** Mosander obtained oxide fractions in 1843; melt 1632 K rather than 1629.
- **66 Dysprosium:** Lecoq de Boisbaudran, 1886; pure samples separated much later.
- **67 Holmium:** 1878 independent evidence from Delafontaine/Soret and Cleve (previously one scientist); melt 1745 K rather than 1747.
- **68 Erbium:** Mosander isolated an oxide in 1843; pure metal obtained in 1934.
- **69 Thulium:** Cleve identified oxide fractions in 1879.
- **70 Ytterbium:** de Marignac discovered oxide in 1878, purified metal obtained much later. Melt 1097 K rather than 1092, CIAAW weight 173.05 (prior main table 173.04).

**Primary RSC pages:** [Pm](https://periodic-table.rsc.org/element/61/promethium), [Sm](https://periodic-table.rsc.org/element/62/samarium), [Eu](https://periodic-table.rsc.org/element/63/europium), [Gd](https://periodic-table.rsc.org/element/64/gadolinium), [Tb](https://periodic-table.rsc.org/element/65/terbium), [Dy](https://periodic-table.rsc.org/element/66/dysprosium), [Ho](https://periodic-table.rsc.org/element/67/holmium), [Er](https://periodic-table.rsc.org/element/68/erbium), [Tm](https://periodic-table.rsc.org/element/69/thulium), [Yb](https://periodic-table.rsc.org/element/70/ytterbium).

**UI correction:** Replaced the previous **technetium-only** text for an unassigned standard atomic weight with a reusable `standardWeightText(e)` function. On a missing-weight record it consults `referenceMassNumber`, explains the isotope mass-number distinction, and handles both **Tc [98]** and **Pm [145]** without treating either as a standard atomic weight. The existing element details page was already capable of separately labeling `referenceMassNumber`.

**Scope limitations:** Abridged weights omit CIAAW uncertainties; the phase slider uses a simplified pressure-free model. Element uses, radii, electron affinity, ionization, electronegativity, oxidation states, imagery and credits, quiz verification, full browser and Windows package testing remain outstanding. No updates to `main` or Microsoft submission.

## Audit session 8 — 2026-10-14: elements 71–80 (Lu–Hg)

**Review scope:** CIAAW **2024 abridged atomic weights** in both displays; RSC element fact-box melting points (K), boiling points (K), room-temperature density (g/cm³), 20°C state and electron configuration. History credits reviewed against RSC historical accounts. Detailed measurements and discovery accounts have source-convention differences and must not be silently conflated. All edits are confined to `scientific-audit-2026-10`.

| Z | Symbol | CIAAW abridged weight | RSC melting / boiling (K) | RSC density (g/cm³) | Year / milestone | Credit |
|---:|---|---:|---:|---:|---|---|
| 71 | Lu | 174.97 | 1936 / 3675 | 9.84 | 1907 | Georges Urbain |
| 72 | Hf | 178.49 | 2506 / 4873 | 13.3 | 1923 | Dirk Coster and George de Hevesy |
| 73 | Ta | 180.95 | 3290 / 5728 | 16.4 | 1802 | Anders Gustaf Ekeberg |
| 74 | W | 183.84 | 3687 / 5828 | 19.3 | 1783 | Juan José Elhuyar and Fausto Elhuyar |
| 75 | Re | 186.21 | 3458 / 5863 | 20.8 | 1925 | Walter Noddack, Ida Noddack, and Otto Berg |
| 76 | Os | 190.23 | 3306 / 5281 | 22.5872 | 1803 | Smithson Tennant |
| 77 | Ir | 192.22 | 2719 / 4701 | 22.5622 | 1803 | Smithson Tennant |
| 78 | Pt | 195.08 | 2041.4 / 4098 | 21.5 | Ancient | No single discoverer |
| 79 | Au | 196.97 | 1337.33 / 3109 | 19.3 | Ancient | No single discoverer |
| 80 | Hg | 200.59 | 234.321 / 629.769 | 13.5336 | Ancient | No single discoverer |

**Historically important revisions:**
- **71 Lutetium:** CIAAW 2024 revised abridged weight **174.97**; RSC relative mass is 174.967. Urbain reported in **1907**, competing work by Charles James and Carl Auer von Welsbach; pure metal only in 1953.
- **72 Hafnium:** **Coster and de Hevesy**, rather than Coster alone, identified hafnium via X-ray spectroscopy in **1923**. RSC lists boil **4873 K** (previous app 4876).
- **73 Tantalum:** Ekeberg, **1802**, worked on an element later confused with niobium; Rose conclusively distinguished the two in 1846. CIAAW mass **180.95**; RSC boil **5728 K**.
- **74 Tungsten:** credit **Juan José and Fausto Elhuyar** for first metal isolation in **1783**, rather than Scheele; Scheele investigated its oxide in 1781 and Woulfe suspected a new metal in 1779. RSC melt **3687 K**, not the app's 3695 K.
- **75 Rhenium:** **Ogawa's 1905 spectra** were later reassessed as rhenium but were misidentified and not accepted at the time. Accepted **1925** identification/isolation involved **Walter Noddack, Ida Tacke (later Noddack), and Otto Berg**; the credited year is 1925 and early evidence is preserved in the individualized story. Replaced inaccurate app's `discoveredBy: Masataka Ogawa` alongside `yearDiscovered: 1925`; removed single-person `namedBy: Walter Noddack`. CIAAW weight **186.21**. RSC melt **3458 K**, boil **5863 K**.
- **76 Osmium:** Tennant, **1803**. RSC density **22.5872**, vs app 22.57; boil **5281 K**.
- **77 Iridium:** Tennant, **1803**, along with osmium. RSC density **22.5622**, vs app 22.42; CIAAW weight **192.22**.
- **78 Platinum:** Indigenous South American peoples worked platinum well before Antonio de Ulloa's **1735** description to Europeans; historical evidence also exists in ancient artefacts. Set `yearDiscovered: Ancient` and `discoveredBy: null`; 1735 European reporting is described in the story rather than misrepresented as first-ever discovery. RSC melt **2041.4 K**, density **21.5**; CIAAW weight **195.08**.
- **79 Gold:** Ancient; no single discoverer or one identifiable region. Replaced `Middle East` discoverer with `null`; RSC boil **3109 K**, density **19.3**. CIAAW weight **196.97**.
- **80 Mercury:** Ancient; no sole discoverer, so old `unknown, before 2000 BCE` attribution removed. RSC melt **234.321 K**, boil **629.769 K**, density **13.5336** and room-temperature state **Liquid**; CIAAW weight **200.59**.

**Sources:** [CIAAW 2024 abridged table](https://www.ciaaw.org/abridged-atomic-weights.htm); RSC [Lu](https://periodic-table.rsc.org/element/71/lutetium), [Hf](https://periodic-table.rsc.org/element/72/hafnium), [Ta](https://periodic-table.rsc.org/element/73/tantalum), [W](https://periodic-table.rsc.org/element/74/tungsten), [Re](https://periodic-table.rsc.org/element/75/rhenium), [Os](https://periodic-table.rsc.org/element/76/osmium), [Ir](https://periodic-table.rsc.org/element/77/iridium), [Pt](https://periodic-table.rsc.org/element/78/platinum), [Au](https://periodic-table.rsc.org/element/79/gold), [Hg](https://periodic-table.rsc.org/element/80/mercury).

**Unverified:** All other chemistry fields, pressure-dependent phase model, complete quiz question and answer checking, photographs and licensing, manual browser workflows, full Node and packaged Windows app validation. CIAAW abridged values deliberately differ from RSC's sometimes more precise relative masses; CIAAW uncertainties are not displayed. **No merge to main; no Microsoft Store resubmission.**

## Audit session 9 — 2026-10-14: elements 81–90 (Tl through Th)

**Official standards:** [CIAAW 2024 abridged weights](https://www.ciaaw.org/abridged-atomic-weights.htm) (no standard atomic weights for Po, At, Rn, Fr, Ra, Ac); [Royal Society of Chemistry's element data and historical pages](https://periodic-table.rsc.org/) for melting/boiling temperatures (K), density (g/cm³ at room temperature), 20°C state, electron configuration and discovery credit. CIAAW numeric weights are **abridged**, and isotope mass numbers are not standard weights.

| # | Element | CIAAW weight | RSC melting / boiling (K) | Density (g/cm³) | Discovery milestone |
|---:|---|---:|---|---:|---|
| 81 | Thallium | 204.38 | 577 / 1746 | 11.8 | 1861: William Crookes |
| 82 | Lead | 207.2 | 600.612 / 2022 | 11.3 | Ancient: no sole discoverer |
| 83 | Bismuth | 208.98 | 544.556 / 1837 | 9.79 | 1753: Claude-François Geoffroy |
| 84 | Polonium | none; isotope [209] | 527 / 1235 | 9.2 | 1898: Marie Curie and Pierre Curie |
| 85 | Astatine | none; isotope [210] | 573 / 623 | unknown | 1940: Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè |
| 86 | Radon | none; isotope [222] | 202 / 211.5 | 0.009074 | 1900: Friedrich Ernst Dorn |
| 87 | Francium | none; isotope [223] | 294 / 923 | unknown | 1939: Marguerite Perey |
| 88 | Radium | none; isotope [226] | 969 / 1773 | 5 | 1898: Marie Curie and Pierre Curie |
| 89 | Actinium | none; isotope [227] | 1323 / 3473 | 10 | 1899: André Debierne |
| 90 | Thorium | 232.04 | 2023 / 5058 | 11.7 | 1829: Jöns Jakob Berzelius |

**Highlights and attribution nuances:**
- #81 Thallium: Crookes spectroscopic identification 1861; Lamy independently isolated metal 1862. CIAAW weight 204.38.
- #82 Lead: ancient metal in multiple cultures, no single discoverer; discard misleading 'Middle East' discoverer. CIAAW weight 207.2, RSC 600.612 K melt and 11.3 g/cm³ density.
- #83 Bismuth: Geoffroy's 1753 contribution was **recognition as a separate metal**, not first ancient human use. CIAAW 208.98. Extremely slow radioactive decay of ^209Bi does not erase its standard atomic weight.
- #84 Polonium: **Marie and Pierre Curie**, 1898, not Pierre alone. Weight `null`, isotope reference [209]. RSC 9.20 g/cm³, 527/1235 K.
- #85 Astatine: **Corson, MacKenzie and Segrè**, confirmed 1940 synthetic production. No standard weight; isotope reference [210]; previously incorrectly assigned measured density 7, now **null (Unknown)**. RSC temperatures 573/623 K are limited estimates for a scarce radioactive element.
- #86 Radon: Dorn 1900 radium emanation, with 1899 Rutherford/Owens and Curies prior radioactive-gas studies. No standard weight; isotope reference [222]. RSC gas density 0.009074 g/cm³ and 202/211.5 K.
- #87 Francium: Perey 1939, identified in natural actinium decay. No standard weight; isotope [223]. Density is **Unknown**, RSC gives 294/923 K phase estimates.
- #88 Radium: **Marie and Pierre Curie**, 1898; Bémont also involved in chemical separations, isolated metal later. No standard weight; isotope [226]. RSC 969/1773 K.
- #89 Actinium: **André Debierne**, 1899, with Friedrich Oskar Giesel independently investigating related material in 1902. No standard weight; isotope [227]. RSC 1323/3473 K and density 10 g/cm³.
- #90 Thorium: **Berzelius, 1829** rather than 1828. Despite radioactivity, CIAAW standard atomic weight is 232.04. RSC 2023/5058 K and 11.7 g/cm³.

**Direct RSC fact/history references:** [Tl](https://periodic-table.rsc.org/element/81/thallium), [Pb](https://periodic-table.rsc.org/element/82/lead), [Bi](https://periodic-table.rsc.org/element/83/bismuth), [Po](https://periodic-table.rsc.org/element/84/polonium), [At](https://periodic-table.rsc.org/element/85/astatine), [Rn](https://periodic-table.rsc.org/element/86/radon), [Fr](https://periodic-table.rsc.org/element/87/francium), [Ra](https://periodic-table.rsc.org/element/88/radium), [Ac](https://periodic-table.rsc.org/element/89/actinium), [Th](https://periodic-table.rsc.org/element/90/thorium).

**Display impact:** Main table `standardWeightText` and detail-page `referenceMassNumber` logic already support null standard weights and labeled bracketed isotope numbers. This batch supplies the missing values and reference fields. Unknown density remains `null`, never numerical zero. Browser rendering remains untested.

**Still pending:** Full field-by-field chemistry for prior elements, photographs/license checks, quiz questions and distractor verification, browser integration, full actual Node regression, packaged Microsoft build validation, and elements #91–118. **Do not merge to `main` or resubmit until released by the full audit.**

## Audit session 10 — 2026-10-14: elements 91–100 (protactinium through fermium)

**Method:** Verified CIAAW's [2024 abridged standard atomic weights](https://www.ciaaw.org/abridged-atomic-weights.htm) and the [Royal Society of Chemistry's element records](https://periodic-table.rsc.org/) for melting/boiling temperatures in K, densities at room temperature in g/cm³, standard states, electron configurations, and discovery-history milestones. All edits remain on `scientific-audit-2026-10`.

| # | Element | CIAAW 2024 weight | RSC melt / boil (K) | RSC density (g/cm³) | Historical identification |
|---:|---|---:|---|---:|---|
| 91 | Protactinium | 231.04 | 1845 / 4273 | 15.4 | 1913 — Kasimir Fajans and Otto Göhring |
| 92 | Uranium | 238.03 | 1408 / 4404 | 19.1 | 1789 — Martin Heinrich Klaproth |
| 93 | Neptunium | none; isotope [237] | 917 / 4175 | 20.2 | 1940 — Edwin McMillan and Philip Abelson |
| 94 | Plutonium | none; isotope [244] | 913 / 3501 | 19.7 | 1940 — Glenn T. Seaborg, Arthur Wahl, Joseph W. Kennedy, and Edwin McMillan |
| 95 | Americium | none; isotope [243] | 1449 / 2284 | 12 | 1944 — Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, and Albert Ghiorso |
| 96 | Curium | none; isotope [247] | 1618 / unknown | 13.51 | 1944 — Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso |
| 97 | Berkelium | none; isotope [247] | 1259 / unknown | 14.78 | 1949 — Stanley G. Thompson, Albert Ghiorso, and Glenn T. Seaborg |
| 98 | Californium | none; isotope [251] | 1173 / unknown | 15.1 | 1950 — Stanley G. Thompson, Kenneth Street Jr., Albert Ghiorso, and Glenn T. Seaborg |
| 99 | Einsteinium | none; isotope [252] | 1133 / unknown | unknown | 1952 — Gregory Choppin, Stanley G. Thompson, Albert Ghiorso, and Bernard Harvey |
| 100 | Fermium | none; isotope [257] | 1800 / unknown | unknown | 1953 — Albert Ghiorso and colleagues (Berkeley, Argonne, and Los Alamos) |

**Specific historical corrections and scientific cautions:**
- #91 Protactinium: **Kasimir Fajans and Otto Göhring** identified a short-lived form in **1913**; Crookes only separated radioactive material in 1900 without identifying element 91. Longer-lived protactinium-231 was identified by **Lise Meitner and Otto Hahn** and independently **Frederick Soddy and John Cranston** in 1917–18. Use 1913 initial element identification as `yearDiscovered` and describe name/isolated metal separately. CIAAW weight **231.04**; RSC boil **4273 K** (previously absent); density **15.4**.
- #92 Uranium: Klaproth recognized its oxide in **1789**, Péligot isolated the metal **1841**; Becquerel demonstrated radioactivity in 1896. CIAAW **238.03** despite uranium radioactivity; RSC density **19.1**.
- #93 Neptunium: **McMillan and Abelson, 1940**, jointly credited. **No standard atomic weight**; isotope [237]. RSC density **20.2**, not 20.25.
- #94 Plutonium: **Seaborg, Wahl, Kennedy and McMillan** worked on first production **December 1940**, with definitive identification in 1941. No standard weight, reference isotope [244]. RSC density **19.7**, not 19.84.
- #95 Americium: **Seaborg, James, Morgan and Ghiorso**, produced 1944. No standard weight; isotope [243]. RSC density **12**, not 13.69. Note that the ubiquitous smoke-detector isotope is typically Am-241, distinct from the bracketed reference mass number [243].
- #96 Curium: **Seaborg, James and Ghiorso**, produced 1944 and publicly disclosed 1945. No standard weight; isotope [247]. RSC boiling point **unknown** (previous file invented 3400 K), now `null`.
- #97 Berkelium: **Thompson, Ghiorso and Seaborg**, produced 1949. No standard weight; isotope [247]. RSC melting **1259 K** (previous 1323 K), density **14.78**.
- #98 Californium: **Thompson, Street Jr., Ghiorso and Seaborg**, produced 1950. No standard weight; isotope [251]. RSC density **15.1**, which previous file wrongly left unknown; boiling unknown.
- #99 Einsteinium: **Choppin, Thompson, Ghiorso and Harvey** identified in thermonuclear-test debris from **1952**, news declassified 1955. No standard weight; isotope [252]. RSC density and boiling **unknown**.
- #100 Fermium: Produced in 1 November **1952** thermonuclear test debris; RSC assigns **1953** discovery/identification, whereas other histories use 1952 for production/detection. In this record `yearDiscovered:1953`, with production year distinguished explicitly in the story. Identification by Ghiorso and collaborating groups. No standard weight; isotope [257]; density and boiling unknown.

**RSC citations:** [Pa](https://periodic-table.rsc.org/element/91/protactinium), [U](https://periodic-table.rsc.org/element/92/uranium), [Np](https://periodic-table.rsc.org/element/93/neptunium), [Pu](https://periodic-table.rsc.org/element/94/plutonium), [Am](https://periodic-table.rsc.org/element/95/americium), [Cm](https://periodic-table.rsc.org/element/96/curium), [Bk](https://periodic-table.rsc.org/element/97/berkelium), [Cf](https://periodic-table.rsc.org/element/98/californium), [Es](https://periodic-table.rsc.org/element/99/einsteinium), [Fm](https://periodic-table.rsc.org/element/100/fermium). Additional: [PubChem protactinium](https://pubchem.ncbi.nlm.nih.gov/element/91), [PubChem fermium](https://pubchem.ncbi.nlm.nih.gov/element/100), [American Chemical Society / Berkeley transuranium history](https://www.acs.org/education/whatischemistry/landmarks/transuranium-elements-at-berkeley-lab.html).

**Release scope:** All ten records have weight convention, RSC melting/boiling/density/state, RSC electron configuration, and separate discovery-history stories reviewed. **This does not certify all fields:** radius definitions, ionization/electron-affinity/electronegativity, oxidation states, isotope selection semantics, photographs and licenses, or quiz wording still need dedicated reviews. The simplified pressure-free temperature slider is not authoritative for scarce synthetic actinides. The regression assertions only check saved data against saved reference fixtures, not live experimental observations. Browser/Windows package validation remains pending. Do not merge to `main` or resubmit to Microsoft until release review passes.

## Audit session 11 — 2026-10-14: elements 101–110 (mendelevium through darmstadtium)

**Method:** Verified all ten records against [CIAAW 2024 abridged atomic weights](https://www.ciaaw.org/abridged-atomic-weights.htm) and individual [Royal Society of Chemistry fact boxes / histories](https://periodic-table.rsc.org/). **Every element from 101 to 110 lacks a CIAAW standard atomic weight**. Clear both numeric weight representations, and store RSC's bracketed isotope reference separately as `referenceMassNumber`. Brackets indicate a **mass number**, not an exact isotope mass in atomic mass units or an abundance-weighted standard atomic weight.

| # | Element | Standard atomic weight | RSC bracket isotope mass # | RSC melting / boiling (K) | Density (g/cm³) | Discovery historical milestone |
|---:|---|---|---:|---|---|---|
| 101 | Mendelevium | **none** | [258] | 1100 / Unknown | Unknown | 1955: Albert Ghiorso, Bernard Harvey, Gregory Choppin, Stanley Thompson, and Glenn Seaborg |
| 102 | Nobelium | **none** | [259] | 1100 / Unknown | Unknown | 1962–1963: Joint Institute for Nuclear Research (Dubna), team led by Georgy Flerov |
| 103 | Lawrencium | **none** | [262] | 1900 / Unknown | Unknown | 1961: Lawrence Berkeley Laboratory team led by Albert Ghiorso |
| 104 | Rutherfordium | **none** | [267] | Unknown / Unknown | Unknown | 1964–1969: Joint Institute for Nuclear Research (Dubna) and Lawrence Berkeley Laboratory (Berkeley) |
| 105 | Dubnium | **none** | [268] | Unknown / Unknown | Unknown | 1968–1970: Joint Institute for Nuclear Research (Dubna) and Lawrence Berkeley Laboratory (Berkeley) |
| 106 | Seaborgium | **none** | [269] | Unknown / Unknown | Unknown | 1974: Lawrence Berkeley Laboratory and Joint Institute for Nuclear Research teams |
| 107 | Bohrium | **none** | [270] | Unknown / Unknown | Unknown | 1981: GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg |
| 108 | Hassium | **none** | [269] | Unknown / Unknown | Unknown | 1984: GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg |
| 109 | Meitnerium | **none** | [278] | Unknown / Unknown | Unknown | 1982: GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg |
| 110 | Darmstadtium | **none** | [281] | Unknown / Unknown | Unknown | 1994: GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg |

**Important corrections / scientific cautions:**
- **101 Mendelevium:** RSC 1955 discovery team **Albert Ghiorso, Bernard Harvey, Gregory Choppin, Stanley Thompson, Glenn Seaborg** (replacing an institutional label). Melting 1100 K; boiling and density unknown. RSC reports ground-state `[Rn] 5f13 7s2`; Pauling electronegativity unknown.
- **102 Nobelium:** Early Stockholm 1957 and Berkeley 1958 claims were disputed; a Dubna team led by **Georgy Flerov** produced better-supported isotopes **1962–1963**, which IUPAC eventually credited. The app no longer presents 1957 as settled discovery. RSC melting 1100 K; boiling/density unknown.
- **103 Lawrencium:** Berkeley 1961 work contested by Dubna 1965; IUPAC credited Berkeley. RSC config **`[Rn] 5f14 7s2 7p1`**, not old 6d1. RSC lists 1900 K melting, unknown boiling/density.
- **104 Rutherfordium:** Dubna 1964 (Georgy Flerov) and Berkeley 1969 (Albert Ghiorso) claims were both considered justified by IUPAC according to RSC. Credit both and show **1964–1969**, rather than treating the first report as final settled credit.
- **105 Dubnium:** Dubna 1968 versus Berkeley 1970 competing claims; eventually named for Dubna. Credit both and clarify controversy instead of app's 1967 claim.
- **106 Seaborgium:** Berkeley and Dubna 1974 evidence; RSC also discusses a contested early 1970 Berkeley result. The name honours Glenn Seaborg.
- **107 Bohrium:** Dubna's 1975 synthesis claim and GSI's 1981 verification/recognition. IUPAC credited **GSI group led by Peter Armbruster and Gottfried Münzenberg**, not 1976 GSI discovery as prior app implied.
- **108 Hassium:** Earlier Dubna experiments, GSI 1984 accepted synthesis. Credit Armbruster/Münzenberg-led GSI team.
- **109 Meitnerium:** GSI team detected one atom in 1982 by bismuth + iron fusion. Named after Lise Meitner. RSC isotope reference **[278]**, not the old main table's 278 being an atomic weight.
- **110 Darmstadtium:** GSI 1994 lead+nickel synthesis accepted for naming amid Dubna claims. Corrected electron configuration to RSC **`[Rn] 5f14 6d9 7s1`**, not the old `6d8 7s2`. Retained qualified display **Expected to be a solid**, because bulk phase has not been experimentally characterized.

**Missing-property policy:** RSC lists melting/boiling/density **Unknown** for #104–110. Keep all as `null`; do not insert density/phase values inferred from theoretical tables. RSC also lists Pauling electronegativity Unknown for #101–103 and common oxidation states Unknown for #104–110; these are left `null` rather than showing former unsourced predicted numbers. **This is a reference-aligned unknown, not evidence the properties are physically absent.** For all synthetic superheavy elements, even RSC's listed room-temperature state is an expected categorization rather than direct observation of macroscopic samples. Calculated electron configurations are not claimed as experimentally measured.

**Primary sources:** [CIAAW 2024](https://www.ciaaw.org/abridged-atomic-weights.htm); RSC [Md](https://periodic-table.rsc.org/element/101/mendelevium), [No](https://periodic-table.rsc.org/element/102/nobelium), [Lr](https://periodic-table.rsc.org/element/103/lawrencium), [Rf](https://periodic-table.rsc.org/element/104/rutherfordium), [Db](https://periodic-table.rsc.org/element/105/dubnium), [Sg](https://periodic-table.rsc.org/element/106/seaborgium), [Bh](https://periodic-table.rsc.org/element/107/bohrium), [Hs](https://periodic-table.rsc.org/element/108/hassium), [Mt](https://periodic-table.rsc.org/element/109/meitnerium), [Ds](https://periodic-table.rsc.org/element/110/darmstadtium).

**Still pending:** Elements 111–118, comprehensive property review for all 118 (radius definitions, first ionization energy, affinities, oxidation states, uses), all photographs and their rights, ambiguous historical quiz answers/distractors, actual browser review, and a complete packaged Windows regression. **Do not merge to `main` or resubmit to Microsoft.**

## Audit session 12 — 2026-10-14: elements 111–118 (roentgenium to oganesson)

**Atomic-weight checkpoint COMPLETE (not full science audit):** Compared all 118 elements' atomic-weight conventions with [CIAAW abridged standard atomic weights 2024](https://www.ciaaw.org/abridged-atomic-weights.htm). Elements 111–118 have no standard atomic weights. The application now uses `null` on both tables and separately stores the [Royal Society of Chemistry](https://periodic-table.rsc.org/) bracketed **isotope mass number**, which is *not* an actual standard atomic weight or precision isotope mass.

| Z | Symbol | Standard weight | RSC reference isotope mass number | Discovery / evidence milestone |
|---:|---|---|---:|---|
| 111 | Rg | None | [280] | 1994: GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg |
| 112 | Cn | None | [285] | 1996: GSI Darmstadt team led by Sigurd Hofmann |
| 113 | Nh | None | [286] | 2004: RIKEN team led by Kosuke Morita (Japan) |
| 114 | Fl | None | [289] | 1998: JINR Dubna team led by Yuri Oganessian and Vladimir Utyonkov |
| 115 | Mc | None | [289] | 2003: JINR Dubna, Lawrence Livermore, and Oak Ridge research collaborations |
| 116 | Lv | None | [293] | 2000: JINR Dubna and Lawrence Livermore researchers led by Yuri Oganessian, Vladimir Utyonkov, and Kenton Moody |
| 117 | Ts | None | [294] | 2010: JINR Dubna, Lawrence Livermore, and Oak Ridge research collaborations |
| 118 | Og | None | [294] | 2006: JINR Dubna and Lawrence Livermore collaboration |

**Reference-based corrections and attribution notes:**
- #111 Roentgenium: GSI Darmstadt, 1994, Armbruster/Münzenberg team; RIKEN independently confirmed in 2003. Configuration `[Rn] 5f14 6d10 7s1` (not old `6d9 7s2`); RSC isotope **[280]**, not earlier 281 or detailed isotope mass.
- #112 Copernicium: Sigurd Hofmann/GSI Darmstadt 1996 synthesis of isotope 277; RSC selected mass-number reference **[285]**. Historical evidence and isotope reference are distinct.
- #113 Nihonium: Kosuke Morita/RIKEN team first synthesis 2004, repeated in 2005/2012; **IUPAC 2015** discovery recognition and **2016** formal naming. RSC reference **[286]** rather than old main-table 284.
- #114 Flerovium: 1998 synthesis by JINR Dubna Oganessian/Utyonkov; RSC isotope [289].
- #115 Moscovium: initial 2003 reports; IUPAC officially recognized collaborative JINR/LLNL/ORNL evidence in 2015, naming approved 2016. RSC [289] (not earlier 288).
- #116 Livermorium: JINR/LLNL 2000 discovery, earlier fabricated 1999 Berkeley claim withdrawn. RSC [293].
- #117 Tennessine: 2010 JINR/LLNL/ORNL collaboration; IUPAC recognition 2015/naming 2016; RSC reference **[294]** instead of old main-table 292.
- #118 Oganesson: JINR/LLNL 2006 discovery-qualifying experiments (recognized 2015; name approved 2016), honors Yuri Oganessian, RSC [294].

**Physical state caution:** The RSC fact boxes mark all #111–118 as **solid at 20°C**. Their bulk states have not been empirically characterized; details therefore display `Expected solid (RSC classification; unverified)`, not measured solid. The main table retains `Unknown / predicted`. In particular, the app no longer inaccurately infers that **oganesson is a gas merely because it belongs to group 18**. All eight have no experimental melting/boiling/density in the RSC fact boxes and preserve `null`, so the temperature slider returns **unknown**. Their RSC electron configurations are theoretical rather than measured, so users should not interpret them as experimentally validated.

**Additional unknown values:** RSC lists common oxidation states and Pauling electronegativity as Unknown for these superheavy elements; removed speculative numeric/list values. Unverified ionisation energies are left null. No new photograph or asset from RSC was copied; [RSC image reuse conditions](https://periodic-table.rsc.org/element/111/roentgenium) require separate rights review.

**Primary references:** [CIAAW 2024](https://www.ciaaw.org/abridged-atomic-weights.htm), RSC [Rg](https://periodic-table.rsc.org/element/111/roentgenium), [Cn](https://periodic-table.rsc.org/element/112/copernicium), [Nh](https://periodic-table.rsc.org/element/113/nihonium), [Fl](https://periodic-table.rsc.org/element/114/flerovium), [Mc](https://periodic-table.rsc.org/element/115/moscovium), [Lv](https://periodic-table.rsc.org/element/116/livermorium), [Ts](https://periodic-table.rsc.org/element/117/tennessine), [Og](https://periodic-table.rsc.org/element/118/oganesson), [IUPAC 2015 discoveries](https://iupac.org/discovery-and-assignment-of-elements-with-atomic-numbers-113-115-117-and-118/), [IUPAC 2016 names](https://iupac.org/iupac-announces-the-names-of-the-elements-113-115-117-and-118/).

**RELEASE GATE IS STILL OPEN.** This is only the first cross-check of atomic weights and selected thermal/physical/discovery properties. The remaining work includes chemistry field-by-field verification for all elements (radii definitions, measured and estimated ionization/affinity/oxidation values, actual uses), image-source authenticity/license, quiz-answer/distractor review, full live browser/UI/responsive tests, actual Node/CI tests, and the Microsoft Store packaged app regression. **Do not merge to main or resubmit before these checks.**

## Audit session 13 — 2026-10-14: second-stage property/quiz/image checks

**Science:** Cross-checked **90 measurement slots** in elements #1–30 with PubChem [van der Waals atomic radii](https://pubchem.ncbi.nlm.nih.gov/periodic-table/atomic-radius/), [first ionization energies](https://pubchem.ncbi.nlm.nih.gov/periodic-table/ionization-energy/), and [electron affinities](https://pubchem.ncbi.nlm.nih.gov/periodic-table/electron-affinity/) at the source's displayed precision. All 90 match; null means not supplied, not zero. App now labels radius as **van der Waals** (not an unspecified atomic radius), ionisation as **first**, and oxidation states as **common** rather than an exhaustive list. Superheavy calculated electron configurations are explicitly labelled. Scientific fields for #31–118 and other claims are still not fully certified.

**Quiz:** The earlier code generated misleading `discoverer-` questions even for shared/contested discoverers; similarly `use-` prompts had several plausible answers from uses shared by different elements. Disabled these two automatic categories. Retained 4 symbol/atomic-number question types per element and 19 well-established family prompts, with eight original facts and seven new reviewed facts (six historical). **506 generated questions** passed isolated logic validation: unique IDs, four different choices each, exactly one programmed correct answer. This is not live browser interaction testing and cannot guarantee that every unchecked fact is scientifically correct.

**Image inventory:** Catalog covers 118. **14** repeated placeholder images #105, #106, #107, #108, #109, #110, #111, #112, #113, #114, #115, #116, #117, #118 marked `No Image Found`. **8** image titles explicitly state that they are illustrations or not element samples (#84, #85, #86, #87, #101, #102, #103, #104). **2** images lack a licence URL *and* public-domain assertion (#94, #96); **10** others claim public domain in attribution but lack a machine-readable licence URL (#8, #17, #53, #91, #92, #93, #97, #98, #99, #100). The metadata's Creative Commons and public-domain claims still need independent source verification. Detail UI now hides placeholders/illustrations and images without even a stated reuse right, and tells users remaining images' provenance/permissions are under review. The GitHub binary images remain present; display withholding does **not** establish the rights to distribute them in the repository/package.

**Release blockers remain:** Verify rest of chemistry properties, typical uses and appearance claims for all records; review original image pages/licences for each media asset; full actual browser and packaged app QA; do not merge to main or resubmit to Microsoft.

## Audit session 14 — 2026-10-14: extended PubChem scientific-property checks, elements 31–60

Checked another **90 source-defined scientific values** for elements **31–60**, compared with PubChem's [van der Waals radius](https://pubchem.ncbi.nlm.nih.gov/periodic-table/atomic-radius/), [first ionization energy](https://pubchem.ncbi.nlm.nih.gov/periodic-table/ionization-energy/), and [electron affinity](https://pubchem.ncbi.nlm.nih.gov/periodic-table/electron-affinity/) tables (including null/missing values). All 90 match at PubChem tabular precision; no scientific numeric data edits needed. **Cumulative: 180 of 354 slots** (3 properties × 118 elements) checked in this specific category. This is not a full review of every chemistry field; electronegativity, oxidation, uses, appearance, radius conventions/measurement limitations and elements 61–118 require further review. The photo license issue is still unresolved: Wikimedia Commons' [plutonium ring page](https://commons.wikimedia.org/wiki/File:Plutonium_ring.jpg) calls for specific Los Alamos Laboratory attribution despite the metadata using a vague "Attribution" field. The UI currently withholds it while provenance is reviewed, and the file is still in the repository.

## Audit session 15 — 2026-10-14: source-defined numeric property comparison reaches 118/118

Extended the three-property PubChem comparison to all remaining elements, **61–118**. PubChem reference tables: [atomic radius (van der Waals, pm)](https://pubchem.ncbi.nlm.nih.gov/periodic-table/atomic-radius/), [first ionization energy (eV)](https://pubchem.ncbi.nlm.nih.gov/periodic-table/ionization-energy/), [electron affinity (eV)](https://pubchem.ncbi.nlm.nih.gov/periodic-table/electron-affinity/). A numeric match was required at PubChem's published rounding, and source-missing values remained `null` rather than zero. **All 354 field slots matched** (3 fields × 118 entries); these fixtures are now part of the automated regression suite.

**Scope caution:** This confirms alignment with PubChem's **particular dataset**, not independent laboratory verification of every entry; the underlying original app also uses values consistent with PubChem so agreement is unsurprising. Atomic-radius definition is specifically van der Waals, not equivalent to other atomic radius conventions. For superheavy elements, missing values are legitimate rather than experimentally established zeros. Scientific fields *not yet reviewed exhaustively* include Pauling electronegativity (the RSC and PubChem differ in which rare-gas values they provide), oxidation states, chemistry examples/uses/appearance, and detailed ground-state configuration provenance for elements 1–60. The photograph-rights and actual app QA release gate remains open; do not merge or submit.

## Audit session 16 — 2026-10-14: verified oxidation states, Pauling gaps, configurations and uses

**Work performed:** Audited selected high-risk chemistry fields using the Royal Society of Chemistry's [element fact boxes, atomic data and uses](https://periodic-table.rsc.org/) and NIST's [neutral-atom ground configurations](https://www.nist.gov/pml/atomic-reference-data-electronic-structure-calculations/atomic-reference-data-electronic-8). 25 scientifically substantive or clarifying **field modifications** across 20 element records, confined to this audit branch.

### Verified updates
| Element | Property | Previously shown | Corrected value / qualification |
|---|---|---|---|
| 8 (O) | oxidationStates | "-2" | "-1, -2" |
| 17 (Cl) | oxidationStates | "+7, +5, +1, -1" | "+7, +5, +3, +1, -1" |
| 35 (Br) | oxidationStates | "+5, +1, -1" | "+7, +5, +3, +1, -1" |
| 36 (Kr) | oxidationStates | "0" | "+2" |
| 42 (Mo) | oxidationStates | "+6" | "+6, +5, +4, +3, +2, 0" |
| 44 (Ru) | oxidationStates | "+3" | "+8, +6, +4, +3, +2, 0, -2" |
| 45 (Rh) | oxidationStates | "+3" | "+5, +4, +3, +2, +1, 0" |
| 46 (Pd) | oxidationStates | "+3, +2" | "+4, +2, 0" |
| 47 (Ag) | oxidationStates | "+1" | "+2, +1" |
| 54 (Xe) | oxidationStates | "0" | "+6, +4, +2" |
| 6 (C) | appearance | null | "Appearance depends on allotrope: diamond is clear and transparent; graphite is black and shiny; graphene and fullerenes can form dark materials." |
| 8 (O) | appearance | null | "Colorless, odorless gas at room temperature." |
| 9 (F) | appearance | null | "Very pale yellow-green, highly reactive gas." |
| 35 (Br) | appearance | null | "Deep reddish-brown, oily liquid with an irritating vapor; toxic." |
| 96 (Cm) | appearance | "silvery metallic, glows purple in the dark" | "Silvery radioactive metal that tarnishes in air." |
| 100 (Fm) | appearance | null | "Radioactive metal produced only in extremely small quantities." |
| 14 (Si) | typicalUses | "Computer chips, solar cells, glass, concrete, and silicones." | "Elemental silicon is used in semiconductor chips and solar cells; silicon-containing compounds are used in glass, concrete and silicones." |
| 33 (As) | typicalUses | "Semiconductors, wood preservatives, specialty glass, and some alloys; many arsenic compounds are toxic." | "Arsenic-containing compounds have applications in certain semiconductors, specialty glass and alloys. Historical arsenic wood preservatives face significant restrictions because of toxicity." |
| 35 (Br) | typicalUses | "Flame retardants, water treatment, pharmaceuticals, photographic chemistry, and industrial compounds." | "Bromine-containing compounds are used in pharmaceuticals, chemical synthesis, some water-treatment applications and some flame retardants; several historical uses have been restricted or phased out." |
| 95 (Am) | electronegativity | 1.3 | null |
| 96 (Cm) | electronegativity | 1.3 | null |
| 97 (Bk) | electronegativity | 1.3 | null |
| 98 (Cf) | electronegativity | 1.3 | null |
| 99 (Es) | electronegativity | 1.3 | null |
| 100 (Fm) | electronegativity | 1.3 | null |

**Oxidation states:** RSC lists common states of oxygen **−1, −2**, including peroxides; chlorine **+7, +5, +3, +1, −1**; bromine **+7, +5, +3, +1, −1**; krypton **+2** (KrF₂ chemistry); xenon **+6, +4, +2** (noble-gas chemistry). Also aligned selected states for molybdenum, ruthenium, rhodium, palladium and silver with RSC fact boxes; these had misleadingly incomplete or different lists. **RSC "common" is a convention, not all possible oxidation states; an uncombined element itself has oxidation state 0.** For source context see RSC [oxygen](https://periodic-table.rsc.org/element/8/oxygen), [chlorine](https://periodic-table.rsc.org/element/17/chlorine), [bromine](https://periodic-table.rsc.org/element/35/bromine), [krypton](https://periodic-table.rsc.org/element/36/krypton), [xenon](https://periodic-table.rsc.org/element/54/xenon), [molybdenum](https://periodic-table.rsc.org/element/42/molybdenum), [ruthenium](https://periodic-table.rsc.org/element/44/ruthenium), [rhodium](https://periodic-table.rsc.org/element/45/rhodium), [palladium](https://periodic-table.rsc.org/element/46/palladium), and [silver](https://periodic-table.rsc.org/element/47/silver).

**Pauling electronegativity:** RSC reports **Unknown** for americium, curium, berkelium, californium, einsteinium and fermium (#95–100). Previously unqualified `1.3` values in the app were not justified by this source: replaced with `null` rather than treating an estimate as a measured datum. RSC [Am](https://periodic-table.rsc.org/element/95/americium), [Cm](https://periodic-table.rsc.org/element/96/curium), [Bk](https://periodic-table.rsc.org/element/97/berkelium), [Cf](https://periodic-table.rsc.org/element/98/californium), [Es](https://periodic-table.rsc.org/element/99/einsteinium), [Fm](https://periodic-table.rsc.org/element/100/fermium). **Source disagreement recorded:** RSC reports 1.3 for neptunium and plutonium, while app has 1.36 and 1.28 respectively (different precision/conventions among tables). Those values were **not silently overwritten**; reconciling source provenance of their Pauling values remains open.

**Appearances and uses:** The old description "curium glows purple in the dark" is not an established visible appearance; replaced with RSC's silvery radioactive metal/tarnishing description. Filled source-confirmed blank appearances for carbon's distinct allotropes, oxygen, fluorine, bromine, and fermium. Specifically differentiated elemental silicon from silicon compounds, industrial bromine compounds and legacy uses, and arsenic applications/restrictions. Revised page heading to say "**Typical Uses (Element and Its Compounds)**", explicitly reminding readers that uses of an element, alloy and chemical compound must not be conflated. These edits do **not** assert all other uses are independently verified. Sources: RSC [carbon](https://periodic-table.rsc.org/element/6/carbon), [oxygen](https://periodic-table.rsc.org/element/8/oxygen), [fluorine](https://periodic-table.rsc.org/element/9/fluorine), [bromine](https://periodic-table.rsc.org/element/35/bromine), [curium](https://periodic-table.rsc.org/element/96/curium), [fermium](https://periodic-table.rsc.org/element/100/fermium).

**Electron configurations:** NIST's list was used to verify the distinctive ground-state configurations of Cr, Cu, Nb, Mo, Tc, Ru, Rh, Pd, Ag, Ce, Pt and Au, accounting for **orbital occupation**, not text token ordering. These 12 checked cases agreed and required no changes. A new structural regression also verifies all **118** configurations sum to the correct number of electrons, have legal subshell capacities, have no duplicate orbitals, and valid notation. This detects malformed configurations but does **not** independently prove the ground-state ordering for every synthetic element; many are calculated.

**Remaining:** Full one-by-one oxidation/Pauling/appearance/use review of all other element records is *not yet finished*. Image license clearance still 0/118; browser, real Node runtime, packaged Store QA, etc., remain open. No main branch merge or Microsoft Store submission.

### Audit session 16 extension — additional transition-metal oxidation values

Cross-checked RSC source listings and expanded oxidation values for **Cr (24)**, **Mn (25)**, **Fe (26)**, and **Ni (28)**. In these cases, RSC includes relatively uncommon but documented states; showing only a short list under "common oxidation states" had concealed chemistry relevant to the source. Exact replacements:

- **Chromium #24:** +6, +3, +2 → +6, +3, +2, 0
- **Manganese #25:** +7, +4, +3, +2 → +7, +6, +4, +3, +2, 0, -1
- **Iron #26:** +3, +2 → +6, +3, +2, 0, -2
- **Nickel #28:** +3, +2 → +3, +2, 0

Source pages: [Cr](https://periodic-table.rsc.org/element/24/chromium), [Mn](https://periodic-table.rsc.org/element/25/manganese), [Fe](https://periodic-table.rsc.org/element/26/iron), [Ni](https://periodic-table.rsc.org/element/28/nickel). Oxidation states of a **free element** are 0; positive/negative values relate to compounds. This is a RSC-aligned list and should not be misconstrued as relative prevalences. No other data were changed.

## Audit session 17 — 2026-10-14: RSC Pauling, oxidation, element-vs-compound applications, elements 31–60

**Method:** Compared *every one of the 30 Pauling electronegativity entries (including missing values)* from Z=31–60 with the Royal Society of Chemistry's individual [periodic table element fact boxes](https://periodic-table.rsc.org/), using the declared Pauling scale. **29 originally matched; #43 technetium differed (app 1.9 vs RSC 2.10)** and is now 2.10. This source-specific match does not establish that all alternative electronegativity scales or estimates agree.

**Praseodymium #59:** RSC lists **+4 and +3** common oxidation states, not only +3. Added +4.

**Descriptions and uses:** Independently cross-checked targeted high-risk wording against RSC's appearance/uses sections: Ga, Ge, Sr, Zr, Tc, Sb, Te, I, Ba, La, and Ce. Removed ambiguities about **elemental gallium versus gallium arsenide/nitride**, **strontium metal versus red-flame strontium salts**, **zirconium metal versus zirconia**, **technetium vs 99mTc compounds**, **antimony compounds vs metal alloys**, **tellurium vs tellurides**, **iodide salts vs iodine**, **barium sulfate imaging vs other toxic soluble barium compounds**, and compounds in optical glass and polishing. Appearance blanks for strontium, tellurium, and barium were replaced by grounded descriptions. No visual assets were copied.

**Corrected fields: 20 across 12 element records**, all on `scientific-audit-2026-10`:

| Element | Field | Before | After |
|---|---|---|---|
| 31 Ga | appearance | "silver-white" | "A soft, silvery-white metal." |
| 31 Ga | typicalUses | "Semiconductors, LEDs, solar cells, low-melting alloys, and thermometers." | "Gallium arsenide and gallium nitride are semiconductors used in LEDs, electronics and some solar cells. Elemental gallium is used in low-melting alloys and specialized thermometers." |
| 32 Ge | appearance | "grayish-white" | "A brittle, silvery-white metalloid." |
| 38 Sr | appearance | null | "A soft, silvery metal that reacts with water and readily oxidizes in air." |
| 38 Sr | typicalUses | "Fireworks, signal flares, ferrite magnets, ceramics, and medical imaging compounds." | "Strontium salts give red colors to fireworks and flares. Strontium ferrite is used in magnets, and strontium compounds are used in ceramics and other specialty materials." |
| 40 Zr | typicalUses | "Nuclear reactor cladding, ceramics, foundry molds, and corrosion-resistant alloys." | "Zirconium metal alloys are used for nuclear-reactor cladding and corrosion-resistant components. Zirconium dioxide (zirconia) is used in ceramics, foundry products and refractory materials." |
| 43 Tc | electronegativity | 1.9 | 2.1 |
| 43 Tc | appearance | "shiny gray metal" | "A radioactive, silvery metal." |
| 43 Tc | typicalUses | "Medical diagnostic imaging and scientific research." | "Technetium-99m compounds are widely used for medical diagnostic imaging. Other technetium applications are limited by its radioactivity." |
| 51 Sb | appearance | "silvery lustrous gray" | "In its metallic form, a silvery, hard and brittle metalloid." |
| 51 Sb | typicalUses | "Flame retardants, alloys, semiconductors, and some specialty materials." | "Antimony metal is used in hardening alloys and some semiconductor devices. Antimony compounds are used in flame-retardant formulations, glass and ceramics; many compounds are toxic." |
| 52 Te | appearance | null | "A grey metalloid, often obtained as a powder." |
| 52 Te | typicalUses | "Solar cells, thermoelectric devices, alloys, rubber processing, and optical materials." | "Tellurium is added to copper, steel and lead alloys to alter their properties. Telluride compounds are used in some solar cells and thermoelectric devices; tellurium also has specialized rubber and semiconductor uses." |
| 53 I | appearance | "lustrous metallic gray, violet as a gas" | "Shiny black crystals that release violet vapor when heated." |
| 53 I | typicalUses | "Medicine, disinfectants, photography, and nutrition as an essential trace element." | "Iodide salts are used in iodized table salt, medicines, disinfectants and photographic chemistry. Iodine compounds have industrial uses; iodine-131 is used in selected thyroid treatments." |
| 56 Ba | appearance | null | "A soft, silvery metal that quickly tarnishes in air and reacts with water." |
| 56 Ba | typicalUses | "Medical imaging compounds, drilling fluids, ceramics, glass, and fireworks." | "Barium sulfate is used in X-ray gastrointestinal imaging and drilling fluids; its very low solubility distinguishes it from toxic soluble barium compounds. Other barium compounds are used in glass, ceramics and green fireworks." |
| 57 La | typicalUses | "Camera lenses, catalysts, batteries, lighting, and specialty alloys." | "Lanthanum-containing optical glass and catalysts use its compounds. Lanthanum alloys are used in some rechargeable batteries and specialty metals." |
| 58 Ce | typicalUses | "Catalytic converters, glass polishing, lighter flints, and specialty alloys." | "Cerium oxide is used to polish glass and in catalytic converters. Cerium-containing alloys are used in lighter flints and specialty metal products." |
| 59 Pr | oxidationStates | "+3" | "+4, +3" |

**Source pages:** [Ga 31](https://periodic-table.rsc.org/element/31/gallium), [Ge 32](https://periodic-table.rsc.org/element/32/germanium), [Sr 38](https://periodic-table.rsc.org/element/38/strontium), [Zr 40](https://periodic-table.rsc.org/element/40/zirconium), [Tc 43](https://periodic-table.rsc.org/element/43/technetium), [Sb 51](https://periodic-table.rsc.org/element/51/antimony), [Te 52](https://periodic-table.rsc.org/element/52/tellurium), [I 53](https://periodic-table.rsc.org/element/53/iodine), [Ba 56](https://periodic-table.rsc.org/element/56/barium), [La 57](https://periodic-table.rsc.org/element/57/lanthanum), [Ce 58](https://periodic-table.rsc.org/element/58/cerium), [Pr 59](https://periodic-table.rsc.org/element/59/praseodymium).

**Scope:** Other oxidation-state fields may deliberately use a broader list of experimentally known states than RSC's narrow 'common' list (e.g. Ge(II) has real chemistry although RSC lists only +4 in that column), so no unsupported deletion was applied. Work remains for broader electronegativity comparison outside this band, further oxidation/use/appearance reviews, image licensing and actual app/browser QA. **No main merge or Store submission.**

## Audit session 18 — 2026-10-14: lanthanides 61–70, Pauling and oxidation/uses

Checked the ten **Pauling electronegativity** entries (including missing values) against the [Royal Society of Chemistry element pages](https://periodic-table.rsc.org/) for [Pm](https://periodic-table.rsc.org/element/61/promethium), [Sm](https://periodic-table.rsc.org/element/62/samarium), [Eu](https://periodic-table.rsc.org/element/63/europium), [Gd](https://periodic-table.rsc.org/element/64/gadolinium), [Tb](https://periodic-table.rsc.org/element/65/terbium), [Dy](https://periodic-table.rsc.org/element/66/dysprosium), [Ho](https://periodic-table.rsc.org/element/67/holmium), [Er](https://periodic-table.rsc.org/element/68/erbium), [Tm](https://periodic-table.rsc.org/element/69/thulium) and [Yb](https://periodic-table.rsc.org/element/70/ytterbium). **All 10 Pauling values already match** RSC, including the four RSC-unknown slots: Pm, Eu, Tb, Yb. No Pauling values changed.

RSC explicitly records terbium's selected common oxidation states as **+4 and +3** (previous app only +3), and thulium's as **+3 and +2** (previous app only +3). These omissions are corrected. RSC described europium as a soft reactive silvery metal, and ytterbium as a soft silvery metal forming an oxide layer; missing appearances now filled. Uses of europium, gadolinium, terbium and ytterbium have been reworded to distinguish metal, alloys and compounds, without implying the pure metal itself performs every industrial application.

**8 field changes in 5 elements**, committed to scientific-audit branch only.

| Z | Field | Previous | New |
|---:|---|---|---|
| 65 Tb | oxidationStates | "+3" | "+4, +3" |
| 69 Tm | oxidationStates | "+3" | "+3, +2" |
| 63 Eu | appearance | null | "A soft, silvery metal that tarnishes quickly and reacts with water." |
| 70 Yb | appearance | null | "A soft, silvery metal that gradually develops a protective oxide layer in air." |
| 63 Eu | typicalUses | "Red and blue phosphors, anti-counterfeiting inks, lasers, and nuclear control materials." | "Europium compounds provide light-emitting phosphors for lamps, displays and UV-visible security inks. Europium-containing materials also have specialized laser and neutron-absorption uses." |
| 64 Gd | typicalUses | "MRI contrast compounds, neutron shielding, magnets, and specialty alloys." | "Gadolinium-containing compounds are used as MRI contrast agents; gadolinium-containing alloys are used in magnets and electronics. Its neutron-absorbing properties are useful in nuclear technology." |
| 65 Tb | typicalUses | "Green phosphors, solid-state devices, lasers, and specialty magnets." | "Terbium compounds provide green phosphors for lighting and displays. Terbium-containing alloys are used in some magnetic and electronic materials." |
| 70 Yb | typicalUses | "Fiber lasers, stainless steel improvement, stress gauges, and atomic-clock research." | "Ytterbium compounds and materials are used in certain tunable or fiber lasers and specialty catalysts; other uses remain limited or experimental." |

These RSC-selected common oxidation states are not exhaustive enumerations of every exotic complex or compound. Photos, other science fields and integrated browser/package QA are still not cleared. Do not merge to main or resubmit.

## Audit session 19 — 2026-10-14: elements 71–90, Pauling / oxidation / appearance / uses

Compared every **Pauling electronegativity** and RSC **common oxidation states** record for #71–90 with the twenty individual [Royal Society of Chemistry element data](https://periodic-table.rsc.org/) pages. 49 changes in 20 records, including 8 electronegativity realignments, 8 oxidation-list corrections, 16 appearance clarifications, and 17 applications clarifications.

**Critical source-convention warning:** RSC publishes some Pauling electronegativity numbers different from other credible chemistry sources. Notably RSC **Lu 1.0** (app's previous 1.27), **W 1.7** (2.36), **Pt 2.2** (2.28), **Au 2.4** (2.54), **Hg 1.9** (2.0), **Tl 1.8** (1.62), **Pb 1.8** (2.33), **Bi 1.9** (2.02). Aligning to RSC **does not establish the previous values as inherently scientifically false**; they are reported by other published Pauling compilations. The app's display now follows the declared RSC reference for this batch and source provenance is documented here. RSC [Lu](https://periodic-table.rsc.org/element/71/lutetium), [W](https://periodic-table.rsc.org/element/74/tungsten), [Pt](https://periodic-table.rsc.org/element/78/platinum), [Au](https://periodic-table.rsc.org/element/79/gold), [Hg](https://periodic-table.rsc.org/element/80/mercury), [Tl](https://periodic-table.rsc.org/element/81/thallium), [Pb](https://periodic-table.rsc.org/element/82/lead), [Bi](https://periodic-table.rsc.org/element/83/bismuth).

**Confirmed oxidation corrections** from the RSC-specific selected-states list: tungsten **+6,+5,+4,+3,+2,0**, rhenium **+7,+6,+4,+2,−1**, osmium **+8,+6,+4,+3,+2,0,−2**, iridium **+6,+4,+3,+2,+1,0,−1**, gold **+5,+4,+3,+2,+1,−1**, polonium **+6,+4,+2**, astatine **+7,+5,+3,+1,−1** (also fix missing plus signs), radon **+2** (rather than simply 0). Other elements' oxidation lists already matched RSC. The existence of 0 for free elements, including radon, is not negated; RSC's compound-oxidation list uses +2 for radon. Relevant source pages: [W](https://periodic-table.rsc.org/element/74/tungsten), [Re](https://periodic-table.rsc.org/element/75/rhenium), [Os](https://periodic-table.rsc.org/element/76/osmium), [Ir](https://periodic-table.rsc.org/element/77/iridium), [Au](https://periodic-table.rsc.org/element/79/gold), [Po](https://periodic-table.rsc.org/element/84/polonium), [At](https://periodic-table.rsc.org/element/85/astatine), [Rn](https://periodic-table.rsc.org/element/86/radon).

**Appearance and uses review:** Corrected misleading descriptions (especially astatine's unobserved macroscopic appearance, radon's unspecified discharge glow, mercury as a liquid, and appearance of bismuth/polonium). In descriptions of hafnium, tungsten, platinum, bismuth and other metals, clarified which actual uses involve metals, alloys, oxides, salts or radioisotopes, including medical uses of lutetium-177 and radium-223. Explicitly noted discontinued/regulated uses of mercury, lead and thallium, and experimental rather than established use of astatine-211 or actinium-225. This does not claim a verified comprehensive taxonomy of all possible applications.

| Element | Changed field | Prior application value | New audited value |
|---|---|---|---|
| 71 Lu | electronegativity | 1.27 | 1 |
| 74 W | electronegativity | 2.36 | 1.7 |
| 74 W | oxidationStates | "+6" | "+6, +5, +4, +3, +2, 0" |
| 75 Re | oxidationStates | "+7, +6, +4" | "+7, +6, +4, +2, -1" |
| 76 Os | oxidationStates | "+4, +3" | "+8, +6, +4, +3, +2, 0, -2" |
| 77 Ir | oxidationStates | "+4, +3" | "+6, +4, +3, +2, +1, 0, -1" |
| 78 Pt | electronegativity | 2.28 | 2.2 |
| 79 Au | electronegativity | 2.54 | 2.4 |
| 79 Au | oxidationStates | "+3, +1" | "+5, +4, +3, +2, +1, -1" |
| 80 Hg | electronegativity | 2 | 1.9 |
| 81 Tl | electronegativity | 1.62 | 1.8 |
| 82 Pb | electronegativity | 2.33 | 1.8 |
| 83 Bi | electronegativity | 2.02 | 1.9 |
| 84 Po | oxidationStates | "+4, +2" | "+6, +4, +2" |
| 85 At | oxidationStates | "7, 5, 3, 1, -1" | "+7, +5, +3, +1, -1" |
| 86 Rn | oxidationStates | "0" | "+2" |
| 71 Lu | appearance | "silvery white" | "A hard, dense, silvery-white metal." |
| 72 Hf | appearance | "steel gray" | "A shiny, corrosion-resistant silvery metal." |
| 73 Ta | appearance | "gray blue" | "A shiny, silvery metal that is highly resistant to corrosion." |
| 74 W | appearance | "grayish white, lustrous" | "A shiny, silvery-white metal with an exceptionally high melting point." |
| 76 Os | appearance | "silvery, blue cast" | "A shiny, silver metal that resists corrosion; its oxide osmium tetroxide is highly toxic." |
| 77 Ir | appearance | "silvery white" | "A hard, silvery metal with exceptional corrosion resistance." |
| 80 Hg | appearance | "silvery" | "A silvery liquid metal at ordinary room temperature; toxic vapor can be released." |
| 81 Tl | appearance | "silvery white" | "A soft, silvery-white metal that tarnishes easily." |
| 83 Bi | appearance | "lustrous silver" | "A silvery metal with a pinkish tinge." |
| 84 Po | appearance | "silvery" | "A silvery-grey, highly radioactive semimetal." |
| 85 At | appearance | "unknown, probably metallic" | "The bulk appearance of astatine has not been directly established; only very small, highly radioactive quantities have been produced." |
| 86 Rn | appearance | "colorless gas, occasionally glows green or red in discharge tubes" | "A colourless, odourless, radioactive gas at room temperature." |
| 87 Fr | appearance | null | "Its bulk appearance has not been observed; the metal is expected to resemble other alkali metals, but available quantities are minute." |
| 88 Ra | appearance | "silvery white metallic" | "A soft, shiny, silvery radioactive metal." |
| 89 Ac | appearance | null | "A soft, silvery-white radioactive metal." |
| 90 Th | appearance | "silvery, often with black tarnish" | "A weakly radioactive, silvery metal that can tarnish." |
| 71 Lu | typicalUses | "Petroleum-refining catalysts, LED phosphors, detectors, and specialty alloys." | "Lutetium and its compounds have limited industrial use. Lutetium-based catalysts can assist hydrocarbon cracking in petroleum refining, and lutetium-177 is used in certain radiopharmaceutical cancer treatments." |
| 72 Hf | typicalUses | "Nuclear reactor control materials, superalloys, plasma-cutting electrodes, and microelectronics." | "Hafnium metal is used in neutron-absorbing control rods, high-temperature alloys, and plasma torch electrodes. Hafnium oxide is used as an electrical insulator in microchips." |
| 73 Ta | typicalUses | "Electronic capacitors, surgical implants, chemical equipment, and high-temperature alloys." | "Tantalum metal is used in compact electronic capacitors, surgical implants, and corrosion-resistant equipment. Its protective oxide film acts as the capacitor dielectric." |
| 74 W | typicalUses | "Cutting tools, high-temperature alloys, lamp filaments, electronics, and machinery." | "Tungsten metal and its alloys are used in high-temperature electrodes, heating elements and specialty components. Tungsten carbide, a compound of tungsten and carbon, is used in cutting and drilling tools; incandescent lamp filaments are a historical use." |
| 76 Os | typicalUses | "Hard alloys, electrical contacts, fountain-pen tips, and catalysts." | "Osmium-containing hard alloys have been used in pen tips, instrument pivots and electrical contacts. Some osmium compounds serve as catalysts; osmium tetroxide is volatile and highly toxic." |
| 77 Ir | typicalUses | "Spark plugs, crucibles, electrical contacts, and corrosion-resistant alloys." | "Iridium and its alloys are used for durable spark-plug electrodes, high-temperature components and corrosion-resistant instruments; iridium compounds have specialist catalytic uses." |
| 78 Pt | typicalUses | "Catalytic converters, jewelry, laboratory equipment, electronics, and medical devices." | "Platinum metal is used in automotive catalytic converters, jewellery, fuel-cell catalysts and laboratory equipment. Platinum-based compounds are used in certain anticancer medicines." |
| 80 Hg | typicalUses | "Some lamps, scientific instruments, switches, and industrial processes; its use is tightly controlled because mercury is toxic." | "Mercury was historically used in thermometers, switches, lamps and chemical production. Many of these uses have been restricted or phased out because mercury and some mercury compounds are highly toxic." |
| 81 Tl | typicalUses | "Electronics, infrared detectors, specialty glass, and certain alloys; thallium compounds are highly toxic." | "Thallium-containing materials have niche electronic, photoelectric and optical-glass applications. Historical uses of highly toxic thallium compounds as rodenticides are prohibited or restricted in many countries." |
| 82 Pb | typicalUses | "Lead-acid batteries, radiation shielding, weights, and specialized alloys." | "Lead metal and lead-containing compounds are used in lead–acid batteries, radiation shielding and some specialty alloys. Exposure to lead is hazardous, especially for children, and many former uses have been restricted." |
| 83 Bi | typicalUses | "Medicines, low-melting alloys, fire-safety devices, cosmetics pigments, and laboratory materials." | "Bismuth is used in low-melting metal alloys; bismuth compounds are used in some medicines, pigments, and cosmetics. These applications should not be confused with uses of the pure metal." |
| 84 Po | typicalUses | "Scientific research, static eliminators, and specialized nuclear applications." | "Polonium-210 has been used as a source of alpha particles in specialized antistatic devices and research. Its radioactivity also produces heat, historically investigated for spacecraft equipment." |
| 85 At | typicalUses | "Scientific research only; astatine is extremely rare and radioactive." | "Astatine has no established large-scale commercial use. Astatine-211 is being investigated for targeted alpha-particle cancer therapies." |
| 86 Rn | typicalUses | "Scientific and medical research; radon has no broad commercial use and is a health hazard." | "Radon has no widespread modern practical use. Sealed radon sources were used historically in certain cancer treatments; safer alternatives largely replaced them. Indoor radon exposure is a serious radiation health risk." |
| 88 Ra | typicalUses | "Scientific research and limited specialized medical applications." | "Radium has few present-day uses because it is highly radioactive. Radium-223 is used in some treatments for prostate cancer involving bone metastases; luminous radium paint is a discontinued hazardous historical use." |
| 89 Ac | typicalUses | "Scientific research and neutron-source work." | "Actinium is used primarily in scientific research. Actinium-225 is under investigation and development for targeted alpha-particle cancer therapies." |
| 90 Th | typicalUses | "Potential and limited nuclear-fuel applications, high-temperature materials, and scientific research." | "Thorium is used in certain high-temperature alloys and specialty industrial compounds, including thorium oxide. Thorium-based nuclear fuel cycles have been investigated but are not widely deployed commercially." |

**Reference pages:** [Lu 71](https://periodic-table.rsc.org/element/71/lutetium), [Hf 72](https://periodic-table.rsc.org/element/72/hafnium), [Ta 73](https://periodic-table.rsc.org/element/73/tantalum), [W 74](https://periodic-table.rsc.org/element/74/tungsten), [Re 75](https://periodic-table.rsc.org/element/75/rhenium), [Os 76](https://periodic-table.rsc.org/element/76/osmium), [Ir 77](https://periodic-table.rsc.org/element/77/iridium), [Pt 78](https://periodic-table.rsc.org/element/78/platinum), [Au 79](https://periodic-table.rsc.org/element/79/gold), [Hg 80](https://periodic-table.rsc.org/element/80/mercury), [Tl 81](https://periodic-table.rsc.org/element/81/thallium), [Pb 82](https://periodic-table.rsc.org/element/82/lead), [Bi 83](https://periodic-table.rsc.org/element/83/bismuth), [Po 84](https://periodic-table.rsc.org/element/84/polonium), [At 85](https://periodic-table.rsc.org/element/85/astatine), [Rn 86](https://periodic-table.rsc.org/element/86/radon), [Fr 87](https://periodic-table.rsc.org/element/87/francium), [Ra 88](https://periodic-table.rsc.org/element/88/radium), [Ac 89](https://periodic-table.rsc.org/element/89/actinium), [Th 90](https://periodic-table.rsc.org/element/90/thorium).

**Remaining:** RSC Pauling/oxidation review #91–118; remaining first-30 chemistry and all other fields beyond specifically reviewed sets; rights/licensing of every image; actual browser/quiz testing and package regression. This report documents claims for source validation but is not legal/clinical advice or Store release approval. No merge to main.

## Audit session 20 — 2026-10-14: heavy elements 91–118 (actinide and superheavy chemistry)

**Reference and scope:** Verified **28 Pauling electronegativity** entries and **28 RSC common oxidation-state** entries for elements 91–118 against the individual [Royal Society of Chemistry element fact boxes](https://periodic-table.rsc.org/). Updated records only when verified; all changes confined to `scientific-audit-2026-10`.

- RSC Pauling electronegativity: **Pa=1.5, U=1.7, Np=1.3, Pu=1.3**. **Am through Og (95–118) = Unknown**. Previous U 1.38, Np 1.36, Pu 1.28 follow alternative published compilations, so differences are **source conventions**, not necessarily incorrect chemistry.
- Selected RSC oxidation states: **curium=+4,+3** and **californium=+4,+3**, restoring omitted +4. Existing Pa through Am, berkelium, einsteinium through lawrencium matched RSC. RSC marks oxidation states **Unknown for 104–118**; null is preferable to theoretical claims.
- Appearances: Qualify silvery radioactive metals and fill missing uranium description; avoid describing an unobserved bulk sample of a superheavy element. Fermium's already-tested short description was retained verbatim.
- Uses: Distinguish **U-235 vs U-238** nuclear applications, **Np-237** in neutron detection, **Pu-239 vs Pu-238** in fissile vs radioisotope power uses, **Am-241** smoke detectors, rare curium space-power studies, berkelium synthesis targets, **Cf-252** neutron sources, and Es/Fm research use. The already-accurate research-only descriptions for #101–118 were retained.

**21 record-field edits affecting 10 elements.**

| Element | Field | Before | After |
|---|---|---|---|
| 92 U | electronegativity | 1.38 | 1.7 |
| 93 Np | electronegativity | 1.36 | 1.3 |
| 94 Pu | electronegativity | 1.28 | 1.3 |
| 96 Cm | oxidationStates | "+3" | "+4, +3" |
| 98 Cf | oxidationStates | "+3" | "+4, +3" |
| 91 Pa | appearance | "bright, silvery metallic luster" | "A silvery, radioactive metal." |
| 92 U | appearance | null | "A silvery, radioactive metal." |
| 93 Np | appearance | "silvery metallic" | "A radioactive metal, usually described as silvery." |
| 95 Am | appearance | "silvery white" | "A shiny, silvery radioactive metal." |
| 97 Bk | appearance | "silvery" | "A rare, silvery radioactive metal." |
| 98 Cf | appearance | "silvery" | "A radioactive metal; only small amounts have been prepared." |
| 99 Es | appearance | "silver-colored" | "A radioactive metal produced in very small quantities." |
| 92 U | typicalUses | "Nuclear fuel, radiation shielding, and specialized industrial applications." | "Uranium-containing nuclear fuel is used to generate electricity in nuclear reactors. Uranium-235 and uranium-238 have different nuclear properties; uranium metal and depleted uranium have also been used in shielding and specialized industrial applications." |
| 93 Np | typicalUses | "Scientific research and neutron-detection applications." | "Neptunium has few applications beyond scientific research. Neptunium-237 has been used in neutron-detection equipment." |
| 94 Pu | typicalUses | "Nuclear fuel, radioisotope power sources, weapons programs, and scientific research." | "Plutonium-239 is used as fissile material in some nuclear fuels and nuclear weapons. Plutonium-238 provides heat for radioisotope power systems on spacecraft; uses differ by isotope." |
| 95 Am | typicalUses | "Smoke detectors, industrial gauges, and scientific research." | "Americium-241 is used in some ionization-type smoke detectors and industrial measuring devices. Proposed radioisotope-power applications remain specialized or developmental." |
| 96 Cm | typicalUses | "Scientific research and production of heavier synthetic elements." | "Curium isotopes have been used in radioisotope-power research and specialized space equipment. Most curium applications involve scientific research and producing or studying heavier elements." |
| 97 Bk | typicalUses | "Scientific research only." | "Berkelium has no established commercial use. Small amounts have been used as targets in nuclear research to synthesize heavier elements." |
| 98 Cf | typicalUses | "Neutron sources, reactor start-up sources, and scientific research." | "Californium-252 provides strong neutron sources used in specialized materials analysis, oil-well logging, reactor startup, and scientific research." |
| 99 Es | typicalUses | "Scientific research only." | "Einsteinium is prepared in very small quantities for research, including heavy-element chemistry and the synthesis of heavier elements; it has no established commercial applications." |
| 100 Fm | typicalUses | "Scientific research only." | "Fermium is produced only in tiny amounts for scientific studies of nuclear properties and chemical behavior; it has no established practical use outside research." |

**Individual RSC references:** [Pa](https://periodic-table.rsc.org/element/91/protactinium), [U](https://periodic-table.rsc.org/element/92/uranium), [Np](https://periodic-table.rsc.org/element/93/neptunium), [Pu](https://periodic-table.rsc.org/element/94/plutonium), [Am](https://periodic-table.rsc.org/element/95/americium), [Cm](https://periodic-table.rsc.org/element/96/curium), [Bk](https://periodic-table.rsc.org/element/97/berkelium), [Cf](https://periodic-table.rsc.org/element/98/californium), [Es](https://periodic-table.rsc.org/element/99/einsteinium), [Fm](https://periodic-table.rsc.org/element/100/fermium), [Md](https://periodic-table.rsc.org/element/101/mendelevium), [No](https://periodic-table.rsc.org/element/102/nobelium), [Lr](https://periodic-table.rsc.org/element/103/lawrencium), [Rf](https://periodic-table.rsc.org/element/104/rutherfordium), [Db](https://periodic-table.rsc.org/element/105/dubnium), [Sg](https://periodic-table.rsc.org/element/106/seaborgium), [Bh](https://periodic-table.rsc.org/element/107/bohrium), [Hs](https://periodic-table.rsc.org/element/108/hassium), [Mt](https://periodic-table.rsc.org/element/109/meitnerium), [Ds](https://periodic-table.rsc.org/element/110/darmstadtium), [Rg](https://periodic-table.rsc.org/element/111/roentgenium), [Cn](https://periodic-table.rsc.org/element/112/copernicium), [Nh](https://periodic-table.rsc.org/element/113/nihonium), [Fl](https://periodic-table.rsc.org/element/114/flerovium), [Mc](https://periodic-table.rsc.org/element/115/moscovium), [Lv](https://periodic-table.rsc.org/element/116/livermorium), [Ts](https://periodic-table.rsc.org/element/117/tennessine), [Og](https://periodic-table.rsc.org/element/118/oganesson).

**Quality caveats:** RSC's "common oxidation states" convention does not exhaust specialist literature; a missing Pauling value or unobserved bulk appearance is not physically zero. The present review does not certify every historical/use claim in #1–90. Image licensing, browser integration, actual Node/CI runtime and store packaging remain open. Do not merge to `main` or resubmit to Microsoft.

## Audit session 21 — 2026-10-14: final chemistry review #1–30 and first-20 physical properties

**Scope:** Compared all first-30 elements against the [Royal Society of Chemistry element fact boxes](https://periodic-table.rsc.org/) for **Pauling-scale electronegativity** and RSC's selected **common oxidation states**; all 30 Pauling values already matched, so no electronegativity numbers were changed. RSC's *selected common oxidation-state column* is not an exhaustive claim about every compound. It omits states reported in specialized compounds (e.g. nitrogen +1, titanium +2), which are not "impossible." We align the displayed list to this named source and preserve caveats. The RSC leaves helium, neon and argon compound oxidation-state lists blank; the app now stores `null`, **not** 0, for this *compound-data field*. A free element always has oxidation state zero, a separate chemistry rule.

**Oxidation omissions:** Carbon's RSC list includes **+4,+3,+2,+1,0,−1,−2,−3,−4**, rather than only +4,+2,−4. Sulfur includes **+2**. Vanadium includes **0**, cobalt includes **0 and −1**; titanium's RSC selected list is +4,+3, and silicon's is +4,−4, even though additional states appear in specialist chemistry. Nitrogen's RSC selected list is +5,+4,+3,+2,−3; it omits some less typical real states. No unverified new chemistry was invented.

**Physical properties #1–20:** Their previous stored melting and boiling values and, particularly, gas densities followed other sources or measurement conditions (e.g. hydrogen 0.00008988 vs RSC's 0.000082 g/cm³, helium 0.0001785 vs 0.000164, oxygen 0.001429 vs 0.001308). Aligned **20 source-defined phase/density rows** with RSC's **room-temperature density** and Kelvin melting/boiling convention. This does not mean the previous numerical densities were fabricated; gaseous density varies with temperature and pressure. Helium's normal-pressure melting point remains unknown. For carbon, RSC lists **sublimation at 4098 K** at near atmospheric pressure rather than normal melting/boiling values: set `meltingPoint:null`, `boilingPoint:null`, `sublimationPoint:4098`; the temperature slider's existing sublimation branch prevents a fictitious liquid carbon state. Carbon's displayed density is specifically **graphite 2.2 g/cm³** (diamond about **3.513**); phosphorus's 1.823 is marked **white phosphorus** rather than implying all allotropes share that density.

**Appearances and uses:** Source-checked detailed wording for multiple elements to distinguish elemental forms vs compounds, for example lithium-containing medicine versus metal, borates versus boron, nitrogen gas versus fertilizer compounds, fluoride chemicals versus elemental fluorine, phosphate fertilizer versus red phosphorus on safety-match striking surfaces, potassium salts versus very reactive potassium metal, limestone/cement versus pure calcium, and titanium metal versus pigment titanium dioxide. Noble gas discharge colours are shown only under electrical excitation, not as natural gas colours. Safety context is limited to relevant hazards, and no handling recommendations are provided.

**Change tally:** 93 field edits across 30 elements.
- **meltingPoint: 10**
- **boilingPoint: 12**
- **density: 12**
- **oxidationStates: 10**
- **sublimationPoint: 1**
- **densityBasis: 2**
- **appearance: 19**
- **typicalUses: 27**

| Element | Property | Previous | New |
|---|---|---|---|
| 1 H | meltingPoint | 13.81 | 13.99 |
| 1 H | boilingPoint | 20.28 | 20.271 |
| 1 H | density | 0.00008988 | 0.000082 |
| 2 He | oxidationStates | "0" | null |
| 2 He | boilingPoint | 4.22 | 4.222 |
| 2 He | density | 0.0001785 | 0.000164 |
| 4 Be | boilingPoint | 2744 | 2741 |
| 5 B | meltingPoint | 2348 | 2350 |
| 5 B | density | 2.37 | 2.34 |
| 6 C | oxidationStates | "+4, +2, -4" | "+4, +3, +2, +1, 0, -1, -2, -3, -4" |
| 6 C | meltingPoint | 3823 | null |
| 6 C | boilingPoint | 4098 | null |
| 6 C | density | 2.267 | 2.2 |
| 7 N | oxidationStates | "+5, +4, +3, +2, +1, -1, -2, -3" | "+5, +4, +3, +2, -3" |
| 7 N | meltingPoint | 63.15 | 63.2 |
| 7 N | boilingPoint | 77.36 | 77.355 |
| 7 N | density | 0.0012506 | 0.001145 |
| 8 O | boilingPoint | 90.2 | 90.188 |
| 8 O | density | 0.001429 | 0.001308 |
| 9 F | meltingPoint | 53.53 | 53.48 |
| 9 F | boilingPoint | 85.03 | 85.04 |
| 9 F | density | 0.001696 | 0.001553 |
| 10 Ne | oxidationStates | "0" | null |
| 10 Ne | boilingPoint | 27.07 | 27.104 |
| 10 Ne | density | 0.0008999 | 0.000825 |
| 11 Na | meltingPoint | 370.95 | 370.944 |
| 11 Na | boilingPoint | 1156 | 1156.09 |
| 13 Al | meltingPoint | 933.437 | 933.473 |
| 14 Si | oxidationStates | "+4, +2, -4" | "+4, -4" |
| 15 P | boilingPoint | 553.65 | 553.7 |
| 15 P | density | 1.82 | 1.823 |
| 16 S | oxidationStates | "+6, +4, -2" | "+6, +4, +2, -2" |
| 16 S | boilingPoint | 717.75 | 717.76 |
| 16 S | density | 2.067 | 2.07 |
| 17 Cl | meltingPoint | 171.65 | 171.7 |
| 17 Cl | density | 0.003214 | 0.002898 |
| 18 Ar | oxidationStates | "0" | null |
| 18 Ar | meltingPoint | 83.8 | 83.81 |
| 18 Ar | boilingPoint | 87.3 | 87.302 |
| 18 Ar | density | 0.0017837 | 0.001633 |
| 19 K | meltingPoint | 336.53 | 336.7 |
| 22 Ti | oxidationStates | "+4, +3, +2" | "+4, +3" |
| 23 V | oxidationStates | "+5, +4, +3, +2" | "+5, +4, +3, +2, 0" |
| 27 Co | oxidationStates | "+3, +2" | "+3, +2, 0, -1" |
| 6 C | sublimationPoint | null | 4098 |
| 6 C | densityBasis | null | "graphite (diamond is about 3.513 g/cm³)" |
| 15 P | densityBasis | null | "white phosphorus" |
| 1 H | appearance | "colorless gas" | "A colourless, odourless gas at room temperature." |
| 2 He | appearance | "colorless gas, exhibiting a red-orange glow when placed in a high-voltage electric field" | "A colourless, odourless, very unreactive gas. It can glow in an electric discharge, but is colourless under ordinary conditions." |
| 3 Li | appearance | "silvery-white" | "A soft, silvery metal that reacts vigorously with water." |
| 4 Be | appearance | "white-gray metallic" | "A silvery-white metal; inhaling beryllium-containing dust or fumes can cause serious disease." |
| 5 B | appearance | "black-brown" | "Pure amorphous boron is a dark powder; crystalline boron is dark and hard." |
| 7 N | appearance | "colorless gas, liquid or solid" | "A colourless, odourless gas at room temperature." |
| 10 Ne | appearance | "colorless gas exhibiting an orange-red glow when placed in a high voltage electric field" | "A colourless, odourless gas that emits reddish-orange light when excited in a discharge tube." |
| 11 Na | appearance | "silvery white metallic" | "A soft, silvery metal that tarnishes rapidly in air and reacts vigorously with water." |
| 12 Mg | appearance | "shiny grey solid" | "A lightweight, silvery-white metal that burns with a brilliant white flame when ignited." |
| 13 Al | appearance | "silvery gray metallic" | "A lightweight, malleable, silvery-white metal." |
| 15 P | appearance | "colourless, waxy white, yellow, scarlet, red, violet, black" | "White phosphorus is a poisonous, waxy, highly flammable solid; red phosphorus is a more stable solid allotrope." |
| 16 S | appearance | "lemon yellow sintered microcrystals" | "Most common elemental sulfur is a bright yellow crystalline solid or powder." |
| 18 Ar | appearance | "colorless gas exhibiting a lilac/violet glow when placed in a high voltage electric field" | "A colourless, odourless gas under ordinary conditions." |
| 19 K | appearance | "silvery gray" | "A soft, silvery metal that rapidly tarnishes in air and reacts vigorously with water." |
| 20 Ca | appearance | null | "A soft, silvery-white metal that tarnishes rapidly in air and reacts with water." |
| 21 Sc | appearance | "silvery white" | "A silvery metal that tarnishes in air." |
| 22 Ti | appearance | "silvery grey-white metallic" | "A hard, strong, shiny silvery metal." |
| 23 V | appearance | "blue-silver-grey metal" | "A silvery metal that resists corrosion." |
| 27 Co | appearance | "hard lustrous gray metal" | "A lustrous silvery-blue magnetic metal." |
| 1 H | typicalUses | "Ammonia production, petroleum refining, fuel cells, and rocket propellants." | "Hydrogen gas is used to manufacture ammonia and other chemicals, remove sulfur from petroleum products, fuel certain fuel cells, and propel liquid-hydrogen rockets." |
| 2 He | typicalUses | "Cryogenic cooling, MRI systems, leak detection, and balloons." | "Helium gas cools superconducting magnets in MRI machines and scientific equipment. It is also used for leak detection, balloons, and inert atmospheres." |
| 3 Li | typicalUses | "Rechargeable batteries, glass, ceramics, lubricants, and some medicines." | "Lithium-containing compounds are used in rechargeable batteries, glass and ceramics; lithium stearate in greases, and lithium salts in certain prescribed medicines. Lithium metal is also used in specialist alloys and batteries." |
| 4 Be | typicalUses | "Aerospace alloys, X-ray windows, precision instruments, and nuclear technology." | "Beryllium metal and beryllium-containing alloys are used in aerospace components, electrical contacts, and X-ray windows. Some beryllium compounds have specialized ceramic and nuclear applications; beryllium dust is hazardous." |
| 5 B | typicalUses | "Borosilicate glass, fiberglass, detergents, semiconductors, and neutron absorbers." | "Boron-containing compounds are used in borosilicate glass, fiberglass, borates, detergents, and some neutron-absorbing materials. Elemental boron has specialized semiconductor and pyrotechnic applications." |
| 6 C | typicalUses | "Steelmaking, graphite electrodes, filters, cutting tools, fuels, plastics, and organic chemistry." | "Carbon's graphite form is used in electrodes and lubricants, while diamond is used in cutting tools. Carbon-based fuels, plastics, and filters involve many different compounds or forms of carbon." |
| 7 N | typicalUses | "Fertilizer production, inert atmospheres, food preservation, and industrial chemistry." | "Nitrogen gas is used for inert atmospheres, food packaging and cryogenic cooling. Nitrogen is also a feedstock for ammonia and fertilizer compounds, which are distinct from elemental nitrogen gas." |
| 8 O | typicalUses | "Medical oxygen, steelmaking, welding, water treatment, and combustion." | "Oxygen gas supports medical oxygen therapy, steel production, welding and industrial chemical manufacture. Oxygen and oxygen-containing compounds are also used in environmental water-treatment processes." |
| 9 F | typicalUses | "Fluoropolymers, refrigerant chemistry, uranium processing, and dental compounds." | "Elemental fluorine is used in specialized industrial fluorination and uranium-processing chemistry. Fluorine-containing compounds are used in fluoropolymers, refrigerants, and fluoride-containing dental products." |
| 10 Ne | typicalUses | "Signs, lasers, high-voltage indicators, and specialized lighting." | "Neon gas is used in reddish-orange advertising signs, discharge indicators and specialized lasers. Other sign colours often use different gases rather than pure neon." |
| 11 Na | typicalUses | "Chemical manufacturing, sodium-vapor lamps, heat transfer, and sodium compounds." | "Sodium metal is used in some chemical syntheses, sodium-vapour lamps, and specialized heat-transfer systems. Sodium salts, including sodium chloride and sodium carbonate, are used far more widely." |
| 12 Mg | typicalUses | "Lightweight alloys, flares, fireworks, electronics, and construction materials." | "Magnesium metal and alloys are used for lightweight automotive and aerospace components, and elemental magnesium is used in flares and some fireworks. Magnesium compounds are used in refractory materials, medicines, and industrial chemistry." |
| 15 P | typicalUses | "Fertilizers, detergents, pesticides, matches, and biological compounds." | "Red phosphorus is used on safety-match striking surfaces. Phosphate compounds are used in fertilizers and some detergents; other phosphorus compounds have specialized industrial and agricultural applications." |
| 16 S | typicalUses | "Sulfuric acid, fertilizers, rubber processing, fungicides, and chemical manufacturing." | "Elemental sulfur is used to vulcanize rubber and make sulfuric acid. Sulfur-containing compounds are used in fertilizers, fungicides and industrial chemistry." |
| 17 Cl | typicalUses | "Water disinfection, bleach, PVC, solvents, and industrial chemicals." | "Chlorine gas is used in controlled water disinfection and chemical manufacture. Chlorine-containing compounds are used to make bleach, PVC and many industrial chemicals; chlorine gas itself is highly toxic." |
| 19 K | typicalUses | "Fertilizers, soaps, glass, and specialized chemical compounds." | "Potassium metal has limited specialized uses. Potassium compounds, including potassium chloride, carbonate and hydroxide, are used in fertilizers, glassmaking, soaps and other chemicals." |
| 20 Ca | typicalUses | "Cement, plaster, steelmaking, agriculture, and calcium compounds." | "Calcium metal is used in some metal refining and alloy production. Calcium compounds such as calcium carbonate, oxide, hydroxide and sulfate are used in cement, plaster, agriculture and water treatment." |
| 21 Sc | typicalUses | "Aluminum alloys, high-intensity lamps, and specialized aerospace components." | "Scandium-aluminium alloys have specialized aerospace and sporting-goods applications. Scandium iodide is used in certain high-intensity lamps; most scandium production has limited industrial uses." |
| 22 Ti | typicalUses | "Aircraft, medical implants, sporting goods, pigments, and corrosion-resistant alloys." | "Titanium metal and alloys are used in aircraft, medical implants and corrosion-resistant equipment. Titanium dioxide, a titanium compound, is used as a white pigment in paints and other products." |
| 23 V | typicalUses | "High-strength steel alloys, catalysts, tools, and some battery materials." | "Vanadium is added to high-strength steels and some specialty alloys. Vanadium compounds are used as industrial catalysts, in pigments and as electrolytes in vanadium redox-flow batteries." |
| 24 Cr | typicalUses | "Stainless steel, chrome plating, pigments, and high-temperature alloys." | "Chromium metal is used in stainless steel and chrome plating. Chromium compounds are used in pigments and surface treatment; hexavalent chromium compounds are particularly hazardous." |
| 25 Mn | typicalUses | "Steelmaking, batteries, pigments, and aluminum alloys." | "Manganese is widely used in steelmaking and metal alloys. Manganese dioxide and other manganese compounds are used in certain batteries, pigments, and industrial processes." |
| 26 Fe | typicalUses | "Steel, construction, machinery, tools, vehicles, magnets, and countless manufactured products." | "Iron and iron-based steel are used in construction, vehicles, machinery, tools and electrical equipment. Iron compounds are used in pigments, catalysts and other industrial applications." |
| 27 Co | typicalUses | "Superalloys, magnets, batteries, catalysts, and pigments." | "Cobalt metal and alloys are used in high-temperature turbine parts and certain magnets. Cobalt compounds are used in pigments and battery electrodes, and cobalt-60 is used in specialized radiation applications." |
| 28 Ni | typicalUses | "Stainless steel, batteries, coins, plating, magnets, and high-temperature alloys." | "Nickel metal and alloys are used in stainless steel, plating, coins and high-temperature equipment. Nickel compounds and nickel-containing electrodes are used in certain rechargeable batteries." |
| 29 Cu | typicalUses | "Electrical wiring, plumbing, electronics, motors, coins, brass, and bronze." | "Copper metal is used in electrical wiring, motors, plumbing and electronics. Copper alloys include brass and bronze, while copper compounds have specialized chemical and agricultural uses." |
| 30 Zn | typicalUses | "Galvanizing steel, brass, batteries, die casting, and zinc compounds." | "Zinc metal is used to galvanize steel, in brass and in die-cast components. Zinc compounds are used in batteries, pigments, rubber manufacture and other specialized applications." |

**RSC element pages checked #1–30:** [H](https://periodic-table.rsc.org/element/1/hydrogen), [He](https://periodic-table.rsc.org/element/2/helium), [Li](https://periodic-table.rsc.org/element/3/lithium), [Be](https://periodic-table.rsc.org/element/4/beryllium), [B](https://periodic-table.rsc.org/element/5/boron), [C](https://periodic-table.rsc.org/element/6/carbon), [N](https://periodic-table.rsc.org/element/7/nitrogen), [O](https://periodic-table.rsc.org/element/8/oxygen), [F](https://periodic-table.rsc.org/element/9/fluorine), [Ne](https://periodic-table.rsc.org/element/10/neon), [Na](https://periodic-table.rsc.org/element/11/sodium), [Mg](https://periodic-table.rsc.org/element/12/magnesium), [Al](https://periodic-table.rsc.org/element/13/aluminium), [Si](https://periodic-table.rsc.org/element/14/silicon), [P](https://periodic-table.rsc.org/element/15/phosphorus), [S](https://periodic-table.rsc.org/element/16/sulfur), [Cl](https://periodic-table.rsc.org/element/17/chlorine), [Ar](https://periodic-table.rsc.org/element/18/argon), [K](https://periodic-table.rsc.org/element/19/potassium), [Ca](https://periodic-table.rsc.org/element/20/calcium), [Sc](https://periodic-table.rsc.org/element/21/scandium), [Ti](https://periodic-table.rsc.org/element/22/titanium), [V](https://periodic-table.rsc.org/element/23/vanadium), [Cr](https://periodic-table.rsc.org/element/24/chromium), [Mn](https://periodic-table.rsc.org/element/25/manganese), [Fe](https://periodic-table.rsc.org/element/26/iron), [Co](https://periodic-table.rsc.org/element/27/cobalt), [Ni](https://periodic-table.rsc.org/element/28/nickel), [Cu](https://periodic-table.rsc.org/element/29/copper), [Zn](https://periodic-table.rsc.org/element/30/zinc).

**Science checkpoint:** All 118 records have now had targeted RSC Pauling and common oxidation-state review (with earlier sessions #31–118), and atomic-weight conventions, radius/first ionization/affinity reference comparisons, selected physical/discovery information. This is **not** complete independent scientific certification of every use, all isotope/appearance subtleties, nor image/license and runtime QA. RSC's page images have NOT been copied. No merge to main or Microsoft Store submission is authorized.
