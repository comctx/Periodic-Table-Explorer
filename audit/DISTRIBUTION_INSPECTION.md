# Release-package inspection — evidence and limits

**Recorded:** 2026-10-15  
**Branch:** `scientific-audit-2026-10`, not public `main`  
**Actual GitHub Actions test:** [run 38774165966](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38774165966) (**success**, job `package-guard`).

## What is known from the actual repository tree

At the inspected GitHub audit-branch commit `10e2cd47b704606e1052761018688f3e5df94ff7`, the repository contained `ios/PeriodicTableExplorer.xcodeproj`, `ios/PeriodicTableExplorer/PeriodicTableExplorerApp.swift`, `codemagic.yaml`, and HTML/PWA source, but **no checked-in Windows-specific package project/manifest/build recipe** (`.wapproj`, `AppxManifest.xml`, `.msix`, `.appx`, `.msixbundle`, Windows publish script, etc.). This is a statement about **this repository's visible files**, not proof that the user's Windows Store distribution does or does not exist elsewhere.

Consequently, we **cannot identify, change or certify the actual Windows release packaging route from the current repository alone**. Request a real output archive/build configuration before claiming its risk resolved. No Store publishing action was taken.

## New read-only, fail-closed inspection tool

`audit/verify_distribution_package.py` takes an **extracted `Web` folder** or an actual **flat ZIP-format .zip, .ipa, .msix, or .appx** file and:

1. Reads `element-photo-data.js` from the audited repository to calculate the exact 92 selected local element JPEGs and known 26 excluded entries.
2. Searches the input package for `Web/images/elements/`; refuses missing/duplicate or unexpected paths, missing images, and any of the **26 excluded picture filenames anywhere**.
3. Computes SHA-256 comparisons from real bytes: all 92 staged photos must match the reviewed repository images, and `about.html`, `element.html`, `index.html`, metadata, scripts, service worker, icon files, branding logo and the **separate Bay City City Hall photograph** must match the audit branch.
4. Rejects case-colliding entries, invalid archive paths, encrypted/symlink entries, unreadable archives, and nested/unsupported archive formats rather than giving a false pass.

Run at the repository root against an existing extracted folder or actual supported archive:

```bash
python3 audit/verify_distribution_package.py /path/to/extracted/Periodic.app/Web
python3 audit/verify_distribution_package.py /path/to/real-unsigned-or-signed-app.ipa
python3 audit/verify_distribution_package.py /path/to/real-flat-package.msix
```

A **PASS is only byte-level package/source consistency** (and this script does not perform code-signature, legal licensing, security, offline interaction, Apple TestFlight, or Microsoft Store submission checks). ZIP-format `.msixbundle` and `.appxbundle` with embedded packages are **not supported**: extract each inner package and separately inspect; do not infer success from a bundle container. If the actual distributable uses nonstandard paths, first inspect its real structure and extend the checker instead of skipping the verification.

## CI test: exact recorded positive and negative results

[Successful run 38774165966](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38774165966) ran the prior science/credit regression and staged iOS Web test, then executed the new checker:

| Fixture | Input | Observed in successful job |
|---|---|---|
| Isolated staged Web folder | Extracted image-filtered assets | **PASS**; 92 exact images matched and 26 excluded |
| Synthetic `audit-clean.zip` | Zip of staged assets | **PASS** |
| Synthetic `audit-clean.ipa` | Same zip bytes with IPA filename (NOT signed) | **PASS** |
| Synthetic `audit-clean.msix` | Same zip bytes with MSIX filename (NOT a real Windows package) | **PASS** |
| Synthetic `audit-invalid-withheld.zip` | Includes excluded #61 promethium placeholder/illustration JPEG | **EXPECTED REJECTION** |
| Synthetic `Web-stale` | Replaced `about.html` with unrelated contents | **EXPECTED REJECTION** |
| Synthetic `Web-dirty` | Added explicitly excluded #61 JPEG to otherwise valid folder | **EXPECTED REJECTION** |

**Crucial distinction:** `.ipa`/`.msix` fixture names do not make those ZIP files real signed Apple or Microsoft distributables. **No actual Windows package, real signed IPA, or Store-delivered artifact was examined here.**

## What is still open

- Actual Windows/Microsoft Store packaging recipe and output artifact **not located in this repo**; import or locate it to verify what the Store package really includes. A generic checker does not change the Windows build.
- Signatures, runtime loading, all-device/offline/quiz QA are not covered by this source archive inspection.
- The 92 staged photo candidates, Bay City photograph, and app graphics still require final permission/creator/derivative ShareAlike and commercial-rights review. Source-hash equality is **not a license grant**.
- No merge to `main`; no release or publishing authorization has been given.

**Reusable rule:** All future builds should run the new package inspector **against the actual delivered files**, not only generated test fixtures. Stop release on any failure or unsupported format.
