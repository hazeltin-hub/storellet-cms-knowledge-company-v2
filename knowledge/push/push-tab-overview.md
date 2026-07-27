---
schema_version: 2
id: "GUIDE-PUSH-TAB-OVERVIEW"
title: "Push Tab 架構概述"
category: "Push"
module: "Push Tab"
intent: "architecture_overview"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Push Tab 有咩功能同架構？"
alternatives:
  - "Push Tab 包含咩功能？"
  - "Push Tab 嘅所有功能一覽"
  - "推播服務 入面有咩設定項目？"
  - "What features are in Push Tab?"
keywords:
  - "Push Tab"
  - "推播服務"
  - "推送通知"
  - "消息發布"
  - "批量操作"
  - "Push 架構"
  - "推送功能"
  - "CMS"
  - "推播設定"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Push"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Push Tab 架構概述

**分類位置：** CMS 主選單 → Push（推播服務）

**功能範圍：** Push Tab 包含所有與客戶溝通、消息推送、批量操作相關的功能。

#### 📲 包含的功能模組 (6個指南)

**🔔 消息推送 (Message Broadcasting)：**
- **Notification** - 推播通知與收件匣訊息
- **News** - 最新消息與資訊文章發布

**🎟 資產派發 (Asset Distribution)：**
- **Coupon** - 優惠券批量派發

**📊 批量操作 (Batch Operations)：**
- **Batch Point Adjustment** - 批次積分調整
- **User Point Batch Operation** - 用戶積分批量操作
- **User Favour Batch Operation** - 用戶喜好批量操作

#### 🔧 主要功能分類

**1. 消息推送 (Messaging & Broadcasting)**
- 推播通知發送
- App 收件匣訊息
- 消息文章發布
- 定向推送與群發

**2. 資產派發 (Asset Distribution)**
- 優惠券批量派發
- 會員錢包管理
- 定向資產分發

**3. 批量操作 (Batch Operations)**
- 積分批量調整
- 會員數據批量處理
- 喜好批量操作
- CSV 檔案處理

#### 📋 使用場景

**客戶溝通：**
- 發送推播通知給會員
- 發布消息文章到 App
- 管理收件匣訊息

**資產管理：**
- 批量派發優惠券
- 管理會員錢包資產
- 定向發送優惠

**數據處理：**
- 批量調整會員積分
- 批量處理會員喜好
- 上傳 CSV 處理大量數據

#### ⚠️ 重要注意

- Push Tab 的功能直接影響客戶溝通和體驗
- 推播通知需注意發送頻率，避免騷擾客戶
- 批量操作需小心檢查數據，錯誤操作難以撤銷
- 資產派發需確保準確性，涉及真實價值

#### 🔗 相關功能

- **Assets Tab** - 優惠券和積分管理
- **Membership Tab** - 會員數據和資產
- **Application Tab** - App 推播配置

#### 📊 推送類型對比

**通知類型：**
- **推播通知** - 手機推送通知
- **收件匣訊息** - App 內消息
- **消息文章** - App 消息專區文章

**操作類型：**
- **即時推送** - 立即發送
- **排程推送** - 定時發送
- **批量操作** - 大量處理

#### 🎯 架構優勢

**功能分組清晰：**
- 消息推送類功能集中管理
- 資產派發功能獨立設置
- 批量操作功能統一處理

**操作便捷性：**
- CSV 批量處理支持
- 排程功能支持定時發送
- 支持定向發送和群發

---

## Internal Notes

- 呢條答案提供 Push Tab 的完整架構概覽
- 用戶詢問 "Push 有咩功能" 時應顯示此概覽
- 若用戶詢問具體推播功能，則轉接到對應的詳細指南
- Push 功能涉及客戶溝通，需注意發送頻率和內容質量
- 批量操作需特別注意數據準確性，操作前建議備份
