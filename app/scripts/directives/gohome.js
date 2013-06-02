'use strict';

angular.module('AngularTryOutApp')
.directive('gohome', function () {
	return {
		//scope:{
			//testo: "@"
		//},
		template: '<div><a href="/">{{testo}}</a></div>',
		restrict: 'E',
		link: function (scope, element, attrs) {
			// body...
			scope.testo = attrs.testo;
			//element.text(scope.testo);
		}
	};
});
