# Microsoft Store handoff — Periodic Table Explorer

**Prepared:** 2026-10-15. **Live source:** `scientific-audit-2026-10` only. **Publication:** NOT started, NOT authorized to merge `main`, and no app has yet been uploaded to Microsoft Store.

## Confirmed Partner Center product identity — owner screenshot 2026-10-15

The user opened the **existing draft product** in Microsoft Partner Center (product overview / Product Identity page). This is **not a new Store listing**, so **do not create a duplicate app**. The three package-manifest identity values shown in the authenticated Product Identity screen are:

| Windows package manifest field | Exact Microsoft-issued value |
|---|---|
| `Package/Identity/Name` | `DONCO-BAYCITY.1765894576CC2` |
| `Package/Identity/Publisher` | `CN=BAF22FEF-6032-45F6-883B-4445F530E5ED` |
| `Package/Properties/PublisherDisplayName` | `DONCO-BAYCITY` |

**Microsoft Store product listing:** `Periodic Table Explorer`, existing status **In draft** (user's Partner Center screenshot). Existing Store product URL contains product identifier `9NMBLNHWTSDW`; keep it associated with this same listing.

These three identity strings must be **copied exactly** into the real Windows package generated for the existing listing. The public web app's `manifest.webmanifest` is not an MSIX `AppxManifest.xml`; **do not** insert `CN=...` identity into web-manifest fields or pretend the MSIX already exists.

**Status:** Product identity gate **complete**. Still missing: the authorized HTTPS deployment of this **updated audit branch**, resolved third-party commercial image reuse rights, a genuine PWABuilder Windows MSIX package with those precise identity fields, installed-Windows testing, and final Store submission. `main` and the public app **remain unchanged** pending explicit release approval.

## Corrected app release path prepared with offline migration — 2026-10-15

The release issue is no longer building another MSIX: the owner's existing Edge PWA wrapper points to the **current GitHub Pages URL**. Updated HTML/JS/data can be delivered from that origin without changing the `manifest.webmanifest` (the web manifest is byte-identical between audit and `main`). Source: [Microsoft Edge PWA Store updates](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/microsoft-store#make-updates-to-your-app).

**Release-specific correction already committed:** `sw.js` now rotates the offline service-worker cache from `pte-core-v3` to `pte-core-v4`. This allows old cached content to be retired when the audited website is approved and deployed. GitHub's [true HTTPS network-off upgrade test run **38846162466**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38846162466) concluded **success** and seeded an old v3 cache before installing v4. It then checked that **v3 was gone**, the new v4 cache held the corrected **CIAAW standard atomic weight terminology, Sigurd Hofmann GSI histories and uncertain superheavy states**, and the app still worked with 118 element pages, quiz and 92 eligible photos while fully offline. Science and packaging run [38846117454](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38846117454) also **passed** after coordinated v4 source/test updates.

**Manual controlled deployment prepared, NOT ACTIVATED:** [`.github/workflows/ms-publish-audited-pages.yml`](../.github/workflows/ms-publish-audited-pages.yml) can build a **website** from the **audit branch** (not `main`), remove **all 26 withheld element JPEGs** from the resulting Pages artifact and keep the selected 92 and Bay City photo only after documented release clearance. It uses `audit/package_web_assets.py`, the pre-existing 118-element scientific regression, offline manifest check, `check_ms_pwa.py`, byte-for-byte source inspector and GitHub Pages upload. It is **not a Windows package rebuild**, does **not** submit to Partner Center, and it has **not run**. Unlike blindly merging the entire audit branch into `main`, the deploy artifact contains only reviewed app assets, not audit research/unused images.

**Explicit deployment lock remains OFF:** `audit/ms-public-release-approval.json` currently has **all three approvals `false`**:
- `photo_and_attribution_rights_reviewed`: false
- `bay_city_image_and_logo_rights_reviewed`: false
- `owner_approved_public_deployment`: false

The workflow's `audit/check_ms_release_gate.py` refuses publication without all three explicit `true` values, a nonempty reviewer/date and a substantive on-repo rights-evidence document. Only a **verified rights review plus the owner's explicit yes to public deployment** can allow those values to change. The workflow can be triggered by a push changing the approval file on `scientific-audit-2026-10`, without requiring the workflow file to be committed to the old `main` branch. This is deliberately **not** an automatic publication from ordinary science or packaging commits.

**One owner-side configuration prerequisite for this method:** In GitHub repository **Settings → Pages → Build and deployment**, Pages must be configured to source **GitHub Actions** before `actions/deploy-pages` can replace the current branch-based website, if it is not already configured that way. **Do not change this now**: changing live-site settings before legal release clearance could interrupt the existing site. The deployment workflow itself does not control this setting.

**Follow-through after authorized deployment:** Validate the public URL and the **existing installed Windows Store PWA**: corrected source visible, new v4 cache activation and offline behavior, 118 elements, quiz, credits, published privacy/support pages, 26 withheld images absent from the deployed site; then submit Partner Center draft only after handling the `runFullTrust` warning.

**Restricted capability warning:** Uploaded app's `runFullTrust` is real. Microsoft's [restricted capability documentation](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/app-capability-declarations) states that full-trust medium-integrity Windows apps may require it, and [submission options guidance](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/pwa/manage-submission-options) explains the review process. It is a **warning pending approval**, not proof of rejection. Do not edit/remove it from the bundled APPX without establishing which Edge-PWA packaging features require the declaration.

## Uploaded 1.0.1.0 bundle verified — executable package, website-driven content

**Actual nested bundle inspection:** [`ACTUAL_MSIXBUNDLE_INSPECTION_2026_10.md`](ACTUAL_MSIXBUNDLE_INSPECTION_2026_10.md).

The owner supplied their real `Periodic Table Explorer..msixbundle`. Offline, read-only ZIP/AppxManifest analysis confirmed a genuine MSIX bundle structure with a neutral APPX launcher and **version `1.0.1.0`**. Exact Product Identity Name, Publisher CN, and PublisherDisplayName **match Partner Center**. It declares `runFullTrust`, so the Partner Center warning is real. The launcher opens **`https://comctx.github.io/Periodic-Table-Explorer/`** in Microsoft Edge; it packages **no HTML, JavaScript, element database, element photographs, or quiz** — only Windows icon/splash assets and the app's launch manifest. The file was not installed on Windows and byte equivalence to the file currently stored in Partner Center was not proven.

**Critical implication:** Changing source code in GitHub's **audit branch alone cannot change what this PWA launcher displays**. At last check `main` still has older scientific HTML, while the audited `element.html` has the corrected atomic weights and histories. The exact `manifest.webmanifest` text is **identical on audit and main**. [Microsoft officially explains](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/microsoft-store#make-updates-to-your-app) that PWA *HTML/JS/other content updates* usually do **not** require regenerating the Windows package, whereas *web app manifest changes* do. Therefore **prioritize authorized, legally cleared deployment of the corrected audited website**, then validate the installed Windows app, and only regenerate the MSIX if actually necessary.

**Remaining safety gates:** staged 92/JPEG and Bay City image rights, explicit owner release approval for public host update, installed Windows behavior/offline/cache verification, and justified `runFullTrust` approval in Submission options. Do **not** click submit while the hosted URL may still display the old science facts.

## Existing Microsoft Store submission package — user-verified (2026-10-15)

The **Packages** screen for the already-created product (Submission 1, In draft) visibly displays **`Periodic Table Explorer.msixbundle`, 1.3 MB**, and the overview marked its Packages section **Complete / Validated**. **Correction to earlier repository-only status:** a *real-looking uploaded package exists in Partner Center*, even though we have **not retrieved, inspected, installed or matched its contents** and there is no Windows packaging source/recipe currently checked in to this repository. Do not falsely claim that Partner Center has no package or that the uploaded bundle contains the latest audited corrections.

**Warning on the actual screen:** `Package acceptance validation warning: The following restricted capabilities require approval before you can use them in your app: runFullTrust.` This is not a confirmed rejection, nor proof it has been approved. Microsoft's [restricted capability policy](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/app-capability-declarations) explains that if a Store package declares `runFullTrust`, the publisher must explain the business/functional need under **Submission options**, and Microsoft's certification team decides whether to approve it. Do not remove the capability blindly: a full-trust Windows app may require it; first identify the actual package's runtime and whether a PWA packaging route can avoid it.

**Next essential actions:**
1. Recover the **existing** `.msixbundle` source file from the user's Downloads/build output or builder, if available. Inspect its actual manifest, Publisher/Name/version, startup URL, runtime type, and `runFullTrust` declaration. The Store screenshot alone proves neither its package version nor that it launches the current audit branch.
2. Ensure a *new* Store package is made from the updated scientific audit build, with exactly the existing Product Identity information recorded above. Avoid assuming the older 1.3 MB bundle contains revised HTML: a PWA package may simply load a separately hosted URL, which must serve the corrected content.
3. Resolve photo and Bay City copyright uncertainty, ensure audited public HTTPS hosting, then test **installed real Windows package**, including scientific pages, quiz, offline and links. If `runFullTrust` truly required, justify it accurately in Submission options, otherwise use a legitimate packaging mode without it.
4. **Do not click Submit for certification** on the older package while source/version/capability/rights are unverified.

## Current verified engineering status — DO NOT CONFUSE WITH MSIX

- Existing app is a Progressive Web App with `manifest.webmanifest`, 192/512 pixel icons, secure/offline service worker, HTML pages for all 118 elements, quiz, About & Credits, support and privacy pages.
- Added `audit/check_ms_pwa.py`: validates PWA source manifest, standalone scope/start_url, PNG icons, core paths, offline allowlist, current 92 candidate images, support/privacy, and the current scientific disclaimer.
- New manual/push GitHub Actions workflow: [`audit-ms-store-preflight.yml`](../.github/workflows/audit-ms-store-preflight.yml), restricted to the `scientific-audit-2026-10` branch. It stages audited app files, runs science/offline/photo checks, checks exact source hashes, and uploads an **ENGINEERING-ONLY** ZIP of the PWA's `Web/` source. No Windows binaries, Store API calls, branch merge or public-site deployment.
- **Verified GitHub Actions success:** [run 38833258437](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38833258437), source commit [`7543e57`](https://github.com/comctx/Periodic-Table-Explorer/commit/7543e570aacda410bff13245c225cd8c4f7b5698). Job steps included `Microsoft Store PWA manifest / content readiness`, `Inspect actual staged PWA source byte-for-byte`, `Prepare engineering-only source archive and check it`, and `Upload build candidate sources` — all **success**. This is **not a real MSIX, .msixbundle, appx, signed Store deliverable, or an installed Windows test**.
- GitHub repository previously contained no Windows Store packaging recipe; this source workflow does not build binaries. **However, user's existing Partner Center draft DOES show an uploaded 1.3 MB MSIX bundle with a `runFullTrust` warning. Its precise contents/build generation are not yet verified.**

## Authentic Microsoft Store screenshot assets — now generated

**Source:** six real Chromium 1366×768 PNG screenshots of **updated audit-branch app**, not stock art, mocked-up UI or public old `main` website. Capture script [`audit/capture_ms_store_screens.mjs`](capture_ms_store_screens.mjs) drives the **audited filtered PWA**, verifying all 118 element cells, carbon search results, uncertainty-aware temperature states, actual copper element detail, functional four-answer quiz, and 118/118 credit records.

**Actual Actions success:** [run 38834020701](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38834020701) on [`1c659c4`](https://github.com/comctx/Periodic-Table-Explorer/commit/1c659c4d1b80bb5bf37486670bb484de314391e6). All steps succeeded; the workflow created a **7-day review-only artifact** called `PTE-MS-STORE-SCREENSHOTS-REVIEW-ONLY` (GitHub artifact **12017628635**). It contains:
- `screenshots/01-periodic-table.png`
- `screenshots/02-element-search.png`
- `screenshots/03-temperature-explorer.png`
- `screenshots/04-copper-details.png`
- `screenshots/05-element-quiz.png`
- `screenshots/06-scientific-credits.png`
- `store-icon-300.png` — 300×300 source-app tile icon, not a newly invented branding asset

**Official Microsoft specification:** [screenshots and images for MSIX](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/screenshots-and-images) requires at least **1 screenshot**, recommends **4+**, permits up to **10 Desktop PNGs**, minimum desktop pixels **1366×768** and maximum **50 MB each**. The generated assets passed dimension and format checks. The Store can also accept a recommended **300×300** tile icon.

**Not cleared for publishing yet:** This is an internal GitHub Actions review artifact of the **web/PWA user interface**, not a screenshot of an installed Windows `.msixbundle`. After building/installing the final Store Windows package, re-capture or confirm screenshots accurately represent that package. Some screenshot views may show artwork whose commercial redistribution still needs source-specific permission and attribution verification. Do not send screenshots or archives to Microsoft before that clearance.

**No third-party access or host deploy:** Screenshot artifacts remain under user's GitHub workflow run; workflow did not modify `main`, alter public GitHub Pages or touch Partner Center.

**Store signing clarification:** [Microsoft's current Get started FAQ](https://learn.microsoft.com/en-us/windows/apps/publish/get-started) says Microsoft Store **re-signs qualifying submitted MSIX/AppX during Store publishing**, so an independently purchased CA-trusted signing certificate is **not required for an MSIX submission**. Signing is still relevant for external sideload/testing; the store submission package **must** carry the correct actual product identity.

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
- ~~Product reservation / Partner Center identity~~ — confirmed above from existing draft product
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
