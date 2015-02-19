'use strict';

/* App Module */

var capApp = angular.module('capApp', [
  'ngRoute',
  'capAnimations',
  'capControllers',
  'capFilters',
  'capServices'
]);

capApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/players', {
        templateUrl: 'views/main.html',
        controller: 'PhoneListCtrl'
      }).
      when ('/teams', {
        templateUrl: 'views/teams.html',
        controller: 'TeamCtrl'
      }).
      when ('/teams/:teamId', {
        templateUrl: 'views/team_detail.html',
        controller: 'TeamDetailCtrl'
      }).
      when('/players/:phoneId', {
        templateUrl: 'views/detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/players'
      });
  }]);
