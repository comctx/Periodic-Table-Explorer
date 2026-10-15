# Photo-source follow-up: uranium, neptunium, berkelium, einsteinium

**Periodic Table Explorer** — audit branch `scientific-audit-2026-10`  
**Reviewed:** 15 October 2026  
**Scope:** individual image-source, reuse terms, exact photo depiction, and credit evidence. **Not complete Store-license sign-off.**

## Decision table

| Z | Subject and source | Evidence and attribution | Release-stage treatment |
| ---: | --- | --- | --- |
| **92 Uranium** | Historical Ames Process uranium metal biscuit, circa 1943, [Commons file](https://commons.wikimedia.org/wiki/File:Ames_Process_uranium_biscuit.jpg) | Wikimedia Commons identifies **Ames Laboratory, USDOE** as source; original photographer unknown. The file marks it **U.S. federal public domain** (17 USC 105) and records Wikimedia VRT permission ticket **2011070810013625**. App credit now identifies the unknown creator, agency, public-domain basis and resizing/reencoding. Original binary previously passed image-source identity comparison. | **Display/stage candidate** (subject-specific public-domain provenance supported; full package still needs review) |
| **93 Neptunium** | Neptunium-237 sphere, [Commons file](https://commons.wikimedia.org/wiki/File:Neptunium2.jpg); [publisher](https://images-of-elements.com/neptunium.php) | Commons lists a government public-domain claim **and** CC BY 3.0 licensing from a republisher. The named original creator is **Los Alamos National Laboratory**. [LANL's reuse template](https://commons.wikimedia.org/wiki/Template:PD-LosAlamos) includes special notice/attribution requirements, while the exact file page does not independently establish how these apply to this specific 2002 photo. Neither simple public-domain inference nor the republisher's general CC statement resolves origin-level permission. | **Explicitly withheld** pending primary-source grant/notice substantiation or replacement |
| **97 Berkelium** | Berkelium-249 contained in fluid at the tip of a vial, [original ORNL Flickr photo](https://www.flickr.com/photos/oakridgelab/4499934514); [Commons crop](https://commons.wikimedia.org/wiki/File:Berkelium.jpg) | Oak Ridge National Laboratory's own Flickr account identifies the photographed experiment (taken **June 8, 2009**) and links specifically to **[CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)**, permitting reuse including commercial use with credit. Commons additionally claims federal public domain; app conservatively uses the **primary-source CC BY 2.0** terms, credits ORNL, cropper **Materialscientist**, and resizing. Correctly labels the picture as **solution/research**, not a metal sample. Cached photo previously passed source identity checks. | **Display/stage candidate**; exact original and CC license/derivative credits included |
| **99 Einsteinium** | Quartz vial containing Es-253, [Commons colored derivative](https://commons.wikimedia.org/wiki/File:Einsteinium.jpg); [original black-and-white source](https://commons.wikimedia.org/wiki/File:EinsteiniumGlow.JPG) | Commons identifies R. G. Haire / DOE as the original research photographer and describes a colored/cropped photo with an **unidentified color editor**. The original photo appeared in an academic book and Commons flags that national laboratories can differ in photographic copyrights. Local cached derivative is not confidently rights-cleared for distribution even though Commons carries a federal public-domain tag. | **Explicitly withheld** pending derivative and original license verification; consider replacing with an independently source-cleared original |

## Safeguards implemented

1. Updated the 92 and 97 photo metadata with exact source details, rights statements, names and modification disclosures.
2. Explicit `withholdReason` metadata for 93 and 99: they cannot appear merely because a license string gets added.
3. The element page displays 97 under **Real Research Imagery**, avoiding a false pure-metal identification.
4. The iPhone Xcode Web resource stage now includes **92 candidates**, with **26** excluded (12 withheld + 14 generic placeholders). GitHub Actions and Codemagic expected-asset checks will fail if the set changes silently.
5. The image catalog's 118 descriptions and credits remain available on **About & Credits**, even if a file is not shipped.
6. Source attribution, license and source URLs remain in `element-photo-data.js`. The original 118 tracked JPEGs remain in the **audit branch repository** for further review, but the 26 excluded files are not copied into the current iOS Web stage.

## Limitations before a public release

This review resolves specific source claims for the two approved *candidates*; it does not certify all 92 included photographs or verify a signed IPA. Separate tasks remain: finish source-specific rights audits, review ShareAlike obligations, check all 92 physical staged image files, inspect an actual signed IPA, test the UI and offline behavior, and evaluate a separate packaging route for Microsoft Store. Do not merge to `main` or publish yet.
