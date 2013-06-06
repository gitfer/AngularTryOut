'use strict';

angular.module('AngularTryOutApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/directives', {
        templateUrl: 'views/conditionals.html',
        controller: 'ConditionalsCtrl'
      })
      .when('/servicesAndForms', {
        templateUrl: 'views/listAndDetails.html',
        controller: 'ListAndDetailsCtrl'
      })
      .when('/filtri', {
        templateUrl: 'views/filtri.html',
        controller: 'FiltriCtrl'
      })
      .when('/dettaglioPirata/:id', {
        templateUrl: 'views/dettaglioPirata.html',
        controller: 'DettaglioPirataCtrl'
      })
      .when('/Recipe', {
        templateUrl: 'views/Recipe.html',
        controller: 'RecipeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
