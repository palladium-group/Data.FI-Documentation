---
title: Analytics ingestion and transformation
description: Load new and changed FHIR resources into governed analytical models for dashboards, indicators and reporting.
sidebar_position: 70
owner: OpenFn
status: draft
dcs_id: DCS.INT.ANA.01
---

:::info Page details
**Interface ID:** `DCS.INT.ANA.01` · **Owner:** OpenFn (proposed) · **Status:** Draft
:::

## Overview

| Field | Value |
|---|---|
| Outcome | New and changed approved FHIR resources are loaded into governed analytical models for dashboards, indicators, and reporting. |
| Pattern | Analytical |
| Route | HAPI FHIR → ingestion → raw warehouse → transformations → marts and dashboards |
| Trigger | Scheduled incremental run or approved event trigger. |

## Components involved

- [FHIR shared record (HAPI FHIR)](../architecture/components/hapi-fhir.md)
- [Analytics warehouse](../architecture/components/analytics-warehouse.md)
- [Program dashboards (Superset)](../architecture/components/superset.md)

## Sequence

## Processing steps

## Mapping

## Reliability

## Security

## Monitoring

## Standards & FHIR artifacts

## Metadata packages

## Tests
