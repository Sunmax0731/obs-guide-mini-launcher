export function buildObsGuide(report) {
  return {
    product: "obs-guide-mini-launcher",
    guide: "操作ガイド・ミニランチャー",
    manualTestStatus: "手動テスト未実施",
    actions: report.scenarios.map((scenario) => ({ id: scenario.id, summary: scenario.summary }))
  };
}
