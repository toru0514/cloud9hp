# Cloud9 Homepage

ブランドの世界観を守りつつ `/jp` と `/en` にページを分離するための構想・方針です。現時点では実装に手を付けず、作業フローを固めることを目的に整理しています。

## 現状の整理

- Next.js App Router 構成で、ルートは `src/app/page.tsx` と `src/app/(main)/*` の静的セクションで構成されている。
- UI テキストは `src/components/**` と `src/data/*.ts` にベタ書き状態。長文コピー（例: `components/home/AboutUs.tsx`, `components/layout/Header.tsx`）やデータ (`data/featureData.ts` 等) がすべて日本語。
- グローバルな言語設定は `src/app/layout.tsx` の `<html lang="jp">` しかなく、Next.js の i18n 設定は未導入。

## ゴール

1. `/jp/...` `/en/...` のサブパスで同一情報を日英切り替え表示。
2. デフォルトは `/jp` にリダイレクトしつつ、今後の追加言語にも拡張しやすい設計。
3. 翻訳テキストをコンポーネントから分離し、保守しやすい辞書データに集約。
4. ルーティング／メタデータ／ナビゲーションが言語依存の状態を持てるようにする。

## 実現方針

### 1. ルーティング & Next.js 設定

- `next.config.ts` に `i18n: { defaultLocale: "jp", locales: ["jp", "en"] }` を追加し、Next.js 公式のロケールリライトルールを利用。
- `src/app/[locale]/layout.tsx` と `src/app/[locale]/page.tsx` を新設し、既存のページコンポーネント（`Header`, `Footer`, `app/(main)` 配下）を言語セグメント下へ移動。  
  - 共通レイアウト処理は `app/[locale]/layout.tsx` にまとめ、`locale` を `<html lang={locale}>` やメタデータに反映。
  - 既存の `app/(main)` は `app/[locale]/(main)` として再利用し、重複を避ける。
- ルート `/` へアクセスされた際に `/jp` へリダイレクトする `middleware.ts` を設置（Accept-Language 判定を入れる場合は後続検討）。
- 既存の詳細ページ（`/about`, `/features` 等）がある場合も `/[locale]/about` のように言語セグメントに含める。

### 2. 翻訳辞書の管理

- 翻訳は外部で用意したファイル（例: `translations/jp/home.json`, `translations/en/home.json`）を情報源にする。  
  - リポジトリ内の `src/locales/{jp,en}/` に同期用の JSON/TS を配置し、外部ファイル→リポジトリの取り込みフローを GitHub Actions か手動スクリプトで用意。  
  - Pull Request ごとに翻訳ファイルの更新履歴が追えるよう、原本のバージョン情報を README やコミットメッセージに明記。
- 大量の文章を持つセクション (`featureData`, `reviewData` 等) は JSON/TS でフィールドを日英ごとに持つ形に改修。画像やリンク URL など言語非依存のデータは共有し、テキストのみロケール依存の構造にする。
- `src/lib/i18n.ts` のようなヘルパーを作り、`getDictionary(locale)` でロケール辞書を取得。サーバーコンポーネント内では `async` に読み込み、クライアント側には `LocaleProvider` + React context で供給。
- 一部クライアントコンポーネント（`HamburgerMenu` 等）で辞書を使うため、`useLocaleStrings()` カスタムフックを提供。

### 3. コンポーネントの改修戦略

- `Header`, `Footer`, `SideMenu`, `HamburgerMenu`, `SectionTitle`, `Button` 等、文字列を直接含む UI は辞書から取得するように順次刷新。
- `src/data` 配下の配列を  
  - 言語共通データ + `copy.jp` / `copy.en` などのプロパティへ再構成  
  - もしくは `featureData` のようなデータを `locales/jp/features.ts` / `locales/en/features.ts` として分割。
- リンク生成時は `next/link` で `href={{ pathname: "/[locale]/about", params: { locale } }}` のように言語セグメントを意識。共通ナビ情報を `navigationLinks` 辞書で管理し、ループで描画。
- `RootLayout` で `metadata` を `generateMetadata` と `locale` ごとのタイトル/description を返すよう更新。

