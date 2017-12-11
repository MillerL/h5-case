/**
 * Created by miller on 16/6/20.
 * asIndex 是否能通过锚点访问页面
 */

var app = gb.module('app', [], function(m0, $router, $libsLoader) {
    $router
        .loading({
            tpl: 'tpl/loading.html'
        })
        .when('/home', {
            tpl: 'tpl/home.html',
            libs: ['./css/lib.css'],
            asIndex: true
        })
        .when('/page2', {
            tpl: 'tpl/page2.html',
            libs: ['./css/lib.css'],
            asIndex: false
        })
        .other('/home')
    //		$libsLoader.load('css/a.css');
});

$(window).bind("touchstart", function(evt) {
    if (evt.cancelable) evt.preventDefault();
});
