'use strict';

angular.module('AngularTryOutApp')
  .factory('PiratesService', ['$filter', function ($filter) {
    // Service logic
    // ...

    var pirates = [
                {id: 1, name: 'Guybrush', surname: 'Threepwood', isPirate: false},
                {id: 2, name: 'Elaine', surname: 'Marley', isPirate: false},
                {id: 3, name: 'Pirate', surname: 'LeChuck', isPirate: true}
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
			id: piratiTrovati[0].id,
			isPirate: piratiTrovati[0].isPirate};
      }
    };
  }]);
