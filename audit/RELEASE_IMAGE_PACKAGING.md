# Release image packaging guard — 15 October 2026 (audit branch only)

**Repository:** `comctx/Periodic-Table-Explorer`  
**Working branch:** `scientific-audit-2026-10`. **Do not merge or publish `main` yet.**

## Purpose

The original iOS Xcode shell build step copied all 118 `images/elements/*.jpg` files into the signed app's `Web` folder, even though `element.html` hid some of them. An image hidden in the UI is **still distributed** if physically included in an IPA or Store package.

`audit/package_web_assets.py` now stages an isolated, fail-closed set of only the image files that **the current element-photo UI would try to show**. The original repository images are **not deleted**.

**Current build inventory (not a legal licensing sign-off):**

- 118 catalogued elements.
- 10 intentionally withheld as inaccurate, illustrative, unrelated, or source/rights uncertain: **61, 84–87, 100–104**.
- 14 generic placeholders: **105–118**, not actual photographs.
- 2 more pictures expressly withheld for unresolved rights/origin details: **93 neptunium and 99 einsteinium**. **92 uranium** now has a documented Ames Laboratory/U.S. DOE public-domain + VRT source, and **97 berkelium** has the original ORNL Flickr image's explicit **CC BY 2.0** license and research-solution caption. Full image-package sign-off is still separate. See [four-case report](FOUR_RIGHTS_CASES_92_99.md).
- **92 locally displayable photos/research images are staged**: 118 – 26 = 92. These are **candidates**, not finally redistribution-cleared photographs.
- **98 californium** is a public-domain replacement sourced to the U.S. Department of Energy. Its attribution was normalized from “public-domain” to “public domain” so the app's existing rights check recognizes the recorded public-domain claim. Do not treat this typography correction as legal clearance.

## Packaging implementation

- `ios/PeriodicTableExplorer.xcodeproj/project.pbxproj` now uses `audit/package_web_assets.py` rather than `cp -R images`.
- `codemagic.yaml` asserts **exactly 92** named element photos and verifies the full file-name allowlist inside the signed IPA. It also checks `about.html`, `privacy.html`, `support.html`, `manifest.webmanifest` and `sw.js`, which the earlier Xcode copy step did not stage. About & Credits must remain accessible in the packaged iPhone app.
- `.github/workflows/audit-package-check.yml` runs science/credit regressions and verifies an isolated staged Web folder contains the exact expected 92 eligible images and **none** of the 26 excluded files.
- `audit/package_web_assets.py` fails closed if the display inventory changes, source metadata is malformed, a required image is missing, or a source path does not match the expected safe element-image naming format.
- A build-verified IPA and its archived byte-level contents **must** still be inspected before TestFlight or Microsoft Store distribution. This GitHub Actions check is a packaging dry run, not a signed IPA.

## Additional included non-element photograph — Bay City City Hall

**The 92 count covers only `images/elements/*.jpg`**, not every image in the staged Web assets. One **additional separate photograph** is packaged as `images/bay-city-city-hall.jpg`, shown after the hidden five-tap logo Easter egg. Other graphics include icons and the DONCO footer logo.