### 4. 言語切替 UI & 状態

- `Header` もしくは `Footer` に言語切替用トグルを設置し、現在のロケールを認識させる。  
  - `usePathname` で現在URLを把握し、クリックで `/en/...` `/jp/...` に置換遷移させるユーティリティを実装。
- SEO のため `hreflang` リンクや `alternate` メタを `generateMetadata` で出力。

### 5. テスト・検証
- まずはスコープを絞って（例: トップページの「OnlineShop」「Product」セクションのみ）日英切替を試し、辞書構造や UI の挙動を検証。問題が無ければ残りのセクションへトレース。
- 主要ページ（トップ + `(main)` 配下各セクション）で日英のスクリーンショット比較を行い、文字詰まりやレスポンシブ崩れを確認。
- `npm run lint` `npm run test`（必要に応じて追加）を言語ごとに実行。`playwright` 等の E2E を導入する場合は `/[locale]` をパラメタライズ。
- CI/CD（Vercel 想定）で `next build` が言語追加後も問題ないことを確認。ISR/SSG の場合は `generateStaticParams` にロケールを渡す。

## 完成形のイメージ

- **URL パターン**  
  - `/jp`, `/jp/about`, `/jp/contact` … 日本語ページ。  
  - `/en`, `/en/about`, `/en/contact` … 英語ページ。  
  - `/` へアクセスすると `/jp` にリダイレクト。言語切替 UI からは現在ページのセグメントだけを差し替えて遷移。
- **ディレクトリ構成（概略）**

```
src/
  app/
    [locale]/
      layout.tsx        // HTML lang や Provider セットアップ
      page.tsx          // ホーム共通構造、辞書データ注入
      (main)/*          // 既存セクションをそのまま移動
  locales/
    jp/
      common.json
      home.json
    en/
      common.json
      home.json
translations/
  jp/*.json             // 外部で作成する翻訳原本
  en/*.json
src/lib/i18n.ts         // getDictionary(locale) などのヘルパー
```

- **運用フロー**  
  1. 翻訳原本（`translations/{locale}`）を更新。  
  2. スクリプトまたは手動で `src/locales/{locale}` に同期。  
  3. 各コンポーネントが `getDictionary(locale)` から文字列を取得し表示。  
  4. PR では元ファイルと同期ファイルの差分を確認して言語ごとの差異をレビュー。
- **UI 体験**  
  - ヘッダー右上に「JP / EN」トグルを配置。  
  - トグル操作時は現在ページの URL セグメントだけが切り替わるため、ユーザーは同じコンテンツを言語違いで素早く比較できる。  
  - メタデータもロケールごとに更新され、SNS シェアや SEO で適切に言語が伝わる。

## 実装フロー案

1. **Foundation**
   - ルーティング再編 (`app/[locale]` 生成、既存ページの移動) と `next.config.ts` の i18n 設定。
   - `middleware.ts` による `/ -> /jp` リダイレクト。
2. **Localization Infrastructure**
   - `src/locales` と `getDictionary` を整備。  
   - サーバー/クライアントで辞書を受け渡す Context/Provider を構築。
3. **コンテンツ移行**
   - `src/data` の配列と UI テキストを辞書化しつつ、英訳を格納。  
   - 翻訳対象は `Header`, `Home` セクション, 各詳細ページの順で優先度付け。
4. **Language Switch UI & Metadata**
   - 言語トグル、`hreflang`, `alternate` メタ、`generateMetadata` を実装。
5. **QA & Docs**
   - 動作確認、アクセシビリティ/SEOチェック、README や Notion などへの手順共有。

## リスク・検討事項

- 英訳テキストの確定スケジュール。暫定でプレースホルダーを入れるのか、翻訳が揃うまで日本語のみで公開するのかを決める必要あり。
- 静的エクスポートではロケール数分のビルド時間が増えるため、Vercel 対応状況を事前確認。
- 多言語化後の運用（新規セクション追加時に翻訳テンプレートへ自動で抜け漏れが無い仕組み）も決めると保守性が上がる。

以上の段取りで `/jp` と `/en` の並行運用を進めるのがスムーズです。
