'use strict';

angular.module('AngularTryOutApp')
.controller('DettaglioPirataCtrl', ['$scope', '$routeParams', 'PiratesService', function($scope, $routeParams, PiratesService) {
	$scope.pirata = PiratesService.find({id: $routeParams.id});
}]);


