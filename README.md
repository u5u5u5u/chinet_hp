> [!IMPORTANT]
>
> - ブランチを切ろう
> - わからなかったら質問しよう

# 環境構築 & 実行

<p>※ Git・GitHubの環境構築後</p>

```
$ git clone git@github.com:u5u5u5u/chinet_hp.git   // クローン
$ cd chinet_hp   // ディレクトリ移動
$ npm run dev    // 実行
```

## VS Code 拡張機能

### 必須

- Prettier - Code formatter
- ESLint

### 推奨

- Auto Rename Tag

# git 操作

### 基本操作

```
$ git switch develop  // developブランチに移動
$ git pull origin develop
$ git switch -c ブランチ名(以下の規則を参照)  // ブランチを作成・移動
// 変更
$ git add .
$ git commit -m "コメント(以下の規則を参照)"
$ git push origin ブランチ名
```

### [git command cheat sheet](https://broken-addition-f6a.notion.site/git-command-cheat-sheet-289ace2686e742f5bfe66560b9296074?pvs=4)

# 規則

### ブランチ名

`feature/#{issue 番号}_名前_やること(英語で)`

※`{}`は不要\
※具体例: `feature/#3_u5u5u5u_add_search-button`

### コミットメッセージ

`[接頭辞]変更点(日本語でいいよ)#{issue 番号}`

※`{}`は不要\
※具体例: `[add]検索ボタン追加#3`

| 接頭辞 | 意味     |
| ------ | -------- |
| add    | 新規追加 |
| change | 仕様変更 |
| update | 機能修正 |
| fix    | バグ修正 |
| remove | 削除     |

### クラス名

参考資料\
https://github.com/manabuyasuda/coding-guidelines/blob/master/css/css-naming-list.md

### プルリクエスト

フォーマットに従って入力

### その他

- コーディングを始めるときは、初めに以下のコマンドを打つ
  ```
  $ git pull origin develop
  $ npm i
  ```

# メンバー

自分で名前を追加

- yuuki
- koizumi
- U5
