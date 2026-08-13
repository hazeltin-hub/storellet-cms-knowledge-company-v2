---
schema_version: 2
id: "CMS-ESHOP-SHOPPING-CART"
title: "eShop 購物車設定及注意事項"
category: "Assets"
module: "eShop Shopping Cart"
intent: "how_to_and_reference"
status: "confirmed"
risk_level: "medium"
locale: "zh-HK"
question: "Storellet eShop 購物車點樣啟用同使用？"
alternatives:
  - "eShop 購物車"
  - "購物車購買流程點用？"
  - "eShop 購物車開關喺邊度？"
  - "How do I enable the Storellet eShop shopping cart?"
keywords:
  - "eShop 購物車"
  - "shopping cart"
  - "購物車購買"
  - "商品自訂資料"
  - "Merchant Web Config"
source_title: "Storellet CMS 0.14.0 release notes"
source_path: "private release notes — not committed"
source_anchor: "eShop 購物車"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 功能狀態

eShop 購物車購買流程已於 CMS 0.14.0 正式推出，支援用戶將多個商品加入購物車後一次過完成購買。

### 啟用條件

- 對應 Merchant Web Config 必須開啟購物車功能。
- 啟用前要確認品牌網店、商品、庫存、付款及交付設定已可正常完成單件購買。
- 開關未啟用時，唔應假設前端會顯示或接受購物車流程。

### 0.14.0 相關改善

- 購物車購買會檢查商品要求嘅自訂資料，資料缺漏或無效時唔會直接完成購買。
- 購買後嘅庫存交易會按商品次序整理，方便核對購物車內容同實際扣減結果。
- 系統亦改善咗購物完成後嘅背景處理穩定性。

### 建議測試

1. 在測試環境開啟 Merchant Web Config 嘅購物車功能。
2. 測試單一商品、多商品、不同數量，以及需要額外填寫資料嘅商品。
3. 驗證價格、庫存、購買數量上下限、積分回贈、付款及交付結果。
4. 測試商品要求嘅額外資料缺漏或無效時會被正確拒絕。
5. 完成購買後核對訂單、商品次序、庫存扣減及付款結果。
6. 關閉開關再驗證前端唔會誤入購物車流程。

### 注意事項

- 購物車係購買流程功能；商品內容仍然喺 Eshop Products 管理，網站開關屬 Merchant Web Config。
- 正式啟用前要完成付款、庫存及錯誤重試測試，避免重複扣庫存或建立不完整訂單。
- 如果品牌 App／網店版本未支援購物車，即使後台開關已開亦可能唔顯示；要一併確認目前使用版本。

## Internal Notes

- 呢條答案整理 0.14.0 已確認嘅購物車、開關、自訂資料驗證及庫存核對行為。
