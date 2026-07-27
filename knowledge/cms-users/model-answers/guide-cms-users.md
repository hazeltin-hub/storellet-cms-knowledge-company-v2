---
schema_version: 2
id: "GUIDE-CMS-USERS-CMS-USERS"
title: "CMS Users"
category: "CMS users"
module: "CMS Users"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "CMS Users 係做咩，有咩欄位同注意事項？"
alternatives:
  - "CMS Users 點用？"
  - "點樣設定 CMS Users？"
  - "CMS Users 有咩用途同注意事項？"
  - "What is CMS Users used for?"
keywords:
  - "CMS Users"
  - "CMS users"
  - "CMS"
  - "Users"
  - "帳號"
  - "權限"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "CMS Users"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### CMS Users

**這是什麼：** 管理可登入後台（CMS）的最高層級帳號，並精細指派每個帳號在後台能看見與操作的模組。
**出現位置：** 僅後台內部使用。這些帳號登入後會進入完整 CMS，依您勾選的權限看見並操作對應的後台模組（例如優惠券、會員、推播、報表、應用程式設定等），也可以再管理下一層的 CMS 帳號。
**欄位／設定**（只列管理員真正會設的）：
- **Username** — 登入帳號名稱，必填。
- **Password** — 密碼。留白代表不變更原密碼；若有輸入需符合系統密碼格式，否則無法儲存。
- **Email** — 帳號聯絡電郵。
- **Contact No** — 帳號聯絡電話。
- **Name** — 顯示名稱（人員姓名）。
- **Title** — 職稱，僅供辨識。
- **Department** — 部門，僅供辨識。
- **Permissions** — 一整棵權限勾選樹，決定該帳號登入後能看見哪些後台模組。主分類如下：
  - **CMS** — 後台總開關，勾選才視為後台使用者。其下可再展開：
    - **Dashboard** — 觀看後台首頁儀表板。
    - **Company**（下含 Company / Group / Brand / Shop / Featured Item）— 管理多租戶結構：公司、群組、品牌、商店、精選項目。
    - **Assets**（下含 Points / Discount Card / Bingo / Stamp / Coupon / Coupon Package / Coupon Trigger Rule / Survey / Coupon Code / User Activation Key / Edit Cross Brand Automation / EShop / User Wallet Top Up Plan）— 管理各類會員資產。
    - **Membership**（下含 View Detail / Edit Detail / Invoice / Qr Code Inspector / Blocked Number / Coupon Payment / Unsubscribe Merchant / Membership (Simple) / User Wallet Modification）— 檢視／編輯會員資料、開立發票、掃碼查驗、封鎖號碼等。
    - **Push**（下含 Coupon / Notification / News / User Favour Batch Operation / User Point Batch Operation）— 發送推播與批次操作。
    - **Application**（下含 Configure / Locale / Region / Tag Group / Front Page Setting / View Pos Key / Generate Pos Key / Rotate Pos Key / Promote Pos Key (destructive) / Edit Pms Records / Edit Queuing System）— 應用程式設定與 POS 金鑰管理（其中 Promote 為破壞性操作）。
    - **CMS Users** — 可看見並管理此「CMS users」分頁（也就是本頁所屬的權限）。勾選後才能新增／編輯其他 CMS 帳號。
    - **Report** / **Edit Payment Gateway Service Report** — 檢視報表；後者進一步可編輯支付閘道服務報表。
  - **CS App** — 客服 App 總開關。勾選後此帳號也可使用客服 App，其下可再細分：
    - **Add Point** — 客服 App 中可手動為會員加點。
    - **Use Coupon** — 客服 App 中可代為使用優惠券。
- **Companies** — 多選，限制此帳號能管理哪些公司（多租戶範圍）。
- **Groups** — 依所選公司連動載入，限制可管理的群組。
- **App Ids** — 多選，限制此帳號對哪些應用程式（App ID）有權限。
- **Show White Label Assets** — 勾選後該帳號只會看到白標（White Label）資產。
- **Is storellet admin** — 只有當您自己已是 Storellet 平台管理員時才會出現此選項。勾選後該帳號成為平台級超級管理員，擁有跨所有客戶的完整權限，請審慎使用。
- **Status** — Active（啟用）或 Inactive（停用）。
- **Create Date / Last Login Date** — 唯讀，僅供檢視。
**注意：**
- 清單頁只顯示 Status 為 Active 的帳號；一旦設為 Inactive，該帳號不會出現在清單，也無法登入。
- 權限是「勾了才有」。例如沒勾 Company 下的 Shop，該帳號就完全看不到商店管理頁面。本頁所屬的「CMS Users」權限也要勾選，該帳號登入後才看得到這個分頁。
- Is storellet admin 一旦勾選等同超級管理員，請只配發給內部平台人員。
- 按 Confirm 儲存；密碼欄留白即保留原密碼。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
