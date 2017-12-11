/**
 * Created by miller on 16/7/25.
 */
(function() {
    app.controller('homePageController', function($scope, $router, m0) {
        var ifTouch = false;
        $scope.$view.find(".bottom_content").on('touchstart', function() {
            ifTouch = true;
            $router.goto('/page2');
        })

        //获取当前参数
        var _value = Util.getLocationQuery('value');
        if (_value == "cnMate" || _value == "cnFamily" || _value == "cnLeader") {
            _title = "魏应行向您拜年";
            $('#ball2').text("鸡");
            $('#ball3').text('报');
            $('#ball5').text('归');
            $('#ball8').text('万');
            $('#ball10').text('兴');
        } else {
            _title = "魏應行向您拜年";
            $('#ball2').text("雞");
            $('#ball3').text('報');
            $('#ball5').text('歸');
            $('#ball8').text('萬');
            $('#ball10').text('興');
        };
        document.title = _title;



        /*setTimeout(function() {
            $router.goto('/page2');
        }, 5000);*/
        $scope.onAdd = function(d) {
            $scope.add();
            $scope.$view.find(".main_content").addClass("mainActive");
            $scope.$view.find(".bottom_content").addClass("bottomActive");


            // $router.goto('/page2');
        };
        $scope.onRemove = function(d) {
            $scope.remove();
        };
    });
}).call(this);
