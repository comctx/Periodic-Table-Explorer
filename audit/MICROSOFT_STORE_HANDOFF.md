# Microsoft Store handoff — Periodic Table Explorer

**Prepared:** 2026-10-15. **Live source:** `scientific-audit-2026-10` only. **Publication:** NOT started, NOT authorized to merge `main`, and no app has yet been uploaded to Microsoft Store.

## Current verified engineering status — DO NOT CONFUSE WITH MSIX

- Existing app is a Progressive Web App with `manifest.webmanifest`, 192/512 pixel icons, secure/offline service worker, HTML pages for all 118 elements, quiz, About & Credits, support and privacy pages.
- Added `audit/check_ms_pwa.py`: validates PWA source manifest, standalone scope/start_url, PNG icons, core paths, offline allowlist, current 92 candidate images, support/privacy, and the current scientific disclaimer.
- New manual/push GitHub Actions workflow: [`audit-ms-store-preflight.yml`](../.github/workflows/audit-ms-store-preflight.yml), restricted to the `scientific-audit-2026-10` branch. It stages audited app files, runs science/offline/photo checks, checks exact source hashes, and uploads an **ENGINEERING-ONLY** ZIP of the PWA's `Web/` source. No Windows binaries, Store API calls, branch merge or public-site deployment.
- **Verified GitHub Actions success:** [run 38833258437](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38833258437), source commit [`7543e57`](https://github.com/comctx/Periodic-Table-Explorer/commit/7543e570aacda410bff13245c225cd8c4f7b5698). Job steps included `Microsoft Store PWA manifest / content readiness`, `Inspect actual staged PWA source byte-for-byte`, `Prepare engineering-only source archive and check it`, and `Upload build candidate sources` — all **success**. This is **not a real MSIX, .msixbundle, appx, signed Store deliverable, or an installed Windows test**.
- GitHub repository previously contained no actual MS Store Windows package recipe. This workflow is the PWA *source preparation* route, not a false claim to have compiled Windows binaries.

## Microsoft-supported shortest distribution route

Use Microsoft Edge's [official Publish a PWA to Microsoft Store instructions](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/microsoft-store), [MS Store Get started](https://learn.microsoft.com/en-us/windows/apps/publish/get-started), and [PWABuilder](https://www.pwabuilder.com/).

1. In the user's **existing Partner Center**, check whether a product named **Periodic Table Explorer** has already been created. **Do not create a duplicate.** If not, **Apps & games → New product → MSIX or PWA app**, check availability and reserve **Periodic Table Explorer**. The Store reserves a unique product name; only the developer account can perform this step.
2. Within that product, use **Product management → Product identity** and record exact **Package ID**, **Publisher ID** and **Publisher display name**. Never invent these values or use another app's product identity. Microsoft's [view product identity](https://learn.microsoft.com/en-us/windows/apps/publish/view-app-identity-details) instructions.
3. Provide a **working public HTTPS deployment of the audited branch**, not the previous `main` GitHub Pages site. **The branch has not been deployed publicly yet.** Choosing a staging/public release host is an explicit release step requiring owner approval; do not merge into `main` to make a shortcut. The audited host needs `/index.html`, manifest, icons, privacy/support, offline service worker and all permitted distributable images.
4. Final **commercial/photo and Bay City image rights clearance required before publicly deploying or submitting a candidate**. The 92 image files currently pass *engineering staging* only, and 26 other images are excluded. Rights, photographer credit, local redistribution, ShareAlike, and altered-photo attribution questions remain. **Don't publish the current staged ZIP or send it to the Store as approved content.**
5. Once hosted audited HTTPS PWA and identity are available, enter audited HTTPS URL in [PWABuilder](https://www.pwabuilder.com/), inspect its report card, choose **Package for Stores → Windows → Generate Package**, and enter the exact Partner Center values. Download Microsoft's produced **.msixbundle** (and supported classic bundle where offered). A ZIP of `Web/` source generated in our preflight is not a Store package and cannot be substituted.
6. **Test the actual generated Windows installer** on Windows, confirm launch, all 118 element pages, temperature controls, quiz, privacy/support and HTTPS/offline behavior, and inspect actual bundled asset references. Source-level byte checks are not enough: a hosted PWA can load remote assets not present inside the Windows package. Do not claim full offline functionality until tested inside Windows Edge/PWA.
7. Fill Partner Center draft: **Pricing and availability, Properties, Age ratings, Packages, Store listing/screenshots and Submission options** as required. Use the description below. If you wish to charge for the app, price must be chosen by the owner.
8. Submit for certification **only after** user confirms the actual app identity, legally cleared image set, hosting, Windows test, and final listing. No one has submitted this app on the user's behalf.

## Store listing draft — ready for editing or copying

**Name:** Periodic Table Explorer

**Short description:**
Explore all 118 chemical elements, their properties and discovery stories, and test yourself with an interactive 20-question quiz.

**Full description:**
Explore the periodic table with a clear, interactive guide to all 118 chemical elements.

Search by element name, symbol or atomic number. Open individual elements to learn their chemical symbols, standard atomic weights where assigned, electron configurations, physical properties, discovery histories and typical applications.

Use the temperature-colour view to explore how the physical state of elements changes with temperature. This feature is an educational approximation: predicted or unknown properties are labeled rather than treated as experimentally established, and physical states depend on pressure.

Challenge yourself with randomized 20-question quiz rounds covering symbols, atomic numbers, element families and selected scientific and historical facts.

The app includes scientific references, an About & Credits page, privacy information and support contact details. Scientific data and historical interpretations may be refined as new evidence becomes available.

**Category recommendation:** Education (select the closest category available in Partner Center).

**Feature highlights (suggested):**
- Interactive, searchable table of all 118 elements
- Atomic numbers, symbols, standard atomic weights and other properties
- Individual discovery histories and typical applications
- Educational temperature and phase-state explorer
- Twenty-question element quiz
- Scientific references, credits, privacy and support

**Release metadata still required, not guessed:**
- Product reservation / Partner Center identity
- Owner's chosen price, markets, and age-rating answers
- Privacy policy **live public URL**, not merely `privacy.html` in the repository
- Support page **live URL** or contact email from app (`comctx@icloud.com`, verify in Store draft)
- Correct Store images/screenshots **from final audited Windows version**
- Licensing/rights sign-off for all actual media, Microsoft certification

## One immediate user action

Open [Microsoft Partner Center dashboard](https://partner.microsoft.com/dashboard) and select **Periodic Table Explorer** if listed, or reserve that exact name as an **MSIX/PWA app** if not. The next needed information is the **Product identity** page with Package ID, Publisher ID and Publisher display name; these cannot be inferred from GitHub and should never be fabricated.

## Do not confuse engineering and real release states

| Gate | Real outcome |
|---|---|
| Scientific audit branch app assembled | Yes, PWA files exist |
| PWA source candidate validated | **PASS** on GitHub Actions run 38833258437 |
| Windows Store MSIX/.msixbundle built | **NO** |
| Product name/identity from Partner Center | **Not verified** |
| Audited HTTPS endpoint hosted | **Not verified** |
| 92 candidate image & Bay City photo commercial rights | **Pending** |
| Installed MSIX on Windows tested | **NO** |
| Store listing uploaded or submitted | **NO** |
| `main` or published GitHub Pages updated | **NO** |
