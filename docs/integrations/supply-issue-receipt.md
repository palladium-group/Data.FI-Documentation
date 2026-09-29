---
title: Supply issue, receipt and adjustment
description: Confirm issued stock and reflect receipts, damage and expiry adjustments in the logistics system.
sidebar_position: 40
owner: OpenFn
status: draft
dcs_id: DCS.INT.SCM.01 / DCS.INT.SCM.02
---

:::info Page details
**Interface ID:** `DCS.INT.SCM.01 / DCS.INT.SCM.02` · **Owner:** OpenFn (proposed) · **Status:** Draft
:::

## Overview

| Field | Value |
|---|---|
| Outcome | The CHW can confirm issued stock, and approved receipt, damage, and expiry transactions are reflected in the logistics system. |
| Pattern | Transactional |
| Route | LMIS ↔ OpenFn ↔ eCHIS |
| Trigger | LMIS issue event, CHW receipt confirmation, or approved adjustment record. |

## Components involved

- [Supply chain (OpenLMIS)](../architecture/components/openlmis.md)
- [Integration orchestration (OpenFn)](../architecture/components/openfn.md)
- [FHIR shared record (HAPI FHIR)](../architecture/components/hapi-fhir.md)

## Sequence

## Processing steps

## Mapping

## Reliability

## Security

## Monitoring

## Standards & FHIR artifacts

## Metadata packages

## Tests
