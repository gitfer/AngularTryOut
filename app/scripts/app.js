'use strict';

angular.module('AngularTryOutApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/conditionals', {
        templateUrl: 'views/conditionals.html',
        controller: 'ConditionalsCtrl'
      })
      .when('/listAndDetails', {
        templateUrl: 'views/listAndDetails.html',
        controller: 'ListAndDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
