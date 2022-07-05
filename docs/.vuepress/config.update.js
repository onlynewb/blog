module.exports = {
    // 自定义plugin,更新提示, 如果不需要直接设置成null
    title: '文章更新',
    time: new Date('2010-05-19').getTime(), // 这个用于记录更新时间， 存在用户浏览器，判断用户是否以及查看了更新消息
    updateList: [
        {
            time: '2020.5.17',
            content: [
                {
                    title: '如何进阶成公司 Git 小能手(常见问题总结)',
                    url: '/webframe/tool/git',
                },
                {
                    title: '无形中提高你工作效率的chrome插件',
                    url: '/webframe/tool/chrome',
                },
            ],
        },
        {
            time: '2020.05.10',
            content: [
                {
                    title: '使用 Node.js 搭建一个 API 网关(助力微服务)',
                    url: '/node/APIGateway',
                }
            ],
        },
    ],
}