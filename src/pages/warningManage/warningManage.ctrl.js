'use strict'

export default class WarningManegeCtrl {
	constructor($rootScope, $scope, $location) {
		this.message = $rootScope.title;
        this.init();
	}

	init(){
        console.log(123123);
	}
}