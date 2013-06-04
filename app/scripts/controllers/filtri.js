'use strict';

angular.module('AngularTryOutApp')
  .controller('FiltriCtrl',['$scope', 'PiratesService', function ($scope, PiratesService) {
    $scope.pirati = PiratesService.getPirates();
  }]);
