---
title: Facility outcome and counter-referral
description: Receive the facility's service outcome, update referral status and create any follow-up task.
sidebar_position: 30
owner: OpenFn
status: draft
dcs_id: DCS.INT.REF.02
---

:::info Page details
**Interface ID:** `DCS.INT.REF.02` · **Owner:** OpenFn (proposed) · **Status:** Draft
:::

## Overview

| Field | Value |
|---|---|
| Outcome | The community system receives an approved service outcome, updates referral status, and creates any required follow-up task. |
| Pattern | Closed-loop |
| Route | Facility EMR or referral system → OpenFn → eCHIS |
| Trigger | Facility records a qualifying disposition, service outcome, or closure event. |

## Components involved

- [Facility EMR (OpenMRS)](../architecture/components/openmrs.md)
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
