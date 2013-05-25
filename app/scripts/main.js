var myAppModule = angular.module('miaApp', ['ngLocale']);
myAppModule.config(function($routeProvider){
	$routeProvider
		.when('/primo/', {templateUrl: '/AngularTryOut/app/views/firstDirectives.html'})
		.when('/secondo/', {templateUrl: '/AngularTryOut/app/views/controllers.html'})
		.when('/table/', {templateUrl: '/AngularTryOut/app/views/table.html'})
		.otherwise({redirectTo: '/'});
});
myAppModule.controller('ItemsController', itemsController);
