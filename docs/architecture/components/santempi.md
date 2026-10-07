---
title: Master patient index (SanteMPI)
description: Matches people and issues enterprise identifiers.
sidebar_position: 90
owner: Data.FI
layer: Ecosystem connections
---

## Role in the architecture

Matches each registered person against everyone already known, on name, sex, date of birth and phone number. It returns the existing enterprise patient ID (eMPI) on a match, or creates a new one. The eMPI is then the key OpenMRS and DHIS2 use to recognise the same person.

## Technology

| Item | Value |
|---|---|
| Software | SanteMPI |
| Called by | OpenFn only. The apps never call it directly |

## Workflows it supports

[Registration and household enrollment](../../workflows/registration-household-enrollment.md)

## Integrations

- [Identity reconciliation](../../integrations/identity-reconciliation.md)

## Standards

- HL7 FHIR R4 Patient and `$match`
- The [patient identifiers](../../standards/terminology.md#patient-identifiers) used across eCHIS

## Metadata packages

- Assigning authorities for the OpenSRP ID, record UUID, National ID and eMPI

See the [Metadata packages index](../../standards/metadata-packages.md).

## Setup & configuration

See [Configuration](../../implementation/configuration.md) and [Environments and infrastructure](../environments-infrastructure.md).
