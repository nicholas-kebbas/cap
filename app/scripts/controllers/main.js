'use strict';

/**
 * @ngdoc function
 * @name capApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capApp
 */
angular.module('capApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
