'use strict';

App.controller('FooterController', ['$scope', function ($scope) {
	this.init = function(){
		$scope.today = new Date();
		$scope.currentYear = new Date().getFullYear();
	}

	this.init();
}])