# Introduction to MockUp Automatic Generation Site
MockUp Automatic Generation Siteは、プログラマーのためにモックアップのHTMLファイルを自動生成するためのサイトです。

# How does it work
生成されるHTMLファイルはランダム生成とマニュアル生成の２パターンから選ぶことができます。モックアップとして複数のファイルが必要な場合はランダム生成。具体的にデザインの決まったHTMLファイルを生成したい場合はマニュアル作成をお選びください。

- [ランダム](/random)
- [マニュアル](/manual)
- [表示ブロックの詳細](/block)

# Quick　Start

## 初期設定

```bash
git clone https://github.com/MatsukiJinen/mockup-generator.git

cd mockup-generator
composer install
npm install
npm run watch

# 別のウィンドウを起動
php artisan queue:listen
```

## 動作確認

http://mockup-generator.test
にアクセスする


