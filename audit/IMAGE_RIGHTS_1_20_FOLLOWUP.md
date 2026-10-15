# First 20 element images — source-credit follow-up (15 October 2026)

**App:** Periodic Table Explorer — `comctx/Periodic-Table-Explorer`  
**Branch:** `scientific-audit-2026-10` (the published `main` branch is unchanged).  
**Status:** Source-specific credits verified/corrected below. This is **not** final redistribution approval for the whole app or each bundled file.

## Physically corrected carbon photo

**#6 Carbon:** The previous JPEG was based on [`Pure_Carbon.png`](https://commons.wikimedia.org/wiki/File:Pure_Carbon.png) by Texas Lane, CC BY-SA 4.0. That file merely states “Element 6 - Carbon” without identifying an actual specimen/allotrope, and its photographic authenticity/purity was not established. Rather than use it as an alleged pure-carbon sample, the audit build now uses a **real museum photograph of naturally occurring graphite**, a carbon allotrope:

- **Subject:** native graphite from Chardonnet, Haute-Savoie, France, collection of the **Muséum national d'histoire naturelle**, Paris.
- **Original and source:** [Native graphite Chardonnet MNHN Minéralogie.jpg](https://commons.wikimedia.org/wiki/File:Native_graphite_Chardonnet_MNHN_Min%C3%A9ralogie.jpg). Commons says photographed on 30 January 2020 and records a camera photograph rather than a computer-generated image.
- **Photographer:** Marie-Lan Taÿ Pamart (uploader Jastrow).
- **License:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Original author, museum, file link, license and changes (resized/reencoded for the app) are all disclosed.
- **Physical replacement:** GitHub Actions [restoration run 38687240867](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38687240867) succeeded, validated image structure and dimensions, and committed a *different* `images/elements/006-c.jpg` binary and updated metadata to the **audit branch only**.
- **Honesty:** Image is a graphite specimen, **not** all forms of carbon or a statement of chemically proven purity.

## Other individual-source corrections

| Element | Evidence confirmed from the original file/source page | Credits and scientific-label actions |
|---|---|---|
| **#8 Oxygen** | [Commons derivative](https://commons.wikimedia.org/wiki/File:Liquid_oxygen_in_a_beaker_(cropped_and_retouched).jpg) from U.S. Air Force original by Staff Sgt. Nika Glover; U.S. federal public domain. Derivative uploaded by David Levy. | Credit the original photographer and edited version, call the material liquid **O2** rather than its usual gaseous phase, and disclose the crop/retouch plus app re-encoding. |
| **#9 Fluorine** | [Fluoro liquido a -196°C 1.jpg](https://commons.wikimedia.org/wiki/File:Fluoro_liquido_a_-196%C2%B0C_1.jpg), derived from a prior photo, source credits Fulvio314 and uses **CC BY-SA 3.0**. | Record the precise file, author, source version, temperature context and ShareAlike/resize disclosure. |
| **#11 Sodium** | [Na (Sodium).jpg](https://commons.wikimedia.org/wiki/File:Na_(Sodium).jpg), originally by Dnn87, of the Dennis S.K. collection; **CC BY-SA 3.0**. | Preserve photographer/uploader, element sample context, exact license, and adaptation disclosure. |
| **#12 Magnesium** | [Magnesium crystals.jpg](https://commons.wikimedia.org/wiki/File:Magnesium_crystals.jpg), vapor-deposited magnesium crystals using the Pidgeon process; author Warut Roonguthai. Commons allows several versions of CC BY-SA and GFDL. | Explicitly choose **CC BY-SA 3.0**, provide author, specific source, size/sample description and resize notice. |
| **#16 Sulfur** | [Native sulfur (Vodinskoe Deposit; quarry near Samara, Russia) 9.jpg](https://commons.wikimedia.org/wiki/File:Native_sulfur_(Vodinskoe_Deposit%3B_quarry_near_Samara%2C_Russia)_9.jpg), author James St. John, **CC BY 2.0**, Flickr-review verified 15 March 2022. | Provide an original [Flickr photograph link](https://www.flickr.com/photos/47445767@N05/51939544144/), creator, specific license and elemental crystalline-sulfur context. |
| **#17 Chlorine** | [Chlorine-sample-flip.jpg](https://commons.wikimedia.org/wiki/File:Chlorine-sample-flip.jpg) is a flipped/cropped derivative by Materialscientist of Benjah-bmm27's public-domain chlorine photo. | Credit both original photographer and modifier and identify app resizing. |

## Other images #1–20

- **#1–2, #7, #10, #13–14, #18–20:** previously assigned file-specific CC or Commons source credits remain unchanged by this phase. Rights/license links and attribution need to remain intact in the final package.
- **#3 Lithium, #4 Beryllium, #5 Boron, #15 Phosphorus:** the exact source images are now identified from `images-of-elements.com` and previously compared with the cached local JPEGs. The publisher explicitly states CC BY 3.0 for these gallery photos unless excepted and requests linking to each element page. **The individual photographer for the exact photo is still not independently named**; the app preserves this caution and the publisher-source links. An unknown individual creator does not become “Jurii” merely because a different image of that element was uploaded by Jurii.
- **#6 was replaced as above**, so the recorded source-identity report for the old `Pure_Carbon.png` is historical, not the current carbon asset.

## Remaining release work

- The iOS audit staging inventory is still **92 displayable candidates / 26 excluded images**; a verified source-specific CC grant is not a final sign-off of all 92 local binaries.
- License obligations for CC BY-SA **#9, #11, #12** (and other ShareAlike images across the app) must be reflected consistently in the final distributed credits, including any required derivative attribution/share-alike wording and access to license terms.
- Validate the full app, offline behavior, and signed iPhone IPA; ensure other distribution routes such as Microsoft Store do not indiscriminately copy excluded cached images.
- Continue photo-specific rights, identity, creator and credits checks for elements **21–118** and any surviving publisher images with unnamed authors. Do not merge to `main` until release checks are complete.
