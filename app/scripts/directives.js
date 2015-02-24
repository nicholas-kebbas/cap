'use strict';

/* Directives */
var capControllers = angular.module('capControllers', []);

capControllers.directive('superman', function(){
	return {
		restrict: 'E',
		template: '<div> Here I am to save the day </div>'
	};
});