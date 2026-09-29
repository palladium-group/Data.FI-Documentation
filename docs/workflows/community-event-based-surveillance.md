---
title: Community event-based surveillance
description: Capture, verify and escalate community signals, and exchange verified events with the surveillance platform.
sidebar_position: 50
owner: Ona
status: draft
dcs_id: DCS.SURV.CEBS
---

:::info Page details
**Workflow ID:** `DCS.SURV.CEBS` (proposed) · **Owner:** Ona (proposed) · **Status:** Draft
:::

## Objective

Capture a community signal, apply an approved verification process, escalate qualifying events, exchange the minimum required information with the surveillance platform, and maintain closure status.

## Process

```mermaid
flowchart LR
  S0["Signal observed"]
  S1["Validate submission"]
  S2["Supervisor verification"]
  S3["Exchange and alert"]
  S4["Close and learn"]
  S0 --> S1 --> S2 --> S3 --> S4
```

## Activities

## Decision support

## Integrations

- [Surveillance and configured alerts](../integrations/surveillance-alerts.md)

## Standards & FHIR artifacts

See the [eCHIS FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/).

## Metadata packages

## Tests
