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

| Column | What It Means | Why It Matters |
| :--- | :--- | :--- |
| **Invoice #** | Official sequential reference (e.g., `INV-2026-001`). | Compliant with regional tax standards (India GSTIN, UAE FTA VAT, US AIA). |
| **Project & Client** | The project site and customer billed. | Matches customer accounts in your accounting ledger. |
| **Milestone Target** | The physical deliverable achieved (e.g., *Foundation Pours & Substructure Casting*). | Proves to the client that the milestone was verified on site before billing. |
| **Gross Amount** | Total milestone value before tax and retention. | Base contractual value. |
| **Retainage Deducted** | The 5% or 10% statutory retention held in escrow. | Tracked automatically in the company retainage pool. |
| **Net Payable** | Gross Amount minus Retainage plus Tax. | The exact amount expected into your bank account. |
| **Status Badge** | `PAID` (Green), `PARTIAL` (Blue), `PENDING` (Yellow), or `OVERDUE` (Red). | Highlights which clients need payment reminders. |

---

## How to Create and Send a Milestone Invoice

1. Open **Financials → Milestone Invoices & Retainage**.
2. Click **+ Create Milestone Invoice**.
3. Select the **Project** and select which milestone deliverable has been achieved.
4. Enter the billing amount. Mansion automatically calculates:
   - Regional Tax (e.g. 18% GST CGST/SGST or 5% VAT)
   - Retainage deduction (e.g. 5% or 10%)
   - Final Net Due
5. Click **Issue Invoice**. You can print an official PDF or generate an online payment link.

