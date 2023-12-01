import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/computer/': [
        {
            text: '计算机基础',
            link:"/computer/index",
            items: [
                {
                    text: '算法',
                    link:"/algorithm/index"
                }
            ]
        }
    ],
    '/fe-base/': [
        {
            text: '前端基础',
            // collapsed: false,
            link:"/fe-base/index",
            items: []
        }
    ],
    '/source-code/': [
        {
            text: '源码阅读',
            link:"/source-code/index",
            items:[]
        }
    ],
    '/open-source-projects/': [
        {
            text: '开源项目',
            link:"/open-source-projects/index",
            items:[]
        }
    ],
    '/note/': [
        {
            text: '实践经验',
            link:"/note/index",
            items:[
                {
                    text: '从零开始搭建一个个人博客',
                    link:"/note/vuePress-blog"
                },
                {
                    text: 'vitePress快速搭建个人博客',
                    link:"/note/vitePress-blog/index",
                    items: [
                        { text: '集成评论功能', link: '/note/vitePress-blog/comment' },
                        { text: 'GitHub Actions实现自动部署', link: '/note/vitePress-blog/deploy' }
                    ]
                },
                {
                    text: 'axios + cheerio + node-xlsx 爬取并导出到excel表格',
                    link:"/note/crawler"
                },
                {
                    text: 'git commit规范',
                    link:"/note/gitCommit"
                },
                {
                    text: 'nvm的安装和使用',
                    link:"/note/nvm"
                },
                {
                    text: 'vscode 代码格式化',
                    link:"/note/vscode"
                },
                {
                    text: '埋点',
                    link:"/note/buryingPoint"
                },
                {
                    text: '第三方登录',
                    link:"/note/thirdPartyLogin"
                }
            ],
        },
        {
            text: '主流框架',
            link:"/note/framework/index"
        }
    ],
    '/interview/': [
        {
            text: '面试宝典',
            link:"/interview/index",
            items:[]
        }
    ],
    '/my/': [
        {
            text: '大侠',
            link:"/my/index",
            items:[
                {
                    text: '数学',
                    link:"/maths/index"
                }, 
                 {
                    text: '文学',
                    link:"/literature/index"
                }
            ],
        }
    ]
}