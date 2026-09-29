---
title: Surveillance and configured alerts
description: Qualifying and verified records are exchanged with the surveillance platform and configured alerts reach approved recipients.
sidebar_position: 50
owner: OpenFn
status: draft
dcs_id: DCS.INT.SURV.01 / DCS.INT.SURV.02
---

:::info Page details
**Interface ID:** `DCS.INT.SURV.01 / DCS.INT.SURV.02` · **Owner:** OpenFn (proposed) · **Status:** Draft
:::

## Overview

| Field | Value |
|---|---|
| Outcome | Qualifying and verified records are exchanged with the surveillance platform and configured alerts reach approved recipients. |
| Pattern | Transactional |
| Route | eCHIS → OpenFn → DHIS2 Tracker; optional messaging service |
| Trigger | Approved event state, such as verified or ready for exchange. |

## Components involved

- [FHIR shared record (HAPI FHIR)](../architecture/components/hapi-fhir.md)
- [Integration orchestration (OpenFn)](../architecture/components/openfn.md)
- [DHIS2 (Tracker and aggregate)](../architecture/components/dhis2.md)
- [Messaging (RapidPro)](../architecture/components/rapidpro.md)

## Sequence

## Processing steps

## Mapping

## Reliability

## Security

## Monitoring

## Standards & FHIR artifacts

## Metadata packages

## Tests
