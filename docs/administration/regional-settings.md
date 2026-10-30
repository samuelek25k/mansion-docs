---
sidebar_position: 5
title: Regional Settings & Tax Presets
---

# Multi-Regional Configuration Engine

Construction is hyper-local. A general contractor building in Dubai operates under completely different tax regulations, contract models, and units of measurement than a builder in London, Mumbai, or Texas.

Instead of requiring expensive custom programming, Mansion includes a **zero-code Multi-Regional Engine**. Selecting your country preset automatically updates tax calculations, retainage percentages, currency symbols, and material measurement units across your whole workspace.

:::info Who Can Use This
**Administrators Only**. Regional settings are configured from the Tenant Admin Console.
:::

---

## Visual Overview

![Regional Configuration](https://cdn.jsdelivr.net/gh/samuelek25k/mansion-docs@main/screenshots/08_tenant_regional_settings.png)

---

## The 5 Global Presets in Detail

### 1. 🇮🇳 India (RERA & GST Standard)
- **Currency**: Indian Rupee (`INR` / `₹`), with lakh and crore formatting (e.g. `₹28,00,000`).
- **Tax Engine**: **18% GST** with automatic 9% CGST (Central GST) and 9% SGST (State GST) split.
- **Contractor Withholding (TDS)**: Automatic 2% Tax Deducted at Source (under Income Tax Section 194C) on subcontractor payment vouchers.
- **Retainage Policy**: **5% statutory defect liability retention**.
- **Material Units**: Cement in standard **50 kg bags**, sand and coarse aggregate in **cubic feet (cu.ft)**, steel in metric tons, masonry in nos.

### 2. 🇦🇪 United Arab Emirates (FIDIC & FTA Standard)
- **Currency**: UAE Dirham (`AED`), formatted to two decimal places.
- **Tax Engine**: **5% Federal Tax Authority (FTA) VAT**.
- **Tax ID**: 15-digit Tax Registration Number (TRN).
- **Retainage Policy**: Standard **FIDIC 10% retention** (5% released upon Practical Handover, 5% after the Final Handover certificate).
- **Material Units**: Metric system (cement in metric tons, steel in metric tons, aggregate in `cu.m`, masonry in `sq.m`).

### 3. 🇸🇦 Saudi Arabia (ZATCA Compliance)
- **Currency**: Saudi Riyal (`SAR`), with Arabic locale support.
- **Tax Engine**: **15% ZATCA VAT Phase 2** electronic billing formatting (`VAT Reg No`).
- **Contractor Withholding**: **5% statutory withholding tax**.
- **Retainage Policy**: **10% defect liability escrow**.
- **Compliance Tags**: GOSI (General Organization for Social Insurance) labour verification tracking on worker muster rolls.
- **Material Units**: Metric system (cement in metric tons, aggregate in `cu.m`, steel in metric tons, masonry in `sq.m`).

### 4. 🇺🇸 United States (AIA & State Sales Tax)
- **Currency**: US Dollar (`USD` / `$`).
- **Tax Engine**: **8.25% Sales & Use Tax** (configurable per state/municipality), EIN tracking.
- **Contract Billing Standard**: Automated **AIA G702** (*Application and Certificate for Payment*) and **AIA G703** (*Continuation Sheet*) progress billing formats.
- **Retainage Policy**: **10% retainage**, with automatic lien waiver release tracking upon milestone settlement.
- **Material Units**: Imperial system (cement in **94 lb bags**, coarse aggregate in **cubic yards (cu.yd)**, steel in short tons, masonry in units).

### 5. 🇬🇧 United Kingdom (HMRC CIS & JCT Standard)
- **Currency**: British Pound Sterling (`GBP` / `£`).
- **Tax Engine**: **20% standard VAT** (HMRC VAT Number).
- **Labour Withholding (CIS)**: Integrated **20% HMRC Construction Industry Scheme (CIS)** deduction withheld at source from subcontractor labour payments.
- **Retainage Policy**: Standard **JCT 5% retention** (2.5% released upon Practical Completion, 2.5% after the Certificate of Making Good Defects).
- **Material Units**: Cement in standard **25 kg bags**, steel in tonnes, aggregate in tonnes, masonry in square metres (`m²`).

---

## How to Select Your Region

1. Click your **Initials Badge** (top right) → **Super Admin: Tenant Console**.
2. Select the **🌍 Regional Tax & Compliance** tab.
3. In the **Jurisdiction Preset** dropdown, select your operating country.
4. Enter your official tax ID (GSTIN, TRN, EIN, or VAT number).
5. Click **Save Regional Configuration**. 

All existing and future projects immediately recalculate tax brackets, retention withholding, and currency symbols.

