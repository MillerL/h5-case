/**
 * Util.js 实用工具(包含Cookie)
 * @author Rhine.Liu
 * @version 2015.08.07
 * @modify  2016.03.26
 */

'use strict';

(function(root, factory) {
	root.Util = factory(root.Util || {});

	if (typeof define === 'function' && (define.amd || define.cmd)) {
		define("Util", [], function() {
			return root.Util;
		}); //Register as a module.
	}
}(this, function(Util) {
	/**
	 * 产生随机数
	 * @param arg {int|array|object}
	 * @returns {int|mixed}
	 */
	Util.random = function(arg) {
		if (arg instanceof Array) {
			return arg[Math.floor(arg.length*Math.random())];
		}
		if (typeof arg == "number") {
			return Math.floor(arg*Math.random());
		}
		if (arg instanceof Object) {
			var arr = [];
			for (var ind in arg) {
				arr.push(ind);
			}
			return arg[Util.random(arr)];
		}
	};
	Util.randomIndex = function(obj) {
		var arr = [];
		for (var ind in obj) {
			arr.push(ind);
		}
		return this.random(arr);
	};

	/**
	 * 抽取元素
	 * @param arg {int|array|object}
	 * @param num {int}
	 * @returns {array}
	 */
	Util.drawoff = function(arg, num) {
		if (arg instanceof Array) {
			var arr = Util.drawoff(arg.length, num);
			for (var i=0; i<arr.length; ++i) {
				arr[i] = arg[arr[i]];
			}
			return arr;
		}
		if (arg instanceof Object) {
			var arr = [];
			for (var ind in arg) {
				arr.push(arg[ind]);
			}
			return Util.drawoff(arr);
		}
		if (typeof arg == "number") {
			var nums = [];
			for (var i=0; i<arg; ++i) {
				nums.push(i);
			}
			var arr = [];
			for (var i=0; i<num; ++i) {
				var rand = Util.random(nums.length);
				arr.push(nums[rand]);
				nums.splice(rand, 1);
			}
			return arr;
		}
	};

	Util.removeFromArray = function (arr, val) {
		var ind = arr.indexOf(val);
		if (ind != -1) arr.splice(ind, 1);
		return arr;
	};

	/**
	 * 查询页面地址的参数值
	 * @param query {string}
	 * @returns {string}
	 */
	Util.getLocationQuery = function(query) {
		var r = location.search.substr(1).match(new RegExp("(^|&)"+query+"=([^&]*)(&|$)"));
		return r ? r[2] : "";
	};

	/**
	 * 首字母大写
	 * @param str {string|array}
	 * @returns {string|array}
	 */
	Util.firstToUpperCase = function(mix) {
		if (mix instanceof Array) {
			var re = [];
			for (var i=0; i<mix.length; ++i) {
				re.push(Util.firstToUpperCase(mix[i]));
			}
			return re;
		}
		return mix.substr(0,1).toUpperCase() + mix.substr(1);
	};

	/**
	 * 首字母小写
	 * @param str {string|array}
	 * @returns {string|array}
	 */
	Util.firstToLowerCase = function(mix) {
		if (mix instanceof Array) {
			var re = [];
			for (var i=0; i<mix.length; ++i) {
				re.push(Util.firstToLowerCase(mix[i]));
			}
			return re;
		}
		return mix.substr(0,1).toLowerCase() + mix.substr(1);
	};

	/**
	 * 不区分大小写时判断字符串是否相同
	 * @param str1 {string}
	 * @param str2 {string}
	 * @returns {boolean}
	 */
	Util.equalLowerCase = function(str1, str2) {
		return str1.toLowerCase() == str2.toLowerCase();
	};

	/**
	 * 打字机效果
	 * @param element {DOM Element}
	 * @param span {number} 字符显示间隔，单位ms
	 */
	Util.typewriter = function(element, span) {
		var html = element.innerHTML, str = "", i = 0;
		(function __timeout() {
			if (i < html.length) {
				element.innerHTML = str += html[i++];
				setTimeout(__timeout, span);
			}
		})();
	};

	/**
	 * 判断邮箱格式是否正确
	 * @param email {string}
	 * @returns {boolean}
	 */
	Util.checkEmail = function (email) {
		var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		return reg.test(email);
	};

	/**
	 * 判断手机号格式是否正确
	 * @param mobile {string}
	 * @returns {boolean}
	 */
	Util.checkMobile = function (mobile) {
		var reg = /^1\d{10}$/;
		return reg.test(mobile);
	};

	Util.getBgImageUrl = function ($dom) {
		var bg = $dom.css("background-image");
		return bg.substr(4, bg.length-5);
	};

	/**
	 * 遍历
	 */
	Util.Each = {
		/**
		 * 数字遍历
		 * @param start {number} 起始数字
		 * @param len {number} 长度，支持负数（即倒序）
		 * @param func {function} 遍历回调函数
		 * no returns
		 */
		for: function(start, len, func) {
			var step = len ? len / Math.abs(len) : 1;
			len = Math.abs(len);
			for (var i=0; i<len; ++i) func(start+i*step);
		}
	};

	/**
	 * Cookie
	 */
	(function() {
		var Cookie = Util.Cookie || {};
		Cookie.set = function (c,e,d,f,a,b){document.cookie=c+"="+(b?e:escape(e))+((a)?"; expires="+a.toGMTString():"")+((f)?"; path="+f:"; path=/")+((d)?"; domain="+d:"")}
		Cookie.get = function (c,b){var a=document.cookie.match(new RegExp("(^| )"+c+"=([^;]*)(;|$)"));if(a!=null){return unescape(a[2])}return b}
		Cookie.clear = function (a,c,b){if(this.get(a)){document.cookie=a+"="+((c)?"; path="+c:"; path=/")+((b)?"; domain="+b:"")+";expires=Fri, 02-Jan-1970 00:00:00 GMT"}}
		Util.Cookie = Cookie;
	})();

	return Util;
}));
