---
id: COMPANY-ONBOARDING-001
category: Company
module: "Onboarding Process"
intent: how_to
status: confirmed
question: "上架流程係點？"
alternatives:
  - "Storellet CMS 上架流程係點？"
  - "點樣新增 Company 到 CMS？"
  - "CMS 上架步驟係咩？"
  - "Storellet 入門流程"
  - "如何設定新 Company"
  - "Onboarding 流程"
  - "新增公司要填咩欄位？"
  - "CMS 設定流程"
  - "點樣建立 Company Group Brand Shop"
keywords:
  - "上架流程"
  - "入門流程"
  - "onboarding"
  - "新增 company"
  - "cms 步驟"
  - "建立流程"
  - "設定流程"
  - "公司上架"
  - "brand 上架"
  - "shop 上架"
  - "cms 上架"
  - "Storellet 上架"
  - "設定新公司"
  - "如何新增"
  - "建立步驟"
source_title: "Company Confirmed Fields（2026-07-24）"
last_reviewed: 2026-07-24
---

## Model Answer

Storellet CMS 上架流程需要按順序完成以下 4 個層級：

**Company → Company Group → Brand → Shop**

## 第一步：建立 Company（公司層）

### 必填欄位（3個）：
1. **Company Name**｜公司註冊 / 內部公司名
2. **Join Date**｜建立日期 / 合作開始日
3. **Status**｜Active

## 第二步：建立 Company Group（集團層）

### 必填欄位（11個）：
1. **Group Name (English)**｜英文集團名稱
2. **Group Name (Local Language)**｜中文集團名稱
3. **Company**｜選擇所屬公司
4. **Grade**｜Standard
5. **Point Ratio**｜例如 $1 = 1 point(s)
6. **Terms & Conditions (English)**｜HTML/TXT 格式
7. **Terms & Conditions (Local Language)**｜HTML/TXT 格式
8. **Member No. Limit**｜-1（-1 for unlimited）
9. **CS App Point Limit**｜-1（-1 for unlimited）
10. **User Point Expiry Type**｜User Point Dynamic Expire Every Quarter After 1 Year
11. **Status**｜Active

## 第三步：建立 Brand（品牌層）

### 必填欄位（30個）：
**基本資料：**
1. **Brand Name (English)**｜英文品牌名
2. **Brand Name (Local Language)**｜中文品牌名
3. **Brand Code**｜商戶名英文首字母
4. **Display Sequence**｜數字
5. **Group**｜選擇所屬 Group
6. **Restaurant Category**｜餐廳類別
7. **Tag**｜品牌相關 keyword
8. **Geo Tag**｜地理 tag

**圖片資料：**
9. **Brand Logo**｜400 x 400 (1:1)，建議 1MB
10. **Background Image on Dashboard**｜800 x 533 (1.5:1)，建議 1MB

**時間設定：**
11. **Join Date**｜品牌開始日期
12. **Expiry Date**｜品牌到期日

**積分設定：**
13. **Max Point Earn Per Invoice**｜99999 / 按規則
14. **Max. Time of Earn Point per Day**｜999 / 按規則
15. **Max. Time of Earn Point per Week**｜999 / 按規則
16. **Max. Time of Earn Point per Day For POS**｜999 / 按規則
17. **Max. Time of Earn Point per Week For POS**｜999 / 按規則
18. **QR Code Expiry Day**｜-1 default（7日）

**UI 設定：**
19. **Background Colour 1**｜Brand color
20. **Text Colour 1**｜Brand color
21. **Background Colour 2**｜Brand color
22. **Text Colour 2**｜Brand color
23. **Background Colour 3**｜Brand color
24. **Text Colour 3**｜Brand color
25. **Show Point Or Stamp on App**｜Yes
26. **Categories**｜Category tags
27. **CusineTag**｜Cusine Tag
28. **Lower Price**｜價格range（最低）
29. **Higher Price**｜價格range（最高）
30. **Status**｜Active

## 第四步：建立 Shop（分店層）

### 必填欄位（15個）：
**基本資料：**
1. **Shop Name (English)**｜英文分店名
2. **Shop Name (Local Language)**｜中文分店名
3. **Reference ID**｜與 merchant confirm / 由 001 開始
4. **Brand**｜選擇所屬品牌

**地區設定：**
5. **Region (English)**｜Hong Kong Island / Kowloon / New Territories
6. **Region (Local Language)**｜香港島 / 九龍 / 新界
7. **District (English)**｜例如 Kwun Tong
8. **District (Local Language)**｜例如 觀塘
9. **Geo Location**｜Longitude - Latitude

**聯絡資料：**
10. **Address (English)**｜英文地址
11. **Address (Local Language)**｜中文地址
12. **Telephone**｜分店電話
13. **Opening Hours (English)**｜例如 10:00 - 22:00
14. **Opening Hours (Local Language)**｜例如 10:00 - 22:00（星期一至日）
15. **Status**｜Active

## 總結

- **總必填欄位**：59個（Company: 3 + Group: 11 + Brand: 30 + Shop: 15）
- **預計時間**：首個品牌首家分店約 57 分鐘，後續分店每個約 10 分鐘
- **重要**：必須按順序建立，每層 Status 設為 Active 才會顯示

如需詳細說明，請查詢各層級的「建立 XXX 有咩必填欄位？」問題。