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
| Outcome | New and changed approved FHIR resources are loaded into governed analytical models for dashboards, indicators, and reporting |
| Pattern | Analytical |
| Route | FHIR server → ingestion → raw warehouse → transformations → analytical marts and dashboards. Reference: HAPI FHIR, warehouse, Superset |
| Trigger | A scheduled incremental run, or an approved event trigger |
| Used by workflows | [Scheduled community visit](../workflows/scheduled-community-visit.md) and any workflow whose records are approved for analytics |

## Components involved

- [FHIR shared record (HAPI FHIR)](../architecture/components/hapi-fhir.md)
- [Analytics warehouse](../architecture/components/analytics-warehouse.md)
- [Program dashboards (Superset)](../architecture/components/superset.md)

## Sequence

```mermaid
sequenceDiagram
  participant F as FHIR server
  participant I as Ingestion
  participant W as Warehouse
  participant D as Dashboards
  F->>I: Resources since cursor
  I->>W: Upsert raw records
  W->>W: Transform tested models
  W->>D: Refresh outputs
```

## Preconditions

Approved resource types, a cursor or last-updated boundary, and tested transformation models.

## Processing steps

1. Read by cursor or last-updated boundary.
2. Retain source identifiers and versions.
3. Upsert raw records.
4. Quarantine invalid records.
5. Transform into tested models.
6. Refresh outputs.
7. Publish a run summary.

## Mapping

Map approved FHIR paths into raw and analytical models. A dashboard value must trace to a source version. Full mappings stay in the warehouse repository.

## Reliability

Use a safe overlap window and a deterministic upsert. Define deletion and correction behavior. Handle schema changes. Support backfill and replay. Keep lineage from the dashboard value to the source version.

## Security

Ingest only approved resource types. Apply the same access and retention rules as the analytical environment. Do not widen who can see individual records by copying them into a dashboard extract.

## Monitoring

Resources read, inserted, updated, quarantined, and delayed. Transformation tests passed or failed. Model freshness. Dashboard refresh status.

## Standards & FHIR artifacts

See the [eCHIS FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/). Selective sync keeps device-needed records on the client. This interface loads the records approved for analytics.

## Metadata packages

## Tests

Incremental cursor with overlap. Invalid record quarantined. Correction and deletion. Schema change. Backfill. Replay. Lineage from a dashboard value to the source version.
