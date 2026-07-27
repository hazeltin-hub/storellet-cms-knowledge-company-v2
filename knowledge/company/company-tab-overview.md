---
schema_version: 2
id: "GUIDE-COMPANY-TAB-OVERVIEW"
title: "Company Tab 架構概述"
category: "Company"
module: "Company Tab"
intent: "architecture_overview"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "Company Tab 有咩功能同架構？"
alternatives:
  - "Company Tab 包含咩功能？"
  - "Company Tab 嘅所有功能一覽"
  - "公司管理 入面有咩設定項目？"
  - "What features are in Company Tab?"
keywords:
  - "Company Tab"
  - "公司管理"
  - "商戶管理"
  - "品牌管理"
  - "商店管理"
  - "Company 架構"
  - "組織架構"
  - "CMS"
  - "公司設定"
source_title: "Storellet CMS 操作指南（白話版）"
source_path: "knowledge/references/cms-plain-language-guide.md"
source_anchor: "Company"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### Company Tab 架構概述

**分類位置：** CMS 主選單 → Company（公司管理）

**功能範圍：** Company Tab 包含所有與公司組織、品牌設置、商店管理相關的功能。

#### 🏢 包含的功能模組 (16個指南)

**🏭 組織架構 (Organization Structure)：**
- **Company Structure Overview** - 公司組織架構總覽
- **Create Company** - 創建公司/組織

**🎨 品牌管理 (Brand Management) - 7個指南：**
- **Brand App/eShop Presentation** - 品牌應用程式與電商展示
- **Brand Content & Promotion** - 品牌內容與推廣設定
- **Brand Identity Discovery** - 品牌識別發現
- **Brand Lifecycle & Member Profile** - 品牌生命週期與會員檔案
- **Brand Links & Reservations** - 品牌連結與預約設定
- **Brand Points, QR & POS** - 品牌積分、QR碼與POS設定
- **Brand Visual Design** - 品牌視覺設計

**🏪 公司組管理 (Company Group Management) - 4個指南：**
- **Company Group Branded App** - 公司組品牌應用程式
- **Company Group Controls & Compliance** - 公司組控制與合規
- **Company Group Identity & Registration** - 公司組識別與註冊
- **Company Group Membership & Points** - 公司組會員與積分

**🏪 商店管理 (Shop Management) - 3個指南：**
- **Featured Item Setup** - 精選商品設定
- **Shop Access & Visibility Audit** - 商店訪問與可見性審核
- **Shop Identity, Location & Contact** - 商店識別、位置與聯絡

#### 🔧 主要功能分類

**1. 組織層次 (Organization Hierarchy)**
- 公司 → 公司組 → 品牌 → 商店層級結構
- 多層次組織管理
- 層級間關係設定

**2. 品牌體驗 (Brand Experience)**
- 品牌視覺形象設定
- 品牌內容與推廣
- 品牌會員關係管理
- 品牌應用程式配置

**3. 運營管理 (Operations Management)**
- 商店基本資訊管理
- 商店訪問權限設定
- 精選商品配置

#### 📋 使用場景

**組織建立：**
- 創建新的公司實體
- 設定公司組織架構
- 配置層級關係

**品牌管理：**
- 建立和配置品牌
- 設定品牌視覺形象
- 管理品牌內容和推廣

**商店管理：**
- 添加和管理商店
- 設定商店資訊和位置
- 配置商店訪問權限

**營運優化：**
- 管理精選商品
- 審核商店可見性
- 優化客戶體驗

#### ⚠️ 重要注意

- Company Tab 的設定影響整個組織架構和客戶體驗
- 品牌設定會影響 App 外觀和用戶介面
- 商店資訊需準確，影響客戶訪問和導航
- 層級關係需謹慎設計，影響權限和數據流

#### 🔗 相關功能

- **Assets Tab** - 品牌相關資產（優惠券、活動）
- **Membership Tab** - 會員等級和權限
- **Push Tab** - 品牌相關推送通知

#### 📊 層級關係圖

```
Company (公司)
  └── Company Group (公司組)
      ├── Brand (品牌)
      │   ├── Shop (商店)
      │   └── Shop (商店)
      └── Brand (品牌)
          ├── Shop (商店)
          └── Shop (商店)
```

#### 🎯 架構優勢

**Company v2 優化：**
- 從 181 個字段答案整合為 16 個綜合指南
- 按功能模組組織，更易理解和導航
- 每個指南包含完整的工作流程和注意事項
- 避免重複，每個功能只在一個指南中說明

---

## Internal Notes

- 呢條答案提供 Company Tab 的完整架構概覽
- 用戶詢問 "Company 有咩功能" 時應顯示此概覽
- 若用戶詢問具體公司管理功能，則轉接到對應的詳細指南
- Company v2 版本經過專業審計和優化，基於 135 個 confirmed rows
