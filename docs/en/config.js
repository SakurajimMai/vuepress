const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
module.exports = {
    // lang: 'zh-CN',
    // title: '你好， VuePress ！',
    // description: '这是我的第一个 VuePress 站点',
    head: [['link', { rel: 'icon', href: '/images/2.png' }]],
    theme: defaultTheme({
      // locales: {
      //   '/': {
      //     selectLanguageName: '简体中文',
      //     lang: 'zh-CN',
      //     title: '你好， VuePress ！',
      //     description: '这是我的第一个 VuePress 站点',
      //   },
      //   '/en/': {
      //     selectLanguageName: 'English',
      //     lang: 'en-US',
      //     title: 'VuePress',
      //     description: 'Vue-powered Static Site Generator',
      //   },
      // },
      lastUpdated: '上次更新',
      logo: '/images/2.png',
      navbar: [
        // NavbarItem
        {
          text: 'Go',
          link: '/code/Go.md',
        },
        // NavbarGroup
        {
          text: 'Group',
          children: ['/docs/foo.md', '/group/bar.md'],
        },
        {
          text: '选择语言',
          children: [
            {
              text: '简体中文',
              link: '/',
              // 该元素将一直处于激活状态
              activeMatch: '/',
            },
            {
              text: 'English',
              link: '/en',
              activeMatch: '/en',
            },
          ],
        },
        {
          text: 'Github',
          link: 'https://github.com/SakurajimMai',
        },
      ],
    }),
    plugins: [
      searchPlugin({
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      }),
    ],
  }