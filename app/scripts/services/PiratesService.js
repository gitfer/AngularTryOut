'use strict';

angular.module('AngularTryOutApp')
  .factory('PiratesService', function () {
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
      }
    };
  });
