---
title: eCHIS community health worker app
description: Offline-first mobile app used by CHWs for registration, visits, referrals and stock.
sidebar_position: 10
owner: Data.FI
layer: Experience
---

## Role in the architecture

Offline-first mobile app used by community health workers for registration, visits, referrals, and stock. In the reference build the CHW is called a village health team member (VHT).

In the reference implementation the worker completes a questionnaire. Template extraction creates structured FHIR records and, when required, the next task. The device keeps the records needed for frontline work and queues everything else for sync. See [Standards](../../standards/index.md) and [Scheduled community visit](../../workflows/scheduled-community-visit.md).

## Technology

| Item | Value |
|---|---|
| Platform | OpenSRP 2 (FHIR Core) on the Open Health Stack Android FHIR SDK |
| FHIR version | The app declares R4B. The [Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/) targets R4 and the profiled content is R4-compatible |
| Data store | Local FHIR store on the device, synced to [HAPI FHIR](./hapi-fhir.md) through the [FHIR Information Gateway](./keycloak.md) |
| Sign-in | Application ID, username and password on first login (internet needed), then a four-digit PIN that works offline. Accounts come from [Keycloak](./keycloak.md) |
| Clinical logic | None in the app binary. Forms, schedules and registers are all configuration |

## How it works

- **Forms become records.** Each form is a FHIR Questionnaire. On submit, the answers are turned into FHIR records on the device: the record of the visit and the next to-do task.
- **Registers and tasks.** A client appears in a programme register once a form enrols them, for example a pregnancy assessment. Due, overdue and completed visits show against each client. See [Scheduled community visit](../../workflows/scheduled-community-visit.md).
- **Offline.** After the first sync the app works without a connection. The CHW syncs manually from the side menu. Peer-to-peer transfer between devices is not in use.
- **Stock.** Commodities issued during a visit are deducted from the CHW's stock automatically.

## Workflows it supports

The side menu holds these registers, each with a count of its clients.

| Register | Workflow |
|---|---|
| All Households (the home page) | [Registration and household enrollment](../../workflows/registration-household-enrollment.md) |
| Tasks | [Scheduled community visit](../../workflows/scheduled-community-visit.md) |
| ANC and PNC | [Maternal and newborn continuity](../../workflows/maternal-newborn-continuity.md) |
| Children | [Child health and immunization](../../workflows/child-health-immunization.md) |
| Family Planning | [Family planning](../../workflows/family-planning.md) |
| HIV and Tuberculosis | [HIV care cascade](../../workflows/hiv-care-cascade.md), [TB care cascade](../../workflows/tb-care-cascade.md) |
| CEBS New Signals and CEBS History | [Community event-based surveillance](../../workflows/community-event-based-surveillance.md) |
| Inventory | [Community commodity management](../../workflows/community-commodity-management.md) |
| VHT Reports | Monthly summaries |

Deaths are recorded from a household member's profile. See [Death reporting](../../workflows/death-reporting.md). Referrals from any programme follow [Referral and counter-referral](../../workflows/referral-counter-referral.md).

## Integrations

- [Identity reconciliation](../../integrations/identity-reconciliation.md): registered clients receive an enterprise patient ID
- [Community referral](../../integrations/community-referral.md) and [counter-referral](../../integrations/counter-referral.md): referrals reach the facility and outcomes return
- [Supply issue, receipt and adjustment](../../integrations/supply-issue-receipt.md): incoming stock appears as a task, and receipts flow back to OpenLMIS
- [Surveillance and configured alerts](../../integrations/surveillance-alerts.md): AEFI reports and verified signals reach DHIS2
- [Analytics ingestion](../../integrations/analytics-ingestion.md): records feed the warehouse

## Standards

- HL7 FHIR R4 with Structured Data Capture (SDC) template extraction
- eCHIS profiles, with immunization, vital signs and pregnancy profiles derived from the International Patient Summary. See [IPS alignment](../../standards/ips-alignment.md)
- SNOMED CT, LOINC, CVX and UCUM where codes exist, local eCHIS code systems elsewhere. See [Terminology](../../standards/terminology.md)

## Metadata packages

| Package | Contents |
|---|---|
| Questionnaires | One folder per module: household, child, immunization, ANC, PNC, FP, HIV, TB, commodity, CEBS |
| Register and profile configs | One register config per programme, plus household, patient and inventory profiles |
| Scheduling definitions | Plan definitions for household, child, ANC/PNC, FP, HIV, TB and the EPI schedule |
| Navigation and app config | The CHW app flavor's navigation and settings |

See the [Metadata packages index](../../standards/metadata-packages.md).

## Setup & configuration

Each device needs the application ID, a username and a password from the support team. If a device was used by another VHT, clear the app data before the new user logs in.

See [Configuration](../../implementation/configuration.md) and the VHT user guide under [Training](../../implementation/training.md).
