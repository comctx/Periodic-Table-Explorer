# Scientific history: dated discovery milestones and record-to-story consistency

**Date:** 2026-10-15, America/Chicago (CI reports UTC on 2026-10-16). **Branch:** `scientific-audit-2026-10` only.

## Why this pass was necessary

The existing 118 individual element histories and 118 element source records were already audited and must not be restarted. A targeted cross-field check found six element stories with *correct general attributions but omitted recorded discovery years* or the reasons that earlier production, publication, separation and acceptance dates differ. This can confuse students comparing the headline `yearDiscovered` with the narrative. A seventh candidate, zirconium #40, already mentions 1789 correctly — excluded from editing.

The six cases below were independently reconciled to the Royal Society of Chemistry's dedicated element history pages, then **only six `discoveryStories` strings** were changed in `element.html`. No scientific numeric field, provenance, quiz answer, media asset or release setting was altered.

| Z | Element | Stored year | Newly clarified history in app | RSC independent source |
|---:|---|---|---|---|
| 1 | Hydrogen | 1766 | Cavendish **1766** identified and collected a distinct flammable gas; burning produces water; Lavoisier named hydrogen later. Earlier observations did not establish element identity. | [RSC hydrogen](https://periodic-table.rsc.org/element/1/hydrogen) |
| 7 | Nitrogen | 1772 | Other chemists had obtained oxygen-depleted air in the **1760s**, but **Rutherford's 1772 thesis** identified the residual gas as distinct. | [RSC nitrogen](https://periodic-table.rsc.org/element/7/nitrogen) |
| 8 | Oxygen | 1771–1774 | **Scheele produced it in 1771** (published 1777), **Priestley independently isolated it in 1774** and published first, **Lavoisier** recognised its key chemical role. Explains why production and publication/recognition milestones differ. | [RSC oxygen](https://periodic-table.rsc.org/element/8/oxygen) |
| 10 | Neon | 1898 | **Ramsay and Travers isolated it in 1898** in London, identifying its bright reddish-orange emission when an electrical discharge excited the gas; not naturally red under ordinary conditions. | [RSC neon](https://periodic-table.rsc.org/element/10/neon) |
| 18 | Argon | 1894 | **Cavendish observed an unreactive remainder in 1785** without identifying a separate element; **Rayleigh and Ramsay isolated and identified argon in 1894**. | [RSC argon](https://periodic-table.rsc.org/element/18/argon) |
| 27 | Cobalt | 1735 | **Brandt isolated cobalt around 1735**, the app's year, but **published discovery results in 1739**; discovery/isolation and published evidence are not the same milestone. | [RSC cobalt](https://periodic-table.rsc.org/element/27/cobalt) |

RSC cobalt's main history prose dates the investigation to 1730 and publication to 1739, while its accompanying specialist historical discussion explicitly dates pure metal isolation to about 1735. The app deliberately distinguishes them rather than pretending those dates contradict each other.

## Exact code scope and automated safeguards

- [App narrative commit `db32d5d`](https://github.com/comctx/Periodic-Table-Explorer/commit/db32d5d84a8cfc0d43142f66ab791802c15a2bb3): revised **exactly 6 numbered story lines**, #1, #7, #8, #10, #18, #27. Each of the other 112 individualized stories and all underlying records left unchanged.
- [Science-regression check `334d2c0`](https://github.com/comctx/Periodic-Table-Explorer/commit/334d2c07be5e5a677f6c1398bd52b4177f25592f): new **all-118 cross-field recorded-year check** confirms that each individually authored story mentions at least one of its recorded 4-digit discovery milestones (for source ranges, any accepted date within the documented range), without treating a textual match as independent historical research. Six additionally researched stories have source-specific checks for name and correct historical milestone.
- Existing regression already enforces **all 118 unique story keys**, year and isotopic reference data integrity, 15 curated quiz premise fixtures and 118 neutral-atom electron totals. No numerical source audit or old image issue reopened.
- **Actual science and packaging check on changed app commit:** [38832258582](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38832258582) **success**.
- **Actual Chromium browser smoke:** [38832258567](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38832258567) **success**.
- **Actual genuine HTTPS offline browser:** [38832258570](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38832258570) **success**.
- **Expanded 118-year regression:** [38832425608](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38832425608) **initially queued; inspect actual final conclusion**.
- Latest unsigned iPhone simulator [38832258835](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38832258835) **initially running; do not call passed until completed**.

## Limitations and next scientifically meaningful scope

Cross-field date consistency **is not independent verification of all historical narratives**; it catches contradictions between two app views. We independently compared the *specific six revised records* to RSC histories. Previously reviewed scientific datasets remain intact. Other nuanced discovery priority and disputed history claims remain eligible for *targeted* independent source review; exact release, licensing and physical-device QA remain separate. Do not merge to `main` or submit to stores without approval.
