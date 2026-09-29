---
title: Community health workflows
description: Service workflows supported by the reference eCHIS.
sidebar_position: 1
sidebar_label: Overview
---

:::info Page details
**Owner:** Ona (proposed) · **Status:** Draft
:::

Each workflow is a software-neutral starting point, structured after WHO digital adaptation kits, and should be adapted to national guidance.

Workflows use stable identifiers: `DCS.[domain].[process]` for a workflow, `.[activity]` for its activities, and `DE`, `DT`, `IND`, `REQ` and `INT` for data elements, decision tables, indicators, requirements and interfaces.

| Workflow | ID |
|---|---|
| [Registration and household enrollment](./registration-household-enrollment.md) | `DCS.REG.HH` |
| [Scheduled community visit](./scheduled-community-visit.md) | `DCS.VISIT.SCH` |
| [Maternal and newborn continuity](./maternal-newborn-continuity.md) | `DCS.MNCH.ANC` |
| [Child health and immunization](./child-health-immunization.md) | `DCS.MNCH.CH` |
| [Community event-based surveillance](./community-event-based-surveillance.md) | `DCS.SURV.CEBS` |
| [Community commodity management](./community-commodity-management.md) | `DCS.SCM.CHW` |
| [Referral and counter-referral](./referral-counter-referral.md) | `DCS.REF` |

New workflows follow `templates/workflow.md`.
