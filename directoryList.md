## 博客目录
|-- 博客项目目录
    |-- .gitignore
    |-- catalog.md
    |-- deploy.sh
    |-- package.json
    |-- yarn.lock
    |-- docs
        |-- README.md
        |-- .vuepress
        |   |-- common-plugin.js
        |   |-- config.js
        |   |-- private.js
        |   |-- sidebar.json
        |   |-- components
        |   |   |-- comment.vue
        |   |   |-- HomeComponet.vue
        |   |   |-- introduce.vue
        |   |   |-- qrcode.vue
        |   |-- public                       // 根目录静态文件资源
        |   |   |-- baidu-verify-263C562C24.txt       //百度收录
        |   |   |-- baidu_verify_yuFdA7vT9m.html
        |   |   |-- favicon.ico
        |   |   |-- ggh.jpg
        |   |   |-- google7ec4adf8cccab476.html      // 谷歌收录
        |   |   |-- home.png
        |   |   |-- robots.txt
        |   |   |-- sitemap.txt
        |   |   |-- small.png
        |   |   |-- wechat.jpg
        |   |-- styles
        |   |   |-- index.styl
        |   |   |-- palette.styl
        |   |-- theme
        |   |   |-- util
        |   |       |-- index.js
        |-- brower                        // 浏览器相关文章
        |   |-- renderTree.md
        |-- database                      // 数据库相关文章
        |   |-- choice.md
        |   |-- detail-redis1.md
        |   |-- detail-redis2.md
        |   |-- detail-redis3.md
        |   |-- readme.md
        |   |-- mysql
        |       |-- baseFrame.md
        |       |-- logSystem.md
        |       |-- optimize.md
        |       |-- sql.md
        |-- interview                   // 面试相关文章
        |   |-- css.md
        |   |-- js10.md
        |   |-- notes.md
        |   |-- readme.md
        |   |-- rewriteJs.md
        |   |-- unique.md
        |   |-- vue.md
        |-- node                        // node相关文章
        |   |-- buffer.md
        |   |-- errors.md
        |   |-- events.md
        |   |-- event_loop.md
        |   |-- module_fs.md
        |   |-- overflow.md
        |   |-- path.md
        |   |-- processAndThread.md
        |   |-- queue.md
        |   |-- README.md
        |   |-- stream.md
        |   |-- what.md
        |-- recommend               //书籍/好的开源库/软件工具等推荐
        |   |-- book.md
        |   |-- project.md
        |-- typescript              // typescript 
        |   |-- interface.md
        |-- webframe                // 前端
            |-- README.md
            |-- css
            |   |-- 1.md
            |   |-- readme.md
            |   |-- render.md
            |-- es6
            |   |-- async-await.md
            |   |-- classInherit.md
            |   |-- promise.md
            |   |-- README.md
            |-- html
            |   |-- README.md
            |-- javascript
            |   |-- closure.md
            |   |-- copy.md
            |   |-- datatype.md
            |   |-- es6WidelyUsed.md
            |   |-- exports.md
            |   |-- higherFunc.md
            |   |-- prototype.md
            |   |-- README.md
            |   |-- recircleFun.md
            |   |-- scoped.md
            |   |-- this.md
            |   |-- unique.md
            |-- react
            |   |-- README.md
            |-- tool
            |   |-- README.md
            |-- vue
                |-- messageWays.md
                |-- readme.md


## 上传文章步骤
- 第一步
  将写好的文章.md文件放置到指定目录  (例如: node分类的文章, 放到docs/node目录)

- 第二步 设置目录导航
  配置 slider.config.js文件, 在slider.config.js中找到指定分类的配置, 写好对应的文件名字与导航名字

- 第三步 本地运行
  执行npm run docs:dev  查看文章是否能真常访问

- 第四步 打包上传
  执行 npm run docs:build , 打包出web文件, 将web静态文章防置在 服务器上:129.28.178.139, 
  文件路径: /usr/web/inode, 直接替换web文件即可

## 更新提醒
配置`.vuepress/config.update.js`文件即可


## 不上传到服务器的文件
