# Mansion Documentation Repository Rules

All AI agents working within `mansion-docs` MUST strictly adhere to the following rules to ensure consistent, high-quality, and verified documentation.

---

## 1. Target Audience & Scope Boundary
- **Audience**: End-users inside a single construction organization: **Administrators**, **Project Managers**, **Accountants**, **Auditors**, and **Viewers**.
- **Scope Limit**: Document ONLY tenant/organization-level functionality.
- **Strict Prohibitions**:
  - **NEVER** document platform-level / PaaS administration, cross-tenant provisioning, database partitioning, or platform consoles.
  - **NEVER** document internal backend architecture, deployment infrastructure, CI/CD pipelines, credentials, or private source repositories.

---

## 2. Professional Tone & Zero Conversation Leakage
- **Lean and Crisp**: Every section must be direct, concise, and focused on operational workflows without fluff or repetitive text.
- **Accessible Language**: Provide plain, everyday definitions for complex construction and financial terminology (e.g. *Retainage*, *Change Orders*, *IPC Claims*).
- **Zero Meta-Labels**: **NEVER** use colloquial meta-phrases such as *"In Plain English"*, *"Explained for Laymen"*, *"Layman Tip"*, or *"As discussed"*. Use professional section headers (e.g., *"Platform Overview"*, *"Key Financial Metrics"*, *"Proactive Cost Control"*).
- **No Discussion Leaks**: Never leak developer prompts, user discussions, agent planning thoughts, or internal review checklists into published documentation.

---

## 3. Strict Codebase Grounding & Verification
Before documenting any feature, verify its actual implementation in the Mansion codebase (`/Users/samjomon/Projects/Mansion`):
- **Change Orders**: Approving a variation marks status as `approved`, sets `approved_at = NOW()`, and increments the portfolio's **Total Approved Variations** register. It does **NOT** rewrite the base project's contract `estimated_budget` or `end_date` in the database.
- **Site Diary**: Captures a single aggregate labour headcount integer, date, weather, and temperature. Trade breakdowns, concrete slump test results, and site delays are recorded as narrative entries in `workPerformed` and `issuesDelays`.
- **Health Radar**: Calculated score (0–100) starting from a baseline of 70, reflecting net profit margin (>20%) and cash financing gap (`actualCost - collectedRevenue`).
- **Invoicing & Retainage**: Features 5 global regional presets and includes the integrated **⚡ Pay Online** checkout button for open balances.
- **RBAC Matrix**: Covers the 5 organization roles: `admin` (Administrator), `manager` (Project Manager), `accountant` (Commercial & Finance), `auditor` (Read-only Compliance), and `viewer` (Client/Stakeholder).

---

## 4. Visuals & Screenshots Policy
- **Storage**: All canonical screenshots must reside in the repository root at `screenshots/` (e.g., `screenshots/01_executive_dashboard.png`). **NEVER** create duplicate screenshot folders in `static/screenshots/` or other subdirectories.
- **CDN References**: Embed images using the official jsdelivr CDN format:
  ```markdown
  ![Description](https://cdn.jsdelivr.net/gh/samuelek25k/mansion-docs@main/screenshots/<filename>.png)
  ```
- **No Mermaid Diagrams**: Docusaurus lacks native mermaid theme support in this setup. Use structured Markdown tables and screenshot CDN URLs instead.
- **No Duplicate Embeds**: Avoid displaying the same screenshot multiple times within a single document.
- **Landing Page Hygiene**: In `static/index.html`, never leave empty styled containers (e.g. `<div>` tags with background/border classes) that collapse into broken horizontal bars on mobile screens.

---

## 5. Build & Environment Verification
- Always run `npm run build` before committing. Static compilation must pass with **zero broken links** (`[SUCCESS] Generated static files in "build"`).
- In sandboxed terminals, run git operations with `HOME=/tmp git ...` to avoid permission errors on `~/.gitconfig`.
- Only use `BypassSandbox: true` for remote git operations that require network access (`git push origin main`).
