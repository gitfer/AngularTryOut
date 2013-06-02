'use strict';

angular.module('AngularTryOutApp')
.controller('ListAndDetailsCtrl',['$scope', '$filter', 'PiratesService', function ($scope, $filter, PiratesService) {
	$scope.pirati = PiratesService.getPirates();
	$scope.pirataSelected = $scope.pirati[0];
	$scope.setSelected = function(pirata){
		var piratiTrovati =$filter('filter')($scope.pirati, {name: pirata.name});
		$scope.pirataSelected = piratiTrovati[0];
	};
}]);
