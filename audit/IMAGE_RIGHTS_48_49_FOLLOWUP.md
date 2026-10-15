# Targeted image-origin follow-up: Cadmium (#48) and Indium (#49)

**Date:** 2026-10-15  
**Branch:** `scientific-audit-2026-10`. **No edits to published `main`.**  
**Evidence:** [Successful independent test of alternate Commons originals — run 38775178783](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38775178783); archived [prior actual local-to-publisher comparison 31–60, run 38681018215](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38681018215). [Main photo inventory](IMAGE_REVIEW.md). Both photos remain release-rights candidates, **NOT commercially cleared**.

## Why this is a follow-up, not a repeat of the 41–60 audit

Earlier image identity checks already compared `images/elements/048-cd.jpg` to the gallery original `cadmium-4.jpg`, and `049-in.jpg` to `indium-2.jpg`. Those existing comparisons were **#48 dHash 1 / gray delta 0.1** and **#49 dHash 0 / gray delta 0.1**, respectively. The source-page rights review of #41–60 is also already documented. The remaining specific question here was: *Does an independently documented Wikimedia Commons file identify the creator of the precise photo stored in our app?*

New `audit/compare_cadmium_indium_commons.py` downloaded the original bytes through Commons file-specific MediaWiki imageinfo and compared the app's actual cached JPEG in a **read-only** GitHub Actions runner. Its source code and complete result numbers are preserved in [run 38775178783](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38775178783).

| Element | Independent Commons original candidate | Local vs Commons dHash | Mean grayscale pixel difference | Result |
|---|---|---:|---:|---|
| **#48 Cadmium** | [`File:Pure cadmium.jpg`](https://commons.wikimedia.org/wiki/File:Pure_cadmium.jpg) (publisher-related sample photo) | **24** | **64.4** | **NOT an established match**. Do **not** assign that Commons file's uploader/credit or author metadata to the app's existing, *different* `cadmium-4.jpg` image. |
| **#49 Indium** | [`File:Liquid-indium.jpg`](https://commons.wikimedia.org/wiki/File:Liquid-indium.jpg) | **0** | **0.1** | **Excellent visual match**; original and stored photo both **856 × 856** pixels. The Commons original independently names photographer **Jurii**, 10 August 2009, and **CC BY 3.0**. |

### #48 cadmium

- The actual stored picture continues to be matched to [Chemical Elements — Cadmium](https://images-of-elements.com/cadmium.php), precise original file [`cadmium-4.jpg`](https://images-of-elements.com/cadmium-4.jpg), not the separate Commons `Pure cadmium.jpg`. The publisher depicts pure and oxidized cadmium in distinct gallery examples, but exact chemical purity of the cached picture is **not independently measured**; avoid an unsupported percentage or categorical purity assertion.
- Publisher's displayed general notice is **CC BY 3.0**, with attribution requested by link to the element-specific page. The exact `cadmium-4.jpg` photographer is **not independently identified**. Do **not** convert the Commons `Pure cadmium.jpg` attribution to this different visual.
- Updated catalogue title to label the exact saved publisher photo, while explicitly preserving **creator and final-license-review uncertainty**.

### #49 indium

- The Commons [original record](https://commons.wikimedia.org/wiki/File:Liquid-indium.jpg) itself identifies **Jurii**, exact subject **1.5 × 1.5 cm liquid indium**, original date **10 August 2009**, and **CC BY 3.0 Unported** (photographer/self-publication recorded). Source-gallery page [Chemical Elements — Indium](https://images-of-elements.com/indium.php) describes the liquid sample and its gallery photo.
- The cached photo is visually identical/near-identical to that independently authored Commons JPEG in the reported comparison; the repository's earlier publisher-original match is also still valid. A same-size photo and tiny brightness difference establish **strong image identity evidence**, not that every byte is identical and **not** a separate license clearance.
- Added the **correct Commons original file page** to `commonsPage`, kept original URL pointing to the matched publisher image, and credited Jurii from the Commons original instead of relying on inherited scraped metadata. Preserved the important **indium is solid at normal room temperature** caption.
- Attribution should retain original photographer, source and license links and possible alteration/reencoding notice. **Actual Store packaging, licence notices and final derivative compliance remain open.**

**Automated regression and staging tests:** [GitHub Actions run 38775571334 — completed successfully](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38775571334) on code commit `4e271519cd759cbccad19c5b636c9a1653ed3623`. Confirms exact indium Commons metadata, correct cadmium unresolved status, 92/26 packaging and required source/credits checks.

## Remaining tasks / release gate

- [x] Prior publisher-original file identity checks preserved.
- [x] Alternative independently documented Commons files compared against **actual cached bytes**, with favorable **#49** result and negative **#48** evidence both recorded.
- [x] Update only metadata for #48 and #49 based on the comparison; **do not** alter actual JPEG binaries or any other elements.
- [ ] Find independently reliable *exact* individual photographer evidence for the `cadmium-4.jpg` source version if possible; absent evidence leave creator explicitly unresolved.
- [ ] Complete app-specific author, license, changes, packaged notices and rights review before commercial distribution. These two photos are **not signed off for release**.
- [ ] Inspect real signed IPA and real Microsoft package; the prior synthetic archive inspections are not release approval.

**No other entries in the 118-photo catalog were re-reviewed or changed in this follow-up.**
