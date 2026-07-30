---
schema_version: 2
id: "CMS-OPERATION-NOTES"
title: "CMS 操作注意事項總結"
category: "Important Notes"
module: "CMS Operations"
intent: "best_practices"
status: "confirmed"
risk_level: "high"
locale: "zh-HK"
question: "CMS 操作有咩重要注意事項同技巧？"
alternatives:
  - "CMS 操作注意事項"
  - "CMS 設置要注意咩？"
  - "CMS 天書內容"
  - "CMS 操作技巧"
  - "CMS 常見陷阱"
keywords:
  - "CMS 注意事項"
  - "操作技巧"
  - "Brand 設置"
  - "Coupon 設置"
  - "Trigger Rules"
  - "Branded App"
  - "Tier 系統"
  - "Push Message"
  - "操作陷阱"
  - "CMS 經驗"
source_title: "CMS 操作天書"
source_path: "knowledge/important-notes/cms-operation-notes.md"
source_anchor: "CMS_Operation_Notes"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### CMS 操作注意事項總結

**重要性：** ⚠️ **高風險操作** - 這些注意事項影響系統正常運作和用戶體驗

#### 🔥 品牌和商店設置

**新 Brand 設置必填項目：**
- **Brand: Cuisine Tag** + **Shop: Region Tag** + **District Tag**
- Format 和大小楷要跟 Superbase：
  - `filter_cuisine`
  - `filter_location`

**人均消費設定：**
- Brand > Lower Price & Higher Price
- 設定人均消費的上下限

#### ⚠️ Tier 和 Coupon 系統陷阱

**Dispatch on Join 的陷阱：**
- 有分 tier 的 birthday coupon/monthly coupon **唔可以 tick** "Dispatch on Join"
- 如果 tick 了，所有新會員都會收到（不論 tier）
- 例外：除非所有 tier member 都係收到相同的生日 offer

**Coupon Type 編號：**
- 0 = freebie（免費物品）
- 1 = item discount（單品折扣）
- 2 = receipt discount（單據折扣）

**Coupon & Tier Card 設置：**
- **KFC/PHD：** 請選擇 "Non Storellet Only"
- **其他品牌：** 請選擇 "Storellet Only"
- 現有 coupon/discount 會顯示 "default"（發送到兩個 Braze account）

**Coupon PUSH 設置：**
- Coupon 派發給所有 Brand Member 且無 Set Braze 的時候
- 請 tick **"Bypass Internal Third Party Event Tracking"**
- **PHD/KFC 唔需要** tick Bypass

**Tier Card 折扣 % 的影響：**
- Tier card 如果設置了折扣 %
- 係 Tier 卡就自動有折扣
- 客人要用其他 Coupon 時，前線需要 Cancel 個 Discount 先用得

**其他 Coupon 設置：**
- **Eshop Product Group：** 設置了 eshop product group 的話，個 eshop product type 要係 "product group item"，咁樣你 active 佢都唔會 show 出嚟
- **Coupon Entitlement：** 限定 coupon 可以用幾多張

#### 🎯 Trigger Rules 重要設置

**Monthly Trigger Rule：**
- **必須 untick：** "Submit To 3rd Party Event Tracking"
- **排查功能：** 可以排查客人 account 裡面有無張 coupon，有就唔再派發
- **新店注意：** Trigger Rules - 1個月 birthday point bonus
  - 有新店要 check trigger rule 裡面加新店

#### 📱 Branded App 設置要求

**基本設置：**
- Set brand 要 tick 到 **"Enable Brand Profile"**，就有 branded profile

**年齡分組設置：**
- 位置：Application > Config > Age Range
- 分組：
  - 12-17
  - 18-25
  - 26-30
  - 31-35
  - 36-40
  - 41-50
  - 51-64
  - 65-100

**必填內容：**
- **Application > Config：** 要寫 FAQ
- **Company > Brands > Branded App > Thumbnail：** 放背景圖
- **Company > Brands > Branded App > Terms and Conditions：** 寫三種語言
- **Company > Brands > Short Description：** 簡介（Local Language）

**App ID 設置：**
- Branded App App IDs 要係 brand page 加入對應的 **AOS** 和 **IOS** app ID

#### 📢 Push Message 設置

**Group Brand 通知：**
- 同一個 GP 的 brand
- Push msg set 係其中一個 brand 裡面
- 成個 GP member 都會收到

#### 🔧 Operation Access Code

**生成 Code：**
1. Gen code
2. 要 tick **"Create Deep Link"**
3. 再睇佢要幾多數量

**Code 類型：**
- **Public：** 淨係 gen 一條 link
- **Individual：** unique link（每人一條）

**使用方法：**
- Set 左之後將條 link gen 成 QR code 就可以比佢
- 建議你自己試拎左一次先

#### 🎪 其他重要技巧

**升級續會金額：**
- 升級、續會所需金額唔同
- 可參考：牛舞

**POS API：**
- 參考 POS API Doc

---

## Internal Notes

- 呢份文件係內部同事嘅實戰經驗總結
- 每一條都係避免常見陷阱嘅重要提醒
- 高風險操作需要特別注意，特別係 dispatch on join 和 bypass tracking 設置
- 建議定期覆核，確保新同事都了解呢些注意事項