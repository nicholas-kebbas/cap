'use strict';

/* Controllers */

var capControllers = angular.module('capControllers', []);

capControllers.controller('PhoneListCtrl', function ($scope, $http){
    $http.get('phones/players.json').success(function(player) {
    $scope.players = player;
    });
});

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


capControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneRank: $routeParams.phoneName}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
}]);

capControllers.controller('TeamDetailCtrl', ['$scope', '$routeParams', 'Team',
  function($scope, $routeParams, Team) {
    $scope.team = Team.get({teamRank: $routeParams.teamName}, function(team) {
      $scope.mainImageUrl = team.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
}]);