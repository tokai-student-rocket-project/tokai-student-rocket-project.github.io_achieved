# 環境構築

## Visual Studio Codeを準備する

### Visual Studio Codeをインストールする

[ここ](https://code.visualstudio.com/download)にアクセスしてインストールしてください。

### 拡張機能をインストールする

以下の拡張機能をインストールしてください。
- MS-CEINTL.vscode-language-pack-ja
- mhutchie.git-graph
- dbaeumer.vscode-eslint
- stylelint.vscode-stylelint
- esbenp.prettier-vscode

以下のコマンドを実行してインストールすることもできます。

```shell
# shell

$ code --install-extensions MS-CEINTL.vscode-language-pack-ja
$ code --install-extensions mhutchie.git-graph
$ code --install-extensions dbaeumer.vscode-eslint
$ code --install-extensions stylelint.vscode-stylelint
$ code --install-extensions esbenp.prettier-vscode
```

## Githubを準備する

### Githubアカウントを作成する

[ここ](https://github.com/signup)にアクセスしてアカウントを作成してください。

アカウントを作成したら、Slackのhomepageチャンネルでユーザー名を共有してください。担当者が権限を追加します。

## Gitを準備する

### Gitをインストールする

#### Windows

[ここ](https://git-scm.com/download/win)にアクセスしてインストールしてください。

Windows版のGitにはGit Bashが同封されています。コマンドプロンプトの代わりにGit Bashを使用することをおすすめします。

#### Mac

以下のコマンドを実行してインストールしてください。

```shell
# shell

$ brew install git
```

### Gitの初期設定をする

以下のコマンドを実行してGitの初期設定をしてください。 ユーザー名とメールアドレスはGithubアカウントのものを使用してください。

```shell
# shell

$ git config --global user.name "ユーザー名"
$ git config --global user.email "メールアドレス"
```

以下のコマンドを実行してGitの改行コードを設定してください。

```shell
# shell

$ git config --global core.autocrlf input
```
