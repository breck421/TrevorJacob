'use strict';

App.controller('GalleryController', ['$scope', function ($scope) {
	this.init = function () {
		this.initScope();
		this.load();
	};

	this.initScope = function () {

	};

	this.load = function () {
		this.setPageEvents();
	};

	this.setPageEvents = function () {

	};

	this.init();
}]);