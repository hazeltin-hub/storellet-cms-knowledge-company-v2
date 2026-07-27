# Company v2 Audit

## Source reconciliation

- Company Confirmed Fields workbook：135 條 confirmed rows。
- 舊 Company Markdown：181 條 rows（180 個唯一 Section + Screen + Field；包括 1 條重複記錄）。
- 重複記錄係 Shops → Create Shop → Create Date（舊 rows 164、165）。
- 以 Section + Screen + Field 對應後，舊 Markdown 有 53 條無法直接對應主 workbook。
- Workbook Need Further Confirm：4 條，全部排除於正式 index。

## Rewrite result

- 181 條舊 Company 單欄位答案已從正式 knowledge prefix 移除。
- 新 Company 正式答案：16 條。
- 135 個 confirmed rows 全部剛好分配一次，冇遺漏、冇重複。
- 每條答案包含：直接答案、出現位置、欄位表、必填程度、Default、用途、操作注意及來源頁。
- 舊額外資料保留喺 review queue 及 legacy snapshot，冇刪除。

## Important boundary

今次係按現有 confirmed workbook 重新整合架構及改寫答案，冇自行更新 CMS 業務規則。未有新來源支持嘅欄位仍需 module owner 確認。
