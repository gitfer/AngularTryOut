'use strict';

describe('Controller: ConditionalsCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularTryOutApp'));

  var ConditionalsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConditionalsCtrl = $controller('ConditionalsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
