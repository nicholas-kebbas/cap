'use strict';

/* App Module */

var capApp = angular.module('capApp', [
  'ngRoute',
  'capAnimations',
  'capControllers',
  'capFilters',
  'capServices',
  'angularUtils.directives.dirPagination'
]);

capApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/nba_players', {
        templateUrl: 'views/nba/nba_players.html',
        controller: 'PlayerListCtrl'
      }).
      when ('/nba_teams', {
        templateUrl: 'views/nba/teams.html',
        controller: 'TeamCtrl'
      }).
      when ('/nba_teams/:teamName', {
        templateUrl: 'views/nba/team_detail.html',
        controller: 'TeamDetailCtrl'
      }).
      when('/nba_players/:playerName', {
        templateUrl: 'views/nba/detail.html',
        controller: 'PlayerDetailCtrl'
      }).
      when('/nhl_players', {
        templateUrl: 'views/nhl/nhl_players.html',
        controller: 'PlayerListCtrl'
      }).
      when ('/nhl_teams', {
        templateUrl: 'views/nhl/teams.html',
        controller: 'TeamCtrl'
      }).
      when ('/nhl_teams/:teamName', {
        templateUrl: 'views/nhl/team_detail.html',
        controller: 'TeamDetailCtrl'
      }).
      when('/nhl_players/:PlayerName', {
        templateUrl: 'views/nhl/detail.html',
        controller: 'PlayerDetailCtrl'
      }).
      when('/nfl_players', {
        templateUrl: 'views/nfl/nfl_players.html',
        controller: 'PlayerListCtrl'
      }).
      when ('/nfl_teams', {
        templateUrl: 'views/nfl/teams.html',
        controller: 'TeamCtrl'
      }).
      when ('/nfl_teams/:teamName', {
        templateUrl: 'views/nfl/team_detail.html',
        controller: 'TeamDetailCtrl'
      }).
      when('/nfl_players/:PlayerName', {
        templateUrl: 'views/nfl/detail.html',
        controller: 'PlayerDetailCtrl'
      }).
      when('/mlb_players', {
        templateUrl: 'views/mlb/mlb_players.html',
        controller: 'PlayerListCtrl'
      }).
      when ('/mlb_teams', {
        templateUrl: 'views/mlb/teams.html',
        controller: 'TeamCtrl'
      }).
      when ('/mlb_teams/:teamName', {
        templateUrl: 'views/mlb/team_detail.html',
        controller: 'TeamDetailCtrl'
      }).
      when('/mlb_players/:PlayerName', {
        templateUrl: 'views/mlb/detail.html',
        controller: 'PlayerDetailCtrl'
      }).
     otherwise({
        redirectTo: '/nba_players'
      });
  }]);
