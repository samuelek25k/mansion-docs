---
sidebar_position: 1
title: Frequently Asked Questions
---

# Frequently Asked Questions (FAQ)

Quick, plain-English answers to the most common questions about using Mansion on job sites and in the office.

---

### General & Access

#### Why can't I see an edit, delete, or create button?
Mansion uses **Role-Based Access Control (RBAC)**. If your role does not permit an action (for example, only Administrators can approve change orders or delete projects), that button is automatically hidden so you never experience frustrating permission errors. See [Roles at a Glance](../roles/overview.md).

#### Can clients or subcontractors see our internal costs or profit margins?
**No.** Subcontractors only see their specific trade packages and certified IPC claims. Clients with Viewer access can only see overall milestone delivery dates and high-level progress. Internal cost breakdowns, worker wages, and contractor profit margins are strictly hidden from non-staff roles.

#### Can other construction companies using Mansion see our data?
**Never.** Every organization operates inside a cryptographically verified, isolated database scope. There is zero risk of data leakage between different contractors.

---

### Money & Billing

#### What is "Retainage" and when does our company collect it?
Retainage is a statutory security deposit (usually 5% or 10%) withheld from progress payments until the building is completed. Once the **Defect Liability Period (DLP)** (usually 6 to 12 months after handover) concludes and all snag-list defects are inspected and signed off, you issue a final invoice to release the retained escrow. See [Invoicing & Retainage](../user-guide/invoicing-and-retainage.md).

#### What does "Financing Exposure: Surplus vs Deficit" mean on the dashboard?
- **Surplus**: Client milestone payments and advances exceed the money you have spent on materials and site wages so far. Your project is in a safe cash flow position.
- **Deficit**: You have spent more out-of-pocket cash than you have received from the client. When you see a deficit alert, immediately issue your next milestone invoice. See [Executive Dashboard](../user-guide/dashboard.md).

#### How do change orders affect our project budget?
When an Administrator approves a [Change Order](../user-guide/change-orders.md), Mansion automatically increases the project's **Budget Ceiling** and extends the **Completion Handover Date**. This ensures the team gets paid for extra work and prevents late-delivery penalties.

---

### Site Operations & Field Use

#### Why is a concrete slump test logged in the site diary?
A slump test verifies that ready-mix concrete has the right water-to-cement ratio before it is poured into structural slabs or pillars. Logging passed slump tests protects your company against future structural liability claims. See [Daily Field Diary](../user-guide/site-diary.md).

#### How do we log days when heavy rain stops all work?
In **Site Operations → Daily Field Diary**, create an entry for that day, select `Rain / Storm` as the weather condition, and add a note under **Delays & Incidents** describing the stoppage. This creates an ironclad audit trail to justify timeline extensions to the property owner.

#### Can I use Mansion on my smartphone while walking the site?
**Yes.** Mansion is built mobile-first with 44px+ touch targets designed for work gloves, high-contrast sunlight readability, and a persistent bottom navigation dock. Open the web address on your mobile browser and choose **Add to Home Screen**. See [Mobile Experience](../user-guide/mobile-experience.md).

