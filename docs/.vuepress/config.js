const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
module.exports = {
    lang: 'zh-CN',
    title: 'Coding',
    description: 'Notes for code learning',
    head: [['link', { rel: 'icon', href: '/images/2.png' }]],
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'Coding',
        description: 'Notes for code learning',
      },
      '/en/': {
        lang: 'en-US',
        title: 'Coding',
        description: 'Notes for code learning',
      },
    },
    theme: defaultTheme({
      // 侧边栏
      sidebar: {
        '/code/': [
          {
            text: '前端语言',
            collapsible: true,
            children: ['/code/front/HTML5.md','/code/front/css.md'],
          },
          {
            text: '后端语言',
            collapsible: true,
            children: ['/code/back/Go.md', '/code/back/Python.md'],
          },
        ],
      },
      locales: {
        '/': {
          selectLanguageName: '简体中文',
        },
        '/en/': {
          selectLanguageName: 'English',
        },
      },
      lastUpdated: 'true',
      lastUpdatedText: 'Last Updated',
      contributors: 'true',
      contributorsText: 'Contributors',
      editLink: 'true',
      editLinkText: 'Edit this page on GitHub',
      docsRepo: 'https://github.com/SakurajimMai/vuepress',
      docsBranch: 'master',
      docsDir: 'docs',
      editLinkPattern: ':repo/edit/:branch/:path',
      //自动生成侧边栏
      // sidebar: 'auto',
      logo: '/images/2.png',
      // 导航栏
      navbar: [
        // NavbarItem
        {
          text: '指南',
          link: '/guide/README.md',
        },
        // NavbarGroup
        {
          text: '前端语言',
          children: ['/code/front/HTML5.md','/code/front/css.md'],
        },
        {
          text: '后端语言',
          children: ['/code/back/Go.md', '/code/back/Python.md'],
        },
        {
          text: 'Code',
          children: [
            {
              text: '前端语言',
              children: ['/code/front/HTML5.md','/code/front/css.md'],
            },
            {
              text: '后端语言',
              children: ['/code/back/Go.md', '/code/back/Python.md'],
            },
          ],
        },
        {
          text: 'Github',
          link: 'https://github.com/SakurajimMai',
        },
      ],
    }),
    // 插件
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
  