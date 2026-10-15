# Real Chromium browser smoke — 118-element runtime coverage

**Date:** 2026-10-15  
**Repository:** `comctx/Periodic-Table-Explorer`  
**Audit-only branch:** `scientific-audit-2026-10`  
**Successful source commit:** [`4f93e1ddf6c5b8c9d492bd8637979b3e2eac42c6`](https://github.com/comctx/Periodic-Table-Explorer/commit/4f93e1ddf6c5b8c9d492bd8637979b3e2eac42c6)  
**Verified GitHub Actions success:** [Live Chromium browser smoke — run **38776854552**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38776854552). The real job's log ends with `PASS: Chromium live browser smoke: all 118 detail pages; 92 JPEGs decoded; 26 images withheld; 20-question quiz and scoring; search/temperature/credits; desktop/iPhone; zero JS runtime errors`.

## What the real browser exercised

[Source: `browser-smoke.mjs`](browser-smoke.mjs) launches **real headless Chromium** against an actual local Python HTTP server, not a mocked DOM or a syntax-only parser. It verifies:

- [x] Table initially renders **118** clickable atomic-number tiles.
- [x] Search for **Gallium** shows exactly its element, and Clear restores all 118.
- [x] Temperature Colors mode reports counts; at 20 °C **bromine #35 and mercury #80 appear liquid**, while **oganesson #118 stays unknown**, without inventing a known gas. Temperature presets for 0 °C and 100 °C and the family-color reset work.
- [x] Five clicks on the footer DONCO logo open the hidden **Bay City** Easter egg, which includes **Andrew Jameson**'s attribution. Close works.
- [x] Central About & Credits builds exactly **118 expandable credit entries**. Search for **indium #49** finds the matching original author **Jurii**. Separate Bay City City Hall credit is present.
- [x] Independently navigates to **all 118 individual `element.html?z=N` pages** and checks element names, chemical symbols, basic/science fields and typical uses.
- [x] On those 118 pages, all **92 permitted-to-display element JPEG candidates** were actually **decoded by the browser**, including checking `naturalWidth`/`naturalHeight`. The other **26** do **not** display a photo and instead show descriptive reasons for withholding/placeholder.
- [x] The actual interactive **20-question quiz** presents four options per question, disables answers after a selection, marks one correct programmed answer, advances through question 20, displays a numeric score, and provides a new-round control.
- [x] On a **390 × 844, 3× device-pixel-ratio, simulated touch/iPhone viewport**, the app loaded the table, element pages #48, #49, #118, quiz and About & Credits. None produced document-level horizontal overflow; element names and credits rendered.
- [x] **Zero unhandled JS page errors** were observed in this scope.

This is **browser runtime coverage**, but not independent scientific certification. The quiz is verified for interaction and programmed-answer marking, not a human-reviewed science explanation for every randomized fact. Responsive checks are **simulated iPhone-sized Chromium**, not Safari on a physical iPhone.

## Previously failed test attempts — why they do NOT count as app defects

- [Run 38776449781](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38776449781) stopped before inspecting element detail pages because the test checked text inside a collapsed Indium credit without opening the disclosure. **Fixed the test** by opening that record before reading its body. This was not evidence that the app hid the credit incorrectly.
- [Run 38776639609](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38776639609) stopped at element #1 because the test looked for the exact-case phrase “Atomic number” in `innerText`, which reflects CSS-rendered **uppercase** headings. **Fixed the test** to perform a case-insensitive comparison, including the science label. No app chemistry or element content was changed.
- [Run 38776854552](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38776854552) is the **first full successful run** after these two test corrections. All 118 photo/page and desktop/mobile/quiz checks then completed.

These historical failures are retained for traceability rather than erased.

## What this does NOT establish — release gate remains open

- [ ] A true **offline/PWA** session while network is disconnected and a service worker is installed under an actual HTTPS origin was **not** tested. The audit server used HTTP localhost; code conditions registration on HTTPS.
- [ ] Full **iPhone Safari/TestFlight**, Apple signed IPA and actual Microsoft Store packaged-artifact tests remain open.
- [ ] Screen-reader accessibility, visual fidelity, exhaustive keyboard navigation, landscape tablet, different Android browsers and all desktop display sizes remain open.
- [ ] **Final image author/license/commercial redistribution clearance** for the 92 element-image candidates and separate Bay City image remains open.
- [ ] The 26 withheld photos continue to exist in repository history; this browser test proves they aren't shown in the audited UI, **not** that they are excluded from every real release package. The separately tested dry-run iOS filtering checks 92/26 distribution.

**Published `main` must not be modified or merged without explicit user approval.** No release or publishing action was taken for this browser QA.
