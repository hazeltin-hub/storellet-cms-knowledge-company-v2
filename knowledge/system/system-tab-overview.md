---
schema_version: 2
id: "GUIDE-SYSTEM-TAB-OVERVIEW"
title: "System Tab 架構概述"
category: "System"
module: "System Tab"
intent: "architecture_overview"
status: "confirmed"
risk_level: "low"
locale: "zh-HK"
question: "System Tab 有咩功能同架構？"
alternatives:
  - "System Tab 包含咩功能？"
  - "System Tab 嘅所有功能一覽"
  - "系統設定 入面有咩項目？"
  - "What features are in System Tab?"
keywords:
  - "System Tab"
  - "系統管理"
  - "系統設定"
  - "RAG 系統"
  - "AI 配置"
  - "System 架構"
  - "系統功能"
  - "CMS"
  - "整體設定"
source_title: "Storellet CMS 操作系統概覽"
source_path: "knowledge/system/rag-system-prompt.md"
source_anchor: "System"
last_reviewed: "2026-07-27"
review_due: "2026-10-27"
---

## Model Answer

### System Tab 架構概述

**分類位置：** CMS 主選單 → System（系統管理）

**功能範圍：** System Tab 包含整體系統設定、AI 配置、RAG 系統提示等高級功能。

#### 🤖 包含的功能模組 (1個指南)

**🧠 AI 與系統智能化 (AI & System Intelligence)：**
- **RAG System Prompt** - 檢索增強生成系統提示

#### 🔧 主要功能分類

**1. 系統配置 (System Configuration)**
- 整體系統參數設定
- AI 模型配置
- 檢索系統設定

**2. 智能化功能 (Intelligence Features)**
- RAG (檢索增強生成) 系統
- AI 模型提示管理
- 知識庫智能化處理

**3. 技術設置 (Technical Setup)**
- 系統集成配置
- API 連接設定
- 高級技術參數

#### 📋 使用場景

**系統管理：**
- 配置整體系統行為
- 設定系統級參數
- 管理技術集成

**AI 優化：**
- 配置 RAG 系統行為
- 調整 AI 回應質量
- 優化知識庫檢索

**技術調整：**
- 調整系統提示詞
- 優化檢索算法
- 配置模型參數

#### ⚠️ 重要注意

- System Tab 的功能涉及系統核心配置，修改需謹慎
- AI 和 RAG 設定會影響整個 CMS 的智能化水平
- 系統提示修改會改變 AI 的回答風格和準確性
- 高級設置需要技術背景知識，建議由專業人員操作

#### 🔗 相關功能

- **Application Tab** - 應用程式設定
- **CMS Users Tab** - 用戶權限管理
- **All Tabs** - 系統配置影響所有功能

#### 🧠 RAG 系統說明

**什麼是 RAG：**
- RAG (Retrieval-Augmented Generation) 檢索增強生成
- 結合知識庫檢索與 AI 生成
- 提供準確的相關答案

**RAG 系統提示：**
- 定義 AI 回答的風格和格式
- 設定知識庫使用方式
- 優化回答準確性和一致性

#### 🎯 系統架構層次

```
System (系統層)
  ├── AI Configuration (AI 配置)
  ├── RAG System (檢索增強系統)
  └── Technical Parameters (技術參數)
      ↓ 影響所有分類和功能
```

#### ⚙️ 配置建議

**一般用戶：**
- 主要關注業務功能配置
- 系統設定使用默認值
- 如需修改請聯繫技術團隊

**技術用戶：**
- 可調整 AI 模型參數
- 可優化 RAG 系統提示
- 可配置技術集成參數

---

## Internal Notes

- 呢條答案提供 System Tab 的完整架構概覽
- 用戶詢問 "System 有咩功能" 時應顯示此概覽
- System Tab 功能較少但影響重大，需專業知識
- AI 和 RAG 設定需要理解機器學和檢索技術
- 如需修改系統提示，建議先測試效果
