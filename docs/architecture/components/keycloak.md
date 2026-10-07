---
title: Identity and access (Keycloak)
description: Authentication, roles and access scopes for users and service accounts.
sidebar_position: 50
owner: Data.FI
layer: Shared services
---

## Role in the architecture

Authentication, roles and access scopes for users and service accounts. Keycloak issues the tokens, and the FHIR Information Gateway checks them before any request reaches the shared record. Apps and the web portal never call the FHIR server directly.

## Technology

| Item | Value |
|---|---|
| Identity provider | Keycloak |
| Enforcement | FHIR Information Gateway in front of [HAPI FHIR](./hapi-fhir.md) |
| Data scoping | By the user's assigned location and team |

## Roles

| Role | Scope |
|---|---|
| System administrator | Full platform access and configuration |
| National programme manager | Cross-district read access and national aggregate reports |
| District health officer | District-scoped read access and district reports |
| Field supervisor | Catchment area read access and team workflow monitoring |
| Community health worker | Assigned patient records and workflow tasks |
| Analytics analyst | Read-only access to the analytics platform |
| Integration service account | Machine-to-machine API access for OpenFn and the warehouse pipeline |

Superset dashboard access follows the same roles.

## Workflows it supports

Every workflow. Each user only sees records within their role and assigned area.

## Integrations

OpenFn workflows authenticate as the integration service account. See [Integrations](../../integrations/index.md).

## Standards

- OAuth 2.0
- OpenID Connect
- Role-based access rules at the gateway

## Metadata packages

- Realm, clients, roles and the integration service account for each deployment

See the [Metadata packages index](../../standards/metadata-packages.md).

## Setup & configuration

See [Configuration](../../implementation/configuration.md) and [Governance](../../implementation/governance.md).
