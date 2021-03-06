var itemsController = function ($scope, ItemsService, $location) {
	//Recupero items tramite servizio
	$scope.items = ItemsService.query();
	$scope.ordering = 'Value';
	$scope.$watch('query', function(itm){
		$scope.searchItem = itm;
	});
	$scope.clear = function(){
		$scope.searchItem = 
			$scope.query = "";
	};
	$scope.detail = function(item){
		//alert('Prezzo '+item.Name+': '+item.Value);
		//$location.path('/itemdetail/'+item.Name);
		$scope.selezionato=ItemsService.findByName(item.Name);
	};
};
