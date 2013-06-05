'use strict';

angular.module('AngularTryOutApp')
  .filter('myfavouritepirate', function () {
    return function (input) {
      return 'myfavouritepirate filter: ' + input.toUpperCase();
    };
  });
