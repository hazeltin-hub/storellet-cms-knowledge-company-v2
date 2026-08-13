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
  - "優惠券新到期類型係咩？"
  - "優惠券本月月底到期點設定？"
  - "POS 會唔會顯示停用優惠券？"
  - "What is Coupon used for?"
keywords:
  - "Coupon"
  - "Assets"
  - "優惠券"
  - "券"
  - "CMS"
  - "end of current month"
  - "POS inactive coupon"
  - "停用優惠券"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
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
- **Coupon Code Type**（如果使用 Coupon Code 功能）：
  - **Individual**（個人碼）— 一人一碼制，適合會員專屬優惠、生日禮、VIP 獨享券
  - **Shared**（共用碼）— 多人共用一碼，適合促銷活動、群體優惠、廣告推廣碼
  - **System**（系統配發）— 系統自動分配，適合 Trigger Rule 自動化派發
- **Name（中英文，必填）/ Description / Terms and Conditions / How To Use** — 文案（條款與使用說明支援 HTML）。
- **Tags En / Tags Zh** — 標籤，方便分類搜尋。
- **Is Coupon Leaflet** — 勾選後展開「電子優惠券版型」整套欄位（如下）。
- **Is Eshop Coupon** — 是否為網店專用券。
- **Image / Image 2 / Image 3（中英文）** — 多張圖，可裁切；Image 各可設 Click Redirection 點擊跳轉網址。
- **Effective Period** — 券的有效期（精確到分鐘）。
- **Expiry Type** — 支援 By Effective Day（領取後 N 天有效）、By Expiry Date（固定到期日），以及 0.14.0 新增嘅 **End of Current Month／本月月底**。
- **Purchase Amount / Purchase Add Point Amount** — Delivery Type 為 Purchase 時顯示：售價與加購積分。
- **Redemption Point / Quantity / Entitlement** — 依 Delivery Type 顯示：兌換所需積分、數量、每人限領次數。
- **Coupon Extendable** — 到期後是否可延期。
- **External Url（中英文）** — 「立即使用」外連網址與顯示文字。
- **Coupon List（Replacement）** — Replacement 類型時，選擇被替換的券與數量。
- **Control Shop / Control Time** — 限制只能在指定分店、指定時段使用。
- **Shared With Brands** — 主品牌專屬，共享給集團其他品牌。
- **Event Tracking Submit Option** — 事件追蹤回報對象（預設／非 Storellet／僅 Storellet）。
- **Status** — Active / Inactive / Suspended。

### 0.14.0 到期類型更新

- **End of Current Month（本月月底）**：優惠券會以發放所屬月份嘅月底作到期點。
- 系統會按優惠券最終生效日期計算所屬月份嘅月底；唔應以建立優惠券模板嘅時間自行推算到期日。
- 測試時要覆蓋月初、月底、跨月及不同派發時間，確認 App、CMS 同 POS 顯示一致。

### POS 隱藏停用優惠券

- 0.14.0 起，POS 優惠券查詢唔再返回 **Inactive** 優惠券。
- CMS 將券設為 Inactive 後，會員 App 或歷史資料仍可能保留相關記錄，但 POS 可用券清單應該隱藏。
- 如果 POS 仲顯示停用券，先確認 POS 整合版本、環境、快取及優惠券最新狀態；唔好直接補發另一張券。
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
- **Dispatch on Join 陷阱：**
  - 有分 tier 的 birthday coupon/monthly coupon **唔可以 tick** "Dispatch on Join"
  - 如果 tick 了，所有新會員都會收到（不論 tier）
  - 例外：除非所有 tier member 都係收到相同的生日 offer
- **Tier Card 折扣 % 影響：**
  - Tier card 如果設置了折扣 %，係 Tier 卡就自動有折扣
  - 客人要用其他 Coupon 時，前線需要 Cancel 個 Discount 先用得
- **Eshop Product Group：** 設置了 eshop product group 的話，個 eshop product type 要係 "product group item"，咁樣你 active 佢都唔會 show 出嚟
- **Coupon Entitlement：** 限定 coupon 可以用幾多張

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
