---
schema_version: 2
id: "GUIDE-PUSH-COUPON"
title: "Coupon"
category: "Push"
module: "Coupon"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Push：Coupon 用途係咩？"
alternatives:
  - "Coupon 點用？"
  - "點樣設定 Coupon？"
  - "Coupon 有咩用途同注意事項？"
  - "What is Coupon used for?"
  - "Push 入面 Coupon 係做咩？"
  - "Push tab 嘅 Coupon 功能"
  - "Coupon 派發 點樣做？"
  - "點樣派發優惠券俾會員？"
  - "Push Coupon 俾會員收券"
  - "優惠券派發 喺 Push 嘅功能"
keywords:
  - "Coupon"
  - "Push"
  - "優惠券"
  - "券"
  - "CMS"
  - "派發"
  - "派券"
  - "發券"
  - "會員優惠券"
  - "送券"
  - "優惠券派發"
  - "Coupon 派發"
  - "Push tab"
  - "推播服務"
  - "會員錢包"
  - "優惠券錢包"
  - "派發優惠券"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Coupon"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Coupon

**這是什麼：** 排程把一張優惠券派發給指定會員，每位會員可收到指定數量，於指定日期時間落入他們的優惠券錢包。
**出現位置：** 顧客 App 的優惠券錢包。純後台排程設定，畫面上不會對操作人員顯示任何東西。
**欄位／設定：**
- **Brand** — 要派發的品牌。選擇後系統會載入該品牌下的優惠券清單。
- **Coupon** — 從下拉選單挑選要派發的那一張優惠券（會顯示優惠券名稱與目前狀態）。
- **Quantity** — 每位符合資格的會員要收到幾張，限 1–20。
- **Push Target** — 對象範圍：Brand Members（該品牌全部會員）或 Custom Brand Members（自訂名單）。
- **Required Discount Card Level** — 只派給持有指定會員等級的會員；可勾多個。僅在 Push Target 為 Brand Members 時出現。
- **Exclude Discount Card** — 反過來排除指定會員等級。僅在 Push Target 為 Brand Members 時出現。
- **Required Has All Discount Card** — 勾起來時，會員必須「同時」持有所有勾選的等級才符合資格；不勾則為「任一」即可。
- **Receivers** — 上載 CSV 名單。僅在 Push Target 為 Custom Brand Members 時出現，上限 40 萬筆。
- **Member Join Date Before** — 只派給在這個日期之前加入的會員。用來排除新加入的會員。
- **Bypass Internal Third Party Event Tracking (ex:Braze)** — 勾起來時，這次派發不會回報給第三方行銷系統（例如 Braze）。除非你有特別原因，通常不勾。
- **Enable Priority Blast** — 啟用優先發送，用於大型或急件的派發。
- **Push Date / Push Time** — 派發的日期與時間。系統會在這個時間把優惠券送進會員錢包。
- **Create Date** — 紀錄建立日期。
**注意：** 派發一旦完成就無法在列表上刪除；只有「尚未派發」的紀錄可按 Delete。若所選品牌尚未設定任何會員等級，系統會提示這次派發會送到該品牌全部會員。

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
