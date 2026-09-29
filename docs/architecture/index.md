---
title: Reference architecture
description: The layers and components of the reference eCHIS.
sidebar_position: 1
sidebar_label: Overview
---

:::info Page details
**Owner:** Data.FI (proposed) · **Status:** Draft
:::

The reference solution combines mobile applications, web administration, identity and access management, a FHIR server, integration orchestration, analytics pipelines, a data warehouse, dashboards and platform monitoring. It connects to identity, facility, logistics, surveillance, messaging, clinical and national reporting systems.

```mermaid
flowchart TB
  subgraph EXP[Experience layer]
    echis_app["eCHIS community health worker app"]
    supervisor_app["Supervisor app"]
    web_admin["Web administration portal"]
    superset["Program dashboards (Superset)"]
  end
  subgraph SHR[Shared services]
    keycloak["Identity and access (Keycloak)"]
    hapi_fhir["FHIR shared record (HAPI FHIR)"]
    openfn["Integration orchestration (OpenFn)"]
    analytics_warehouse["Analytics warehouse"]
  end
  subgraph ECO[Ecosystem connections]
    santempi["Master patient index (SanteMPI)"]
    openmrs["Facility EMR (OpenMRS)"]
    openlmis["Supply chain (OpenLMIS)"]
    dhis2["DHIS2 (Tracker and aggregate)"]
    rapidpro["Messaging (RapidPro)"]
  end
  EXP --> SHR --> ECO
```

Governance, privacy, security, infrastructure, monitoring, backup and recovery, release management, documentation and support apply across every layer.

## Components

| Component | Layer |
|---|---|
| [eCHIS community health worker app](./components/echis-app.md) | Experience |
| [Supervisor app](./components/supervisor-app.md) | Experience |
| [Web administration portal](./components/web-admin.md) | Experience |
| [Program dashboards (Superset)](./components/superset.md) | Experience |
| [Identity and access (Keycloak)](./components/keycloak.md) | Shared services |
| [FHIR shared record (HAPI FHIR)](./components/hapi-fhir.md) | Shared services |
| [Integration orchestration (OpenFn)](./components/openfn.md) | Shared services |
| [Analytics warehouse](./components/analytics-warehouse.md) | Shared services |
| [Master patient index (SanteMPI)](./components/santempi.md) | Ecosystem connections |
| [Facility EMR (OpenMRS)](./components/openmrs.md) | Ecosystem connections |
| [Supply chain (OpenLMIS)](./components/openlmis.md) | Ecosystem connections |
| [DHIS2 (Tracker and aggregate)](./components/dhis2.md) | Ecosystem connections |
| [Messaging (RapidPro)](./components/rapidpro.md) | Ecosystem connections |
