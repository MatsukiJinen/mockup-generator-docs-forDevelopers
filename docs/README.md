# 開発者向けドキュメント
MockUp Automatic Generation Siteの開発者向けドキュメントです。

## 操作の様子

ランダム生成
<iframe width="560" height="315" src="https://www.youtube.com/embed/UmaQF1v9My4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

マニュアル生成
<iframe width="560" height="315" src="https://www.youtube.com/embed/P3uG6HYEj2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## システム構成
![システム構成](https://scontent.ffuk4-1.fna.fbcdn.net/v/t1.15752-9/48355722_492679531222914_332665459256066048_n.png?_nc_cat=109&_nc_ht=scontent.ffuk4-1.fna&oh=f672350cb04a7c02943e1932ac200b94&oe=5C9C8830)

- フロントエンド
  - Vue.js 2.5.7


- バックエンド
  - Laravel 5.6.26
  - python3.7.1 (HTML生成スクリプトに利用)


- サーバー
  - nginx 1.12 (Web)
  - Mysql5.7 (Database)


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

https://mockup.takeys.link/
にアクセスする


