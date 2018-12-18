# ElementFormItem.vue

## ファイル
components/randomComponents/ElementFormItem.vue

## 外部コンポーネント
- uuid [GitHub](https://github.com/VitorLuizC/vue-uuid)

## 自作ライブラリ
- [utils.js](/util)

## props 
コンポーネントで利用しているプロパティ(props)の詳細説明

### maxFiles
ファイル生成の最大個数

### form1
表示ブロックを管理するフォーム

### flag
ヘッダー・フッダーを生成するか否かの論理値

### refForm
親のform1フォームを取得するためのcallback関数
直接参照すると、マウントされるタイミングでundefinedエラーが発生するためcallback関数としてform1のオブジェクトを渡すために利用するメソッド

## data
コンポーネントで利用しているデータ(data)の詳細説明

### progressValue
ファイル生成のプログレスバーを管理する

### creatingFile
ファイル生成中か否かの論理値

### numbers
生成されるファイルのラベル名の接尾子として利用するための連番

### tableData
生成されるファイルを管理する配列

### uuid
生成されるファイルに割り当てるID

### methods
コンポーネントで利用しているメソッドの詳細説明

### enableEdit
生成されたファイル名の編集モードを有効にする

### onEditLabel
生成されたファイル名のラベルを編集する

### onDeleteFile
ファイルを削除

### loadStorage
Local Storageに保存されている値を読み出す

### storeStorage
Local Storageに値を保存する

### updateProgress
ファイル生成中のプログレスバーを更新する

### submitForm
ファイルの自動生成を実行する
