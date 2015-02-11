'use strict';

/* Services */

var capServices = angular.module('capServices', ['ngResource']);

capServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
