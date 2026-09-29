---
title: Referral and counter-referral
description: Refer a person from community to facility, receive the service outcome and create a community follow-up task.
sidebar_position: 70
owner: Ona
status: draft
dcs_id: DCS.REF
---

:::info Page details
**Workflow ID:** `DCS.REF` (proposed) · **Owner:** Ona (proposed) · **Status:** Draft
:::

## Objective

Move a person from community service to an appropriate facility or service, transmit the minimum referral information, receive the service outcome, and create a community follow-up task.

## Process

```mermaid
flowchart LR
  S0["Referral need identified"]
  S1["Prepare referral"]
  S2["Send and acknowledge"]
  S3["Receive service outcome"]
  S4["Close loop"]
  S0 --> S1 --> S2 --> S3 --> S4
```

## Activities

## Decision support

## Integrations

- [Community referral to facility](../integrations/community-referral.md)
- [Facility outcome and counter-referral](../integrations/counter-referral.md)

## Standards & FHIR artifacts

See the [eCHIS FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/).

## Metadata packages

## Tests
