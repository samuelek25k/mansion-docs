---
sidebar_position: 6
title: Invoicing & Retainage
---

# Milestone Invoicing & Retainage Escrow

In commercial construction, contractors are rarely paid all at once. Instead, money is billed in stages called **Milestones** (for example: *20% upon foundation casting, 30% on roof slab completion, 30% on interior finishing, and 20% upon final handover*).

The **Invoicing & Retainage** module automates this billing, applies regional taxes, and calculates how much security money (*retainage*) is being held back.

:::info Who Can Use This
- **Viewers, Auditors & Managers**: Can view invoice records and check payment statuses.
- **Accountants & Administrators**: Issue new milestone invoices, track payments received, and release retained escrow.
:::

---

## Visual Overview

![Milestone Invoicing and Retainage](https://cdn.jsdelivr.net/gh/samuelek25k/mansion-docs@main/screenshots/05_invoices_retention.png)

---

## Retainage Explained Simply (The Construction "Security Deposit")

### What is Retainage?
When you send a client an invoice for ₹1,00,000 with a **5% retainage rate**:
- The client pays you **₹95,000** today.
- The remaining **₹5,000** is withheld in an escrow account.

### Why is this done?
Retainage acts as insurance for the property owner. It guarantees that the contractor will return to repair any building defects (such as water leaks, plaster cracks, or faulty wiring) that appear during the **Defect Liability Period (DLP)** (usually 6 to 12 months after building handover).

### What happens in Mansion?
Mansion automatically:
1. Calculates the exact retention amount on every milestone invoice.
2. Maintains an automated **Retainage Ledger** showing how much money is currently withheld across all clients.
3. Notifies your accountant when the warranty period expires so you can bill for the final release of retention funds.

---

## Anatomy of the Invoicing Register

| Column / Field | Description | Purpose |
| :--- | :--- | :--- |
| **Invoice #** | Sequential milestone reference (e.g., `INV-2026-001`). | Compliant with regional tax standards (India GSTIN, UAE FTA TRN, US EIN). |
| **Project & Client** | Active site and client organization billed. | Associates the progress billing directly with project milestones. |
| **Milestone Target** | Physical deliverable achieved (e.g., *Foundation Pours & Substructure Casting*). | Confirms the physical work completed before revenue recognition. |
| **Total Amount** | Total milestone billing amount including regional tax and retainage. | Gross billing commitment. |
| **Collected Amount** | Funds actually cleared into the bank account to date. | Used directly in dashboard Cash Gap calculations. |
| **Pending Due** | Uncollected balance remaining on the invoice. | Highlights accounts receivable requiring collection follow-up. |
| **Status Badge** | `paid` (Green), `partial` (Blue), `pending` (Yellow), or `overdue` (Red). | Immediate visual indicator of invoice collection state. |
| **⚡ Pay Online** | Integrated payment gateway checkout button. | Enables instantaneous online client settlements for open balances. |

---

## Reviewing Invoices & Online Payments

1. Open **Financials → Milestone Invoices & Retainage**.
2. Review active invoices, payment dates, and balances due.
3. For outstanding balances, click **⚡ Pay Online** to open the integrated checkout gateway session.
4. When payments settle, the invoice status and dashboard collected revenue figures update automatically.

