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
  - "購物車 purchaseCart 點用？"
  - "enableShoppingCart 喺邊度開？"
  - "How do I enable the Storellet eShop shopping cart?"
keywords:
  - "eShop 購物車"
  - "shopping cart"
  - "cart purchase"
  - "purchaseCart"
  - "enableShoppingCart"
  - "merchantWebConfig"
  - "validateCustomData"
  - "stock transactions"
source_title: "Storellet CMS 0.14.0 release notes"
source_path: "private release notes — not committed"
source_anchor: "eShop 購物車"
last_reviewed: "2026-08-13"
review_due: "2026-11-13"
---

## Model Answer

### 功能狀態

eShop 購物車購買流程已於 CMS 0.14.0 正式推出，支援用戶將多個商品加入購物車後完成 cart purchase。

### 啟用條件

- 對應 `merchantWebConfig` 必須開啟 `enableShoppingCart`。
- 啟用前要確認品牌網店、商品、庫存、付款及交付設定已可正常完成單件購買。
- 開關未啟用時，唔應假設前端會顯示或接受購物車流程。

### 0.14.0 相關行為

- `purchaseCart` 會執行 `validateCustomData`，購物車購買唔再略過商品自訂資料驗證。
- `getEshopStockTransactions` 會按請求提供嘅 ID 順序返回結果。
- 庫存售出交易查詢使用 `CmsPageResponse`。
- 購物 webhook 已移除對已回收 `HttpServletRequest` 嘅非同步引用，降低非同步流程存取失效 request 嘅風險。

### 建議測試

1. 在測試環境開啟 `merchantWebConfig.enableShoppingCart`。
2. 測試單一商品、多商品、不同數量，以及有 custom data 嘅商品。
3. 驗證價格、庫存、購買數量上下限、積分回贈、付款及交付結果。
4. 測試 custom data 缺漏或無效時會被正確拒絕。
5. 完成購買後核對訂單、stock transaction 次序、庫存扣減及 webhook 結果。
6. 關閉開關再驗證前端唔會誤入購物車流程。

### 注意事項

- 購物車係購買流程功能；商品內容仍然喺 Eshop Products 管理，網站開關屬 Merchant Web Config。
- 正式啟用前要完成付款、庫存及錯誤重試測試，避免重複扣庫存或建立不完整訂單。
- 如果品牌前端版本未支援購物車，即使後台開關已開亦可能唔顯示；要一併確認目前前端 release。

## Internal Notes

- 呢條答案整理 0.14.0 已確認嘅 cart purchase、開關、custom data 驗證及 stock transaction 行為。
