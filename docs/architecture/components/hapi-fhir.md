---
title: FHIR shared record (HAPI FHIR)
description: Stores the FHIR resources produced by eCHIS forms, tasks and sync.
sidebar_position: 60
owner: Data.FI
layer: Shared services
---

## Role in the architecture

The shared community record and the central router of the architecture. Everything the apps record is stored here as FHIR, and every integration starts from or ends at this server.

## Technology

| Item | Value |
|---|---|
| Software | HAPI FHIR server, FHIR R4 |
| Access | Only through the FHIR Information Gateway, with tokens from [Keycloak](./keycloak.md) |
| Clients | CHW and supervisor apps, web portal, OpenFn workflows |

## Workflows it supports

Every workflow. Each form submission is stored here.

## Integrations

- [Identity reconciliation](../../integrations/identity-reconciliation.md)
- [Community referral to facility](../../integrations/community-referral.md)
- [Facility outcome and counter-referral](../../integrations/counter-referral.md)
- [Supply issue, receipt and adjustment](../../integrations/supply-issue-receipt.md)
- [Surveillance and configured alerts](../../integrations/surveillance-alerts.md)
- [Analytics ingestion and transformation](../../integrations/analytics-ingestion.md)

## Standards

- HL7 FHIR R4
- eCHIS profiles from the [FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/)

## Metadata packages

- eCHIS profiles, value sets and code systems

See the [Metadata packages index](../../standards/metadata-packages.md).

## Setup & configuration

See [Configuration](../../implementation/configuration.md) and [Environments and infrastructure](../environments-infrastructure.md).
