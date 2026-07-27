---
schema_version: 2
id: "GUIDE-REPORT-STORELLET-REPORT"
title: "Storellet Report"
category: "Report"
module: "Storellet Report"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Storellet Report 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Storellet Report 點用？"
  - "點樣設定 Storellet Report？"
  - "Storellet Report 有咩用途同注意事項？"
  - "What is Storellet Report used for?"
keywords:
  - "Storellet Report"
  - "Report"
  - "Storellet"
  - "報表"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Storellet Report"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Storellet Report

**這是什麼：** 後台營運監察排程的清單，用來設定「系統異常通知」——目前可配置兩種：Payment Gateway Service Error（支付閘道服務異常）與 SMS Flooding（簡訊大量發送異常）。當異常達到設定的門檻時，系統會寄電郵通知指定的收件人。屬於技術／營運監控用途，非業務報表。
**出現位置：** 後台檢視；異常通知會寄到您配置的電郵。僅開放給具備「編輯支付閘道服務報表」權限的營運／系統管理員，一般行銷或門市帳號看不到此選單。
**篩選／欄位：**
清單頁：
- **Report Type** — 篩選要看的監察類型（All / Payment Gateway Service Error / SMS Flooding）。
- **Name** / **Type** / **Report Type** / **Config** / **Start Date** / **End Date** / **Status** — 每筆排程的識別與摘要。
- **Add New** — 新增一筆監察排程；點 View 開啟該筆的詳細設定。

新增／編輯表單共通欄位：
- **Type** — 排程週期。
- **Name** — 此監察排程的名稱。
- **Report Type** — 選擇 Payment Gateway Service Error 或 SMS Flooding；選擇後下方欄位會自動切換。
- **Threshold** — 觸發通知的數量門檻（超過此值才寄出警告）。
- **Effective Period**（Start Date – End Date）— 監察的有效日期區間。
- **Status** — Active（生效）／Inactive（停用）。
- **Email List** — 接收警告電郵的收件人（可填多個）。

當 Report Type 為 **Payment Gateway Service Error** 時，額外欄位：
- **Table** — 要監察的支付閘道資料來源。
- **Provider** — 支付服務供應商。
- **Status** — 要監察的交易狀態。

當 Report Type 為 **SMS Flooding** 時，額外欄位：
- **App Ids** — 要監察的應用程式（可多選）。
- **Provider Types**／**Providers** — 簡訊供應商類型與供應商（可多選）。

**注意：** 修改後請按 Confirm 儲存；刪除請按 Delete，系統會再次確認後才移除。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
