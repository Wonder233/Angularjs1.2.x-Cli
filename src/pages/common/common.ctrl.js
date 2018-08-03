'use strict'

export default class CommonCtrl {
	constructor($rootScope, $scope, $location) {
		this.message = $rootScope.title;
        this.init();
	}

	init(){

	}
}