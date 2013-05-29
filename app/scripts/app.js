var myAppModule = angular.module('miaApp', ['ngLocale']);

myAppModule.config(function($routeProvider){
	$routeProvider
		.when('/directives/', {templateUrl: '/app/views/firstDirectives.html'})
		.when('/controllers/', {controller: 'ItemsController', templateUrl: '/app/views/controllers.html'})
		.when('/table/', {templateUrl: '/app/views/table.html'})
		.when('/itemdetail/:Name', {controller: itemDetailController, templateUrl: '/app/views/itemdetail.html' })
		.otherwise({redirectTo: '/'});
});
myAppModule.factory('ItemsService', itemsService);
myAppModule.controller('ItemsController',['$scope', 'ItemsService', '$location', itemsController]);
myAppModule.controller('ItemDetailController',['$scope', 'ItemsService', '$routeParams', itemDetailController]);
myAppModule.directive('showHeaderLink', [ '$rootScope', '$location', showHeaderLink ]);
