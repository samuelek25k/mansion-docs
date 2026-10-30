---
sidebar_position: 1
title: Roles at a Glance
---

# Roles & Access Control (RBAC)

In construction, keeping sensitive financial data secure while empowering field supervisors to get work done requires clean separation of duties. 

Mansion uses a **Role-Based Access Control (RBAC)** governance engine. Every team member is assigned one role that grants them the exact permissions needed for their daily tasks—nothing more, nothing less.

---

## The 5 Organizational Roles Explained for Laymen

![Role-Based Access Governance](https://cdn.jsdelivr.net/gh/samuelek25k/mansion-docs@main/screenshots/08_tenant_regional_settings.png)

Mansion configures permissions according to five distinct responsibilities:

- **👑 Administrator (Owner / Director)**: Master controls, company tax setup, team management, and final change order approvals.
- **👷 Manager (Site Superintendent / Engineer)**: Field operations, daily diaries, headcount muster, and change order requests.
- **💼 Accountant (Commercial Officer)**: Milestone invoicing, contractor claims (IPC) certification, and retainage escrow tracking.
- **🔍 Auditor (Compliance Inspector)**: Transparent, complete read-only visibility into transaction and audit logs.
- **👁️ Viewer (Client / Investor)**: High-level milestone delivery schedules and project completion tracking without internal cost margins.

### 1. 👑 Administrator (Owner / Managing Director)
- **Who they are**: Company owners, managing partners, or general operations directors.
- **What they do**: Maintain company configuration, invite new team members, set regional tax presets, and provide the final sign-off for change orders and project deletions.

### 2. 👷 Manager (Project Manager / Site Superintendent)
- **Who they are**: Engineers and supervisors running daily site operations on the ground.
- **What they do**: Create and edit projects, draft change orders, record daily site diaries (headcounts, weather, slump tests), and coordinate trade subcontractors.

### 3. 💼 Accountant (Commercial Officer / Bookkeeper)
- **Who they are**: Office finance team members managing cash flow and billing.
- **What they do**: Issue milestone invoices, certify subcontractor payment claims (IPCs), record cash and bank ledger transactions, and track retention escrow balances.

### 4. 🔍 Auditor (Compliance Inspector / Bank Monitor)
- **Who they are**: External accountants, bank monitors, or ISO compliance inspectors.
- **What they do**: Have complete, transparent **read-only access** across contracts, cost ledgers, and site records to verify compliance without the ability to alter or delete any data.

### 5. 👁️ Viewer (Client / Property Developer)
- **Who they are**: Property owners, clients, or investor stakeholders.
- **What they do**: Check overall milestone progress, delivery schedules, and high-level project status. They cannot see internal cost margins, subcontractor rate breakdowns, or ledger balances.

---

## Detailed Permissions Matrix

| Platform Capability | Administrator | Manager | Accountant | Auditor | Viewer |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **View Dashboard, Projects & Invoices** | ✅ Full | ✅ Full | ✅ Full | 👁️ Read-Only | 👁️ Read-Only |
| **Create & Edit Projects** | ✅ Full | ✅ Full | ❌ | ❌ | ❌ |
| **Delete Projects & Master Data** | ✅ Full | ❌ | ❌ | ❌ | ❌ |
| **Request Change Orders (Variations)** | ✅ Full | ✅ Full | ❌ | ❌ | ❌ |
| **Approve / Reject Change Orders** | ✅ Full | ❌ | ❌ | ❌ | ❌ |
| **Submit Daily Site Diary Entries** | ✅ Full | ✅ Full | ❌ | ❌ | ❌ |
| **Create Subcontracts & Machinery Leases** | ✅ Full | ✅ Full | ✅ Full | ❌ | ❌ |
| **Certify Subcontractor IPC Claims** | ✅ Full | ❌ | ✅ Full | ❌ | ❌ |
| **Generate Milestone Invoices & Collect Payments** | ✅ Full | ❌ | ✅ Full | ❌ | ❌ |
| **Record Double-Entry Cash & Bank Ledger** | ✅ Full | ❌ | ✅ Full | ❌ | ❌ |
| **Transfer & Issue Material Stock** | ✅ Full | ✅ Full | ✅ Full | ❌ | ❌ |
| **Company Settings & Regional Tax Rules** | ✅ Full | ❌ | ❌ | ❌ | ❌ |
| **Manage Team Accounts & Roles** | ✅ Full | ❌ | ❌ | ❌ | ❌ |

---

## Automatic Button Trimming (Zero Frustration)

In Mansion, you never have to guess what you are allowed to click:
- If your role cannot perform an action (e.g. approving a change order or editing financial ledgers), **the button is automatically hidden**.
- You will never encounter frustrating *"Permission Denied - Error 403"* popups after filling out a form.

