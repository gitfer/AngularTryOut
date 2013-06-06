'use strict';

angular.module('AngularTryOutApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      '/#/controllers',
      '/#/directives',
      '/#/servicesAndForms',
      '/#/filtri',
      '/#/Recipe',
      'Karma, DeepLinking, routing, templating, test unitari e e2e, batarang'
    ];
  });
