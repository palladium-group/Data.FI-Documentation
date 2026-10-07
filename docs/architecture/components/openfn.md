---
title: Integration orchestration (OpenFn)
description: Runs the integration workflows between eCHIS and ecosystem systems.
sidebar_position: 70
owner: Data.FI
layer: Shared services
---

## Role in the architecture

Connects the shared record to every other system. Eight OpenFn workflows read new and changed records, query or update the target system, map the data, and write identifiers and statuses back.

## Technology

| Item | Value |
|---|---|
| Software | OpenFn |
| Workflows | WF1 to WF8. See [Integrations](../../integrations/index.md) |
| Access | Integration service account in [Keycloak](./keycloak.md) |

## Workflows it supports

[Registration](../../workflows/registration-household-enrollment.md), [referral](../../workflows/referral-counter-referral.md), [commodities](../../workflows/community-commodity-management.md), [surveillance](../../workflows/community-event-based-surveillance.md) and reporting.

## Integrations

- [Identity reconciliation (WF1)](../../integrations/identity-reconciliation.md)
- [Community referral to facility (WF2)](../../integrations/community-referral.md)
- [Facility outcome and counter-referral (WF3)](../../integrations/counter-referral.md)
- [Supply issue, receipt and adjustment (WF4, WF5)](../../integrations/supply-issue-receipt.md)
- [Surveillance and configured alerts (WF6)](../../integrations/surveillance-alerts.md)
- [Routine aggregate reporting (WF7)](../../integrations/routine-reporting.md)
- [Analytics ingestion and transformation (WF8)](../../integrations/analytics-ingestion.md)

## Standards

- HL7 FHIR R4
- The APIs of SanteMPI, OpenMRS, OpenLMIS, DHIS2 and RapidPro

## Metadata packages

- OpenFn workflows, field mappings and credentials

See the [Metadata packages index](../../standards/metadata-packages.md).

## Setup & configuration

See [Configuration](../../implementation/configuration.md) and [Environments and infrastructure](../environments-infrastructure.md).
