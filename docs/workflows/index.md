---
title: Community health workflows
description: Service workflows supported by the reference eCHIS.
sidebar_position: 1
sidebar_label: Overview
---

What the community health worker does in each programme, how the app supports it, and what records it creates. Each workflow is a self-contained package of forms, schedules and registers, so programmes can adopt the ones they need. Adapt them to national guidance, scopes of practice and referral arrangements.

In the reference build the community health worker is called a VHT (village health team member).

## Workflows

| Workflow | What it covers |
|---|---|
| [Registration and household enrollment](./registration-household-enrollment.md) | Households, members, and enrolment into programmes |
| [Scheduled community visit](./scheduled-community-visit.md) | How visits are scheduled, shown and recorded |
| [Maternal and newborn continuity](./maternal-newborn-continuity.md) | Pregnancy, monthly ANC, birth and six weeks of PNC |
| [Child health and immunization](./child-health-immunization.md) | Monthly visits, vaccines, sick child assessment |
| [Family planning](./family-planning.md) | Starting a method and three-monthly follow-up |
| [HIV care cascade](./hiv-care-cascade.md) | Screening, linkage to care and adherence |
| [TB care cascade](./tb-care-cascade.md) | Screening, testing and treatment follow-up |
| [Community event-based surveillance](./community-event-based-surveillance.md) | Reporting and verifying public health signals |
| [Community commodity management](./community-commodity-management.md) | Stock on hand, counts and restocks |
| [Referral and counter-referral](./referral-counter-referral.md) | Referring to a facility and closing the loop |
| [Death reporting](./death-reporting.md) | Recording deaths with supervisor approval |

## How to read each page

| Section | What it tells you |
|---|---|
| How it works | The steps the CHW follows in the app |
| What the CHW records | The fields on each form |
| Referral triggers | Findings that prompt a referral |
| What the system creates | The FHIR records behind the forms |

For how to design a new workflow, see [Solution design](../implementation/solution-design.md). New pages start from `templates/workflow.md`.
