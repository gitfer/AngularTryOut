'use strict';

angular.module('AngularTryOutApp')
.controller('ConditionalsCtrl',['$scope','PiratesService', function ($scope, Pirates) {

	$scope.pirati = Pirates.getPirates();
	$scope.emitSoundIfPirate = function (isPirate) {
	return (isPirate === true ? 'Arrrr': '');
	}

}]);
