/**
 * Created by miller on 16/6/20.
 */
(function() {
    app.controller('LoadingController', function($scope, $libsLoader) {
        console.log('#run loading');
        setTimeout(function() {
            // $('.loading_container').addClass('loadingActive');
        }, 200);

        // $scope.$view.css('opacity', .5);

        $scope.onLibsProgress = function(p) {
            // $scope.$view.html('loading:' + p + '%');
        };
        $scope.onLibsComplete = function() {
            $scope.closeLoading();
            // $libsLoader.load('../impublic/two_in_one/css/lib1.css');
        };
        $scope.loadLibs();


        var _title;
        var _dec;

        $scope.onAdd = function() {
            $scope.add();
            // initShare();
            console.log('加载分享');

            //获取当前参数
            var _value = Util.getLocationQuery('value');
            if (_value == "cnMate") {
                _title = "魏应行向您拜年";
                _dec = "新年快乐（致同仁）"
            } else if (_value == "cnFamily") {
                _title = "魏应行向您拜年";
                _dec = "新年快乐（致家人）"
            } else if (_value == "cnLeader") {
                _title = "魏应行向您拜年";
                _dec = "新年快乐（致领导）"
            } else if (_value == "zhMate") {
                _title = "魏應行向您拜年";
                _dec = "新年快樂（致同仁）"
            } else if (_value == "zhFamily") {
                _title = "魏應行向您拜年";
                _dec = "新年快樂（致家人）"
            } else if (_value == "zhLeader") {
                _title = "魏應行向您拜年";
                _dec = "新年快樂（致長官）"
            }
            document.title = _title;
            var _localUrl = encodeURIComponent(location.href.split("#")[0]);
            var _getConfigUrl = 'http://weixinh.xueyiqu.com/api/weinxinapi/GetSign?url=' + _localUrl;
            $.get(_getConfigUrl, function(result) {
                if (result != null) {
                    /*var _start = result.indexOf('(', 1) + 1;
                    var _end = result.indexOf(')', 1);
                    var _str = result.slice(_start, _end);
                    // var _obj = $.parseJSON(_str);*/
                    // console.log(_obj);
                    wx_init(result);
                } else {
                    console.log("分享接口有误");
                }
            })
        };

        ////!**************微信分享******************!///
        function wx_init(_obj) {
            wx.config({
                debug: false,
                appId: _obj.appid,
                timestamp: _obj.timestamp,
                nonceStr: _obj.nonceStr,
                signature: _obj.signature,
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
            });

            wx.ready(function() {
                var wx_title = _title; // 分享标题
                var wx_desc = _dec; // 分享描述
                var wx_link = location.href.split("#")[0]; // 分享链接
                var wx_imgUrl = "http://image.giccoo.com/projects/2017-new-year/img/share.jpg"; // 分享图标
                var wx_type = ""; // 分享类型,music、video或link，不填默认为link
                var wx_dataUrl = ""; // 如果type是music或video，则要提供数据链接，默认为空

                //分享到朋友圈
                wx.onMenuShareTimeline({
                    title: wx_title, // 分享标题
                    link: wx_link, // 分享链接
                    imgUrl: wx_imgUrl, // 分享图标
                    success: function() {
                        wx_success(1, wx_title + "-" + wx_desc + "-" + wx_link + "-" + wx_imgUrl + "-" + wx_type + "-" + wx_dataUrl);
                    },
                    cancel: function() {},
                    complete: function(errMsg) {}
                });

                //分享给朋友
                wx.onMenuShareAppMessage({
                    title: wx_title, // 分享标题
                    desc: wx_desc, // 分享描述
                    link: wx_link, // 分享链接
                    imgUrl: wx_imgUrl, // 分享图标
                    type: wx_type, // 分享类型,music、video或link，不填默认为link
                    dataUrl: wx_dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                        wx_success(2, wx_title + "-" + wx_desc + "-" + wx_link + "-" + wx_imgUrl + "-" + wx_type + "-" + wx_dataUrl);
                    },
                    cancel: function() {},
                    complete: function(errMsg) {}
                });
                //分享到qq
                wx.onMenuShareQQ({
                    title: wx_title, // 分享标题
                    desc: wx_desc, // 分享描述
                    link: wx_link, // 分享链接
                    imgUrl: wx_imgUrl, // 分享图标
                    success: function() {
                        wx_success(3, wx_title + "-" + wx_desc + "-" + wx_link + "-" + wx_imgUrl + "-" + wx_type + "-" + wx_dataUrl);
                    },
                    cancel: function() {},
                    complete: function(errMsg) {}
                });
                //分享到腾讯微博
                wx.onMenuShareWeibo({
                    title: wx_title, // 分享标题
                    desc: wx_desc, // 分享描述
                    link: wx_link, // 分享链接
                    imgUrl: wx_imgUrl, // 分享图标
                    success: function() {
                        wx_success(4, wx_title + "-" + wx_desc + "-" + wx_link + "-" + wx_imgUrl + "-" + wx_type + "-" + wx_dataUrl);
                    },
                    cancel: function() {},
                    complete: function(errMsg) {}
                });
                //分享到微信
                $('#fenxiang').bind("click", function() {
                    if (ischeck_wx()) { //微信浏览器打开
                        alert('您当前使用的微信浏览器，指示或提示点击微信分享按钮（右上角）');
                    } else { //使用非微信浏览器打开
                        alert('您当前使用的不是微信浏览器，指示或提示点击浏览器自带分享按钮');
                    }
                })
            });

            wx.error(function(res) {
                wx_error_log(res);
            });
        }

        //判断是否微信打开
        function ischeck_wx() {
            var ua = navigator.userAgent.toLowerCase();
            var isWeixin = ua.indexOf('micromessenger') != -1;
            var isAndroid = ua.indexOf('android') != -1;
            var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);

            function onReady() {
                if (isAndroid) {
                    if (history.length && history.length > 1) {
                        history.back();
                    } else {
                        WeixinJSBridge.invoke('closeWindow');
                    }
                }
            }
            document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", onReady, !1) : document.attachEvent && document.attachEvent("onWeixinJSBridgeReady", onReady);
            if (!isWeixin) {
                return false;
            } else {
                return true;
            }
        }

        $scope.onRemove = function() {
            $scope.remove();
        };


    });
}).call(this);
