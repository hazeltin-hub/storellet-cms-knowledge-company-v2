---
schema_version: 2
id: "GUIDE-PUSH-USER-POINT-BATCH-OPERATION"
title: "User Point Batch Operation"
category: "Push"
module: "User Point Batch Operation"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "User Point Batch Operation 係做咩，有咩欄位同注意事項？"
alternatives:
  - "User Point Batch Operation 點用？"
  - "點樣設定 User Point Batch Operation？"
  - "User Point Batch Operation 有咩用途同注意事項？"
  - "What is User Point Batch Operation used for?"
  - "Push 入面 User Point Batch Operation 係做咩？"
  - "Push tab 嘅積分批量操作"
  - "用戶積分批量操作 點樣做？"
  - "點樣批量處理會員積分？"
  - "會員積分批量處理 喺 Push 嘅功能"
  - "積分批量操作 Push 入面"
keywords:
  - "User Point Batch Operation"
  - "Push"
  - "User"
  - "Point"
  - "Batch"
  - "Operation"
  - "積分"
  - "點數"
  - "CMS"
  - "批量操作"
  - "積分批量"
  - "會員積分"
  - "批量處理"
  - "用戶積分"
  - "Push tab"
  - "推播服務"
  - "會員操作"
  - "積分處理"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### User Point Batch Operation

**這是什麼：** 把一批會員的點數「有效期」往後延長。用於點數到期補救或活動延長。
**出現位置：** 顧客 App 的點數（顧客看到的是點數到期日往後延）。純後台批次作業。
**欄位／設定：**
- **Name** — 這次批次操作的名稱。
- **Brand** — 所屬品牌。
- **User IDs (comma-separated)** — 要處理的會員編號，以逗號分隔。**留空代表套用到該品牌全部會員**，請特別小心。
- **Type** — 操作類型，目前提供 Extend（延長效期）。
- **Extend Point** — 要延長的點數上限。系統只會延長到「該會員目前實際持有的點數」，例如填 99999 但會員只有 1 點，就只延長 1 點；會員 0 點則什麼都不做。
- **Remark** — 內部備註，會寫入會員的活動紀錄方便日後查閱。
- **Status** — Awaiting Processing、Finished、Error。
- **Results** — 每位會員的處理結果。
- **Created By / Created At** — 操作人員與時間紀錄。
**注意：** 這裡的「延長」是延後點數的到期日，不是增加點數結餘。User IDs 留空會影響全品牌會員，務必再次確認。建立後僅能檢視，不能修改。

---

## Internal Notes

- 呢條答案由最新白話指南拆分，保留畫面上嘅英文欄位名稱。
- 如果實際 CMS 畫面同答案不一致，停止推斷並交由內容負責人覆核。
