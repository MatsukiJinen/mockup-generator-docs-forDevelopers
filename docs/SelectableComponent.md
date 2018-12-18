# SelectableComponent.vue

## ファイル

components/SelectableComponent.vue

## 外部components
- chance
- uuid [GitHub](https://github.com/VitorLuizC/vue-uuid)

## 自作ライブラリ
- [utils.js](/util)

## 自作components
- Elementdraggable
- SectionAdd
- NaviHeader

## components
- 'el-draggable':Elementdraggable,
- 'section-app':SectionAdd,
- 'navi-header':NaviHeader

## mounted
sectionListに空配列を代入して初期化

### loadStorage
Local Storageに保存されている値を読み出す

### sectionList
生成するファイルの表示ブロックを管理する配列

## watch

### sectionList
生成するファイルの表示ブロックに変化があった場合（ドラックアンドドロップの並び替えなど）に整合性を持たせるための処理

## data
コンポーネントで利用しているデータ(data)の詳細説明

### sectionList
表示ブロックの配列

### allList
表示ブロックのアイテム数を管理

### uuid
生成されるファイルに割り当てるID

### creatingFile
ファイル生成中か否かの論理値

### maxFiles
ファイル生成の最大個数

### progressValue
ファイル生成のプログレスバーを管理する

### tableData
生成されるファイルを管理する配列
現在は生成されるファイルは一件のみ。今後の機能拡張に備えて配列で保持しておく

### labels
表示ブロックを管理

### options
select要素のoption要素に表示項目を管理

### form1
表示ブロックを管理するフォーム

## methods
コンポーネントで利用しているメソッドの詳細説明

### loadStorage
Local Storageに保存されている値を読み出す

### storeStorage
Local Storageに値を保存する

### updateProgress
ファイル生成中のプログレスバーを更新する

### submitForm
ファイルの自動生成を実行する