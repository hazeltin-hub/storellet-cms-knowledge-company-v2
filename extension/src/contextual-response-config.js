// 情境化精簡回應配置
const CONTEXTUAL_RESPONSE_CONFIG = {
  // 啟用情境化精簡模式
  enabled: true,

  // 回應風格設定
  responseStyle: {
    // 初始回答長度限制
    maxLength: 300,

    // 是否分層顯示
    layered: true,

    // 是否顯示完整內容選項
    showFullDetailsOption: true
  },

  // 問診問題配置
  diagnosticQuestions: {
    // 最大問診問題數量
    maxQuestions: 3,

    // 問題間隔（毫秒）
    questionInterval: 1000
  },

  // 分層內容結構
  contentLayers: {
    // 第一層：核心答案（最多2-3句話）
    layer1: {
      enabled: true,
      maxLength: 150,
      includeExamples: false
    },

    // 第二層：關鍵步驟（最多3-5個要點）
    layer2: {
      enabled: true,
      maxPoints: 5,
      bulletPoints: true
    },

    // 第三層：詳細說明（按需提供）
    layer3: {
      enabled: true,
      onDemand: true,
      fullContent: true
    }
  },

  // 工作流程情境感知
  workflowContext: {
    // 檢測用戶當前狀態
    detectCurrentState: true,

    // 只顯示下一步
    showNextStepOnly: true,

    // 顯示進度條
    showProgressBar: true,

    // 簡化步驟描述
    simplifySteps: true
  },

  // 智能內容提取
  smartExtraction: {
    // 優先級規則
    priority: {
      // 當前狀態相關資訊 > 常見問題 > 詳細說明
      currentState: 1,
      commonIssues: 2,
      detailedInfo: 3,
      examples: 4
    },

    // 排除的內容類型
    excludeContent: [
      'redundant_explanations',
      'overly_technical_details',
      'historical_notes'
    ]
  }
};

// 導出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONTEXTUAL_RESPONSE_CONFIG;
}