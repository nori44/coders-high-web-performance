# サイト高速化入門

2022.09.16の「Coder's High 2022 (Part 1)」の「サイト高速化入門」で配布したデータです。

## ディレクトリ構成
```
coders-high-web-performance/
├── fast
│   ├── src/
│   │   ├── scss
│   │   ├── js
│   │   └── img
│   ├── dist/
│   │   ├── css
│   │   ├── js
│   │   └── img
│   ├── imagemin.mjs
│   ├── convertToWebp.ts
│   └── package.json
├── slow
└── fonts
```
## インストール
`$ cd fast`  
**fast** ディレクトリに移動します。

`$ npm install`  
パッケージをインストールします。

## 実行
`$ npm run watch:all`  
以下を実行してくれます。
- src/img ディレクトリに入れた画像を、dist/img へ圧縮とWebP変換したかたちで出力してくれます
- src/scss ディレクトリから、dist/css ディレクトリへトランスパイル
- src/js のJSファイルを、dist/js へ圧縮して出力

## ファイルとディレクトリ構成の補足
- **imagemin.mjs** 圧縮の設定ファイルです。
- **convertToWebp.ts** WebP変換用の設定ファイルです。
- **fonts/** サブセット前のNoto Sans JPファイルとサブセット化後のファイル、原稿テキストが入っています。