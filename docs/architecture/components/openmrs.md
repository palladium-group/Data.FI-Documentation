---
title: Facility EMR (OpenMRS)
description: Receives community referrals and returns service outcomes.
sidebar_position: 100
owner: Data.FI
layer: Ecosystem connections
---

## Role in the architecture

The facility record that receives community referrals. Each referral arrives as a patient, an encounter carrying the referral reason and community history, and a referral order. When the clinician completes the order, the outcome goes back to the community record.

## Technology

| Item | Value |
|---|---|
| Software | OpenMRS with the O3 frontend |
| Writes | Native REST API |
| Patient matching | By eMPI only |

## Workflows it supports

[Referral and counter-referral](../../workflows/referral-counter-referral.md)

## Integrations

- [Community referral to facility](../../integrations/community-referral.md)
- [Facility outcome and counter-referral](../../integrations/counter-referral.md)

## Standards

- OpenMRS REST API
- CIEL concepts for referral type and reason

## Metadata packages

- Referral order type, referral concepts, eMPI identifier type and phone attribute

See the [Metadata packages index](../../standards/metadata-packages.md).

## Setup & configuration

See [Configuration](../../implementation/configuration.md) and [Environments and infrastructure](../environments-infrastructure.md).
