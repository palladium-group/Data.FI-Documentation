---
title: Integration workflows
description: How the reference eCHIS exchanges data with the wider ecosystem.
sidebar_position: 1
sidebar_label: Overview
---

:::info Page details
**Owner:** OpenFn (proposed) · **Status:** Draft
:::

Treat each interface as a business workflow. Start with the service or reporting outcome. Identify systems of record, stable identifiers, minimum data, terminology, security, timing, acknowledgments, return flows, retries, and reconciliation before writing integration code.

```mermaid
flowchart LR
  O[Outcome] --> A[Authority] --> I[Identity] --> E[Exchange] --> S[Assurance]
```

| Step | Question |
|---|---|
| Outcome | Why must systems exchange data? |
| Authority | Which system owns each record? |
| Identity | How are people, places, products, and events matched? |
| Exchange | What moves, when, and in which format? |
| Assurance | How are success, failure, replay, and reconciliation proven? |

These specifications are illustrative. Production use requires approved endpoints, metadata, credentials, identifiers, mappings, terminology, data-sharing authority, error handling, monitoring, and test evidence.

## Reference map

The shared community record sits in the middle. Connections are patterns, not a fixed product list. The [reference architecture](../architecture/index.md) names one implementation of each connection.

| Connection | What moves |
|---|---|
| Identity | Match or create in the master patient index, then write back the enterprise identifier |
| Facility care | Referral, encounter, service outcome, and counter-referral |
| Supply chain | Stock issue, receipt confirmation, and damage or expiry adjustments |
| Surveillance | Verified signals and adverse-event exchange |
| Messaging | Configured alerts and notifications |
| Routine reporting | Approved aggregate payloads by reporting unit and period |
| Analytics | Incremental ingestion, transformation, indicators, and dashboards |
| Administration | Users, roles, locations, organizations, and care teams |

## Reusable patterns

| Pattern | Shape |
|---|---|
| Transactional | Source event → integration service → external system → write-back |
| Closed-loop | Community sends → facility serves → outcome returns → community follow-up |
| Analytical | FHIR server → ingestion → transformation → dashboards and reporting |

## What every interface specifies

Keep a versioned specification and an operational runbook. Put detailed field mappings in the mapping repository.

| Section | Contents |
|---|---|
| Overview | Purpose, owners, systems, scope, data classification, status, and version |
| Preconditions | Metadata, identifiers, permissions, source data, configuration, and dependencies |
| Trigger and processing | Schedule or webhook, query, cursor, filters, ordered steps, and branches |
| Mapping | Source path, destination field, type, transformation, terminology, optionality, and sensitivity |
| Reliability | Idempotency, retries, hold queue, replay, reconciliation, and manual remediation |
| Security | Transport, authentication, authorization, least-privilege credentials, logging, and retention |
| Monitoring | Run summary, alerts, dashboard, log review, support ownership, and escalation |
| Testing and launch | Contract, negative, volume, replay, end-to-end tests, cutover, and rollback |

For each workflow, also keep example payloads, test fixtures, a security review, deployment configuration, and a reconciliation procedure.

## Harden for production

Reference endpoints, credentials, metadata identifiers, schedules, retention settings, and logging behavior are examples. Replace them with approved country values and retain evidence of security, privacy, program, and operational review.

- Confirm every shared field and its approved purpose.
- Apply data residency, retention, consent, and disclosure requirements.
- Use least-privilege credentials and review privileged access.
- Keep personal data out of logs, notifications, and support tools unless it is required and approved.
- Validate metadata, terminology, identifiers, and system permissions in the production environment.
- Complete end-to-end, negative, replay, performance, security, and reconciliation testing.
- Establish monitoring, incident response, support ownership, and change control before activation.

## Interfaces

| Integration | ID | Pattern |
|---|---|---|
| [Identity reconciliation](./identity-reconciliation.md) | `DCS.INT.ID.01` | Transactional |
| [Community referral to facility](./community-referral.md) | `DCS.INT.REF.01` | Closed-loop |
| [Facility outcome and counter-referral](./counter-referral.md) | `DCS.INT.REF.02` | Closed-loop |
| [Supply issue, receipt and adjustment](./supply-issue-receipt.md) | `DCS.INT.SCM.01 / DCS.INT.SCM.02` | Transactional |
| [Surveillance and configured alerts](./surveillance-alerts.md) | `DCS.INT.SURV.01 / DCS.INT.SURV.02` | Transactional |
| [Routine aggregate reporting](./routine-reporting.md) | `DCS.INT.REP.01` | Analytical |
| [Analytics ingestion and transformation](./analytics-ingestion.md) | `DCS.INT.ANA.01` | Analytical |
