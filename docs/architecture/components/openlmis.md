---
title: Supply chain (OpenLMIS)
description: Issues stock to CHWs and receives receipts and adjustments.
sidebar_position: 110
owner: Data.FI
layer: Ecosystem connections
---

## Role in the architecture

Issues commodities to CHW facilities and keeps the stock ledger. Stock it issues appears in the CHW app as a task to confirm receipt. The CHW's restocks, damage and expiry come back as stock events.

## Technology

| Item | Value |
|---|---|
| Software | OpenLMIS |
| Linking products | Each product carries its eCHIS commodity ID |

## Workflows it supports

[Community commodity management](../../workflows/community-commodity-management.md)

## Integrations

- [Supply issue, receipt and adjustment](../../integrations/supply-issue-receipt.md)

## Standards

- OpenLMIS stock events API

## Metadata packages

- Products mapped to eCHIS commodities, CHW facilities, and the Damage and Expired reasons

See the [Metadata packages index](../../standards/metadata-packages.md).

## Setup & configuration

See [Configuration](../../implementation/configuration.md) and [Environments and infrastructure](../environments-infrastructure.md).
