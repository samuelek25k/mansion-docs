---
sidebar_position: 2
title: Projects Directory
---

# Projects Directory & Financial Drill-Down

The **Projects Directory** is your master index of every building job your company is working on. Whether you are building an apartment complex, a commercial plaza, or a residential villa, this screen organizes client details, contract budgets, and project schedules in one place.

:::info Who Can Use This
- **Viewers, Auditors & Accountants**: Can view all active and planned projects.
- **Administrators & Managers**: Can create new projects and edit existing details.
- **Administrators Only**: Can delete projects.
:::

---

## Visual Overview

![Projects Directory](https://cdn.jsdelivr.net/gh/samuelek25k/mansion-docs@main/screenshots/04_projects_directory.png)

---

## Key Features & Anatomy of a Project Card

Each card in the directory represents an active or scheduled job site:

| Element | Description | Why It Matters |
| :--- | :--- | :--- |
| **Status Badge** | `In Progress` (Green), `Planned` (Slate), `On Hold` (Amber), or `Completed` (Blue). | Tells your site foremen and accountants which projects are actively incurring costs versus pending mobilization. |
| **Client Name** | The customer or property developer who contracted the work (e.g., Metro Infrastructure Corp). | Links all customer milestone invoices and contracts to this specific entity. |
| **Budget Ceiling** | The hard total contract budget (e.g., ₹45,00,000). | Acts as the budget ceiling. If site expenses approach this number, alerts trigger automatically. |
| **Timeline Dates** | Planned mobilization start date and target completion handover date. | Used across the Site Schedule to calculate whether the project is running ahead or behind schedule. |

---

## The Financial Breakdown Drawer

Clicking on any project card slides out a **Financial Breakdown Drawer** from the right side of the screen.

### Top Snapshot KPIs
- **Est. Budget**: Baseline contract ceiling.
- **Incurred Cost**: Total actual spend to date and percentage of allocated budget consumed.
- **Revenue Collected**: Collected cash receipts alongside total milestone revenue billed.
- **Cost Variance**: Immediate status indicator (`+` under budget in green, or `-` over budget in red).
- **Net Projected Margin %**: Profit margin percentage calculated for this project.

### The 4 Detailed Sub-Tabs
1. **Budget Breakdown**:
   - **Materials Allocation**: Tracked against the baseline estimate (typically ~55% of contract budget).
   - **Labour & Subcontractors**: Wages and trade packages tracked against estimate (typically ~30% of contract budget).
   - **Fixed & Site Overheads**: Equipment, utilities, and general site conditions (typically ~15% of contract budget).
   - **Line Items Table**: Granular work breakdown with item specifications, category, unit rate, estimated vs actual quantity, and resulting variance.
2. **Invoices & Revenue**:
   - Master list of milestone invoices with Invoice #, milestone name, issue date, total amount, paid amount, and outstanding balance due.
   - Live **Collection Efficiency %** indicator.
3. **Cash Transactions**:
   - Project cash ledger showing direct bank/cash flows (`accountFrom` &rarr; `accountTo`), date, category, remarks, and debits/credits.
4. **Site Stock Issues**:
   - Audit trail of warehouse and inventory materials issued to the job site, with item names, quantities, unit costs, total valuations, and batch/reference document tags.

:::tip Proactive Cost Control
By checking the Financial Drawer once a week, managers can spot whether material costs are exceeding initial estimates before the project finishes, allowing immediate course correction.
:::

---

## How to Create a New Project (Step-by-Step)

1. Open **Site Operations → Projects Directory**.
2. Click the blue **+ Create New Project** button at the top right.
3. Fill in the essential details:
   - **Project Title**: Enter a clear, descriptive name (e.g. *Skyline Residency Tower A*).
   - **Client / Customer**: Select an existing customer from the dropdown (or leave unassigned).
   - **Status**: Choose initial lifecycle state (`Planned`, `In Progress`, `On Hold`, `Completed`).
   - **Mobilization / Start Date**: The official site possession date.
   - **Target Completion Date**: Scheduled handover date.
   - **Total Estimated Budget**: Enter the agreed total contract value in your workspace currency.
   - **Scope of Work & Site Description**: Add architectural specifications, subcontractor milestones, and deliverables.
4. Click **Create Project**. The project is immediately live and ready for site diaries, subcontracts, and change orders.

