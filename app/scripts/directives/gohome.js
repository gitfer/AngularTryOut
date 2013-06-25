'use strict';

// 1. Directives go through a two-step process. In the first step (the compile phase), all
//    directives attached to a DOM element are found, and then processed. Any DOM
//    manipulation also happens during the compile step. At the end of this phase, a
//    linking function is produced.
// 2. In the second step, the link phase (the phase we used previously), the preceding
//    DOM template produced is linked to the scope. Also, any watchers or listeners are
//    added as needed, resulting in a live binding between the scope and the element.
//    Thus, anything related to the scope happens in the linking phase.

angular.module('AngularTryOutApp')
.directive('gohome', function () {
	return {
		//scope:{
			//testo: "@"
		//},
		template: '<div style="background-color: red"><a href="/">{{testo}}</a></div>',
		restrict: 'E',
		link: function (scope, element, attrs, controller) {
			// body...
			scope.testo = attrs.testo;
			//element.text(scope.testo);
		}
	};
});
