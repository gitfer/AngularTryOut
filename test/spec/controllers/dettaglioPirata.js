'use strict';

describe('Controller: DettaglioPirataCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularTryOutApp'));

  var DettaglioPirataCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DettaglioPirataCtrl = $controller('DettaglioPirataCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
