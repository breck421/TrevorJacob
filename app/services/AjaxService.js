'use strict';

App.factory('AjaxService', function AjaxService($http, $q) {
	return {
		makeCall: function(serviceUrl) {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: serviceUrl
			}).
			success(function(data, status) {
				deferred.resolve(data);
			}).
			error(function(data, status) {
				deferred.reject('');
			});

			return deferred.promise;
		},
		http: function(ajaxParams) {
			var deferred = $q.defer();

			$http(ajaxParams)
				.success(function (data, status, headers, config) {
					deferred.resolve({
						success: true,
						status: status,
						message: data
					});
				})
				.error(function (data, status, headers, config) {
					deferred.reject({
						success: false,
						status: status,
						message: "Http Error"
					});
				});

			return deferred.promise;
		}
	};
});