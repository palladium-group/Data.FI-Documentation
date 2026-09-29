---
title: Identity reconciliation
description: Match or create a person in the master patient index and write the enterprise identifier back to eCHIS.
sidebar_position: 10
owner: OpenFn
status: draft
dcs_id: DCS.INT.ID.01
---

:::info Page details
**Interface ID:** `DCS.INT.ID.01` · **Owner:** OpenFn (proposed) · **Status:** Draft
:::

## Overview

| Field | Value |
|---|---|
| Outcome | A person in eCHIS is matched to or created in the approved master patient index, and the enterprise identifier is written back to the eCHIS record. |
| Pattern | Transactional |
| Route | eCHIS FHIR server → OpenFn → MPI → eCHIS FHIR server |
| Trigger | New or changed person record becomes eligible for reconciliation. |

## Components involved

- [FHIR shared record (HAPI FHIR)](../architecture/components/hapi-fhir.md)
- [Integration orchestration (OpenFn)](../architecture/components/openfn.md)
- [Master patient index (SanteMPI)](../architecture/components/santempi.md)

## Sequence

## Processing steps

## Mapping

## Reliability

## Security

## Monitoring

## Standards & FHIR artifacts

## Metadata packages

## Tests
