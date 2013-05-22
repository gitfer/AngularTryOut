var myAppModule = angular.module('miaApp', ['ngLocale']);
myAppModule.config(function($routeProvider){
	$routeProvider
		.when('/primo/', {templateUrl: '/AngularTryOut/partials/firstDirectives.html'})
		.when('/secondo/', {templateUrl: '/AngularTryOut/partials/controllers.html'})
		.otherwise({redirectTo: '/'});
});
myAppModule.controller('ItemsController', itemsController);
