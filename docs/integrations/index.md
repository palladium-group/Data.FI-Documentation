---
title: Integration workflows
description: How the reference eCHIS exchanges data with the wider ecosystem.
sidebar_position: 1
sidebar_label: Overview
---

:::info Page details
**Owner:** OpenFn (proposed) · **Status:** Draft
:::

Each interface is treated as a business workflow: start with the service or reporting outcome, then identify systems of record, identifiers, minimum data, terminology, security, timing, acknowledgments, retries and reconciliation.

## Reusable patterns

| Pattern | Shape |
|---|---|
| Transactional | Source event → integration service → external system → write-back |
| Closed-loop | Community sends → facility serves → outcome returns → community follow-up |
| Analytical | FHIR server → ingestion → transformation → dashboards and reporting |

## Interfaces

| Integration | ID | Pattern |
|---|---|---|
| [Identity reconciliation](./identity-reconciliation.md) | `DCS.INT.ID.01` | Transactional |
| [Community referral to facility](./community-referral.md) | `DCS.INT.REF.01` | Closed-loop |
| [Facility outcome and counter-referral](./counter-referral.md) | `DCS.INT.REF.02` | Closed-loop |
| [Supply issue, receipt and adjustment](./supply-issue-receipt.md) | `DCS.INT.SCM.01 / DCS.INT.SCM.02` | Transactional |
| [Surveillance and configured alerts](./surveillance-alerts.md) | `DCS.INT.SURV.01 / DCS.INT.SURV.02` | Transactional |
| [Routine aggregate reporting](./routine-reporting.md) | `DCS.INT.REP.01` | Analytical |
| [Analytics ingestion and transformation](./analytics-ingestion.md) | `DCS.INT.ANA.01` | Analytical |
