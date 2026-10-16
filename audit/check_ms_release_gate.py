#!/usr/bin/env python3
"""Refuse publication until independent media-rights evidence and the owner authorize it.

Release approval is distinct from scientific tests and engineering staging. No
release is authorized by a green test, by the presence of a CC URL, or by a
Partner Center "Validated" package. This gate deliberately fails by default.
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APPROVAL = ROOT / "audit/ms-public-release-approval.json"

def check() -> None:
    a = json.loads(APPROVAL.read_text(encoding="utf-8"))
    if a.get("schema") != "pte-microsoft-pwa-public-release-gate-v1":
        raise ValueError("Unsupported public release approval schema")
    for field in (
        "photo_and_attribution_rights_reviewed",
        "bay_city_image_and_logo_rights_reviewed",
        "owner_approved_public_deployment",
    ):
        if a.get(field) is not True:
            raise ValueError("Public deployment BLOCKED: " + field + " is not approved")
    for field in ("review_evidence_document", "reviewed_by", "approved_utc_date"):
        if not isinstance(a.get(field), str) or not a[field].strip():
            raise ValueError("Public deployment BLOCKED: missing " + field)
    path = Path(a["review_evidence_document"])
    if path.is_absolute() or ".." in path.parts or path.suffix.lower() != ".md":
        raise ValueError("Invalid rights evidence path")
    evidence = ROOT / path
    if not evidence.is_file() or evidence.stat().st_size < 500:
        raise ValueError("Rights evidence file missing or too short: " + str(path))
    print("PASS: explicit owner deployment decision and documented photo rights")
    print("NOTICE: a successful gate does NOT independently validate the statements")

if __name__ == "__main__":
    try:
        check()
    except (OSError, ValueError, KeyError, json.JSONDecodeError) as exc:
        sys.exit("DO NOT PUBLISH: " + str(exc))
