---
sidebar_position: 1
title: Roles at a Glance
---

# Roles & Access Control (RBAC)

In construction, keeping sensitive financial data secure while empowering field supervisors to get work done requires clean separation of duties. 

Mansion uses a **Role-Based Access Control (RBAC)** governance engine. Every team member is assigned one role that grants them the exact permissions needed for their daily tasks—nothing more, nothing less.

---

## Governance Roles Overview

![Role-Based Access Governance](https://cdn.jsdelivr.net/gh/samuelek25k/mansion-docs@main/screenshots/08_tenant_regional_settings.png)

Mansion structures operational access across five organizational roles:

1. **👑 Administrator (`admin`)**: Company director or operations head managing company settings, regional tax presets, team accounts, project setup, and variation sign-offs.
2. **👷 Project Manager (`manager`)**: Site engineer or superintendent managing site operations, daily field diaries, labour headcounts, and change order requests.
3. **💼 Finance Officer (`accountant`)**: Commercial controller managing milestone invoices, subcontractor claim (IPC) certifications, cash transactions, and retention ledgers.
4. **🔍 Auditor (`auditor`)**: Compliance officer or bank monitor with read-only audit transparency across ledgers, vouchers, and contracts without write or delete rights.
5. **👁️ Client / Stakeholder (`viewer`)**: Project investor or property developer tracking milestone delivery timelines without exposure to internal subcontractor rates or cost margins.

---

## Detailed Permissions Matrix

| Capability | Administrator (`admin`) | Manager | Accountant | Auditor | Viewer |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **View Dashboard, Projects & Invoices** | ✅ Full | ✅ Full | ✅ Full | 👁️ Read-Only | 👁️ Read-Only |
| **Create & Edit Projects** | ✅ Full | ✅ Full | ❌ | ❌ | ❌ |
| **Delete Projects & Master Data** | ✅ Full | ❌ | ❌ | ❌ | ❌ |
| **Request Change Orders** | ✅ Full | ✅ Full | ❌ | ❌ | ❌ |
| **Approve / Reject Change Orders** | ✅ Full | ⚙️ Configurable | ❌ | ❌ | ❌ |
| **Submit Daily Site Diary Entries** | ✅ Full | ✅ Full | ❌ | ❌ | ❌ |
| **Create Subcontracts & Leases** | ✅ Full | ✅ Full | ✅ Full | ❌ | ❌ |
| **Certify Subcontractor IPC Claims** | ✅ Full | ❌ | ✅ Full | ❌ | ❌ |
| **Review Invoices & Online Payments** | ✅ Full | ❌ | ✅ Full | ❌ | ❌ |
| **Record Cash & Bank Transactions** | ✅ Full | ❌ | ✅ Full | ❌ | ❌ |
| **Issue Material Stock to Site** | ✅ Full | ✅ Full | ⚙️ Configurable | ❌ | ❌ |
| **Company Settings & Regional Tax** | ✅ Full | ❌ | ❌ | ❌ | ❌ |

---

## Automatic Button Trimming (Zero Frustration)

In Mansion, you never have to guess what you are allowed to click:
- If your role cannot perform an action (e.g. approving a change order or editing financial ledgers), **the button is automatically hidden**.
- You will never encounter frustrating *"Permission Denied - Error 403"* popups after filling out a form.

