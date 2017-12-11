(function() {
    app.controller('page2Controller', function($scope, $router) {
        var txtObj = {
            cnMate: ["亲爱的同仁们，新年好：",
                '过去的一年，你们辛苦了！感谢各位的努力与贡献。2017年，我们要继续超越自我，创造事业新高点。',
                '鸡年大吉，', '身体健康，', '阖家欢乐！'
            ],
            cnFamily: ["亲爱的家人朋友，新年好：",
                '过去的一年，你们辛苦了！感谢各位的努力与贡献。2017年，愿我们的大家庭更加蒸蒸日上，携手创造更美好的生活！',
                '鸡年大吉，', '身体健康，', '阖家欢乐！'
            ],
            cnLeader: ["敬爱的领导，新年好：",
                '感谢过去的一年您对我们工作的支持和帮助！2017年，我们会继续努力，也请您继续支持！',
                '鸡年大吉，', '身体健康，', '阖家欢乐！'
            ],
            zhMate: ["親愛的同仁們，新年快樂：",
                '過去的一年，你們辛苦了！感謝各位的努力與貢獻。2017年，我們要繼續超越自我，創造事業新高點。',
                '雞年大吉，', '身體健康，', '闔家歡樂！'
            ],
            zhFamily: ["親愛的家人朋友，新年快樂：",
                '過去的一年，你們辛苦了！感謝各位的努力與貢獻。2017年，願我們的大家庭更加蒸蒸日上，一起創造更美好的生活！',
                '雞年大吉，', '身體健康，', '闔家歡樂！'
            ],
            zhLeader: ["敬愛的長官，新年快樂：",
                '感謝過去的一年您對我們工作的支持和幫助！2017年，我們會繼續努力，也請您繼續支持！',
                '雞年大吉，', '身體健康，', '闔家歡樂！'
            ]

        }
        //获取当前参数
        var _value = Util.getLocationQuery('value');
        console.log(_value);
        if (_value == 'cnMate') {
            //简体---同事
            console.log("cnMate");
            $scope.$view.find('#title').text(txtObj.cnMate[0]);
            $scope.$view.find('#txt').text(txtObj.cnMate[1]);
            $scope.$view.find('#h1').text(txtObj.cnMate[2]);
            $scope.$view.find('#h2').text(txtObj.cnMate[3]);
            $scope.$view.find('#h3').text(txtObj.cnMate[4]);
            $scope.$view.find('.wish_title').text("董事长");
            $scope.$view.find('.name').addClass('nameMove');
        } else if (_value == "cnFamily") {
            //简体---家庭朋友
            console.log("cnFamily");
            $scope.$view.find('#title').text(txtObj.cnFamily[0]);
            $scope.$view.find('#txt').text(txtObj.cnFamily[1]);
            $scope.$view.find('#h1').text(txtObj.cnFamily[2]);
            $scope.$view.find('#h2').text(txtObj.cnFamily[3]);
            $scope.$view.find('#h3').text(txtObj.cnFamily[4]);
            $scope.$view.find('.wish_title').text("敬上");
            $scope.$view.find('.name').addClass('nameMove2');
        } else if (_value == "cnLeader") {
            //简体---领导
            console.log("cnLeader");
            $scope.$view.find('#title').text(txtObj.cnLeader[0]);
            $scope.$view.find('#txt').text(txtObj.cnLeader[1]);
            $scope.$view.find('#h1').text(txtObj.cnLeader[2]);
            $scope.$view.find('#h2').text(txtObj.cnLeader[3]);
            $scope.$view.find('#h3').text(txtObj.cnLeader[4]);
            $scope.$view.find('.wish_title').text("敬上");
            $scope.$view.find('.name').addClass('nameMove2');

        } else if (_value == "zhMate") {
            //繁体---同事
            console.log("zhMate");
            $scope.$view.find('#title').text(txtObj.zhMate[0]);
            $scope.$view.find('#txt').text(txtObj.zhMate[1]);
            $scope.$view.find('#h1').text(txtObj.zhMate[2]);
            $scope.$view.find('#h2').text(txtObj.zhMate[3]);
            $scope.$view.find('#h3').text(txtObj.zhMate[4]);
            $scope.$view.find('.wish_title').text("董事长");
            $scope.$view.find('.name').addClass('nameMove');
        } else if (_value == "zhFamily") {
            //繁体---家庭朋友
            console.log("zhFamily");
            $scope.$view.find('#title').text(txtObj.zhFamily[0]);
            $scope.$view.find('#txt').text(txtObj.zhFamily[1]);
            $scope.$view.find('#h1').text(txtObj.zhFamily[2]);
            $scope.$view.find('#h2').text(txtObj.zhFamily[3]);
            $scope.$view.find('#h3').text(txtObj.zhFamily[4]);
            $scope.$view.find('.wish_title').text("敬上");
            $scope.$view.find('.name').addClass('nameMove2');
        } else if (_value == "zhLeader") {
            //繁体---领导
            console.log("zhLeader");
            $scope.$view.find('#title').text(txtObj.zhLeader[0]);
            $scope.$view.find('#txt').text(txtObj.zhLeader[1]);
            $scope.$view.find('#h1').text(txtObj.zhLeader[2]);
            $scope.$view.find('#h2').text(txtObj.zhLeader[3]);
            $scope.$view.find('#h3').text(txtObj.zhLeader[4]);
            $scope.$view.find('.wish_title').text("敬上");
            $scope.$view.find('.name').addClass('nameMove2');
        }


        var ifTouch = false;

        $scope.$view.find(".bottom_content").on('touchstart', function() {
            ifTouch = true;
            $router.goto('/home');
        })
        $scope.onAdd = function(d) {
            $scope.add();
            $scope.$view.find(".bottom_content").addClass("bottomActive");
            $scope.$view.find(".copy").addClass('copyActive');
            $scope.$view.find(".person").addClass('personActive');
            $scope.$view.find(".wish").addClass('wishActive');
        };
        $scope.onRemove = function(d) {
            // console.log('remove p0', arguments);
            $scope.remove();
        };
    });
}).call(this);
