# Elementdraggable.vue

## ファイル
components/selectableComponents/Elementdraggable.vue

## 外部components
- vuedraggable[GitHub](https://github.com/SortableJS/Vue.Draggable)

## components
- 'draggable':draggable

## props
コンポーネントで利用しているプロパティ（props）の詳細説明

### sectionList
生成するファイルの表示ブロックを管理する配列

### labels
表示ブロックを管理

## data
コンポーネントで利用しているデータ(data)の詳細説明

### imageStyle
画像のcssプロパティ

## methods
コンポーネントで利用しているメソッドの詳細説明

### applyBottomStyle
最下部の表示cssプロパティ

### currentSelectoin
表示ブロックにIDを付与

### handleSelectedImage
表示ブロックをリストから追加

### disableModal
表示ブロックリストを閉じる

### enableModal
表示ブロックリストを表示する

### chunk
表示ブロックリストを3列で表示しやすいように配列を分割する

### removeDomain
表示ブロックを削除

### inputChanged
表示ブロックの並べ替えをするメソッド

### getComponentData
表示ブロックを並べ替えるためのコンポーネントを取得する