---
schema_version: 2
id: "GUIDE-ASSETS-COUPON"
title: "Coupon"
category: "Assets"
module: "Coupon"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Assets：Coupon 用途係咩？"
alternatives:
  - "Coupon 點用？"
  - "點樣設定 Coupon？"
  - "Coupon 有咩用途同注意事項？"
  - "What is Coupon used for?"
keywords:
  - "Coupon"
  - "Assets"
  - "優惠券"
  - "券"
  - "CMS"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Coupon"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Coupon

**這是什麼：** 單張優惠券，可作迎新、生日、兌換、推播、購買、替換等多種用途；支援電子優惠券（Leaflet）進階版型。
**出現位置：** 顧客 App、收銀機、網店（視 Delivery Type 而定）。
**欄位／設定：**
- **Coupon ID** — 系統編號（唯讀）。
- **Brand** — 所屬品牌（必選；會連動顯示折扣卡清單）。
- **Required Discount Card Level** — 勾選哪些會員等級才領得到。
- **Type** — Freebie（贈品）、Item Discount（品項折扣）、Receipt Discount（整單折扣）。
- **Item Code** — 適用品項代碼（可加多筆）。
- **Item Discount Value** — 折扣數值，單位 $ 或 %。
- **Delivery Type** — 派發方式：Welcome Pack、Birthday Gift、Anniversary Gift、Redeem、Push、Stamp、Replacement、Purchase。不同選擇會帶出不同欄位。
- **Name（中英文，必填）/ Description / Terms and Conditions / How To Use** — 文案（條款與使用說明支援 HTML）。
- **Tags En / Tags Zh** — 標籤，方便分類搜尋。
- **Is Coupon Leaflet** — 勾選後展開「電子優惠券版型」整套欄位（如下）。
- **Is Eshop Coupon** — 是否為網店專用券。
- **Image / Image 2 / Image 3（中英文）** — 多張圖，可裁切；Image 各可設 Click Redirection 點擊跳轉網址。
- **Effective Period** — 券的有效期（精確到分鐘）。
- **Expiry Type** — By Effective Day（領取後 N 天有效）或 By Expiry Date（固定到期日）。
- **Purchase Amount / Purchase Add Point Amount** — Delivery Type 為 Purchase 時顯示：售價與加購積分。
- **Redemption Point / Quantity / Entitlement** — 依 Delivery Type 顯示：兌換所需積分、數量、每人限領次數。
- **Coupon Extendable** — 到期後是否可延期。
- **External Url（中英文）** — 「立即使用」外連網址與顯示文字。
- **Coupon List（Replacement）** — Replacement 類型時，選擇被替換的券與數量。
- **Control Shop / Control Time** — 限制只能在指定分店、指定時段使用。
- **Shared With Brands** — 主品牌專屬，共享給集團其他品牌。
- **Event Tracking Submit Option** — 事件追蹤回報對象（預設／非 Storellet／僅 Storellet）。
- **Status** — Active / Inactive / Suspended。
**注意：**
- 勾選 Is Coupon Leaflet 會展開大量進階欄位，包含自訂有效期標題、使用說明、隱藏會員 QR 碼、Leaflet 按鈕（可分 Android／iOS 連結）、External Code 綁定、兌換前後提示、兌換詳情頁標題與內文等；非 Leaflet 模式不需要動這些。

**重要操作陷阱：**
- **Coupon Type 編號：** 0 = freebie（免費物品），1 = item discount（單品折扣），2 = receipt discount（單據折扣）
- **Coupon & Tier Card 設置：**
  - **KFC/PHD：** 請選擇 "Non Storellet Only"
  - **其他品牌：** 請選擇 "Storellet Only"
  - 現有 coupon/discount 會顯示 "default"（發送到兩個 Braze account）
- **Coupon PUSH 設置：**
  - Coupon 派發給所有 Brand Member 且無 Set Braze 的時候，請 tick **"Bypass Internal Third Party Event Tracking"**
  - **PHD/KFC 唔需要** tick Bypass
- **Eshop Product Group：** 設置了 eshop product group 的話，個 eshop product type 要係 "product group item"，咁樣你 active 佢都唔會 show 出嚟
- **Coupon Entitlement：** 限定 coupon 可以用幾多張

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
