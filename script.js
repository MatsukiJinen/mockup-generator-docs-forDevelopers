/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: '/docs',
  editLinkBase: 'https://github.com/MatsukiJinen/mockup-generator-dev-docs/blob/master',
  sidebar: [
    {
      links: [
        {
          title: 'ホーム',
          link: '/'
        },
        {
          title: 'コンポーネント',
          link: '/component'
        }
      ]
    }
  ]
})
