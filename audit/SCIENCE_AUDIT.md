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
- [x] Normalize and cross-check CIAAW 2024 weight conventions for elements 1–90 (Tc/Pm and Po–Ac unassigned)
- [x] Initial historical review for elements 11–30 (not complete property verification)
- [x] RSC melting, boiling, and density conventions for elements 21–90, including electron configurations for 61–90
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
