---
title: Templates and assets
description: Reusable implementation templates.
sidebar_position: 90
owner: Data.FI
status: draft
---

:::info Page details
**Owner:** Data.FI (proposed) · **Status:** Draft
:::

Maintain one controlled country package that links planning decisions to implementation evidence. The package may use documents, spreadsheets, repositories, and computable specifications. Ownership and versioning should stay clear.

## Country package

| Part | Contents |
|---|---|
| Product foundation | Vision, scope, roadmap, governance, decision log, and prioritized backlog |
| User and service design | Personas, journeys, use cases, service workflows, job aids, and approvals |
| Requirements | Functional and non-functional requirements, acceptance criteria, and traceability |
| Technical design | Architecture, FHIR package, terminology, configuration inventory, and environment specification |
| Interoperability | Interface register, workflow specifications, mappings, test fixtures, and runbooks |
| Assurance | Test strategy, cases, results, security evidence, user acceptance, and residual-risk decisions |
| Deployment | Training, devices, data, communications, cutover, rollback, and go-live sign-off |
| Operations | Monitoring, support, incidents, access, backup, recovery, releases, costs, and improvement |

Page templates for this portal live in `templates/` in the repository: workflow, integration, component, and guidance pages.

## Core templates

| Template | Purpose |
|---|---|
| Implementation readiness check | Confirm inputs and ownership before delivery |
| Decision log | Options, rationale, authority, review date |
| Requirements traceability matrix | Need → workflow → requirement → asset → test |
| Workflow canvas | Trigger, actors, steps, decisions, records, tasks, exchange |
| Architecture decision record | Technical choice, options, consequences, approval |
| Configuration inventory | Forms, terminology, settings, versions, owners |
| Interface specification | Outcome, mappings, security, reliability, monitoring, tests |
| Test and acceptance record | Scenarios, evidence, defects, approval |
| Go-live checklist | Governance, content, technology, data, users, cutover |
| Operational runbook | Monitoring, incidents, recovery, escalation |

For each integration, also keep a workflow narrative, sequence diagram, field mapping, terminology mapping, example payloads, test fixtures, security review, deployment configuration, monitoring definition, reconciliation procedure, and operational runbook. Field mappings stay in the mapping repository, not on the portal page.

## Companion resources

- Digital Community System Toolkit, including workshop and country-roadmap resources
- [eCHIS FHIR Implementation Guide](https://palladium-group.github.io/datafi-echis-ig/) and its computable artifacts
- Role-based community health worker, supervisor, administrator, and support guides
- [Reference architecture](../architecture/index.md) and [environment specification](../architecture/environments-infrastructure.md)
- Integration workflow repository, mapping specifications, test fixtures, and runbooks
- Country adaptation workbook and implementation evidence repository

Detailed catalogs (data dictionary, decision logic, indicators, requirements, interface catalog, mappings, test cases, and runbooks) stay in those repositories. This portal links to them from the workflow, integration, and standards pages.
