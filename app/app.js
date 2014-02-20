'use strict';

var App = angular.module('App', [
	'ngAnimate',
	'ngResource',
	'ngRoute',
	'ngSanitize'
]);

App.config(function ($routeProvider) {
	var home = {
		templateUrl: 'app/home/home.html',
		controller: 'HomeController'
	};

	var about = {
		templateUrl: 'app/about/about.html',
		controller: 'AboutController'
	};

	var gallery = {
		templateUrl: 'app/gallery/gallery.html',
		controller: 'GalleryController'
	};
});

App.run(function ($rootScope, $location, $anchorScroll) {
	$rootScope.scrollTo = function (elementID){
		alert('scrolling');

		// $(...).scrollTo( $('ul').get(2).childNodes[20], 800 );
	}
});




App.directive('scrollOnClick', function() {
	// var content = document.getElementById('js_site-content');

	// var scrollTo = function(offset) {
	// 	content.style["-webkit-transform"] = 'translate3d(0px, ' + offset + 'px, 0)';
	// 	content.style["-moz-transform"] = 'translate3d(0px, ' + offset + 'px, 0)';
	// 	content.style["-ms-transform"] = 'translate3d(0px, ' + offset + 'px, 0)';
	// 	content.style["-0-transform"] = 'translate3d(0px, ' + offset + 'px, 0)';
	// 	content.style["transform"] = 'translate3d(0px, ' + offset + 'px, 0)';
	// 	content.className = "";
	// };

	// var clearScroll = function() {
	// 	content.style["-webkit-transform"] = '';
	// 	content.style["-moz-transform"] = '';
	// 	content.style["-ms-transform"] = '';
	// 	content.style["-0-transform"] = '';
	// 	content.style["transform"] = '';
	// 	content.className = "animate";
	// }


	return {
	    restrict: 'A',
	    replace: false,
	    controller: function ($location, $anchorScroll) {


	    	$location.hash('bottom');
	    	$anchorScroll();
	    },
	    link: function(scope, $el, attrs) {
	    	var scrollId = attrs.href;

	    	$el.on('click', function() {

	    	});
	    }
	}
});