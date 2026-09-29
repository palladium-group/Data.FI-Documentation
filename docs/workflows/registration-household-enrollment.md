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

## Decision support

## Integrations

- [Identity reconciliation](../integrations/identity-reconciliation.md)

## Standards & FHIR artifacts

See the [eCHIS FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/).

## Metadata packages

## Tests
