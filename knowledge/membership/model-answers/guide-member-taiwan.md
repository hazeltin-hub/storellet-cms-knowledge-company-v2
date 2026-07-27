---
schema_version: 2
id: "GUIDE-MEMBERSHIP-MEMBER-TAIWAN"
title: "Member（台灣專用版本）"
category: "Membership"
module: "Member（台灣專用版本）"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Member（台灣專用版本） 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Member（台灣專用版本） 點用？"
  - "點樣設定 Member（台灣專用版本）？"
  - "Member（台灣專用版本） 有咩用途同注意事項？"
  - "What is Member（台灣專用版本） used for?"
keywords:
  - "Member（台灣專用版本）"
  - "Membership"
  - "會員"
  - "會員資料"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Member（台灣專用版本）"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Member（台灣專用版本）

**這是什麼：** 台灣部署專用的會員資料查看頁面，功能比標準 Member 陽春，僅供查詢，沒有品牌多檔案、點數調整、印花、Bingo 等分頁。
**出現位置：** 純後台內部頁面；只有台灣區部署且具備對應權限的帳號才看得到此選項（與標準 Member 擇一顯示）。
**欄位／設定：**
- 搜尋區：**Member No / Phone / Email**。

會員資訊區（唯讀顯示，無 Edit 按鈕）：
- **Member No / Security Code** — 會員編號與安全碼。
- **Phone** — 主號碼；下方 **Alternative Phone** 列出其他歷史號碼。
- **Country Code** — 國碼。
- **Email** — 電郵。
- **Fb Id / Gmail Id / Line Id / Apple Id** — 各第三方登入綁定編號；已綁定者後方有 **Unbind** 連結可解綁。
- **Display Name** — 顯示名稱。
- **Verified** — 手機是否已驗證（Yes / No）。
- **Gender** — Male / Female / N/A。
- **eInvoice Id** — 台灣電子發票載具編號。
- **Payment Token** — 信用卡付款金鑰；有綁定時顯示 **View** 連結，點入可查看各品牌（如 Pizza Hut、KFC、CoBrand）的金鑰並可逐筆 **remove**。
- **Birthday / Join Date** — 生日與加入日期。

**注意：** Unbind 與 remove 為不可逆操作，解綁第三方登入後會員將無法用該帳號登入，移除 Payment Token 後該卡別需重新綁定才能再付款。

---

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
