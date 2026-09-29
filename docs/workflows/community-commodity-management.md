---
title: Community commodity management
description: Track commodities held by community workers, confirm issues and receipts, and record consumption and adjustments.
sidebar_position: 60
owner: Ona
status: draft
dcs_id: DCS.SCM.CHW
---

:::info Page details
**Workflow ID:** `DCS.SCM.CHW` (proposed) · **Owner:** Ona (proposed) · **Status:** Draft
:::

## Objective

Maintain an accountable view of commodities held by community workers, confirm issues and receipts, record consumption and adjustments, and exchange approved stock transactions with the logistics system.

## Process

```mermaid
flowchart LR
  S0["Issue created"]
  S1["Receipt task"]
  S2["Confirm receipt"]
  S3["Use and count"]
  S4["Reconcile"]
  S0 --> S1 --> S2 --> S3 --> S4
```

## Activities

## Decision support

## Integrations

- [Supply issue, receipt and adjustment](../integrations/supply-issue-receipt.md)

## Standards & FHIR artifacts

See the [eCHIS FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/).

## Metadata packages

## Tests
