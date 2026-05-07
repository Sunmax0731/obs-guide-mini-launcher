# 操作ガイド・ミニランチャー

obs-guide-mini-launcher は、OBSStreaming 領域の NON PICKUP Rank 14 アイデアをクローズドアルファとして実装したローカルファーストの検証ツールです。

## 目的

多機能化すると日常操作と危険操作の境界が分かりにくい。

このリポジトリでは、頻出操作、学習モード、ショートカット、セーフモードをまとめる。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。 ための入力正規化、代表シナリオ検証、レビュー判断、レポート出力、導入・手動テスト手順、QCDS 証跡を一式で管理します。

## クローズドアルファ範囲

- 中核ロジック: `src/core`
- 入力検証: `src/validators`
- レポート生成: `src/report`
- 判断モデル: `src/review-model`
- CLI: `src/cli`
- ホスト/UI adapter: `src/host-adapter/obs-host-adapter.js`
- 代表サンプル: `samples/representative-suite.json`

## 実行

```powershell
npm test
npm run validate
npm run build
```

## 公開位置づけ

- Version: v0.1.0-alpha.1
- GitHub prerelease: closed alpha
- 手動テスト: Codex 側では未実施。ユーザー実施用の手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記録。
- 主な公開先: GitHub Release / BOOTH

## 差別化

配信前確認、録画証跡、音声・画面状態を日本語UIで一括管理する。 頻出操作だけを前面に出し、危険操作は影響範囲を確認してから実行する。
