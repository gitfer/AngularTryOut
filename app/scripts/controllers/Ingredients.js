'use strict';

angular.module('AngularTryOutApp')
.controller('IngredientsCtrl', function ($scope) {
		$scope.ingredienti = [
		{ ingrediente: 'acciuga', prezzo: 1},
		{ ingrediente: 'spaghetti', prezzo: 3}
		];
		$scope.aggiungiIngrediente =function(item){
		if($scope.costoMassimo == 30)
		alert('Puoi aggiungere ingredienti');
		else
		alert('non puoi aggiungere ingredienti');
		};
		});
