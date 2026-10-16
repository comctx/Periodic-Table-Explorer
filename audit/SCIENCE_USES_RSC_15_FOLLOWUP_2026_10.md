# Periodic Table Explorer — remaining 15 source-specific uses and two noble-gas appearances

**Evidence date:** 2026-10-15 US Central / 2026-10-16 UTC. **Repository/branch:** `comctx/Periodic-Table-Explorer` / `scientific-audit-2026-10`.

## What is genuinely new in this audit

The earlier 118-element numbered science reviews, CIAAW official atomic weights, RSC physical-property fixtures, 354 PubChem slots, NIST rare-phase studies and the [11 detailed prior use corrections](SCIENCE_USES_COMPOUND_DISTINCTIONS_2026_10.md) were **already done**, so this pass targets **15 distinct remaining short descriptions**. The issue was phrasing that could suggest the pure element is itself used in a product when its alloy, compounds, isotope or doped optical material do the work. All corrections were checked against the **individual Royal Society of Chemistry original element articles**, rather than copying a different publisher's prose.

| Atomic # | Element | Specific scientifically useful distinction verified and improved | Primary reference |
|---:|---|---|---|
| 13 | Aluminum | Metal in conductors, foil and coatings distinguished from engineered aircraft/vehicle aluminum alloys | [RSC #13](https://periodic-table.rsc.org/element/13) |
| 18 | Argon | Protective argon gas in welding, metallurgy, lamps and insulating windows | [RSC #18](https://periodic-table.rsc.org/element/18) |
| 36 | Krypton | Krypton gas in lamps distinguished from krypton-fluoride excimer-laser compound; discharge glow explicitly excited | [RSC #36](https://periodic-table.rsc.org/element/36) |
| 37 | Rubidium | Atomic clocks use rubidium-87 transition, while photocells/glass are separate applications | [RSC #37](https://periodic-table.rsc.org/element/37) |
| 44 | Ruthenium | Wear-resistant ruthenium alloys and electrical contacts distinguished from oxides and catalytic compounds | [RSC #44](https://periodic-table.rsc.org/element/44) |
| 45 | Rhodium | Metal in converters and coated surfaces distinguished from compound catalysts | [RSC #45](https://periodic-table.rsc.org/element/45) |
| 46 | Palladium | Metal alloy, contacts, hydrogen-gas purification through metal and catalytic compound contexts distinguished | [RSC #46](https://periodic-table.rsc.org/element/46) |
| 47 | Silver | Silver metal/alloy in jewellery, mirrors and contacts versus silver halides and silver-nanoparticle materials | [RSC #47](https://periodic-table.rsc.org/element/47) |
| 48 | Cadmium | Historically used battery/plating metal versus cadmium sulfide pigments; toxicity and restrictions retained | [RSC #48](https://periodic-table.rsc.org/element/48) |
| 50 | Tin | Tin-coated steel and tin alloys versus molten-metal float glass process and tin oxides | [RSC #50](https://periodic-table.rsc.org/element/50) |
| 54 | Xenon | Gas lamps and spacecraft thruster propellant versus xenon difluoride chemical etchant; blue glow only under electric excitation | [RSC #54](https://periodic-table.rsc.org/element/54) |
| 62 | Samarium | Samarium–cobalt permanent magnet alloys versus glass, laser dopants and neutron absorption | [RSC #62](https://periodic-table.rsc.org/element/62) |
| 66 | Dysprosium | Dysprosium in neodymium magnets versus dysprosium iodide discharge lamps and oxide reactor material | [RSC #66](https://periodic-table.rsc.org/element/66) |
| 67 | Holmium | Nuclear neutron absorption and alloys distinguished from holmium-doped Ho:YAG laser crystals | [RSC #67](https://periodic-table.rsc.org/element/67) |
| 69 | Thulium | Radioisotope thulium-170 in portable X-ray sources distinguished from doped laser materials | [RSC #69](https://periodic-table.rsc.org/element/69) |

The [RSC rhodium](https://periodic-table.rsc.org/element/45/rhodium), [krypton](https://periodic-table.rsc.org/element/36), [dysprosium](https://periodic-table.rsc.org/element/66), [thulium](https://periodic-table.rsc.org/element/69) and other linked pages were directly consulted for the specific applications in the table. These references are scientific research and cross-check materials, not authorship, copyright or Store endorsements.

**Noble gas appearance correction:** #36 **krypton** and #54 **xenon** now explicitly distinguish their colorless appearance at ordinary conditions from emission/glow only **when electrically excited**. The existing shorter versions made their discharge appearance sound like an intrinsic colour of the resting gas. This also avoids misleading learners viewing a photograph of a glow-discharge tube.

## Exact scope

- **15 `typicalUses` fields** edited in `elements-data.js`: **13, 18, 36, 37, 44, 45, 46, 47, 48, 50, 54, 62, 66, 67, 69**. Only **two `appearance` fields** edited: **36 and 54**. Every other one of 118 records and all **other keys** of those 15 records were programmatically compared against the prior GitHub source to exclude accidental changes.
- No weights, atomic symbols/numbers, neutron/isotope reference labels, RSC temperatures, density, chemistry data, captions, images, licences, GitHub `main` or Store submission were modified.
- Source-corrected element data [commit `a3604eb`](https://github.com/comctx/Periodic-Table-Explorer/commit/a3604eb27f0793fbe08b117aa9690aff8411b157).
- Added **15 new automatic field-specific regression guards plus two gas-appearance protections** to `audit/check-data.mjs` [commit `c933e20`](https://github.com/comctx/Periodic-Table-Explorer/commit/c933e206a28704898d2213f8841c287433bef195); assertions were validated against live records before committing.
- **Completed Chromium real browser smoke** on the new data commit: [38830732601](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830732601) **success**. New science/package regression [38830816558](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830816558) and unsigned simulator [38830732587](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830732587) were triggered and must be independently checked for actual final conclusions (not assumed successful from being queued).
- Existing previous-batch simulator [38830299469](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830299469) has now **completed successfully**, updating the status recorded in Section 4P of the master audit; it applies to the **previous** 11-description correction, not this new 15-description batch.

## Remaining scientific-content work

This narrows the outstanding ambiguous use-claims inventory but **does not** exhaustively certify all scientific prose and discovery stories. Continue only **unresolved** free-text concerns and independently assess exceptional historical assertions and potentially misleading uses. Do **not** reopen completed numerical or scientific batch sessions. Licensing of the 92 photo candidates, signed app binaries, physical-device testing and Windows/MS Store submission remain **separate tasks**.
