import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'docs-web',
  hash: true,
  locales: [['en-US', 'English'], ['zh-CN', '中文']],//设置中英文显示
  mode: 'site',
  base: '/dumi-test',
  publicPath: '/dumi-test/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  nodeModulesTransform: {
    type: 'none',
  },
  navs: {
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/umijs/dumi' },
      { title: 'Changelog', path: 'https://github.com/umijs/dumi/releases' },
      // {
      //   title: '我有二级导航',
      //   path: '链接是可选的',
      //   children: [
      //     { title: '第一项', path: 'https://d.umijs.org' },
      //     { title: '第二项', path: 'https://d.umijs.org' },
      //   ],
      // },
    ],
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/umijs/dumi' },
      { title: '更新日志', path: 'https://github.com/umijs/dumi/releases' },
      // {
      //   title: '我有二级导航',
      //   path: '链接是可选的',
      //   children: [
      //     { title: '第一项', path: 'https://d.umijs.org' },
      //     { title: '第二项', path: 'https://d.umijs.org' },
      //   ],
      // },
    ],
  },
  // menus: {
  //   "*": [
  //     {
  //       path: "/guide/story",
  //       title: "introduction",
  //       meta: {}
  //     }
  //   ],
  //   '/guide': [
  //     {
  //       title: 'Introduction',
  //       path: '/guide/story',
  //       children: [
  //         { title: 'story', path: '/guide/story' },
  //         { title: 'history', path: '/guide/history' }
  //       ],
  //     },
  //     {
  //       title: 'Process',
  //       path: '/guide/process',
  //     },
  //     {
  //       title: 'Support',
  //       path: '/guide/support',
  //     },
  //   ],
  //   "/zh-CN/*": [
  //     {
  //       path: "/zh-CN/guide/story",
  //       title: "简介",
  //       meta: {}
  //     }
  //   ],
  //   '/zh-CN/guide': [
  //     {
  //       title: '简介',
  //       path: '/zh-CN/guide/story',
  //       children: [
  //         { title: '来源', path: '/zh-CN/guide/story' },
  //         { title: '历史', path: '/zh-CN/guide/history' }
  //       ],
  //     },
  //     {
  //       title: '进程',
  //       path: '/zh-CN/guide/process',
  //     },
  //     {
  //       title: '支持',
  //       path: '/zh-CN/guide/support',
  //     },
  //   ],
  // },
});
