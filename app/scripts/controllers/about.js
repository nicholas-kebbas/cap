'use strict';

/**
 * @ngdoc function
 * @name capApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the capApp
 */
angular.module('capApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
