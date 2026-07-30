---
schema_version: 2
id: "GUIDE-CMS-USERS-STAFF"
title: "Staff"
category: "CMS users"
module: "Staff"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "Staff 係做咩，有咩欄位同注意事項？"
alternatives:
  - "Staff 點用？"
  - "點樣設定 Staff？"
  - "Staff 有咩用途同注意事項？"
  - "What is Staff used for?"
keywords:
  - "Staff"
  - "CMS users"
  - "帳號"
  - "權限"
  - "CMS"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Staff

**這是什麼：** 管理門店員工帳號。與 CMS Users 不同，這些是「現場操作人員」用的帳號（例如門市職員），權限聚焦在門店、結帳、客服相關功能，而非整個後台。
**出現位置：** 僅後台內部設定。這些帳號登入後可使用對應的前台工具（例如門店結帳、客服 App、收據列印、Boss App 等），視所勾選的權限而定。
**欄位／設定**（只列管理員真正會設的）：
- **Display Name** — 員工顯示名稱。
- **Username** — 登入帳號名稱。
- **Password** — 密碼。留白代表不變更原密碼。
- **Phone (with Country Code Prefix)** — 聯絡電話，需含國碼（例如 +852）。
- **Permissions** — 勾選該員工可使用的功能：
  - **CMS** — 可登入後台（門店層級）。
  - **Coupon Delivery** — 可發送優惠券給會員。
  - **Master Card Direct Pay** — 可直接使用 MasterCard 扣款。
  - **Checkout** — 可操作結帳。
  - **Connect Printer** — 可連接收據／發票列表機。
  - **Boss App** — 可使用 Boss App（老闆查看營運資訊的 App）。
  - **JP Unsubscribe Member** — 可執行日本市場的退訂會員作業（法規需求）。
  - **Speedy Scanner Web** — 可使用 Speedy Scanner 網頁版掃碼工具。
- **Brand** — 選擇該員工隸屬的品牌；選擇後下面的 Shop 清單會連動刷新。
- **Shop** — 該員工所屬門店。
- **Status** — Active（啟用）或 Inactive（停用）。
- **Setting** — 進階設定，內容為 JSON 格式。一般管理員無需更動；若要填寫，必須是合法的 JSON，否則按 Confirm 時會被擋下。
- **Create Date / Last Login Date** — 唯讀，僅供檢視。
**注意：**
- 一個 Staff 帳號只綁定一個 Brand 與一個 Shop，不像 CMS Users 可同時跨多家公司／群組。
- Staff 清單會同時列出 Active 與 Inactive 的帳號（與 CMS Users 不同）；但設為 Inactive 的帳號無法登入。
- 按 Confirm 儲存。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
