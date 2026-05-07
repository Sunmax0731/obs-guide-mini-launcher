export const productConfig = {
  "product": {
    "rank": 14,
    "tier": "P0",
    "score": 67,
    "domain": "OBSStreaming",
    "ideaNo": 6,
    "ideaName": "操作ガイド・ミニランチャー",
    "repository": "obs-guide-mini-launcher",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "配信前の操作導線を小さく商品化でき、OBS診断ツールの補助として使える。",
    "surface": "OBS 運用向けのローカル CLI、JSON カタログ、手順ランチャー adapter",
    "integration": "",
    "overview": "頻出操作、学習モード、ショートカット、セーフモードをまとめる。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
    "problem": "多機能化すると日常操作と危険操作の境界が分かりにくい。",
    "differentiation": "配信前確認、録画証跡、音声・画面状態を日本語UIで一括管理する。 頻出操作だけを前面に出し、危険操作は影響範囲を確認してから実行する。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
