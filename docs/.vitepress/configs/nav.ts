import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '首页', link: '/' },
    { text: '计算机基础', link: '/computer/index' },
    { text: '前端基础', link: '/fe-base/index' },
    { text: '源码阅读', link: '/source-code/index' },
    { text: '实践经验', link: '/note/index' },
    { text: '开源项目', link: '/open-source-projects/index' },
    { text: '面试宝典', link: '/interview/index' },
    { text: '大侠', link: '/my/index' }
]
