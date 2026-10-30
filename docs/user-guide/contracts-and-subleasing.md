---
sidebar_position: 3
title: Contracts & Subleasing
---

# Subcontracts & Equipment Subleasing

Construction projects rely heavily on specialized trade partners (like electrical contractors and glass fabricators) and rented heavy machinery (such as tower cranes and excavators). 

The **Subcontracts & Subleasing** module brings these commitments into a single ledger so you always know:
1. *How much money you have committed to each subcontractor.*
2. *How much work they have finished and had certified.*
3. *How much retention money is withheld as a defect guarantee.*

:::info Who Can Use This
- **Viewers & Auditors**: Read-only access to agreements and claims.
- **Managers, Accountants & Administrators**: Create trade packages, enter machinery leases, and submit payment claims.
- **Administrators & Accountants**: Authorize and certify Interim Payment Certificates (IPCs).
:::

---

## Visual Overview

![Contracts and Subleasing](https://cdn.jsdelivr.net/gh/samuelek25k/mansion-docs@main/screenshots/07_contracts_subleasing.png)

---

## Key Module Metrics

| Metric Card | Description |
| :--- | :--- |
| **Total Committed Value** | Total contract value across all signed trade subcontracts and rental agreements. |
| **Certified to Date** | Cumulative value of completed work verified and approved for payment. |
| **Retention Withheld** | Security funds held in escrow (e.g., 5% or 10%) pending Defect Liability Period clearance. |
| **Active Machinery Leases** | Count of heavy plant machines (cranes, earthmovers, piling rigs) currently active on site. |

---

## Agreement Types

Mansion organizes external commitments into two streams:

### 1. 🔨 Trade Subcontracts
- **Scope**: Fixed-price or unit-rate packages awarded to specialist contractors (HVAC, glazing, electrical, waterproofing).
- **Tracked Parameters**: Committed package value, certified progress, statutory retention withholdings, and unbilled balances.

### 2. 🚜 Equipment Subleasing (Heavy Plant Rental)
- **Scope**: Rented machinery and plant (tower cranes, excavators, piling rigs).
- **Lease Models**: Monthly fixed leases, hourly wet leases (metered operation with operator/fuel), and mobilization/demobilization freight charges.

---

## Interim Payment Certificate (IPC) Workflow

Subcontractor progress claims follow a structured verification lifecycle:

| Step | Action | Execution in Mansion |
| :---: | :--- | :--- |
| **1. Deliver** | Subcontractor completes trade milestone | Inspected on site by the Site Engineer. |
| **2. Submit** | Engineer clicks **+ IPC Claim** | Enters verified quantity completed (e.g., 200m piping). |
| **3. Retain** | Automated Retainage Calculation | System automatically calculates and deducts statutory retention (5%–10%) into escrow. |
| **4. Contra-Charge** | Deduct backcharges (optional) | Applies deductions for contractor diesel, materials, or damages before net certification. |
| **5. Certify** | Commercial Finance / Admin Approval | Accountant certifies net payable amount; certificate routes to the payment register. |

