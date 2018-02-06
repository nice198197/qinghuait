/*
 * @Author: xiongjian 
 * @Date: 2018-01-17 16:29:45 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-02-01 17:35:09
 */
layui.define(['jquery','laydate'], function(exports) { 
    'use strict';
    var $ = layui.jquery,
        laydate = layui.laydate;
    // 定义模块
    var common = {
        baseUrl: '/wx-API/',
        // 网络请求
        request : function(param) {
            var _this = this;
            $.ajax({
                type: param.type || 'post',
                url: this.baseUrl+param.url || '',
                contentType: param.contentType || 'application/json',
                dataType: param.dataType || 'json',           
                data: JSON.stringify(param.data) || JSON.stringify({}),
                success: function(res) {
                    // 请求成功，显示数据和正确信息
                    if ("1" === res.status) {
                        typeof param.success === 'function' && param.success(res);                    
                    }
                    // 失败
                    else if ("0" === res.status) {
                        typeof param.error === 'function' && param.error(res);
                    }
                    // 异常
                    else if ("-1" === res.status) {
                        typeof param.error === 'function' && param.error(res);
                    }
                },
                // 请求失败
                error: function(err) {
                    typeof param.error === 'function' && param.error(err);
                }
            });
        },
        // 获取url参数
        getUrlParam: function(name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
            var result = window.location.search.substr(1).match(reg);
            return result ? decodeURIComponent(result[2]) : null;
        }, 
        // 将秒转化为日期格式
        formatDuring: function(mss) {
            var days = parseInt(mss / (60 * 60 * 24));
            var hours = parseInt((mss % (60 * 60 * 24)) / (60 * 60));
            var minutes = parseInt((mss % (60 * 60)) / (60));
            var seconds = (mss % 60);
            return days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
        },
        // 验证输入是否合法
        validate: function(value, type) {
            var value = $.trim(value);
            // 非空验证
            if ('require' === type) {
                return !!value;
            }
            // 手机号验证
            if ('phone' === type) {
                return /^1\d{10}$/.test(value);
            }
        },
        // 统一登陆处理
        doLogin: function() {
            window.location.href = './login.html';
        },
        // 打开模态框
        layerOpen: function(el) {
            layer.open({
                type: 1,
                title: '', 
                skin: 'layui-layer-rim',
                area: '520px',
                content: el 
            });
        },
        // 抛出异常错误信息
		throwError: function(msg) {
			throw new Error(msg);
			return;
		},
		// 弹出错误提示
		msgError: function(msg) {
			layer.msg(msg, {
				icon: 5
			});
			return;
        },
        // 弹出成功提示
        msgSuccee: function(msg) {
			layer.msg(msg, {
				icon: 1
			});
			return;
        },
        // 初始化日期选择
        layuiDate: function() {
			$('.layui-date').each(function() {
				laydate.render({
                    elem: this,
                    theme: '#4e5465',
                    trigger: 'click'
				});
            });
            $('.layui-date-range').each(function() {
				laydate.render({
				    elem: this,
                    theme: '#4e5465',
                    range: '~',
				    trigger: 'click'
                });
			});
        },
        navHover: function() {
            $(".navbar>li").hover(function() {
                $(".nav ul ul").slideUp("fast");
                $(this).find("a:first").animate({"top": "12px"},"fast");
                $(this).find("span").animate({"top": "-30px"},"fast");
                if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideDown("fast")
            },function() {
                $(this).find("a:first").animate({"top": "0px"},"fast");
                $(this).find("span").animate({"top": "0px"},"fast");
                if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideUp("fast");
                $(".nav ul ul").slideUp("fast")
            }); 
        },
        navClick: function() {
            var myNav = $('.navbar>li>a');
            //获取当前窗口的url
            var myURL = document.location.href;
            // 循环li下面所有的a链接，
            for(var i = 0; i < myNav.length; i++) {
                // 获取每一个a标签的herf属性
                var links = myNav[i].getAttribute("href");
                var myURL = document.location.href;
                if (myURL.indexOf(links) != -1) {
                    $(myNav[i]).parent().siblings().removeClass('active');
                    $(myNav[i]).parent().addClass('active');
                }
            }
        }

    };
    common.layuiDate();
    //输出接口
    exports('common', common);    
}); 