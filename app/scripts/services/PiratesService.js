'use strict';

angular.module('AngularTryOutApp')
  .factory('PiratesService', ['$filter', function ($filter) {
    // Service logic
    // ...

    var pirates = [
                {name: 'Guybrush', surname: 'Threepwood', isPirate: false},
                {name: 'Elaine', surname: 'Marley', isPirate: false},
                {name: 'Pirate', surname: 'LeChuck', isPirate: true}
            ];

    // Public API here
    return {
      getPirates: function () {
        return pirates;
      },
      find: function(obj){
		var piratiTrovati =$filter('filter')(pirates, obj);
		return { name: piratiTrovati[0].name,
			surname: piratiTrovati[0].surname,
			isPirate: piratiTrovati[0].isPirate};
      }
    };
  }]);
