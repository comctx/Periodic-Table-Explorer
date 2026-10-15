# Periodic Table Explorer — stored-image verification: elements 91–118

**Branch:** `scientific-audit-2026-10`  
**Reproducible GitHub Actions run:** [Image identity triage 38682381029](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38682381029) (completed successfully).  
**Date:** 2026-10-14 Central / 2026-10-15 UTC.  
**Method:** `python audit/compare_image_identity.py 91 118` used the checked-in `images/elements/*.jpg` binaries, fetched each catalogued original source URL, and calculated dHash similarity and brightness-difference measurements. Git blob SHA is provided to track the precise file version. The 14 last-element JPEGs additionally have identical Git blob hashes, proving identical file content.

## Results, with important distinctions

- **28 of 28 cached files could be decoded and compared to their currently credited original image URLs.** All were marked `LIKELY_SAME_PHOTO__NOT_CLEARED` (dHash 0–2, grayscale difference 0.0–0.5). This confirms source-image *similarity*, NOT element-sample authenticity, original photographer identity, legal use, or Store readiness.
- **#91–99:** nine specimen, isotope, or scientific-research photographs. **#94 plutonium** is withheld for a conditional Los Alamos notice; **#96 curium** for unverified © European Union/JRC-ITU reproduction permission; **#98 californium** for conflicting nonfree-use/public-domain history. The six other entries have visually matched source photographs, but none is finally cleared for release.
- **#100 fermium:** a **historical Ivy Mike nuclear-test photograph**, not fermium; deliberately withheld from the element-sample-photo panel.
- **#101–103 mendelevium, nobelium and lawrencium:** publisher illustrations rather than actual photographed samples; deliberately withheld.
- **#104 rutherfordium:** photo of **CERN pion tracks in a spark chamber**, unrelated to rutherfordium and with third-party rights unverified; deliberately withheld.
- **#105–118:** **14 identical cached JPEG files**, all Git blob SHA `8b42b435ef79c7becb6a5dea8f49492472fc9564`. Each shows the **same generic question-mark and radiation-sign placeholder**, not an individual element photograph. Their `title` fields remain `No Image Found`, which the app hides; these images must not be misrepresented as scientific imagery.
- **0 of 28 images cleared for final redistribution.** Hidden binaries are still physically checked into the repository; they must be explicitly excluded from a release package where reuse rights are unresolved, or replaced under appropriate rights terms.

## Exact stored images and comparison measurements

