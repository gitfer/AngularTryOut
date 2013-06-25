'use strict';

angular.module('AngularTryOutApp')
.controller('EditPirataCtrl', ['$scope', '$location', 'pirata', function($scope, $location, pirata) {
  $scope.pirata = pirata;

  $scope.save = function() {
    $scope.pirata.$save(function(pirata) {
     $location.path('/#/dettaglioPirata/' + pirata);
    });
   };

	$scope.remove = function() {
	  delete $scope.pirata;
	   $location.path('/');
	};
}]);

