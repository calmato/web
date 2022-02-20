## System Overview

塾のシフトをより効率よく、分かりやすく管理することができるようになったシステム。
以下の機能を備えている。

[講師側管理者]
- ログイン
- シフト日の確認
- シフト希望
- シフト作成
- ユーザー管理（講師/生徒)
- お知らせ機能
- メールアドレス変更
- パスワード変更
- 開講科目設定
- 定休日/コマ/ブース 設定
- サインアウト

[講師側]
- ログイン
- シフト日の確認
- シフト希望
- ユーザー一覧閲覧（講師/生徒)
- お知らせ機能
- メールアドレス変更
- パスワード変更
- 開講科目閲覧
- 定休日/コマ/ブース 閲覧
- サインアウト

[生徒側]
- ログイン
- 授業日の確認
- 授業希望
- メールアドレス変更
- パスワード変更
- 授業希望のカスタム設定
- サインアウト

2022年2月リリース。現在国分寺の塾に導入済み。 
他の塾へのシステムの導入、システムの拡張を考えている。

## Technology Stack

| Category       | Technology Stack                              |
| -------------- | --------------------------------------------- |
| Language       | TypeScript(Vue.js, Nuxt.js), Golang|
| Middleware     | MySQL, Firebase, SendGrid                     |
| Infrastructure | Kubernetes (GCP: Google Cloud Engine), gRPC   |