# Actual user-uploaded Microsoft Store MSIX bundle inspection

**Inspection date:** 2026-10-15 US Central. **Source:** Owner-uploaded local binary `Periodic Table Explorer..msixbundle` corresponding in apparent app/size to Partner Center Submission 1 draft's `Periodic Table Explorer.msixbundle`. **Caution:** The Partner Center screenshot alone cannot prove the locally uploaded bytes are identical to its uploaded file, because Partner Center did not expose a hash.

## Verified bytes, nested format, and Store identity

- Uploaded bundle size **1,369,319 bytes** (Partner Center displays **1.3 MB**). SHA-256: `6798cd8787d7e9d8bcd72aa6edcf18165f6b6eb9a77eca2151224b8fff1d131f`.
- Real ZIP-format **MSIXBUNDLE** structure with root `AppxMetadata/AppxBundleManifest.xml`, `AppxBlockMap.xml` and a single embedded `07999d2f-62cf-4037-b680-a5ab01de337e.appx`. Nested APPX size **1,367,523 bytes**, SHA-256 `057f9f80daa72ee5f01095e7467f7fe78955d17d101c0a1217d50ef89f472a14`. Both ZIP container integrity checks passed; **not** Windows signature, Windows install or Store certification.
- Both outer bundle and inner `AppxManifest.xml` identity **exactly match owner's Partner Center Product Identity screenshot**:
  - `Name=DONCO-BAYCITY.1765894576CC2`
  - `Publisher=CN=BAF22FEF-6032-45F6-883B-4445F530E5ED`
  - `PublisherDisplayName=DONCO-BAYCITY`
  - `Version=1.0.1.0` (bundle and inner application)
  - `ProcessorArchitecture=neutral`, target `Windows.Desktop` Windows 10 build **19041+** and `Windows.Holographic`.
- Inner manifest's `uap10:HostRuntimeDependency` is **Microsoft.MicrosoftEdge.Stable**, `Application uap10:HostId="PWA"`. This is an **Edge-hosted PWA launcher**, not a package containing the educational HTML/JS and data.
- The application params, URL handler and PWA start URL all refer to **`https://comctx.github.io/Periodic-Table-Explorer/`**, with Edge `--app-id=dlpmojjolfkibgohdfgemeoomcecaddn`.
- Inner archive contains **84** files, of which **80 PNGs** are app logo/splash/tile resources, along with `AppxManifest.xml`, `AppxBlockMap.xml`, `resources.pri`, and content types. **Zero embedded .html, .js, or .jpg** assets. There is thus **no embedded 118-element fact database, quiz or discovery story**. The displayed educational information is served by the hosted website when opened.
- The inner manifest explicitly declares **`<rescap:Capability Name="runFullTrust"/>`**, matching Partner Center's *restricted capability requires approval* warning. No assertion that this capability is disallowed or that the user has received a rejection. Inspect what builder mode requires, or explain its actual runtime necessity under submission options; **do not blindly erase** it from a signed/package manifest.

## Why the currently staged package is not proof of an accurate updated app

- Current GitHub `main` branch had commit `418db5dc3c9d20747c7de615369fe79d435346f5` when checked; audit branch at inspection was `c199da9e40ad06c80585b0b6f7dee9e077cc9bda`.
- `index.html` and `element.html` are **different** across these two branches. The **audit** branch contains the corrected `Standard atomic weight (CIAAW 2024, abridged)` label and repaired GSI/Hofmann discovery prose that **main did not contain**. Thus merely uploading the Edge-PWA package does not ensure students receive the final source-reviewed content; published PWA endpoint must be updated to audited content.
- The **web app manifest is byte-for-byte identical** across `main` and the audit branch (blob SHA `5b448a32e3f5f382b7a32d5bb7520873291181ce`). **Microsoft's official [PWA Store guidance](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/microsoft-store#make-updates-to-your-app)**: changes to hosted HTML/JS/CSS/service worker normally **do not require a rebuilt Store package**. Changes to the web app manifest *do* require repackaging.
- Therefore the **shortest technical fix is deploy scientifically audited app content to the existing HTTPS app origin**, after legal release clearance and owner approval. Reuse this valid PWA identity/package if current Microsoft requirements permit; there is **no need to fabricate a new MSIX merely because science data changed**.
- **Technical caveat:** We did not remotely confirm exact live GitHub Pages revision via public HTTP; the fact that `main` remains old plus app targeting the default repo Pages origin is strong evidence of mismatch, **but the live site must be tested after deployment**. Users' service-worker caches also require in-browser update verification, not merely source hashes.
- **Rights gate:** 92 candidate element JPEGs and Bay City photograph remain rights/attribution pending in master audit; these photos are **web-hosted**, not embedded in the APPX. An app can still redistribute/cache photos via its website/service worker, so their absence from MSIX does **not** cure licensing risk.

## Immediate truthful next steps

1. **Do NOT submit draft** until public hosted content is the audited, legally distributable build and the actual Windows PWA has been opened/tested. Do not merge directly without owner's explicit approval.
2. Resolve commercial rights for staged images or agree with owner on a release-safe artwork plan. Prepare reviewed deployment to existing GitHub Pages origin (currently served from old `main`) so this already-uploaded PWA launcher can reach corrected content.
3. Validate live `https://comctx.github.io/Periodic-Table-Explorer/` after deployment: all 118 element details, standard atomic-weight labels, corrected discovery histories, Quiz, About/Credits, photo rights, offline operation and cache updates. Test the **installed Windows PWA** rather than browser only.
4. Address `runFullTrust` warning through factual **Submission options** declaration/approval; this is a real capability in the uploaded manifest. If the builder offers a supportable mode not requiring it, generate and actually test a replacement package before submitting. Do not remove from manifest with zip editing.
5. Once verified and authorized, submit the existing **in-draft** Microsoft listing using the updated live hosted content; only build/re-upload MSIX if host URL, web manifest, identity, Windows integration requirements or builder rules demand it.

**No action taken on owner's Partner Center, published site, `main`, signed Windows package, or source assets in this inspection. The original owner-uploaded binary is not added to public GitHub.**
