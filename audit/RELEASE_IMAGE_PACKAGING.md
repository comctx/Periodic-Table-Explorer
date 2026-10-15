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
