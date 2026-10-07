---
title: Metadata packages
description: Where each configuration and metadata package lives and what it implements.
sidebar_position: 20
owner: Data.FI
---

Metadata packages are not standalone deliverables. Each package is listed on the component page that ships it and the standard it implements. This page is the index.

Packages cover the configuration domains in [Configuration](../implementation/configuration.md): forms and rules, terminology, tasking, reporting, and integration settings. Version and owner belong in the country configuration inventory.

## Reference eCHIS

The configuration each system needs before the integrations run, taken from the eCHIS Mapping Specification. Identifiers and UUIDs are specific to each deployment and are recorded in the country configuration inventory, not here.

| Package | Component | Used by | Contents |
|---|---|---|---|
| eCHIS FHIR profiles and value sets | [HAPI FHIR](../architecture/components/hapi-fhir.md) | All integrations | Published in the [FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/) |
| CHW app configuration | [CHW app](../architecture/components/echis-app.md) | All [workflows](../workflows/index.md) | Questionnaires per module, register and profile configs, scheduling definitions, navigation |
| Supervisor app configuration | [Supervisor app](../architecture/components/supervisor-app.md) | [CEBS](../workflows/community-event-based-surveillance.md), [death reporting](../workflows/death-reporting.md), AFP screening | Supervisor visit and approval questionnaires, extraction maps, registers, indicators report |
| Locations, teams and users | [Web administration portal](../architecture/components/web-admin.md) | [Registration](../workflows/registration-household-enrollment.md) | Location hierarchy, organizations, care teams, user assignments |
| Keycloak realm | [Keycloak](../architecture/components/keycloak.md) | All | Clients, the seven roles, integration service account |
| eCHIS commodity Groups and stock codes | [HAPI FHIR](../architecture/components/hapi-fhir.md) | [Supply](../integrations/supply-issue-receipt.md) | Commodity Groups, `incoming-stock` and `confirm-stock-receipt` codes, movement codes |
| SanteMPI assigning authorities | [SanteMPI](../architecture/components/santempi.md) | [Identity](../integrations/identity-reconciliation.md) | OpenSRP ID, record UUID, National ID and eMPI master identifier systems |
| OpenMRS referral metadata | [OpenMRS](../architecture/components/openmrs.md) | [Referral](../integrations/community-referral.md), [counter-referral](../integrations/counter-referral.md) | `referralorder` order type, referral concepts by type, referral reason, history summary and source-referral concepts, eMPI identifier type, phone attribute type |
| OpenLMIS product and reason mapping | [OpenLMIS](../architecture/components/openlmis.md) | [Supply](../integrations/supply-issue-receipt.md) | Products tagged with their eCHIS commodity id, program, CHW facilities, central warehouse node, Damage and Expired reasons |
| DHIS2 surveillance programs | [DHIS2](../architecture/components/dhis2.md) | [Surveillance](../integrations/surveillance-alerts.md) | AEFI Reporting and CEBS Signal Surveillance programs, tracked entity types, stages, data elements, option sets |
| DHIS2 monthly report | [DHIS2](../architecture/components/dhis2.md) | [Routine reporting](../integrations/routine-reporting.md) | eCHIS Monthly Report data set (51 indicators), CHU org units |
| Org unit lookup | [OpenFn](../architecture/components/openfn.md) | [Surveillance](../integrations/surveillance-alerts.md) | eCHIS organisation to DHIS2 org unit |
| RapidPro alert flows | [RapidPro](../architecture/components/rapidpro.md) | [Surveillance](../integrations/surveillance-alerts.md) | Severe AEFI flow, CEBS Confirmed Threat Alert flow |
| Warehouse models | [Analytics warehouse](../architecture/components/analytics-warehouse.md) | [Ingestion](../integrations/analytics-ingestion.md), [routine reporting](../integrations/routine-reporting.md) | `raw`, `staging` and `analytics` schemas, `dhis2_export` model |
| OpenFn workflows WF1 to WF8 | [OpenFn](../architecture/components/openfn.md) | All integrations | Jobs, triggers, cursors and credentials |
