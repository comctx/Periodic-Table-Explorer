# Microsoft Store release photography: counted rights categories and decision gates

**Prepared:** 2026-10-15/16. **This is a consolidation of existing source work**, not a new photograph-by-photograph audit or a new license grant. Read together with [publisher 30 originals](PUBLISHER_30_RIGHTS_CLARIFICATION.md), [master audit](MASTER_AUDIT_RECORD.md), and actual [PWA package inspection](ACTUAL_MSIXBUNDLE_INSPECTION_2026_10.md).

## Verified current engineering inventory (92 included; 26 withheld)

Calculated directly from `element-photo-data.js` and the known staged exclusion list:

| Recorded photo rights category | Count | What the records mean |
|---|---:|---|
| Creative Commons **Attribution** (CC BY versions 1.0, 2.0, 3.0, 4.0) | **73** | Commercial reuse is normally permitted when the specific photographed work is validly offered under that CC grant, subject to file-specific attribution/changes obligations. |
| Creative Commons **Attribution-ShareAlike** (CC BY-SA 3.0/4.0) | **12** | Commercial reuse is permitted by those licenses with attribution, modification notice, and applicable ShareAlike duties for adapted works; must inspect exact derivatives. |
| **CC0 1.0** dedication | **1** | Public-domain dedication is represented by a specific Commons CC0 source; file provenance/rights status still belongs in final check. |
| **Public domain by evidence, no CC URL** | **6** | #8 oxygen, #17 chlorine, #53 iodine, #91 protactinium, #92 uranium and #98 californium. No blank license fields should be “fixed” by inventing a CC license; record actual government-work or author public-domain status. |
| **Total staged element pictures** | **92** | Engineering candidate inventory, **not** release certification or final author approval. |
| **Not staged** | **26** | Missing, illustrations, unsuitable/provenance and synthetic/heavy element cases; do not package or publish the withheld source JPEGs. |

**Important clarification:** The prior [30 publisher-original photos](PUBLISHER_30_RIGHTS_CLARIFICATION.md) are **a subset** of the 73 CC BY entries, **not 30 images that automatically require private written permission**. The publisher advertises a CC BY 3.0 grant unless otherwise stated and requests linking to each original element page, as the catalog does. In 29 of the 30, the individual photographer is not independently named. If the publishing group is the attribution party for the actual file under a valid grant, crediting that project rather than inventing a photographer may satisfy the license. This does not establish exception-free title or guarantee compliance. The one prepared clarification email in the earlier report **has NOT been sent**.

## Concrete corrections made for release traceability

- #91 protactinium DOE public-domain Commons photograph and #92 Ames Laboratory / DOE uranium photo now show **direct original Commons links inside their visible attribution strings**, as well as source URLs already in structured metadata. Neither image file, title, declared public-domain basis nor its scientific description changed. [Commit `77212d3`](https://github.com/comctx/Periodic-Table-Explorer/commit/77212d38bcbdf62d41337d6e925fcbf2969c066b).
- New `audit/check-data.mjs` safeguards verify the **exact six intentionally blank CC license URLs**, each file's public-domain rationale, direct Commons page provenance and #91/#92 attribution links. A *blank CC URL is not a missing license* where authentic public-domain evidence is supplied. [Commit `5cc0b98`](https://github.com/comctx/Periodic-Table-Explorer/commit/5cc0b9852c6900bd33bdd84f1fb0a10e8f4786f3).
- Separate non-element **Bay City City Hall** CC BY-SA 3.0 image still has a dedicated original/photographer link and requires release review of actual redistributed derivative and attribution. App icon/logo rights are separately in release gate.
- All original 118 scientific data entries, 92 staged photo **bytes**, 26 exclusions, quiz answers, and current Store MSIX **unchanged** by these attribution updates.

## Additional source-license metadata regression — 12 CC BY-SA image credits

Rather than repeat original-file matching, we checked whether the **12 selected CC BY-SA source records** preserve the specific copyright-credit elements needed when using a resized/reencoded photo: individual original Commons file page, specific **CC BY-SA 3.0 or 4.0** license URL, visible **modification notice**, and an explicit ShareAlike obligation in the attribution text. The 12 are #**9, 11, 12, 21, 25, 28, 29, 39, 41, 43, 55, 90**.

- Source metadata initially had all these factual components except the **copper (#29)** credit explicitly named the `CC BY-SA 3.0` license but did not spell out **“ShareAlike”** in its adapted-photo sentence. Made that statement explicit, keeping its true original photographer, licence and adapted-file information. [Copper credit wording commit `4154918`](https://github.com/comctx/Periodic-Table-Explorer/commit/41549187f309b9686029a17caf2da07eaa0297c3).
- New regression checks [`2b36bb5`](https://github.com/comctx/Periodic-Table-Explorer/commit/2b36bb50e0a1b22fd7e4c6c62a86c6ddef3bd1c5) ensure every one of the 12 retains exact source URL, CC license-version URL, adapted-file change notice and visible ShareAlike wording. Two intermediate CI checks **failed on copper's missing explicit word**, before corrected source text was committed. These failures were productive detection of the targeted gap; they were **not** science property or packaging failures.
- Actual final code+photo metadata regression [**38847177506**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38847177506), Microsoft PWA candidate preflight [**38847177616**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38847177616), real Chromium browser [**38847177480**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38847177480), and genuine offline [**38847177489**](https://github.com/comctx/Periodic-Table-Explorer/actions/runs/38847177489) each completed with conclusion **success** on the corrected app source.
- A passing credit-string test is **not legal certification** of each adapted image's redistribution status. The final actual 92-image distribution and Bay City/source credit sign-off remains blocked. This change does **not** alter images, scientific data or published app.

## Remaining conditions before public audited site deployment

1. Validate whether each chosen candidate's **actual original file** falls under the claimed CC/public-domain status; do not rely solely on a generic publisher homepage or uploader identity if conflicting evidence appears. This can be done from the existing image/source review ledger, **not another 118-element source audit**.
2. Confirm that cached **resized/reencoded** versions have correct creator, title/source, license URL and modification attribution, especially the 12 BY-SA cases, and satisfy the appropriate adaptation license conditions.
3. Complete the separate Bay City city hall source derivative + app logo/icon legal review.
4. Document the evidence and the publisher's response if requested (no response yet), then obtain the owner's **explicit public deployment permission** before setting `audit/ms-public-release-approval.json` true.
5. Only after approvals does the audited-branch Github Pages publishing workflow stage the 92 selected images and keep the other 26 out of the website. It has not run and is fail-closed.

**Neither this report nor green automated tests are legal advice or an image-rights signoff.** They reduce scope and prevent the mistaken assumption that all 92 are either unlicensed or cleared.
