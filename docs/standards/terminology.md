---
title: Terminology
description: Code systems and value sets used by the reference eCHIS.
sidebar_position: 10
owner: Data.FI
---

| Code system | Used for |
|---|---|
| SNOMED CT | Clinical concepts, households, referrals, commodities |
| LOINC | Observations such as pregnancy status and body weight |
| CVX | Vaccine types |
| UCUM | Units of measure |

Value sets (danger signs, family planning methods, HIV, TB, CEBS signal types, vaccines and others) are published in the [Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/).

## Patient identifiers

The identifiers a person can carry in the reference eCHIS, and how integrations use them.

| Identifier | System | Set by | Used for |
|---|---|---|---|
| OpenSRP ID | `http://ohie.org/opensrp_id` | eCHIS app (untyped `official` identifier) | Local community record id |
| Record UUID | `http://ohie.org/opensrp_uuid` | eCHIS app (`secondary` identifier) | Cross-reference |
| National ID | `http://ohie.org/National_Id` | eCHIS app (typed `id_category`), when captured | Matching in SanteMPI and DHIS2 |
| eMPI | eMPI master assigning authority, configured per deployment | [Identity reconciliation](../integrations/identity-reconciliation.md) write-back, type `PI` (HL7 v2-0203) | The key OpenMRS and DHIS2 match on |

## Codes used by the integrations

| Code | System | Meaning | Used in |
|---|---|---|---|
| 3457005 | SNOMED CT | Patient referral | [Community referral](../integrations/community-referral.md) |
| 386452003 | SNOMED CT | Supply management | [Supply](../integrations/supply-issue-receipt.md) |
| 255604002, 6736007, 24484000 | SNOMED CT | Mild, moderate, severe | AEFI severity in [surveillance](../integrations/surveillance-alerts.md) |
| 164359, 160221 | CIEL | Reason for referral, past medical history (text) | OpenMRS referral encounter |
| 1371, 1372, 5622, 1610, 5483, 5487 | CIEL | Referral concepts by type | OpenMRS referral order |
| `incoming-stock`, `confirm-stock-receipt` | eCHIS local | Incoming stock, receipt task | [Supply](../integrations/supply-issue-receipt.md) |
| `restocked`, `damage`, `expiry` and others | eCHIS local | Stock movements | [Supply](../integrations/supply-issue-receipt.md) |
| CEBS signal types | eCHIS local | Eight signal types, seven of them mapped to DHIS2 | [Surveillance](../integrations/surveillance-alerts.md) |

## Terminology ownership

Record who approves each code system, value set, translation, and mapping. Displays and translations used in forms must come from that approved set. See [Content ownership](../implementation/governance.md#content-ownership).
