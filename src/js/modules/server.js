/*
 * @Author: xiongjian 
 * @Date: 2018-01-17 16:29:45 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-02-01 14:58:58
 */
layui.define(['jquery','common'], function(exports) { 
    'use strict';
    var $ = layui.jquery,
        common = layui.common;
    // 定义模块
    var server = {
        // 登录
        login : function(postdata, resolve, reject) {
            common.request({
                url: 'user/login',
                data: postdata,
                method: 'POST',
                success: resolve,
                error: reject
            });
        },
        // 是否已登录
        hasLogin: function(postdata,resolve,reject) {
            common.request({
                url: 'user/hasLogin',
                data: postdata,
                type: 'POST',
                success: resolve,
                error: reject
            });
        },
        // 退出登录
        logOut: function(postdata,resolve,reject) {
            common.request({
                url: 'user/logOut',
                data: postdata,
                type: 'POST',
                success: resolve,
                error: reject
            });
        }  
    };
    //输出接口
    exports('server', server);
}); 