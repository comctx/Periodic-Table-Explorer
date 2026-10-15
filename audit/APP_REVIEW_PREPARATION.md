# Periodic Table Explorer — Apple App Review 4.3 preparation

**Audit branch:** `scientific-audit-2026-10`  
**Prepared:** 2026-10-15. **No Apple message sent, no build submitted.**

## Why this is an actual, separate release issue

In the owner's prior October 2026 App Store review discussion, version **1.0 (9)** of **Periodic Table Explorer** was reportedly rejected under **Guideline 4.3 (Design/Spam)**, and an Apple extended-review notice had also been discussed. The complete, current official review message and any response to the previously requested clarification have **not been retrieved through an authenticated Apple App Store Connect source** during this GitHub audit. **Do not treat the precise current review state, the reason behind 4.3, or an appeal result as confirmed.**

Apple's [App Review Guidelines, §4.3](https://developer.apple.com/app-store/review/guidelines/) address multiple near-identical apps and apps indistinguishable from existing offerings. Apple's [App Review guidance](https://developer.apple.com/app-store/review/) also discusses repackaged web experiences and distinctive value. **A science/content audit, PWA smoke test, iOS simulator compilation or copyright credit correction cannot itself overturn a 4.3 policy review.**

## Features of the CURRENT audited source — verified, not invented

These are features we can accurately describe without comparing them with an unavailable older signed build or claiming exclusivity in the App Store.

| Current feature | Verified source or actual test |
|---|---|
| Searchable interactive 118-tile element table and drill-down pages | `index.html`, `element.html?z=1..118`, [Chromium QA 38776854552](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38776854552) |
| All 118 dedicated element detail pages with basic/science facts, discovery histories and uses | `elements-data.js`, `element.html`, browser QA above |
| Interactive temperature slider/presets and phase-state coloring with unknown data explicitly shown as unknown | `index.html`, browser QA |
| Interactive 20-question quiz with result screen and varying question choices | `quiz.html`, Chromium QA and [true offline QA 38783188109](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783188109) |
| 118 individually searchable photo-source/author/license credit records, with withheld images clearly labeled | `about.html`, `element-photo-data.js`, browser QA |
| 92 locally bundled element-photo candidates and 26 explicitly excluded/placeholder media records | `audit/package_web_assets.py`, [package guard 38806534768](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38806534768) |
| Fully network-disconnected HTTPS Chromium PWA test covering 118 elements and all 92 cached photos | [Offline QA 38783188109](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38783188109) |
| Real SwiftUI/`WKWebView` native iOS Simulator binary compiled and launched, with startup screenshot | [iOS Simulator QA 38807251973](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38807251973) |

**Do not assert** that the rejected October 4 or 14 signed binary already had these same exact features or that all are entirely absent from competing apps. That comparison would require actual old build/screenshots and competitor research. Also do not claim the whole image library is commercially rights-approved or that a full physical TestFlight run passed.

## Suggested App Review clarification / review-notes DRAFT — NOT SENT

Subject: Periodic Table Explorer — Guideline 4.3 clarification and app functionality

Hello App Review,

Thank you for reviewing Periodic Table Explorer. I would appreciate more specific clarification of the Guideline 4.3 concern so I can address it accurately.

The current application includes an interactive 118-element periodic table with dedicated science and discovery-history pages, a temperature-driven visual phase explorer, a 20-question element quiz, offline access to app content, and searchable source and image credits.

Could you please let me know whether the concern is specific to the app's binary or presentation, its content relative to other apps, or its overall concept? I would like to make any necessary substantive improvements rather than resubmit without understanding the issue.

Thank you for your guidance.

**Review notes for a FUTURE approved build, not for submission now:** Tell Apple which of the above features are newly added **only after** comparing the new approved build to the previously rejected binary. Include the relevant screenshots or a short recording demonstrating genuine interactions, if appropriate.

## What is needed before an honest re-review claim

- [ ] Obtain the **full current official App Review message and any response** in App Store Connect, including guideline subtype and whether `4.3` is still outstanding.
- [ ] Verify the exact previously submitted `1.0 (9)` binary/features before making "new since previous submission" claims.
- [ ] If Apple confirms similarity/low differentiation, identify a meaningful, user-benefiting change with concrete interaction evidence rather than changing only screenshots, icon, or marketing wording.
- [ ] Address any additional **Extended Review** request as specified in the real Apple message; do not invent a missing technical defect.
- [ ] Finish valid individual photo license/attribution/ShareAlike release conditions and a real signed IPA/device test.
- [ ] Get the owner's specific approval before a release build/merge/submit.

**Guard:** This note is a preparation document, not evidence that Apple's review concerns were cleared, a response was sent, or publication was authorized.
