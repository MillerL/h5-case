/**
 * WeixinApi
 * version: 2.0
 */

"use strict";

(function(root, factory) {
	if (typeof define === 'function' && (define.amd || define.cmd)) {
		define("WeixinApi", ["wx", "jquery"], factory); //Register as a module.
	} else {
		root.WeixinApi = factory(wx, window.$);
	}
}(this, function(wx, $) {
	var Api = {};
	Api.ready = function(callback) {
		Api._ready ? callback() : wx.ready(callback);
	};
	wx.ready(function() {
		Api._ready = true;
	});
	Api.init = function(_config) {
		var config = {
			debug: false,
			jsApiList: [
				'checkJsApi',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo',
				'hideMenuItems',
				'showMenuItems',
				'hideAllNonBaseMenuItem',
				'showAllNonBaseMenuItem',
				'translateVoice',
				'startRecord',
				'stopRecord',
				'onRecordEnd',
				'playVoice',
				'pauseVoice',
				'stopVoice',
				'uploadVoice',
				'downloadVoice',
				'chooseImage',
				'previewImage',
				'uploadImage',
				'downloadImage',
				'getNetworkType',
				'openLocation',
				'getLocation',
				'hideOptionMenu',
				'showOptionMenu',
				'closeWindow',
				'scanQRCode',
				'chooseWXPay',
				'openProductSpecificView',
				'addCard',
				'chooseCard',
				'openCard'
			]
		};
		$.extend(config, _config||{});
		var url = _config.url;
		if (!url) {
			switch (location.host) {
				case "dell.kedaibiao.cn":
					url = "/DoMission/getSignPackage";
					break;
				case "www.minichina.com.cn":
				case "www1.minichina.com.cn":
					url = "http://u.im20.com.cn/WxApi/getJsTicket";
					break;
				default:
					url = "http://wx.im20.com.cn/WxApi/getSignPackage";
					break;
			}
		}
		$.ajax({
			url: url,
			type: "GET",
			dataType: 'jsonp',
			jsonp: 'imCallback',
			data: {url: location.href},
			timeout: 5000,
			success: function(json) {
				console.log(json.data);
				config.appId = json.data.appId;
				config.timestamp = json.data.timestamp;
				config.nonceStr = json.data.nonceStr;
				config.signature = json.data.signature;
				config.rawString = json.data.rawString;

//				alert(JSON.stringify(config));
				wx.config(config);
			}
		});
	};
	/**
	 * data示例
	 *
	 title: '互联网之子',
	 desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
	 link: 'http://movie.douban.com/subject/25785114/',
	 imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
	 trigger: function (res) {
				alert('用户点击分享到QQ');
			},
	 complete: function (res) {
				alert(JSON.stringify(res));
			},
	 success: function (res) {
				alert('已分享');
			},
	 cancel: function (res) {
				alert('已取消');
			},
	 fail: function (res) {
				alert(JSON.stringify(res));
			}
	 */
	Api.share = function(data, reverse) {
		Api.ready(function() {
			wx.onMenuShareTimeline(data);
			if (reverse) data = $.extend({}, data, {title: data.desc, desc: data.title});
			wx.onMenuShareAppMessage(data);
			wx.onMenuShareQQ(data);
			wx.onMenuShareWeibo(data);
		});
	};
	Api.shareTimeline = function(data) {
		Api.ready(function() {
			wx.onMenuShareTimeline(data);
		});
	};
	Api.shareAppMessage = function(data, reverse) {
		if (reverse) data = $.extend({}, data, {title: data.desc, desc: data.title});
		Api.ready(function() {
			wx.onMenuShareAppMessage(data);
		});
	};
	Api.shareQQ = function(data) {
		Api.ready(function() {
			wx.onMenuShareQQ(data);
		});
	};
	Api.shareWeibo = function(data) {
		Api.ready(function() {
			wx.onMenuShareWeibo(data);
		});
	};

	return Api;
}));