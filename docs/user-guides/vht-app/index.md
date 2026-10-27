---
title: CHW (VHT) app user guide
description: Step-by-step guide to the eCHIS mobile application used by village health team members for households, ANC, PNC, child health, family planning and stock.
sidebar_position: 1
sidebar_label: Overview
owner: Data.FI
---

:::info[Page details]

Describes the eCHIS VHT application on OpenSRP 2 as of 2 September 2026. In the reference build the community health worker is called a village health team member (VHT). Component overview: [eCHIS community health worker app](../../architecture/components/echis-app.md).

:::

The application uses digital registers to organize client records by health category and to help plan home visits. It includes **All Households**, **ANC**, **PNC**, **Children**, **Family Planning** and **HIV and Tuberculosis** registers, and a **stock usage** component.

## In this guide

| Chapter | What it covers |
|---|---|
| [Getting started](./getting-started.mdx) | Logging in, the PIN, the first sync, logging out, the side menu, searching |
| [The registers](./registers.mdx) | What each register shows and how tasks are colour-coded |
| [Households](./households.mdx) | Registering households and members, household heads, deaths, muting |
| [Antenatal care](./antenatal-care.mdx) | Registering a pregnancy, ANC home visits, referral closure, pregnancy outcome |
| [Postnatal care](./postnatal-care.mdx) | PNC home visits and referrals in the six weeks after birth |
| [Child health](./child-health.mdx) | Routine child visits, immunizations and the sick child assessment |
| [Family planning](./family-planning.mdx) | Starting a method, follow-up visits and referrals |
| [Stock management](./stock-management.mdx) | Stock on hand, consumption, physical counts and restocking |

The device used for the VHT app can be an Android phone or tablet. It should have a SIM card so that mobile data can be used to transfer data, update the app, and call caregivers or heads of households.

## Abbreviations

| Abbreviation | Meaning |
|---|---|
| ANC | Antenatal care |
| App | Application |
| CH | Community health |
| CHW | Community health worker |
| COC | Combined oral contraceptive pill |
| eCHIS | Electronic Community Health Information System |
| EDD | Expected delivery date |
| FHIR | Fast Healthcare Interoperability Resources |
| FP | Family planning |
| HF | Health facility |
| HW | Health worker |
| iCCM | Integrated community case management |
| iCoHS | Intelligent Community Health Systems |
| LNMP | Last normal menstrual period |
| MoH | Ministry of Health |
| MUAC | Mid-upper arm circumference |
| OpenSRP | Open Smart Register Platform |
| ORS | Oral rehydration solution |
| PNC | Postnatal care |
| POP | Progesterone-only contraceptive pill |
| UNICEF | United Nations Children's Fund |
| VHT | Village health team |
| WHO | World Health Organization |

## Terms and definitions

| Term | Definition |
|---|---|
| Village health team (VHT) | A frontline public health worker with a close understanding of the community, with a relationship that allows them to act as a link between health services at the facility and the client.[^1] They track the health indicators of the community they come from. They may be volunteers, work for pay, or work in association with a local agency, organization or healthcare system.[^2] |
| Health worker | A professional who provides health services at a health facility and is certified to provide specific services, for example a nurse. |
| Household | A house and its occupants regarded as a unit. |
| Household head | The person heading a household. |
| Household member | A person belonging to a household. |
| Primary caregiver | The person in charge of taking care of the children in a household. |
| Household visit | A visit made by a VHT to a household. These can be ANC, PNC, child or FP visits. They normally follow a schedule based on the type of visit and recur. |
| Client | A person in a household visited by the VHT, or a person who seeks treatment at a health facility. |
| User | The person using the application. In this app, a user is a VHT. |

[^1]: [Explore Health Careers: Community health worker](https://explorehealthcareers.org/career/allied-health-professions/community-health-worker/)
[^2]: [WHO: Community health workers](https://www.who.int/hrh/documents/community_health_workers.pdf)
