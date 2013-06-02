'use strict';

angular.module('AngularTryOutApp')
.controller('ListAndDetailsCtrl',['$scope', 'PiratesService', function ($scope, PiratesService) {
	$scope.pirati = PiratesService.getPirates();
	$scope.pirataSelected = PiratesService.find({name: 'Elaine'})
	$scope.setSelected = function(pirata){
		$scope.pirataSelected = PiratesService.find({name: pirata.name});
	};
	$scope.doSubmit = function(){
		alert('salvato');
	};
}]);
