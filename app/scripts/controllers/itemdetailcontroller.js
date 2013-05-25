var itemDetailController = function($scope, ItemsService, $routeParams){
	$scope.itemdetail = ItemsService.findByName($routeParams.Name);
};
