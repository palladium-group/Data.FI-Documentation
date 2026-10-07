---
title: DHIS2 (Tracker and aggregate)
description: Surveillance programs and routine aggregate reporting.
sidebar_position: 120
owner: Data.FI
layer: Ecosystem connections
---

## Role in the architecture

The national health information system. DHIS2 Tracker receives individual surveillance cases: adverse events following immunization and verified community signals. DHIS2 aggregate receives the monthly eCHIS indicators for each community health unit.

## Technology

| Item | Value |
|---|---|
| Software | DHIS2 |
| Tracker programs | AEFI Reporting, CEBS Signal Surveillance |
| Aggregate data set | eCHIS Monthly Report |

## Workflows it supports

[Community event-based surveillance](../../workflows/community-event-based-surveillance.md), [Child health and immunization](../../workflows/child-health-immunization.md) (AEFI)

## Integrations

- [Surveillance and configured alerts](../../integrations/surveillance-alerts.md)
- [Routine aggregate reporting](../../integrations/routine-reporting.md)

## Standards

- DHIS2 Tracker API
- DHIS2 data value sets

## Metadata packages

- Tracker programs, the monthly report data set and the org unit mapping

See the [Metadata packages index](../../standards/metadata-packages.md).

## Setup & configuration

See [Configuration](../../implementation/configuration.md) and [Environments and infrastructure](../environments-infrastructure.md).
