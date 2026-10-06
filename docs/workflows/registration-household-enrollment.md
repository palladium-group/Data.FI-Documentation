---
title: Registration and household enrollment
description: Find or create person and household records, confirm identity and consent, and assign the right catchment.
sidebar_position: 10
owner: Ona
status: draft
dcs_id: DCS.REG.HH
---

:::info Page details
**Workflow ID:** `DCS.REG.HH` (proposed) · **Owner:** Ona (proposed) · **Status:** Draft
:::

## Objective

Locate an existing person and household record or create a new one, confirm identity and consent, assign the correct geographic and organizational context, and prepare the person for service delivery.

## Process header

| Field | Value |
|---|---|
| Trigger | A community health worker begins enrollment or finds a person during a service interaction |
| End state | Shared person and household record created or updated, and the appropriate service task initiated |
| Primary persona | Community health worker |
| Supporting actors | Community member, supervisor, registry or master patient index |
| Locations | Household and community |
| Works offline? | Yes. Search uses the local scope; reconciliation follows sync |

## Process

```mermaid
flowchart LR
  S0["Start"]
  S1["Search"]
  S2["Match?"]
  S3["Enroll"]
  S4["Complete"]
  S0 --> S1 --> S2 --> S3 --> S4
```

## Activities

| ID | Activity | Actor | System action | Data created or reused |
|---|---|---|---|---|
| DCS.REG.HH.01 | Search | Community health worker | Search by available identifiers and demographic attributes within the offline scope | Existing person and household identifiers |
| DCS.REG.HH.02 | Match | Community health worker | Confirm one record, warn on possible duplicates, or allow a new record | Match result, duplicate flag |
| DCS.REG.HH.03 | Enroll | Community health worker | Validate household, person, location, contact, consent, and assignment | Person, household, relationships, location, care team, consent |
| DCS.REG.HH.04 | Complete | System | Create or update the shared record and initiate the appropriate service task | Registration status, local or enterprise identifier |

## Decision support

| ID | Trigger | Rule | Output | Approved by |
|---|---|---|---|---|
| DCS.REG.HH.DT.01 | Search returns candidates | Existing record, possible duplicate, or no match | Open, investigate, or create | Registry owner |
| DCS.REG.HH.DT.02 | Enrollment | Consent granted and person belongs to the assigned catchment | Allow enrollment or stop | Program authority |

## System behavior

Support offline search scope, temporary local identifiers, validation, duplicate warnings, and later reconciliation. Do not create silent duplicates. Do not expose a record outside the user's scope. Reconciliation after sync should be deterministic.

## Integrations

- [Identity reconciliation](../integrations/identity-reconciliation.md)

Also depends on the facility registry, geographic hierarchy, and identity service used by the country.

## Standards & FHIR artifacts

See the [eCHIS FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/) for person and household profiles.

## Metadata packages

Questionnaires and extraction templates that create the person and household record ship with the community health worker app. List the approved version on that component page when it is baselined.

## Tests

No silent duplicates. No record exposure outside user scope. Exact match, no match, multiple candidates, missing required data, offline create, and deterministic reconciliation after sync.
