'use strict';

// Un controller per funzionalita (es. uno per menu, uno per breadcrumb..)
angular.module('AngularTryOutApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      '/#/controllers',
      '/#/directives',
      '/#/servicesAndForms',
      '/#/filtri',
      '/#/Recipe',
      'Karma, DeepLinking, routing, templating, test unitari e e2e, batarang'
    ];
  }]);

// // Oppure la forma alternativa specificando la inject property:
// function MainCtrl($scope){

// }
// MainCtrl.$inject = ['$scope'];