| Element | Stored JPEG Git blob SHA | dHash | Brightness difference | Scientific portrayal | Original source |
|---|---|---:|---:|---|---|
| 91 Pa — Protactinium | `b673bed3ce6f644fb36947c7e67916291468d2d8` | 1 | 0.5 | Real sample or research photograph — rights pending | [Image original](https://upload.wikimedia.org/wikipedia/commons/a/af/Protactinium-233.jpg) |
| 92 U — Uranium | `6672d87fcfbef97bcc01f8c8eeac9850e577e352` | 0 | 0.1 | Real sample or research photograph — rights pending | [Image original](https://upload.wikimedia.org/wikipedia/commons/b/b2/Ames_Process_uranium_biscuit.jpg) |
| 93 Np — Neptunium | `da1d3ded16bbff8cb277bba3718bd0d6419440b3` | 0 | 0.2 | Real sample or research photograph — rights pending | [Image original](https://upload.wikimedia.org/wikipedia/commons/e/e5/Neptunium2.jpg) |
| 94 Pu — Plutonium | `9328877ac98099aa64553c916dd6280dd6807171` | 0 | 0.1 | Real sample or research photograph — WITHHELD, copyright/notice disputed | [Image original](https://upload.wikimedia.org/wikipedia/commons/0/0f/Plutonium_ring.jpg) |
| 95 Am — Americium | `8c22c40866ff53e106b724b7719e730ea52b0f20` | 0 | 0.1 | Real sample or research photograph — rights pending | [Image original](https://upload.wikimedia.org/wikipedia/commons/e/ee/Americium_microscope.jpg) |
| 96 Cm — Curium | `a6e9619c4dfa043660773a208c83a30e97145478` | 2 | 0.0 | Real sample or research photograph — WITHHELD, copyright/notice disputed | [Image original](https://images-of-elements.com/s/curium-glow.jpg) |
| 97 Bk — Berkelium | `d7aa3296d8fae1cad233e9c883bb5cfe9a9ec168` | 0 | 0.1 | Real sample or research photograph — rights pending | [Image original](https://upload.wikimedia.org/wikipedia/commons/f/fc/Berkelium.jpg) |
| 98 Cf — Californium | `4e2d92cb4aaf0523f0915fa5f49e2ec173c0cdcc` | 0 | 0.4 | Real sample or research photograph — WITHHELD, copyright/notice disputed | [Image original](https://upload.wikimedia.org/wikipedia/commons/9/93/Californium.jpg) |
| 99 Es — Einsteinium | `7ae5b1c63a1faa7d2640775483f28141ba5f007a` | 1 | 0.1 | Real sample or research photograph — rights pending | [Image original](https://upload.wikimedia.org/wikipedia/commons/5/55/Einsteinium.jpg) |
| 100 Fm — Fermium | `b435bd526145f672542ae92f63a19f2fec163398` | 0 | 0.1 | Historic Ivy Mike test, not fermium — WITHHELD | [Image original](https://upload.wikimedia.org/wikipedia/commons/5/58/Ivy_Mike_-_mushroom_cloud.jpg) |
| 101 Md — Mendelevium | `6c8c4c79164f447e42e6fe8df08e76a916281ad6` | 0 | 0.1 | Artist illustration, not sample — WITHHELD | [Image original](https://images-of-elements.com/s/mendelevium.jpg) |
| 102 No — Nobelium | `dff2332ebfe7f8859206c0cd8e855b8f26026d93` | 0 | 0.0 | Artist illustration, not sample — WITHHELD | [Image original](https://images-of-elements.com/nobelium.jpg) |
| 103 Lr — Lawrencium | `cc27973b50b411254bb4b05e5777a5e948da664b` | 0 | 0.1 | Artist illustration, not sample — WITHHELD | [Image original](https://images-of-elements.com/lawrencium.jpg) |
| 104 Rf — Rutherfordium | `48399e09bd0c9dd28139608b09927d311f6789cf` | 0 | 0.2 | CERN pion-track photo, not rutherfordium — WITHHELD | [Image original](https://images-of-elements.com/s/rutherfordium.jpg) |
| 105 Db — Dubnium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 106 Sg — Seaborgium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 107 Bh — Bohrium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 108 Hs — Hassium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 109 Mt — Meitnerium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 110 Ds — Darmstadtium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 111 Rg — Roentgenium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 112 Cn — Copernicium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 113 Nh — Nihonium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 114 Fl — Flerovium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 115 Mc — Moscovium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 116 Lv — Livermorium | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 117 Ts — Tennessine | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |
| 118 Og — Oganesson | `8b42b435ef79c7becb6a5dea8f49492472fc9564` | 0 | 0.1 | Generic question-mark placeholder — NOT a sample photograph | [Image original](https://images-of-elements.com/s/transactinoid.png) |

## Follow-up actions

1. For #91–99, document specific attribution, original author or agency, authorized commercial reuse, photo modifications and image-type context. Keep #94, #96 and #98 withheld until permission conflict or notice is fully resolved.
2. For #100–104, retain historically relevant context **only if separately licensed, scientifically labeled, and placed in an appropriate history/experiment section**; do not display these as samples of their elements. Do not distribute any copyrighted third-party image without a verified grant.
3. Replace the 14 identical generic placeholders with element-specific **authentic research photographs, accelerator/detector images or scientifically accurate and labeled diagrams**, when rights permit. A macroscopic photo of an element produced only a few atoms at a time is not realistically obtainable.
4. Inspect the **physical Microsoft Store release package**: hiding an image in the user interface does not remove the JPEG from the distributed files. Remove/exclude unclear assets from the release bundle; retest all photo fallbacks and offline behavior.
5. Compare resolved originals with final credits, links, exact CC license versions and transformations. The existing publisher metadata is **not legal clearance**.

**Outcome:** Source-image binary comparisons are now complete across all 118 elements (first 30 human visual review, later 88 machine-assisted). The image audit itself is NOT finished: 14 unresolved mismatched original references in the first 60 elements, previously withheld illustrations, copyright clearance, app packaging and end-to-end testing remain.
