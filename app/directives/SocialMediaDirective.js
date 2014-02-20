'use strict';

App.directive('socialMedia', function () {
	var template = '' +
		'<nav class="social-media">' +
			'<ul class="nav navbar-nav">' +
				'<li ng-if="links.facebook"><a class="icon-social icon-facebook" title="Facebook" target="_blank" href="{{links.facebook}}"><img height="25px"src="assets/images/icons/facebook.png"/></a></li>' +
				'<li ng-if="links.twitter"><a class="icon-social icon-twitter" title="Twitter" target="_blank" href="{{links.twitter}}"><img height="25px"src="assets/images/icons/twitter.png"/></a></li>' +
				'<li ng-if="links.youtube"><a class="icon-social icon-youtube" title="YouTube" target="_blank" href="{{links.youtube}}"><img height="25px"src="assets/images/icons/youtube.png"/></a></li>' +
				'<li ng-if="links.instagram"><a class="icon-social icon-instagram" title="YouTube" target="_blank" href="{{links.instagram}}"><img height="25px"src="assets/images/icons/instagram.png"/></a></li>' +
			'</ul>' +
		'</nav class="social-media"';

	return {
		restrict: 'E',
		replace: true,
		template: template,
		scope: true,
		controller: function($scope, SocialMediaService) {
			// SocialMediaService.getLinks().then(function (data) {
			// 	$scope.links = data;
			// });

			$scope.links = SocialMediaService.getLinks();
		}
	};
});