- Specific Commons source: [Bay City MI City Hall.JPG](https://commons.wikimedia.org/wiki/File:Bay_City_MI_City_Hall.JPG), **photo by Andrew Jameson, 20 February 2012**. Commons states **[CC BY-SA 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/)**, self-published by the photographer.
- Both Easter egg overlays (**`index.html` and `element.html`**) **already contained** the named photographer, source and license link. The missing **central About & Credits entry** has now been added in `about.html`, explicitly stating the resizing/reencoding and ShareAlike requirement. Do not incorrectly report that the overlays lacked photographer credits.
- The scientific/credits regression and CI staging guard now also assert **all three screens** contain the named source, photographer, license and packaged photo. Source rights page and **the actual local Bay City JPEG vs Wikimedia original** have now been computer-compared: [audit run 38773309259](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38773309259) passed with dHash distance **0** and grayscale brightness difference **0.1**, local 1468 × 1600 vs original 2400 × 2616. This establishes **strong likely photo identity, not file-level legal clearance**. Final derivative/ShareAlike and signed-package compliance **remain open**.
- **Do not count this picture as a 93rd element sample.** There remain **92 element-picture candidates plus one separate Easter egg photograph**; all other branding icons/logos are separate media assets requiring their own provenance/ownership checks before Store release.

## Portable package inspection — verified in CI, not a real signed release

Added [`verify_distribution_package.py`](verify_distribution_package.py) with its recorded outcomes in [`DISTRIBUTION_INSPECTION.md`](DISTRIBUTION_INSPECTION.md). [**GitHub Actions 38774165966 passed**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38774165966): it inspected the staged `Web` folder, ZIP, and synthetic ZIP-format `.ipa`/`.msix` fixtures; it **correctly rejected** a ZIP containing excluded #61, a stale/altered Credits page, and a folder containing the withheld file. It hashes all 92 element photos and the separately included Bay City photo/other static resources against the audit-branch source files.

**These were synthetic archives, not signed Apple or Microsoft packages**. The repository tree contains **no checked-in Windows-specific packager or manifest**, so the actual Windows Store packaging path has **not** been verified or modified. No real .ipa, .msix, signed package, Store-delivered build or nested Windows bundle was tested, and no photo rights have been finally cleared. The checker refuses unsupported/nested bundle layouts rather than guessing.

## PWA offline photo cache — completed automated HTTPS Chromium test

The original `sw.js` core cache included pages/scripts but not the 92 displayed element photos. The new **`pte-core-v3`** installs **all 92 currently stageable element JPEGs**, using the exact `offline-photos.json` list checked by `audit/check_offline_manifest.py`, plus the separate Bay City City Hall photograph and essential pages. **All 26 withheld/placeholder element image files remain excluded** from this cached list and from the isolated staged native resource folder.

The manifest is now in `audit/package_web_assets.py`'s required `CORE_FILES` and its bytes are covered by the general package inspector. `codemagic.yaml` checks that any subsequently built IPA contains `offline-photos.json` matching its exact 92 staged element JPEGs. **These are guards for a future signed build; no real signed IPA was created or inspected in this audit update.**

A real HTTPS Playwright/Chromium test served the **isolated staged Web app**, waited for the PWA worker to control the page and cache **108 files (92 photos)**, then disconnected the network. [**Run 38783188109 succeeded**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783188109) for all 118 element pages, all 92 JPEGs including first-offline-view cases, all 26 excluded, quiz, search, temperature, credits, and Bay City. For scope and the first test-harness failure see [`OFFLINE_QA.md`](OFFLINE_QA.md).

**This is browser/PWA QA, not actual iOS Safari/WKWebView or a Microsoft Store package test**, nor does caching imply license approval. Preserve all remaining source-rights and signed-device release gates.

## Still outstanding before release

1. Complete file-by-file commercial redistribution/author/source/derivative-rights review for **all 92 staged candidate images**, including ShareAlike and author name/link requirements.
2. Separately investigate unresolved image grants and derivative history for **93 Neptunium and 99 Einsteinium**; both are explicitly withheld until this is completed.
3. Resolve scientifically appropriate rights-cleared replacements for the other 24 excluded pictures (10 inaccurate/illustrative images and 14 generic superheavy placeholders) where feasible; extremely short-lived superheavy elements do not have bulk-sample photos.
4. Verify mobile/browser display, working credits links, image loading and offline behavior; produce and inspect an actual signed iOS IPA.
5. Apply equivalent image asset filtering to **any other packaging route**, including Microsoft Store or any later desktop wrapper. This change specifically protects the iOS Xcode build.
6. Keep `main` and public production build unchanged until explicit release approval.

## Reproduce the local staging check

```bash
node audit/check-data.mjs
python3 audit/package_web_assets.py /tmp/pte-package/Web
find /tmp/pte-package/Web/images/elements -type f -name '*.jpg' | wc -l
```

Expected result: **92** JPEGs, all other 26 omitted, and the About & Credits assets present. Excluded original files remain on the audit branch for archival/research purposes and must never be automatically bundled.
