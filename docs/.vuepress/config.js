const slidebar = require('./config.sidebar')
const update = require('./config.update')
module.exports = {
    title: '程序员成长指北',
    base: '/',
    dest: './web',
    description: '一个用心帮助你成长的公众号',

    head: [
        [
            'link',
            {
                rel: 'shortcut icon',
                href: '/favicon.ico',
                type: 'iamge/x-icon',
            },
        ],
        [
            'meta',
            {
                name: 'keywords',
                content: '程序员成长指北 前端 公众号 koala 前端文章',
            },
        ],
    ],

    shouldPreload: (file, type) => {
        // 基于文件扩展名的类型推断
        // if(type == 'script')
        return false
    },

    // serviceWorker: true, // 是否开启 PWA
    themeConfig: {
        logo: '',
        repo: 'https://github.com/koala-coding/goodBlog',
        sidebarDepth: 1,
        update: update,
        nav: [
            {
                text: '主页',
                link: '/',
            },
            {
                text: 'node',
                link: '/node/',
            },
            {
                text: '前端',
                link: '/webframe/',
            },
            {
                text: '数据库',
                link: '/database/',
            },
            {
                text: '面试问题',
                link: '/interview/',
            },
            {
                text: '招聘●内推',
                link: 'https://github.com/koala-coding/FE-Infer',
            },
            {
                text: '关于我',
                link: '/about/2019_year_end.md',
            },
        ],
        sidebar: slidebar,
    },

    // 插件
    plugins: [
        ['@vuepress/back-to-top'], // 返回顶部
        [
            '@vuepress/active-header-links',
            {
                // 页面滚动时自定激活侧边栏链接
                sidebarLinkSelector: '.sidebar-link',
                headerAnchorSelector: '.header-anchor',
            },
        ],
        ['@vuepress/nprogress'],
        require('./common-plugin.js'),
    ],

    chainWebpack: (config, isServer) => {
        // 去除打包后文件的预加载
        config.plugins.delete('html')
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test
    },
}
