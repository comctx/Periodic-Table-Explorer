# Corrected scientific display terminology — standard atomic weight, not single-atom mass

**Date:** 2026-10-15 local / 2026-10-16 UTC. **Scope:** two UI labels only; chemistry source values unchanged.

## Verified distinction and authoritative source

- [CIAAW: 2024 abridged standard atomic weights](https://ciaaw.org/abridged-atomic-weights.htm) tabulates **standard atomic weights for normal materials** (with stated abridged significant figures), including source-specific missing/unassigned entries. Those numeric values are what the application stores in the poorly named internal property `atomicMass`.
- [CIAAW FAQ, “Atomic weight or atomic mass?”](https://www.ciaaw.org/info.htm) explicitly distinguishes **atomic mass**, which is the mass of an *individual atom*, from **atomic weight**, which represents the isotopic-abundance-weighted value of an element. Standard atomic weights are **dimensionless relative atomic-weight ratios**, not a `u`-valued mass measurement of one atom.
- Example: the app's carbon value 12.011 is the **abridged standard atomic weight of carbon in normal materials**, not the measured mass of one carbon-12 atom. Elements such as technetium have **no CIAAW standard atomic weight**; the existing separate isotope mass-number label is retained and not merged into weight.

## Exact verified correction

Before: the app's detailed facts and main-grid quick details both used a conditional `“Standard atomic weight”` when missing but misleadingly used `“Atomic mass”` when a CIAAW value was available.

After: both views consistently label their source numerical quantity **`Standard atomic weight (CIAAW 2024, abridged)`**, with “Not assigned” or the existing isotope footnote when source has no weight. No data, chemistry, quiz questions or photos changed.

- [Element details label commit `93afe52`](https://github.com/comctx/Periodic-Table-Explorer/commit/93afe52964a87f784e922eb8182ea4fd727e3c13)
- [Periodic table quick details label commit `05ca592`](https://github.com/comctx/Periodic-Table-Explorer/commit/05ca592f71c6e56648112975c7adb2f25d3d4157)
- [Regression guard commit `29d4e2b`](https://github.com/comctx/Periodic-Table-Explorer/commit/29d4e2bef033f3df669f227d938ae258468681fc) asserts each display source label and forbids reintroducing the stale “Atomic mass” conditional text.

## Tests and remaining scope

- On the first element-detail-only commit `93afe52`, science/package regression [38830993955](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830993955) completed **success**.
- Post-both-label science/package [38831022951](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38831022951), Chromium [38830997925](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830997925), HTTPS offline [38830997809](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830997809), native unsigned simulator [38830997829](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38830997829) initially in progress; **consult actual GitHub conclusions** to certify, rather than claim any queued run passed.
- The internal property `atomicMass` is still named that in JSON; renaming hundreds of references creates additional regression risk with no user-visible scientific benefit. Its *meaning* is now labeled accurately. CIAAW central figures retain their original abridged precision, without invented extra digits or fabricated uncertainty ranges.
- All changes on `scientific-audit-2026-10` branch only. No commercial image licensing resolution, signed IPA, Windows Store package or main merge.
