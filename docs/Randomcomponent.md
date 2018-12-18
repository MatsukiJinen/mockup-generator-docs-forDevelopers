# RandomComonent.vue

## ファイル
components/RandomComponent.vue

## mounted
処理なし

## 外部components
- vue-gallery [GitHub](https://github.com/RobinCK/vue-gallery)

## 自作components
- File
- Header
- ElementDraggable
- Footer
- randomComp

## components
- 'gallery': VueGallery
- 'file-app':File
- 'header-app':Header
- 'el-draggable':ElementDraggable
- 'footer-app':Footer
- 'el-form-item':ElementFormItem
- 'navi-header':NaviHeader

## data
コンポーネントで利用しているデータ(data)の詳細説明

### allList
表示ブロックのアイテム数を管理

### maxFiles
ファイル生成の最大個数

### flag
ヘッダー・フッダーを生成するか否かの論理値

### options
select要素のoption要素に表示項目を管理

### form1
表示ブロックを管理するフォーム

### file_numbers
生成するファイル数を管理

## methods
コンポーネントで利用しているメソッドの詳細説明

### getForm
form1のオブジェクトを取得する
直接参照すると、マウントされるタイミングでundefinedエラーが発生するためcallback関数としてform1のオブジェクトを渡すために利用するメソッド