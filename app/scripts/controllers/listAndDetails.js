'use strict';

angular.module('AngularTryOutApp')
.controller('ListAndDetailsCtrl',['$scope', '$location', 'PiratesService', function ($scope, $location, PiratesService) {
	$scope.pirati = PiratesService.getPirates();
	$scope.pirataSelected = PiratesService.find({name: 'Elaine'})
	$scope.setSelected = function(pirata){
		$scope.pirataSelected = PiratesService.find({name: pirata.name});
	};	
	$scope.edit = function(){
		$location.path('/#/filtri/');
	};
	$scope.doSubmit = function(){
		alert('salvato');
	};
}]);
