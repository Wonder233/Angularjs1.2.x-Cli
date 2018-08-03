'use strict'

export default class RealtimeWarningCtrl {

    constructor($rootScope, $scope, $state) {
        this.loadSideNav($state);
    }

    loadSideNav($state) {
        layui.use(['layer', 'element', 'sideNav'], function() {
            var element = layui.element,
                sideNav = layui.sideNav;

            sideNav.main('./json/realtimeWarning.json', 'side-main', true);
            element.on('nav(side-main)', function(elem) {
                var state = elem.children('a').attr('ui-sref');
                var id = elem.children('a').data('id');
                $state.go(state, { id: id });
            });
        });
    }
}