---
title: Web administration portal
description: Manages users, care teams, locations, organizations and dashboard roles.
sidebar_position: 30
owner: Data.FI
layer: Experience
---

## Role in the architecture

Manages users, care teams, locations, organizations and dashboard roles. Browser-based access for programme administrators and officials.

## Technology

| Item | Value |
|---|---|
| Platform | OpenSRP web interface |
| Data | [HAPI FHIR](./hapi-fhir.md) through the FHIR Information Gateway, with role-appropriate access |
| Sign-in | [Keycloak](./keycloak.md) |

## What it does

- **Administration.** User accounts, team structure, the location hierarchy, role assignments and user-to-location mappings. Changes take effect immediately in what each device syncs.
- **Configuration.** Updated questionnaires and other configuration can be loaded without a new mobile app release.
- **Patient record browser.** Programme officials can browse patient records as a timeline of encounters, organised by programme and date. This is the same longitudinal record that would be packaged as an [International Patient Summary](../../standards/ips-alignment.md) for facility care.

## Workflows it supports

- [Registration and household enrollment](../../workflows/registration-household-enrollment.md): locations, teams and assignments that decide which households a CHW sees

## Integrations

None directly. Everything it changes is stored as FHIR resources that the rest of the platform reads.

## Standards

- OAuth 2.0 / OpenID Connect
- HL7 FHIR R4 Practitioner, Organization, Location and CareTeam

## Metadata packages

- Location hierarchy, organizations, care teams and user assignments for each deployment

See the [Metadata packages index](../../standards/metadata-packages.md).

## Setup & configuration

See [Configuration](../../implementation/configuration.md) and the administrator guide under [Training](../../implementation/training.md).
