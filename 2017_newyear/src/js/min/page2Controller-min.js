(function(){app.controller("page2Controller",function(o,n){var t=!1;o.$view.find(".bottom_content").on("touchstart",function(){t=!0,n["goto"]("/home")}),o.onAdd=function(n){o.add(),o.$view.find(".bottom_content").addClass("bottomActive"),o.$view.find(".copy").addClass("copyActive"),o.$view.find(".person").addClass("personActive"),o.$view.find(".wish").addClass("wishActive")},o.onRemove=function(n){o.remove()}})}).call(this);