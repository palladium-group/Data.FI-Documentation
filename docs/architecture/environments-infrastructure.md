---
title: Environments and infrastructure
description: Environments, hosting and capacity planning.
sidebar_position: 30
owner: Data.FI
status: draft
---

:::info Page details
**Owner:** Data.FI (proposed) · **Status:** Draft
:::

Separate environments protect production data and create stable spaces for development, integration testing, training and acceptance.

```mermaid
flowchart LR
  D[Development] --> Q[Integration / QA] --> T[Training] --> U[UAT] --> P[Production]
```

## Infrastructure decision record

Hosting model, network zones, platform components, database, storage, backup, recovery, observability, certificates, domains, scaling assumptions, support ownership, data residency and recurrent costs.
