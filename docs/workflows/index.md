---
title: Community health workflows
description: Service workflows supported by the reference eCHIS.
sidebar_position: 1
sidebar_label: Overview
---

:::info Page details
**Owner:** Ona (proposed) · **Status:** Draft
:::

Each workflow is a software-neutral starting point, structured after WHO digital adaptation kits, and should be adapted to national service-delivery guidance, scopes of practice, terminology, reporting obligations, and referral arrangements.

The narrative should be readable by program teams. The detailed model should be precise enough for configuration, integration, and testing. A complete package links the narrative, activities, data elements, decision-support logic, indicators, requirements, FHIR artifacts, and tests with stable identifiers.

Workflows use stable identifiers: `DCS.[domain].[process]` for a workflow, `.[activity]` for its activities, and `DE`, `DT`, `IND`, `REQ` and `INT` for data elements, decision tables, indicators, requirements and interfaces.

Example: `DCS.MNCH.ANC.04` is an antenatal activity, `DCS.MNCH.ANC.04.DE.01` is a linked data element, and `DCS.MNCH.ANC.DT.03` is a decision rule used at that point. Activity numbers on these pages follow the process order in this draft. Confirm them in the country package before they are treated as stable.

## Workflow package

| Step | Content |
|---|---|
| Intervention and objective | Service outcome and source guidance |
| Personas and setting | Client, worker, supervisor, facility, and system actors |
| Scenario | How the workflow unfolds in practice |
| Process model | Activities, decisions, messages, exceptions, and closure |
| Computable assets | Data, logic, indicators, requirements, FHIR, tests, and interfaces |

| Field | Required content |
|---|---|
| Process header | Name and ID, objective, trigger, end state, primary persona, supporting actors, locations, offline requirement, and linked guidance |
| Activity | Purpose, actor, inputs, user action, system action, outputs, exceptions, data created or reused, and next activity |
| Decision support | Decision ID, trigger, inputs, business rule, output, action, annotation, and approval source |
| Data | Data-element ID, label, definition, type, allowed values, validation, required or conditional status, terminology mapping, FHIR path, sensitivity, and indicator linkage |
| Requirements | User story, acceptance criteria, offline and sync behavior, access rule, audit requirement, and release |
| Assurance | Positive, negative, boundary, offline, synchronization, duplicate, referral, and recovery tests |

Data elements, decision tables, and indicators are maintained with the FHIR artifacts and country content packages. These pages keep the service narrative and point to those assets. See [Solution design](../implementation/solution-design.md).

The implementation guide specifies where the system invokes approved clinical content. It does not invent clinical rules.

## Workflows

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
