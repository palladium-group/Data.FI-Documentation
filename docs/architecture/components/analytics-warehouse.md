---
title: Analytics warehouse
description: Governed analytical models built from ingested FHIR resources.
sidebar_position: 80
owner: Data.FI
layer: Shared services
---

## Role in the architecture

A separate PostgreSQL database for reporting. Records from the shared record land in a raw schema, are cleaned in staging, and are turned into analytics tables for dashboards and the monthly DHIS2 report.

## Technology

| Item | Value |
|---|---|
| Software | PostgreSQL |
| Schemas | raw, staging, analytics |
| Fed by | OpenFn analytics ingestion |

## Workflows it supports

Every workflow whose records are used for reporting.

## Integrations

- [Analytics ingestion and transformation](../../integrations/analytics-ingestion.md)
- [Routine aggregate reporting](../../integrations/routine-reporting.md)

## Standards

- SQL

## Metadata packages

- Warehouse schemas and models, including the DHIS2 export model

See the [Metadata packages index](../../standards/metadata-packages.md).

## Setup & configuration

See [Configuration](../../implementation/configuration.md) and [Environments and infrastructure](../environments-infrastructure.md).
