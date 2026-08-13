---
schema_version: 2
id: "LUBUDS-MEMBER-REGISTRATION-AND-EXCEPTIONS"
title: "LUBUDS 會員註冊及後台開戶例外"
category: "LUBUDS Operations"
module: "Membership"
intent: "support_workflow"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "LUBUDS 可唔可以喺 CMS 後台直接幫一般會員開戶？"
alternatives:
  - "會員唔下載 App，可唔可以由後台開 account？"
  - "可唔可以幫客人手動開 LUBUDS 會員？"
  - "How do we create a LUBUDS member account?"
  - "CMS backend member creation"
keywords:
  - "LUBUDS"
  - "會員註冊"
  - "開戶"
  - "CMS"
  - "frontend registration"
  - "alias member"
source_title: "Private LUBUDS project conversations"
source_path: "private source — not committed"
source_anchor: "2024-02 to 2025-12"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 一般會員要由前台完成註冊

標準 LUBUDS 會員帳戶唔應由 CMS 人手建立。一般會員需要經 LUBUDS App 或指定前台註冊流程開戶，令電話驗證、登入身份及會員資料保持一致。

### 有無例外？

歷史上曾為特定企業／合作會員設計預先建立空白帳戶、Alias 或一次性資料遷移流程，但呢啲係獲批嘅專案例外，唔代表 CMS 有通用「幫一般會員開戶」功能。遇到同類要求時，要先確認：

- 係一般消費者，定已批准嘅企業會員計劃？
- 會員日後會用電話、Alias、QR Code 定其他方式識別？
- 帳戶點樣完成身份驗證及綁定真實會員？
- POS、App、報表及會員權益會唔會使用同一個識別碼？

### 建議回覆同事／客戶

「一般會員需要經 LUBUDS App 或指定註冊頁完成開戶，CMS 唔用作直接建立一般會員帳戶。如果係企業名單、Alias 或資料遷移等特別流程，請提供業務情境，我哋會先確認已批准方案及身份綁定方式。」

### 注意事項

- 唔好為繞過 OTP 或註冊流程而自行建立假資料。
- 唔好用同一電話隨意建立多個帳戶，可能造成會員資料、積分及優惠券分散。
- 任何例外開戶或批量建立帳戶都要由 module owner 及技術團隊確認。

## Internal Notes

- 標準流程與後來出現嘅企業 Alias 方案屬不同情境，回覆時必須分開。
- 唔可以將聊天中曾分享嘅測試帳號或密碼寫入答案。
