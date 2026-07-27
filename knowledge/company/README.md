# Company Knowledge Base v2

Company 正式答案已由 181 條舊單欄位答案，整合成 16 條主題式 Model Answers。

## 來源規則

- 唯一 confirmed 來源：`knowledge/references/company-confirmed-fields.xlsx`
- 正式使用資料：135 條 confirmed rows
- Workbook `Need Further Confirm`：4 條，唔加入 index
- 舊 Markdown 無法直接對應主來源：53 條，放喺 `review/legacy-only-fields.md`

## 正式答案

- [Company 模組架構總覽](model-answers/company-structure-overview.md)
- [建立 Company：基本資料、狀態與系統欄位](model-answers/create-company.md)
- [Company Group：身份、註冊頁與圖片設定](model-answers/company-group-identity-registration.md)
- [Company Group：會員上限、積分比例與到期規則](model-answers/company-group-membership-points.md)
- [Company Group：條款、狀態、Master Brand 與合規設定](model-answers/company-group-controls-compliance.md)
- [Company Group：Branded App 顯示、連結與條款](model-answers/company-group-branded-app.md)
- [Brand：身份、歸屬、排序與搜尋分類](model-answers/brand-identity-discovery.md)
- [Brand：Logo、背景、顏色與 Highlighted Image](model-answers/brand-visual-design.md)
- [Brand：App、eShop、Carousel 與 Branded App 圖片](model-answers/brand-app-eshop-presentation.md)
- [Brand：網站、訂座、外部連結與客服聯絡](model-answers/brand-links-reservations.md)
- [Brand：有效期、會員 Profile、迎新禮與兌換頁](model-answers/brand-lifecycle-member-profile.md)
- [Brand：積分上限、QR、POS、Passcode 與 Coupon Code](model-answers/brand-points-qr-pos.md)
- [Brand：簡介、推介菜式、品牌訊息與推廣](model-answers/brand-content-promotion.md)
- [Shop：名稱、Reference ID、位置、地址與聯絡資料](model-answers/shop-identity-location-contact.md)
- [Shop：Passcode、預設顯示、狀態與系統紀錄](model-answers/shop-access-visibility-audit.md)
- [Featured Item：活動、圖片、顯示期間與排序](model-answers/featured-item-setup.md)

## 維護原則

- 每條答案按實際工作主題整合，唔再為每個欄位建立一份重複答案。
- Front matter 嘅 alternatives 已包含每個英文 Field 常見問法。
- 所有答案保留必填程度、建議 Default、用途、操作注意事項及來源頁。
- 新資料未經 workbook 或 module owner 確認前，只可以放入 `review/`，唔可以加入 `index.json`。
