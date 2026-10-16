# Scientific narrative QA — GSI leadership and four missing discovery histories

**Date:** 2026-10-15 US Central / 2026-10-16 UTC. **Branch:** `scientific-audit-2026-10`, not published `main`. **Scope:** specific discovery-story errors and omissions, not a restart of earlier 118-element RSC/CIAAW/NIST/PubChem numerical audits.

## 1. Actual misattribution: darmstadtium (110) and roentgenium (111)

The old app credited each 1994 GSI team's *leadership* to **Peter Armbruster and Gottfried Münzenberg** alone. Both were major GSI collaborators, but the original facility records attribute leadership of both discovery groups to **Sigurd Hofmann**.

**Original primary evidence**:
- [GSI's own 1969–2019 chronology](https://www.gsi.de/en/about_us/50_years_gsi/timeline_1969_2019) expressly calls both the 110 (November 9, 1994) and 111 (December 8, 1994) collaborations **teams led by Professor Sigurd Hofmann**.
- [GSI Element 110](https://www.gsi.de/en/work/forschung/nustarenna/nustarenna_divisions/she_physik/research/super_heavy_elements/element_110) and [Element 111](https://www.gsi.de/work/forschung/nustarenna/nustarenna_divisions/she_physik/research/super_heavy_elements/element_111) describe their production and credit the discoveries to Hofmann and his group.
- [IUPAC formal approval of element 111's name, 2004](https://publications.iupac.org/news/archives/2004/naming111.html): 2003 joint IUPAC–IUPAP working party recognized **Hofmann et al.**, with roentgenium officially approved **November 1, 2004**, named for Wilhelm Conrad Röntgen.
- [GSI's 110 history](https://www.gsi.de/en/researchaccelerators/research_an_overview/new_elements/international_year_of_the_periodic_table/the_discovery_of_element_110_at_gsi) describes lead + nickel collision experiments and the group's continuing work on 111.
- Historical **RIKEN independent confirmation for 111 in 2003** was retained; IUPAC's 2003 recognition explicitly attributes **discovery priority** to the GSI collaboration (they are not interchangeable claims).

**Exact modifications:**
- `elements-data.js`: only `discoveredBy` for #110 and #111 now says **“GSI Darmstadt team led by Sigurd Hofmann, including Peter Armbruster and Gottfried Münzenberg”**, preserving collaborators' names.
- `element.html`: #110 and #111 discovery stories updated to explain leader, experiment (Ni + Pb or Ni + Bi), recognition in 2003, and for 111 official 2004 naming.
- `audit/check-data.mjs`: both historical fixtures and 111's extra source fixture updated; added explicit regression checks for the named collaborators, correct leader and IUPAC 2003 year.
- App record commit [`4751ce2`](https://github.com/comctx/Periodic-Table-Explorer/commit/4751ce2eb67f774fdfd5e09ec090c8aa75f2d6f7); narrative commit [`1807843`](https://github.com/comctx/Periodic-Table-Explorer/commit/1807843d6279893c06cf63ff0e32702394ade5ed); regression commit [`e2cd7b8`](https://github.com/comctx/Periodic-Table-Explorer/commit/e2cd7b8a4649414e1b9d97db103b331a1012fc2c).

## 2. Newly identified coverage gap: four elements fell back to generic boilerplate

Reading the **actual `const discoveryStories` object** in `element.html` uncovered **114 element-number keys out of 118**. Four were absent — **#3 lithium, #4 beryllium, #6 carbon and #16 sulfur**. Their detail pages previously fell back to generated historical summaries (basic year/person or ancient), despite specific primary historical evidence being available.

| Z | New individual history content | Exact RSC element history |
|---:|---|---|
| 3 Lithium | Arfvedson inferred a new metal in **1817 from petalite**; Brande obtained a tiny amount **1821**; Bunsen/Matthiessen produced larger amounts **1855**. Discovery of substance and first metallic isolation explicitly separated. | [RSC lithium](https://periodic-table.rsc.org/element/3/lithium) |
| 4 Beryllium | Vauquelin identified the unknown metal in **beryl/emerald in 1798**; **Wöhler and Bussy independently isolated metallic Be in 1828**. Mineral identification not confused with metal isolation. | [RSC beryllium](https://periodic-table.rsc.org/element/4/beryllium) |
| 6 Carbon | **Ancient substance with no single discoverer**; charcoal, graphite and diamond separately known; **Smithson Tennant 1796** showed burning diamond yields CO₂, confirming diamond as a carbon form. | [RSC carbon](https://periodic-table.rsc.org/element/6/carbon) |
| 16 Sulfur | **Known since antiquity**, no individual discoverer; Lavoisier argued it was an element; Gay-Lussac and Thénard **1809** rebutted Davy's prior impure-sample conclusion. | [RSC sulfur](https://periodic-table.rsc.org/element/16/sulfur) |

**Exact effect:** Added **only four strings**, preserving other 114 authored discovery-story strings and all 118 science records, photo data, numeric properties and quiz answers. The discovery object now has **118 distinct keys exactly matching the element atomic numbers 1–118**. Story commit [`ccc9f7e`](https://github.com/comctx/Periodic-Table-Explorer/commit/ccc9f7e211b33481162d6ee8f1a9df55968ba02d).

**Regression:** Added test assertions for **118 unique numbered authored narratives** and special dated RSC milestone requirements in the four restored stories. First test run [38831701030](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831701030) **failed** because the new test's regular expression was over-escaped and detected 0 keys — no defect in actual newly added stories. Regex fixed in test-only commit [`10dc3a2`](https://github.com/comctx/Periodic-Table-Explorer/commit/10dc3a2e0a88bfcafa8230b5cc62d395bf67297c), and actual corrected science/package regression [38831762362](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831762362) **completed successfully**.

## 3. Verified GitHub test scope

- [Science regression 38831515696](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831515696) on GSI fixture correction: **success**.
- [Browser 38831479848](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831479848) and [genuine HTTPS/offline 38831479850](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831479850) on 110/111 narrative correction: **success**.
- [Science regression 38831659522](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831659522) on four new stories: **success**.
- [Browser 38831659615](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831659615) and [genuine offline 38831659573](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831659573) on the final four-story app change: **success**.
- [Final source-guard science regression 38831762362](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831762362) **success**; only test code changed since the preceding browser run.
- **Unsigned native iOS simulator** [38831659524](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831659524) was still running at this report's first check. Its outcome must be independently verified before certification.

## Remaining limitation

“118 individually authored discovery stories exist” is now verified **structurally**; this does **not** mean an independent historian has checked every phrase of all 118 stories this week. The 114 older stories were previously source-reviewed in science sessions but still benefit from careful targeted fact-checks of special claims and competing discovery credits, not a redo of all numeric datasets. All 92 candidate element image rights, physical signed/Windows Store package QA and owner's merge/submission approval remain open and unaffected. `main` remains unchanged.
