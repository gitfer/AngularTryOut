'use strict';

describe('Controller: ListAndDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularTryOutApp'));

  var ListAndDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListAndDetailsCtrl = $controller('ListAndDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of 3 pirates to the scope', function () {
    expect(scope.pirati.length).toBe(3);
  });
});
