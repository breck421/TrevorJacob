'use strict';

App.controller('ContactController', ['$scope', function ($scope, EmailService) {
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
		$scope.resetForm = function() {
			$scope.name = "";
			$scope.email = "";
			$scope.message = "";
		}

		$scope.formSubmit = function(form) {
			EmailService.send(form).then(function(data) {
				if(data.message.sent) {
					$scope.resetForm();
					alert("Message Sent");
				}
				else {
					alert("Something went wrong.  Try emailing me.");
				}
			});
		}
	};

	this.init();
}]);