# Native iPhone Simulator QA — actual compiled app (audit only)

**Date:** 2026-10-15  
**Repository:** `comctx/Periodic-Table-Explorer`  
**Source branch:** `scientific-audit-2026-10`, **never published `main`**  
**Source revision:** [`9fe2ca55b79959aade0b7ca4ab2537d9bf821ae5`](https://github.com/comctx/Periodic-Table-Explorer/commit/9fe2ca55b79959aade0b7ca4ab2537d9bf821ae5)  
**GitHub Actions native-test run:** [**38807251973 (conclusion: success)**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38807251973)  
**Workflow:** [`.github/workflows/audit-ios-simulator.yml`](../.github/workflows/audit-ios-simulator.yml)

## What was actually tested

A **macOS-15** GitHub-hosted macOS/Xcode runner checked out the audit branch and built the real `ios/PeriodicTableExplorer.xcodeproj` Swift app using the `PeriodicTableExplorer` shared scheme:

```sh
xcodebuild -project ios/PeriodicTableExplorer.xcodeproj \
  -scheme PeriodicTableExplorer \
  -configuration Debug \
  -sdk iphonesimulator \
  -destination 'generic/platform=iOS Simulator' \
  CODE_SIGNING_ALLOWED=NO build
```

The workflow required and **passed** all of:

- [x] Actual native SwiftUI / `WKWebView` **iOS Simulator build compiled successfully**.
- [x] Read-only `audit/verify_distribution_package.py` inspected the **actual built simulator application directory** `PeriodicTableExplorer.app/Web`, comparing **SHA-256 bytes of 92 JPEGs, data, scripts, credits, icons and Bay City photograph** with the audited repository. **The 26 excluded element-image files were absent.** This was the real simulator app's resources, not an archive with a fake IPA filename.
- [x] Actual built `Info.plist` bundle identifier equals `com.donaldreckman.periodictableexplorer`.
- [x] Booted an available **iPhone Simulator**, installed the built `.app`, and successfully launched `com.donaldreckman.periodictableexplorer` using `xcrun simctl`.
- [x] Captured a real iPhone Simulator startup screenshot, saved as GitHub Actions artifact **`pte-audit-ios-simulator-startup`** under [the run's artifacts](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38807251973) (artifact ID **12006143961**; temporary retention 7 days).
- [x] Screenshot visually inspected in this audit: it shows **Periodic Table Explorer title, search/clear controls, Start 20-Question Quiz, and Temperature View**, rather than a blank page or device home screen.

This complements, but does **not repeat**, the previous **118/118 Chromium runtime test** and **true disconnected HTTPS PWA test**, which are separately recorded in [`BROWSER_QA.md`](BROWSER_QA.md) and [`OFFLINE_QA.md`](OFFLINE_QA.md).

## Not yet verified — do not overstate

- [ ] **Full tap-through on iOS Simulator/native `WKWebView`** (search, element navigation, photo display, quiz full round and in-app navigation), VoiceOver and hardware-device display/orientation. A startup screenshot and successful process launch are narrower evidence.
- [ ] **Signed release IPA** with real Apple developer certificates, its cryptographic signature and exact bundled files. This test deliberately used `CODE_SIGNING_ALLOWED=NO`.
- [ ] **Apple TestFlight** installation/physical iPhone use. No TestFlight upload or Store build was launched.
- [ ] **App Store Review rejection:** the user's earlier October 2026 App Review discussion indicated a **Guideline 4.3 Design/Spam** issue for an earlier version (reported as 1.0 (9)), and an extended-review concern. This information comes from the prior conversation, **not from a fresh authenticated App Store Connect status check**, so the precise current issue text, state and whether Apple's clarification response has arrived remain **unverified**. A valid build does **not** resolve guideline 4.3. Obtain the full current Apple review message and show feature differentiation before submitting again. Apple's [App Review Guidelines §4.3](https://developer.apple.com/app-store/review/guidelines/) specifically address similar or indistinguishable apps.
- [ ] Final photo-source/derivative/license release approval and actual Windows/Microsoft package validation.

**Policy:** Keep all audit work isolated; do not merge to `main`, trigger Codemagic's `submit_to_testflight: true` workflow, or publish without explicit owner authorization and resolution of the applicable release gates.
