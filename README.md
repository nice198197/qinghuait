
#项目初始化步骤

1、安装nodejs环境,推荐使用v4.0以上版本
    下载地址 : https://nodejs.org/download/release/

2、全局安装gulp 
    命令: (sudo) npm install -g gulp

3、在项目根目录执行npm初始化
    命令: npm install (--registry=https://registry.npm.taobao.org)

4.启动项目
    开发模式: npm run dev
    生产模式: npm run build

#项目目录结构说明

-build // gulp相关配置文件
    |-gulpfile.config.js // gulp基本配置文件
    |-gulpfile.dev.js // gulp开发环境配置文件
    |-gulpfile.prod.js // gulp生产环境配置文件
-dist // 项目打包文件夹
    |-assets
    |-css
    |-images
    |-js
    |-*.html
-src // 项目源码文件夹
    |-assets // 第三方资源文件夹
    |   |-layui
    |-css // stylus编译后的文件夹
    |   |-base.css 
    |   |-mixin.css
    |   |-*.css
    |-images // 图片资源文件夹
    |   |-banner // 轮播图片
    |-js // js脚本文件
    |   |- modulesConfig.js // 项目模块配置文件
    |   |- modules // 封装的项目模块
    |   |- *.js // 相应页面的js文件
    |-stylus // stylus源文件
    |   |-reset.styl // reset
    |   |-mixin.styl // mixin
    |   |-variable.styl // 变量
    |   |-*.styl // 相应页面的stylus
    |-layout // 页面公共部分
    |   |-header // 公共头部
    |   |-footer // 公共底部
    |-*.html // 相应的html页面
-node_modules // 放置依赖的文件夹（npm install安装模块，根据package.json的配置安装）
-.gitignore // 不提交到github的文件
-gulpfile.js // gulp主文件（名字不可更改）
-package.json // 管理本地npm包的文件（npm init生成）