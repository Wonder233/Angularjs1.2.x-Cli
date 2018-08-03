'use strict'

export default class PlantCtrl {
    constructor($rootScope, $scope, $location, $stateParams) {
        this.navTitle = $stateParams.id;
        this.loadSideNav();
        console.log($stateParams);
    }

    loadSideNav() {
        layui.use(['layer', 'element'], function() {
            var element = layui.element;
            element.on('tab(machineGroup)',(data)=>{
                console.log(data);
            })
        });
    }
}