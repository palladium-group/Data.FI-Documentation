---
title: Standards and interoperability
description: The standards the reference eCHIS conforms to.
sidebar_position: 1
sidebar_label: Overview
---

:::info Page details
**Owner:** Data.FI (proposed) · **Status:** Draft
:::

The [Data.FI Reference eCHIS FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/) is the computable contract. It is the authoritative source for profiles, extensions, value sets, code systems, search parameters and examples. These pages explain how and where each standard is used, and link into the Implementation Guide rather than copying it.

## How eCHIS produces FHIR records

```mermaid
flowchart LR
  Q[Questionnaire] --> X[Template extraction] --> R[FHIR records] --> T[Task] --> S[Selective sync]
```

## Profile areas

| Area | Examples in the Implementation Guide |
|---|---|
| People and households | eCHIS Patient, eCHIS Household |
| Visits and tasks | eCHIS Visit Encounter, eCHIS Task |
| Maternal and child health | Pregnancy Status, Estimated Delivery Date, Immunization |
| Referral | eCHIS Service Request (Referral) |
| Supply chain | eCHIS Commodity, Stock-out Flag |
| Surveillance | Surveillance Observation, Surveillance Task |

See [Terminology](./terminology.md) and [Metadata packages](./metadata-packages.md).
