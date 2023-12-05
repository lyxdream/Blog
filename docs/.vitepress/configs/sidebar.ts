import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/computer/': [
        {
            text: '计算机基础',
            link: '/computer/index',
            collapsed: false,
            items: [
                {
                    text: '算法',
                    link: '/computer/algorithm/index',
                    items: [
                        {
                            text: '树',
                            link: '/computer/algorithm/tree'
                        },
                        {
                            text: '链表',
                            link: '/computer/algorithm/LinkedList'
                        }
                    ]
                },
                {
                    text: '设计模式',
                    link: '/computer/designPattern/index',
                    items: []
                }
            ]
        }
    ],
    '/fe-base/': [
        {
            text: '前端基础',
            // collapsed: false,
            link: '/fe-base/index',
            items: []
        },
        {
            text: 'html/css',
            collapsed: false,
            items: [
                {
                    text: 'css',
                    items: [
                        {
                            text: 'margin折叠',
                            link: '/fe-base/css/margin'
                        },
                        {
                            text: 'css兼容问题',
                            link: '/fe-base/css/compatible'
                        },
                        {
                            text: '清除浮动',
                            link: '/fe-base/css/clear'
                        }
                    ]
                },
                {
                    text: 'html',
                    items: []
                }
            ]
        },
        {
            text: 'javascript基础',
            link: '/fe-base/javascript/index',
            collapsed: false,
            items: [
                {
                    text: '数据类型',
                    items: [
                        {
                            text: '数据类型',
                            link: '/fe-base/javascript/data-type/data-type'
                        },
                        {
                            text: '类型检测',
                            link: '/fe-base/javascript//data-type/typeDetection'
                        },
                        {
                            text: '类型转换',
                            link: '/fe-base/javascript//data-type/dataConversion'
                        }
                    ]
                },
                {
                    text: '函数',
                    items: [
                        {
                            text: '高阶函数',
                            link: '/fe-base/javascript/function/higherFunction'
                        },
                        {
                            text: '函数柯里化 和函数反柯里化',
                            link: '/fe-base/javascript/function/currying'
                        },
                        {
                            text: 'arguments的介绍',
                            link: '/fe-base/javascript/function/arguments'
                        }
                    ]
                },
                {
                    text: 'evnet',
                    items: [
                        {
                            text: 'js中事件冒泡和事件捕获',
                            link: '/fe-base/javascript/event/event-type'
                        }
                    ]
                }
            ]
        },
        {
            text: 'ES6',
            collapsed: false,
            items: [
                {
                    text: 'promise手写系列',
                    link: '/fe-base/es6/promise'
                },
                {
                    text: 'generator => async + await',
                    link: '/fe-base/es6/asynchronous'
                },
                {
                    text: 'es6和es5的区别',
                    link: '/fe-base/es6/mainKeyword'
                }
            ]
        },
        {
            text: 'node',
            collapsed: false,
            link: '/fe-base/node/index',
            items: []
        }
    ],
    '/source-code/': [
        {
            text: '源码阅读',
            link: '/source-code/index',
            collapsed: false,
            items: [
                {
                    text: 'vue2',
                    link: '/source-code/vue2/index',
                    items: [
                        {
                            text: 'vue2源码解析',
                            link: '/source-code/vue2/source'
                        }
                    ]
                }
            ]
        }
    ],
    '/open-source-projects/': [
        {
            text: '开源项目',
            link: '/open-source-projects/index',
            items: [
                {
                    text: '可视化编辑器',
                    link: '/open-source-projects/editor/index'
                }
            ]
        }
    ],
    '/note/': [
        {
            text: '实践经验',
            link: '/note/index',
            collapsed: false,
            items: [
                {
                    text: '从零开始搭建一个个人博客',
                    link: '/note/vuePress-blog'
                },
                {
                    text: 'vitePress快速搭建个人博客',
                    link: '/note/vitePress-blog/index',
                    items: [
                        {
                            text: '集成评论功能',
                            link: '/note/vitePress-blog/comment'
                        },
                        {
                            text: 'GitHub Actions实现自动部署',
                            link: '/note/vitePress-blog/deploy'
                        }
                    ]
                },
                {
                    text: 'axios + cheerio + node-xlsx 爬取并导出到excel表格',
                    link: '/note/crawler'
                },
                {
                    text: 'git commit规范',
                    link: '/note/gitCommit'
                },
                {
                    text: 'nvm的安装和使用',
                    link: '/note/nvm'
                },
                {
                    text: 'vscode 代码格式化',
                    link: '/note/vscode'
                },
                {
                    text: '埋点',
                    link: '/note/buryingPoint'
                },
                {
                    text: '第三方登录',
                    link: '/note/thirdPartyLogin'
                }
            ]
        },
        {
            text: '主流框架',
            link: '/note/framework/index'
        },
        {
            text: '小程序',
            link: '/note/mini/index',
            collapsed: false,
            items: [
                {
                    text: '小程序(授权)获取当前位置',
                    link: '/note/mini/getLocation'
                },
                {
                    text: 'input内容过长，失去焦点的时候，内容显示不全的',
                    link: '/note/mini/input'
                },
                {
                    text: '人脸采集 - 拍照上传校验',
                    link: '/note/mini/camera'
                },
                {
                    text: '小程序和H5互跳以及小程序跳转小程序',
                    link: '/note/mini/h5ToMini'
                },
                {
                    text: '使用wx.openLocation遇到的坑',
                    link: '/note/mini/openLocation'
                }
            ]
        }
    ],
    '/interview/': [
        {
            text: '面试宝典',
            link: '/interview/index',
            collapsed: false,
            items: [
                {
                    text: '数据类型转换',
                    link: '/interview/dataTypeConversion'
                },
                {
                    text: '浏览器事件环',
                    link: '/interview/eventRing'
                },
                {
                    text: '常见面试题',
                    link: '/interview/index'
                }
            ]
        }
    ],
    '/my/': [
        {
            text: '大侠',
            link: '/my/index',
            collapsed: false,
            items: [
                {
                    text: '数学',
                    link: '/maths/index'
                },
                {
                    text: '文学',
                    link: '/literature/index'
                }
            ]
        }
    ]
}
