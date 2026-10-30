---
name: mansion-doc-crafting
description: Authoring, auditing, and maintaining documentation in the Mansion PMS documentation repository. Use whenever creating new documentation pages, updating role guides, modifying landing pages, verifying screenshots, or auditing content against the Mansion implementation.
---

# Mansion Documentation Crafting Runbook

This skill defines the end-to-end workflow and standards for creating and maintaining documentation in `mansion-docs`.

---

## 1. Document Structure & Frontmatter

Every documentation page in `docs/` must begin with YAML frontmatter:

```yaml
---
sidebar_position: 1
title: Page Title
---
```

When creating a new folder/category under `docs/`, include a `_category_.json` file:

```json
{
  "label": "Section Name",
  "position": 2
}
```

---

## 2. Content Principles

1. **Audience**: Staff and stakeholders inside one construction company:
   - **Administrator**: Organization setup, team permissions, change order approvals, financial radar.
   - **Project Manager**: Daily field diary, labour headcount, subcontracts, change order requests.
   - **Accountant**: Milestone invoices, IPC claim certifications, retention escrow, general ledger.
   - **Auditor**: Read-only ledger, contracts, vouchers, and tax audits.
   - **Viewer**: Read-only milestone progress and delivery tracking.
2. **Prohibited Topics**:
   - **NEVER** document platform-level / PaaS administration, cross-tenant provisioning, database partitioning, or platform consoles.
   - **NEVER** document deployment infrastructure, credentials, or backend source code repos.
3. **Voice**:
   - Lean, crisp, professional, and directly actionable.
   - Explain industry terms (Retainage, Change Orders, IPC, DLP) clearly without informal tags like *"In Plain English"* or *"Layman Tip"*.
   - Never leak internal agent prompts, review discussions, or QA checklists.

---

## 3. Codebase Verification Rules

Before documenting any feature, check the Mansion codebase (`/Users/samjomon/Projects/Mansion`):

| Feature Area | Key File in Mansion | Invariant / Rule |
| :--- | :--- | :--- |
| **Change Orders** | `backend/src/Controllers/ChangeOrderController.php` | Approval updates status to `approved` and logs `approved_at`. It does NOT rewrite base contract budget ceiling or completion date. |
| **Site Diary** | `backend/src/Controllers/SiteLogController.php` | Schema has a single aggregate `laborHeadcount` integer. Trade notes, slump tests, and delays go into `workPerformed` and `issuesDelays`. |
| **Financial Radar** | `frontend/src/views/ExecutiveDecisionInsights.vue` | Score starts at 70; gains for margin >20%; financing gap is `actualCost - collectedRevenue`. |
| **Regional Presets** | `frontend/src/types/regional.ts` | 5 presets: India (18% GST, 5% retention), UAE (5% VAT, 10% FIDIC), KSA (15% ZATCA, 10%), US (8.25% Sales tax, 10%), UK (20% VAT, 20% CIS, 5% JCT). |
| **RBAC Roles** | `frontend/src/types/rbac.ts` | 5 organization roles: `admin`, `manager`, `accountant`, `auditor`, `viewer`. |

---

## 4. Visuals & Screenshots

1. **Root Storage Only**: Save images directly into `screenshots/` at repository root.
2. **CDN URL Format**:
   ```markdown
   ![Alt text](https://cdn.jsdelivr.net/gh/samuelek25k/mansion-docs@main/screenshots/<filename>.png)
   ```
3. **No Mermaid**: Do not use ````mermaid` blocks; use markdown tables and screenshots.
4. **Single Embed**: Do not repeat the same screenshot twice in a single document.
5. **Landing Page Cards**: Ensure no empty styled `<div>` elements exist in `static/index.html`.

---

## 5. Verification Checklist Before Committing

- [ ] Run `npm run build` in `mansion-docs`. Confirm `[SUCCESS] Generated static files in "build"`.
- [ ] Verify zero broken links reported by Docusaurus.
- [ ] Confirm no PaaS / platform admin documentation was added.
- [ ] Confirm all image links use the root `screenshots/` CDN URL.
- [ ] In sandboxed terminals, run git commands with `HOME=/tmp git ...`.
