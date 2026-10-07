---
title: IPS alignment
description: How eCHIS records line up with the International Patient Summary for care continuity.
sidebar_position: 15
owner: Data.FI
---

The International Patient Summary (IPS) is an HL7 FHIR standard for a minimal health record that travels between facilities and systems. eCHIS aligns with it in two ways:

- **Profiles inherit from IPS.** Where eCHIS records data in an area IPS covers, the eCHIS profile derives from the IPS profile. Any record valid against the eCHIS profile is also valid IPS data, with no extra transformation.
- **Ready for a shared health record.** A national shared health record can assemble an IPS summary for a patient by querying the FHIR server for these records.

## What is aligned

| Area | eCHIS profile | IPS basis | Captured in |
|---|---|---|---|
| Immunizations | eCHIS Immunization | IPS Immunization, CVX codes | [Child health and immunization](../workflows/child-health-immunization.md) |
| Birth weight | eCHIS Baby Weight | Vital signs body weight, LOINC 29463-7 | [Maternal and newborn continuity](../workflows/maternal-newborn-continuity.md) |
| Expected delivery date | eCHIS Estimated Delivery Date | IPS pregnancy EDD, LOINC 11778-8 | [Maternal and newborn continuity](../workflows/maternal-newborn-continuity.md) |
| Pregnancy status | eCHIS Pregnancy Status | IPS pregnancy status, LOINC 82810-3 | [Maternal and newborn continuity](../workflows/maternal-newborn-continuity.md) |
| Pregnancy outcome | eCHIS Pregnancy Outcome | IPS pregnancy outcome, LOINC 11636-8 | [Maternal and newborn continuity](../workflows/maternal-newborn-continuity.md) |

## Not yet aligned

| Area | Status |
|---|---|
| Immunization target disease | Pending, including malaria and HPV vaccine codes |
| Medication summary | Not captured as IPS medication statements |
| Allergies | The IPS allergies section would be empty |
| Problem list | Needs SNOMED-coded conditions |
| IPS document assembly | No server-side endpoint. Assembly is expected to run in the OpenFn integration layer |

## Relation to referrals

The [community referral](../integrations/community-referral.md) workflow currently sends the facility a text summary of the patient's community history, not an IPS document. A full IPS exchange with a national shared health record would build on the aligned profiles above.

See the [Implementation Guide IPS page](https://palladium-group.github.io/datafi-echis-ig/ips.html).
