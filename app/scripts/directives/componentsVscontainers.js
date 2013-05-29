myAppModule.directive('capitolo', function(){
	return {
		restrict: "E", // puo' assumere EACM (element, attribute, class, comMent)
		scope: {
			zona: "@"
		},
		template:"<h4>Capitolo:</h4><div>{{zona}}</div>"
	};
});
