const data = [
  {
    date: "2020-06-04",
    title: "v0.5.1をリリースしました。",
    markdown: [
      "## v0.5.1リリース",
      "主な変更点は以下です。",
      "  - ユーザ系",
      "    - プロフィールページに「注文履歴」「サインアウト」「飲食店としてサインイン」のリンクを追加",
      "    - プロフィールページから友達設定をした直後に表示がアップデートされない問題を解決",
      "    - プロフィールページに「アカウント削除」を追加",
      "    - LINEとの連携済みの人に連携ボタンが表示されてしまうバグを修正",
      "    - 入店・退店記録のページで、undefined になってしまうバグを修正",
      "    - オーダーページで、ログインしていない状態で見たときにログイン画面を出すように修正",
      "    - クレジットカード番号をstripe側に記録しておき、２度目からは入力しなくて良いように変更",
      "    - 特定商取引のリンク追加",
      "    - 心付けのオプションとして５％を追加",
      "    - CVCの説明を追加",
      "  - 管理系",
      "    - 自分の店への入店・退店情報を見ることが出来るようにしました（匿名です）",
      "    - 「受け取り時の支払い」を許すかどうかを指定できるようにしました。",
      "    - PickUpの時間を変更可能に。",
      "    - 特定商取引の表記の為に、代表者氏名の入力を必須に",
      "    - オーダーリストページに、「音テスト」ボタンの追加",
      "  - 共通",
      "    - ホームページから、飲食店向けマニュアル、お客様向けマニュアルへのリンクを追加",
      "    - メニューにプロフィールページへのリンクを追加",
      "    - メニューから「サインアウト」「注文履歴」の削除"
    ].join("\n")


  },
  {
    date: "2020-05-28",
    title: "v0.4.2をリリースしました。",
    markdown: "#hello",
  },
  {
    date: "2020-05-23",
    title: "v0.4.0をリリースしました。",
    markdown: "#hello",
  },
  {
    date: "2020-05-14",
    title: "v0.3.5をリリースしました。",
    markdown: "#hello",
  },
  {
    date: "2020-05-11",
    title: "v0.3.4をリリースしました。",
    markdown: "#hello",
  },
];
export default data;