   'use strict';

angular.module('AngularTryOutApp')
   .factory('PiratesDeferredLoader', ['$resource', '$route', '$q',
   function($resource, $route, $q) {
     return function() {
       var delay = $q.defer();

       $resource('/pirates/:id', {id: '@id'}).get({id: $route.current.params.pirateId, isArray: true}, function(pirate) {
         delay.resolve(pirate);
    }, function() {
      delay.reject('Unable to fetch pirate '+ $route.current.params.recipeId);
    });
    return delay.promise;
  };
}]);
