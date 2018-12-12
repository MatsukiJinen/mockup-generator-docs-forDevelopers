/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  editLinkBase: 'https://github.com/USER/REPO/blob/master/docs',
  sidebar: [
    {
      links: [
        {
          title: 'ホーム',
          link: '/'
        },
        {
          title: 'ランダム',
          link: '/random'
        },
        {
          title: 'マニュアル',
          link: '/manual'
        },
        {
          title: '表示ブロック詳細',
          link: '/block'
        }
      ]
    }
  ]
})
