'use strict';

angular.module('AngularTryOutApp')
  .controller('RecipeCtrl', function ($scope) {
    $scope.istruzioni = "Fare bollire l'acqua, buttare la pasta";
    $scope.tempoPreparazione = 10;
    $scope.costoMassimo = 30;
  });
