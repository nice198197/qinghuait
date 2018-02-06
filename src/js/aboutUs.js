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
        },
        bindEvent: function() {
            common.navHover();
            common.navClick();
        }
    }
    // 初始化
    page.init();
});
