var itemsController = function ($scope) {
	$scope.items = [
		{
		Name: "Trasmissione",
		Value: 22,
		Categoria: "Auto"
	},
	{
		Name: "Telescopio",
		Value: 3.4,
		Categoria: "Ottica"
	},
	{
		Name: "Penna",
		Value: 8.4,
		Categoria: "Cancelleria"
	}
	];
	$scope.ordering = 'Value';
	$scope.$watch('query', function(itm){
		$scope.searchItem = itm;
	});
	$scope.clear = function(){
		$scope.searchItem = 
		$scope.query = "";
	};
};
