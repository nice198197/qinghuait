layui.use(['jquery','carousel','common','server'], function() {
    'use strict';
    // 引入依赖
    var $ = layui.jquery,
        carousel = layui.carousel,
        common = layui.common,
        server = layui.server;
    // 页面逻辑
    var page = {
        init: function() {
            this.bindEvent();
            this.carousel();
        },
        bindEvent: function() {
            common.navHover();
            common.navClick();
        },
        // 轮播图
        carousel: function() {
            carousel.render({
                elem: '#banner',
                interval: 3000,
                anim: 'fade',
                width: '100%',
                height: '300px'
            });
        }
    }
    // 初始化
    page.init();
});
