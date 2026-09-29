---
title: Community referral to facility
description: A community referral and relevant health summary become available to the receiving facility without creating duplicate people or referrals.
sidebar_position: 20
owner: OpenFn
status: draft
dcs_id: DCS.INT.REF.01
---

:::info Page details
**Interface ID:** `DCS.INT.REF.01` · **Owner:** OpenFn (proposed) · **Status:** Draft
:::

## Overview

| Field | Value |
|---|---|
| Outcome | A community referral and relevant health summary become available to the receiving facility without creating duplicate people or referrals. |
| Pattern | Closed-loop |
| Route | eCHIS → OpenFn → facility EMR or referral system |
| Trigger | Approved referral record enters ready-to-send state. |

## Components involved

- [FHIR shared record (HAPI FHIR)](../architecture/components/hapi-fhir.md)
- [Integration orchestration (OpenFn)](../architecture/components/openfn.md)
- [Facility EMR (OpenMRS)](../architecture/components/openmrs.md)

## Sequence

## Processing steps

## Mapping

## Reliability

## Security

## Monitoring

## Standards & FHIR artifacts

## Metadata packages

## Tests
