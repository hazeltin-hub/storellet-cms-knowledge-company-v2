---
schema_version: 2
id: "GUIDE-MEMBERSHIP-MEMBER"
title: "Member"
category: "Membership"
module: "Member"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Member 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Member 點用？"
  - "點樣設定 Member？"
  - "Member 有咩用途同注意事項？"
  - "What is Member used for?"
keywords:
  - "Member"
  - "Membership"
  - "會員"
  - "會員資料"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Member"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Member

**這是什麼：** 會員資料總檔。用會員編號、電話、電郵或 Facebook 編號搜尋會員，檢視與更新個人資料、品牌會員卡、優惠券、印花、電子錢包餘額，以及手動調整點數／重設密碼等售後動作。
**出現位置：** 純後台內部頁面，操作人員（客服／營運）使用；會員本人在 App 看到的個人檔案內容即由這裡的資料構成，但會員不會看到此後台畫面。

**欄位／設定：**

搜尋區（在會員列表上方）：
- **Member No** — 會員編號，最直接的查找方式。
- **Phone** — 會員註冊的手機號碼。
- **Email** — 會員註冊的電郵。
- **Fb Id** — Facebook 連動編號；當會員用 Facebook 登入時用此查找。

會員基本資訊區（搜尋後展開）：
- **Member No** — 會員編號，後方括號可能顯示啟動碼。後方常見連結：Forget Password（發送重設密碼）、Send Sms（發送簡訊）。
- **Status** — 帳號狀態：Active（正常）、Inactive（停用）、Pending Delete（待刪除）、Deleted（已刪除）。可用後方文字連結切換為 Inactive 或重新啟用；狀態為 Inactive / Pending Delete 時另會出現 **Delete** 連結，執行永久刪除。
- **Alias No** — 別名編號（系統內部識別用）。
- **Security Code** — 會員安全碼（唯讀）。

Storellet Profile 區（平台層級的會員資料）：
- **Phone** — 主手機號碼；後方顯示 Verified / Unverified 標章表示是否已驗證。
- **Alternative Phone** — 歷史備用號碼（如有）。
- **Country Code** — 電話國碼。
- **Email** — 電郵；後方顯示 Verified / Unverified 標章。未驗證時可按 Send Verification Email 寄驗證信，或按 Toggle User Email Verify Status 直接切換驗證狀態。
- **Fb Id** — Facebook 編號。
- **Display Name / First Name / Last Name** — 顯示名稱、姓氏、名字。
- **Gender** — 性別：Male / Female / N/A。
- **Birthday** — 生日。
- **Join Date** — 加入日期。
- **Membership Group** — 目前檢視的品牌會員體系下拉選單；切換後下方品牌檔案區會同步切換。後方 **Join New Merchant** 連結可把此會員加入其他品牌。
- **Brands** — 此會員已加入的品牌清單，旁有 **User Extra Tag View/Edit** 連結可管理自訂標籤。

Brand Profile 區（單一品牌層級的會員資料，切換 Membership Group 或 Brands 後顯示）：
- **Password** — 顯示 Forget Password 連結，可為該品牌檔案重設密碼。
- **Display Name / First Name / Last Name / Gender / Birthday** — 此品牌專用的資料（可與平台層級不同）。
- **Email** — 此品牌聯絡電郵，含 Verified / Unverified 標章與驗證操作連結。
- **Status** — 此品牌會員狀態：Active / Inactive / Pending Delete / Deleted，可切換。

下方分頁標籤（會員活躍紀錄總覽）：
- **Card** — 各品牌會員卡：Member Level（會員等級）、Discount Rate（折扣）、有效期、狀態等。
- **Coupon Summary** — 持有優惠券統計：Active / Used / Expired 數量。
- **Coupon Card** — 個別優惠券明細，含 Serial No、延長有效期、作廢等動作。
- **Stamp / Stamp Card** — 印花收集與印花卡兌換紀錄，含 Add Stamp 手動加印。
- **Bingo** — Bingo 活動紀錄，含 Adjust 調整。
- **History** — 點數異動歷史（交易時間、點數增減、商店、描述）。
- **Cs Remark** — 客服備註，可新增內部留言（會員看不到）。
- **User Wallet / User Wallet History** — 電子錢包餘額與交易明細（存入、扣款、結餘）。

**注意：** Status 切換為 Pending Delete 或 Deleted 後，會員在 App 將無法正常使用；操作前請先確認。Forget Password 與 Send Sms 會真的發送簡訊／電郵給會員，請避免誤觸。在 Inactive / Pending Delete 狀態下出現的 **Delete** 連結為永久刪除，請格外小心。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
