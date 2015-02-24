'use strict';

/* Controllers */

var capControllers = angular.module('capControllers', []);

capControllers.controller('PlayerListCtrl', function ($scope, $http){
    $http.get('phones/players.json').success(function(player) {
    $scope.players = player;
    });
});

capControllers.directive('position', function () {
  return {
    restrict: 'E',
    scope: {},

    controller: function ($scope) {
      $scope.positions = [];

      this.addGuard = function () {
        $scope.positions.push('Guard');
      };
      this.addForward = function () {
        $scope.positions.push('Forward');
      };
      this.addCenter = function() {
        $scope.positions.push('Center');
      };
    },

    link: function (scope, element) {
      element.bind('mouseenter', function () {
        console.log(scope.positions);
      });
    }};

  capControllers.directive('Guard', function(){
    return {
      require: 'position',
      links: function (scope, element, attrs, positionCtrl) {
        positionCtrl.addGuard();
      }};
  });

  capControllers.directive('Forward', function(){
    return {
      require: 'position',
      links: function (scope, element, attrs, positionCtrl) {
        positionCtrl.addForward();
      }};
  });

  capControllers.directive('Center', function(){
    return {
      require: 'position',
      links: function (scope, element, attrs, positionCtrl) {
        positionCtrl.addCenter();
      }};
  });
});

capControllers.controller('PlayerDetailCtrl', ['$scope', '$routeParams', 'Player',
  function($scope, $routeParams, Player) {
    $scope.player = Player.get({playerRank: $routeParams.playerName}, function(player) {
      $scope.mainImageUrl = player.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
}]);

capControllers.filter('addcomma', function(){
  return function(commas){
    return commas.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
});

capControllers.controller('TeamCtrl', function ($scope, $http){
    $http.get('phones/teams.json').success(function(data) {
    $scope.teams = data;
  });
});




capControllers.controller('TeamDetailCtrl', ['$scope', '$routeParams', 'Team',
  function($scope, $routeParams, Team) {
    $scope.team = Team.get({teamRank: $routeParams.teamName}, function(team) {
      $scope.mainImageUrl = team.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
}]);