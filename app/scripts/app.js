var myAppModule = angular.module('miaApp', ['ngLocale']);
myAppModule.config(function($routeProvider){
	$routeProvider
		.when('/primo/', {templateUrl: '/app/views/firstDirectives.html'})
		.when('/secondo/', {templateUrl: '/app/views/controllers.html'})
		.when('/table/', {templateUrl: '/app/views/table.html'})
		.otherwise({redirectTo: '/'});
});
myAppModule.controller('ItemsController', itemsController);
