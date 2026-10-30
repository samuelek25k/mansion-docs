---
sidebar_position: 1
title: Executive Dashboard
---

# Executive Dashboard & Portfolio Health

The **Executive Dashboard** gives your team a real-time pulse on all active building projects. It answers three vital questions in seconds:
1. *Are our projects making money or losing money?*
2. *Are we spending our own cash while waiting for client payments?*
3. *Which projects are getting close to their budget ceiling?*

:::info Who Can Use This
**All team roles** (Administrators, Managers, Accountants, Auditors, and Viewers) can view this dashboard. It is the default screen everyone sees upon signing in.
:::

---

## Visual Overview

![Executive Dashboard](https://cdn.jsdelivr.net/gh/samuelek25k/mansion-docs@main/screenshots/01_executive_dashboard.png)

---

## Key Financial & Portfolio Metrics

Here is what each section of the dashboard tracks:

### 1. Portfolio Health Radar (0–100 Index)
- **What it shows**: A calculated health score tracking portfolio margin strength and cash financing position.
- **Scoring Logic**: Starts at baseline 70; gains points for strong net profit margins (>20%) and cash surpluses (client collections exceeding incurred costs); penalizes portfolios running at a loss or in cash deficit.
- **Status Tones**:
  - **Optimal (Score 80–100, Green)**: Healthy net margins (+25%+) and positive cash flow where client collections cover incurred costs.
  - **Moderate Watch (Score 50–79, Amber)**: Stable margins, but requiring attention to collection timing or upcoming expenditures.
  - **Deficit / At Risk (Score < 50 or Negative Margin, Rose)**: Actual incurred costs exceed collected revenues, or the portfolio is operating at a net loss.

### 2. Financing Exposure (The "Cash Gap")
- **Formula**: `Total Actual Incurred Cost - Total Collected Revenue`.
- **Why it matters**: Alerts leadership when company working capital is tied up in job sites before client receipts clear.
- **Reading the status**:
  - **Surplus (Green)**: Collected revenue exceeds incurred costs (`gap <= 0`). Client advances and progress receipts comfortably fund site operations.
  - **Deficit (Rose/Orange)**: Incurred costs exceed collected revenue (`gap > 0`). The company is self-financing site operations and needs to accelerate invoice collections.

### 3. Revenue Billed vs Target Contract Value
- **What it shows**: Aggregate milestone revenue invoiced across all active projects against the total contractual target.

### 4. Budget Watchdog
- **What it is**: Identifies the project with the highest budget utilization ratio (`actualCost / estimatedBudget`) to prevent cost overruns before milestone sign-offs.

---

## How to Read the Project Velocity & Cost Rails

The comparative progress rails display three distinct markers for every project:

```
[================= Actual Cost (46%) =================>]
[====================== Revenue Collected (48%) ======================>]
|-------------------------------- Budget Ceiling (100%) --------------------------------|
```

| Rail Element | What it Represents | How to Interpret |
| :--- | :--- | :--- |
| **Actual Cost (Red/Orange bar)** | Total money spent so far on materials, labour muster rolls, and equipment hire. | If this bar grows faster than the work completed, investigate site wastage or unexpected delays. |
| **Revenue Collected (Green marker)** | Actual cash received into your bank account from client milestone payments. | As long as the **green marker stays ahead of the red bar**, your project is self-funding. |
| **Budget Ceiling (Grey track)** | The approved maximum contract budget. | The hard limit. No project should ever exceed this track without an approved [Change Order](./change-orders.md). |

---

## Individual Project Financial Cards

Below the rails, each active project displays an instant summary card:
- **Billed**: Total milestone invoices sent to the client.
- **Expenses**: Site petty cash, transport, and equipment hire costs.
- **Materials**: Total value of concrete, steel, bricks, and finishes used.
- **Net Profit**: Revenue minus (Expenses + Materials).
- **Margin %**: The calculated net profit percentage.

