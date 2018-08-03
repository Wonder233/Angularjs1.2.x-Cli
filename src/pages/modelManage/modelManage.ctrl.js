'use strict'

// layui.config({
//     base: './scripts/' //假设这是你存放拓展模块的根目录
// }).extend({ //设定模块别名
//     sideNav: 'common/sideNav' //相对于上述 base 目录的子目录
// });

export default class ModelManageCtrl {

    constructor($rootScope, $scope, $location) {
        this.message = $rootScope.title;
        this.title = "powerPlant";
        this.loadSideNav();
    }

    loadSideNav() {
        layui.use(['layer', 'element', 'sideNav'], function() {
            var element = layui.element,
                layer = layui.layer,
                sideNav = layui.sideNav,
                $ = layui.jquery;

            sideNav.main('./json/realtimeWarning.json', 'side-main', true);
        });
    }
}