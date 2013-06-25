'use strict';

angular.module('AngularTryOutApp', ['ngResource'])
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
      .when('/editPirata/:pirata', {
        templateUrl: 'views/editPirata.html',
        controller: 'EditPirataCtrl',
        resolve: {
            pirata: function(PiratesDeferredLoader) {
                  return PiratesDeferredLoader();
            }
        }
      })
      .when('/Recipe', {
        templateUrl: 'views/Recipe.html',
        controller: 'RecipeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
