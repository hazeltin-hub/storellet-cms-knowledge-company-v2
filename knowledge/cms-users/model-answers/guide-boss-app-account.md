---
schema_version: 2
id: "GUIDE-CMS-USERS-BOSS-APP-ACCOUNT"
title: "Boss App Account"
category: "CMS users"
module: "Boss App Account"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Boss App Account 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Boss App Account 點用？"
  - "點樣設定 Boss App Account？"
  - "Boss App Account 有咩用途同注意事項？"
  - "What is Boss App Account used for?"
keywords:
  - "Boss App Account"
  - "CMS users"
  - "Boss"
  - "App"
  - "Account"
  - "帳號"
  - "權限"
  - "應用程式"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Boss App Account"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Boss App Account

**這是什麼：** 管理 Boss App（老闆／店主專用 App）的登入帳號，讓品牌負責人或店主能從手機 App 查看授權給他們的品牌營運資料。
**出現位置：** 僅後台內部設定。帳號建立後，負責人可用 Username／Password 登入 Boss App，看到您授權給他們的品牌資訊。
**欄位／設定**（只列管理員真正會設的）：
- **Display Name** — 顯示名稱（例如老闆姓名）。
- **Username** — 登入 Boss App 的帳號名稱。
- **Password** — 密碼。留白代表不變更原密碼。
- **Permissions — Boss App** — 此欄固定勾選且無法取消，因為這個分頁建立的就是 Boss App 帳號。
- **Brand** — 依群組分類的品牌清單，勾選該帳號能在 Boss App 中查看的品牌，可跨群組多選。
- **Status** — Active（啟用）或 Inactive（停用）。
- **Create Date / Last Login Date** — 唯讀，僅供檢視。
**注意：**
- Boss App 權限是鎖定的——本頁建立的每個帳號都必然具備 Boss App 存取權，您無法在此關閉它。
- 透過 Brand 勾選控制該帳號能看見的品牌範圍；沒勾選的品牌在 App 中完全不會出現。
- Status 設為 Inactive 即無法登入 Boss App。
- 按 Confirm 儲存。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
