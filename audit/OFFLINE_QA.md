# Periodic Table Explorer — HTTPS offline PWA verification

**Audit-only branch:** `scientific-audit-2026-10`  
**Date:** 2026-10-15  
**Tested source commit:** [`c70d61355f1180c2b2f7045f424d8dedb40561bb`](https://github.com/comctx/Periodic-Table-Explorer/commit/c70d61355f1180c2b2f7045f424d8dedb40561bb)  
**Independent completed CI success:** [GitHub Actions run **38783188109**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783188109) (job `offline-https-smoke` conclusion `success`).  
**Reproduction:** [`audit/offline-browser-smoke.mjs`](offline-browser-smoke.mjs), [`.github/workflows/audit-offline-smoke.yml`](../.github/workflows/audit-offline-smoke.yml), [`audit/https_test_server.py`](https_test_server.py).

## Problem actually found in the old code

The previous `sw.js` (`pte-core-v2`) pre-cached only a small core list of pages and scripts; **none of the 92 displayed element photo JPEGs was preloaded**, and the separate Bay City Easter egg JPEG was also absent from core pre-cache. Network-first caching could happen on a successful previous photo visit, but **a freshly installed app could not reliably display any never-visited photo after going offline**. This is a code-level deficiency visible in the former source; the prior successful online Chromium tests did not claim otherwise.

## Exact changes made

- [x] Created **`offline-photos.json`** specifying the exact **92** element image paths that the existing `audit/package_web_assets.py` considers displayable/stageable. This is a **technical allowlist, not image license clearance**.
- [x] Created `audit/check_offline_manifest.py`, which fails if the source-photo status changes, the allowlist has a missing/extra entry, the order changes, duplicates appear or a staged JPEG is missing; it enforces the existing **26 excluded** records.
- [x] Updated `sw.js` to cache version **`pte-core-v3`**: core pages, manifest, main logo/icons, separately attributed Bay City photo and **all 92 JPEGs in batches of 12**. Installation fails closed instead of silently treating a partial 92-photo cache as fully installed. An activated new worker removes obsolete `pte-core-` caches, and existing same-origin network-first/fallback logic is preserved.
- [x] Updated `audit/package_web_assets.py` to include the manifest in the staged `Web` folder; the isolated IPA/Windows package inspector now hashes it as a core file.
- [x] Updated `audit/check-data.mjs`, `.github/workflows/audit-package-check.yml` and `codemagic.yaml` to check that the staged/signed iOS image inventory and the offline manifest match the exact **92** paths. These code changes **do not trigger an App Store build**.

## The verified network-disconnected browser test

The offline CI workflow **first stages the same isolated `Web` directory intended for iOS** (not the repo's full images folder), then serves that folder at an **HTTPS** loopback URL using a short-lived test certificate. Chromium loads it and registers the actual service worker (not a mocked offline controller), waits for the full 92-photo CacheStorage inventory and refreshes while online so the installed worker controls the page.

**Only then the Playwright browser context is switched to `setOffline(true)`.**

| Verified after network off | GitHub log's actual result |
|---|---|
| Cache installation | **92 element photos; 108 cached files total; service worker active/controlling** |
| Individual pages | **118/118** `element.html?z=N` pages navigate and render scientific fields |
| Photos never visited before disconnection | **92/92** candidate local JPEGs decoded successfully in the browser |
| Withheld/placeholder pictures | **26/26** omitted from cache and UI image displays |
| Quiz | All 20 randomized question steps, answer marking and final score work offline |
| Main table and tools | 118 table tiles, search/clear, temperature mode/preset function offline |
| Credits | All 118 credit entries generated and Indium author filter worked offline |
| Additional local picture | Bay City City Hall Easter egg photo decoded offline and logo gesture worked |
| Responsive smoke | Checked index, element #48/#49/#118 and Credits with **390 px** viewport while offline; no document overflow |
| JavaScript | No unhandled page errors in observed scope |

**Original success log excerpts:**

```text
ONLINE INSTALL PASS: HTTPS service worker active, 92 audited photos and 108 files cached.
PASS: TRUE OFFLINE HTTPS Chromium: installed/controlled SW; 118 pages; 92 first-use cached JPEGs decoded; 26 withheld not cached/shown; 20-question quiz; search, temperature, 118 credits and Bay City; 390px viewport; no JS page errors.
```

The earlier [first offline trial 38783009704](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783009704) **failed at the test's service-worker-control assertion** after staging/cache installation, before any offline element navigation. The test script was corrected to wait for a **controlled page reload while still online**. The successful [second run 38783188109](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783188109) is the evidence for the pass. This distinction is preserved; the first run was **not** represented as successful.

The [science and iOS package dry-run CI **38782704143**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38782704143) also **passed** on the offline package configuration commit `cce35535f8a40002adc7c54082f7f94a180d5f9d`, including manifest-vs-image-catalog assertions. These are separate CI runs and have different scopes.

## What remains open — important limits

- [ ] **Actual signed IPA / native iOS WKWebView**: Swift bundle content, native local-file URL behavior, first-use TestFlight, and physical iPhone Safari offline flow have **not** been tested. An HTTPS browser service worker is not proof that native `WKWebView` behaves the same way.
- [ ] Android devices, real Safari PWA installation, web accessibility, low-storage behavior, updates from old caches, storage-quota eviction and long-term offline persistence are not exhaustively tested. The browser's simulated 390 px viewport is not a physical iPhone.
- [ ] **Photos remain provisional candidates**: the 92 cached photos and Bay City licensed image still require final file-specific creator/author, derivative/ShareAlike, commercial redistribution and packaged offline credit verification. Caching them for an audit test is not permission to publish.
- [ ] Actual Microsoft Store / Windows release package and app signing are still unverified; no corresponding build or artifact was identified inside this repository.
- [ ] No changes merged to `main`; no publishing or TestFlight builds were initiated.

**Summary:** The specific PWA first-install offline picture gap is addressed, and a real disconnected HTTPS Chromium test now **passes across all 118 elements and all 92 cached candidates**. Browser/PWA offline QA can be marked completed **for this exact automated scope only**.
