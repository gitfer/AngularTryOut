var showHeaderLink = function($rootScope, $location) {
	function Hide(element){
		var isVisible = $location.absUrl().indexOf("http://localhost:8082/app/#/itemdetail") === 0;
		if(isVisible)
			element.addClass('hide');
		else
			element.removeClass('hide');
	}
	return {
		link: function(scope, element, attrs) {
			$rootScope.$on('$routeChangeStart', function() {
				Hide(element);
			});
			$rootScope.$on('$routeChangeSuccess', function() {
				Hide(element);
			});
		}
	};
};

