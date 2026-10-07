---
title: Go-live and deployment
description: Readiness, cutover and deployment waves.
sidebar_position: 60
owner: Data.FI
---

## Go-live readiness

| Area | Ready when |
|---|---|
| Governance | Named release authority, escalation route, approved scope, and residual-risk decisions |
| Content | Approved workflows, forms, terminology, job aids, and training materials |
| Technology | Validated builds, infrastructure, certificates, backups, monitoring, and a recovery test |
| Users and organization | Verified accounts, roles, locations, teams, devices, and access tests |
| Integration | Approved mappings, metadata, credentials, end-to-end results, replay, and reconciliation |
| Data and reporting | Initialization or migration validated; dashboards and required reports reconciled |
| Operations | Support desk, contacts, runbooks, service levels, incident and change procedures, and spares |
| Cutover | Deployment sequence, communications, launch support, stop criteria, and rollback |

Use the go-live checklist in [Templates and assets](./templates.md).

## Deployment waves

```mermaid
flowchart LR
  P[Pilot] --> S[Stabilize] --> E[Expand] --> I[Institutionalize] --> X[Scale]
```

| Wave | Purpose |
|---|---|
| Pilot | Validate real-world workflow, support, sync, and operations |
| Stabilize | Resolve critical issues and update materials |
| Expand | Deploy by approved geography or user cohort |
| Institutionalize | Transfer routine ownership and recurring processes |
| Scale | Use evidence to sequence additional scope |

Scale decisions should consider readiness and service quality, not deployment volume alone. See [Operations and sustainability](./operations-sustainability.md).
