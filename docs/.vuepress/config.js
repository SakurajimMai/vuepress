const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
module.exports = {
    lang: 'zh-CN',
    title: 'Coding',
    description: '这是我的第一个 VuePress 站点',
    head: [['link', { rel: 'icon', href: '/images/2.png' }]],
    theme: defaultTheme({
      lastUpdated: 'true',
      lastUpdatedText: '上次更新',
      contributors: 'true',
      contributorsText: 'Contributors',
      //自动生成侧边栏
      sidebar: 'auto',
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
        // 语言设置
        // {
        //   text: '选择语言',
        //   children: [
        //     {
        //       text: '简体中文',
        //       link: '/',
        //       // 该元素将一直处于激活状态
        //       activeMatch: '/',
        //     },
        //     {
        //       text: 'English',
        //       link: '/en',
        //       activeMatch: '/en',
        //     },
        //   ],
        // },
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