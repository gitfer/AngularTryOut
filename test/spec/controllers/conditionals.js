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

  it('emitSoundIfPirate should return sound if is pirate', function () {
    expect(scope.emitSoundIfPirate(true)).toBe('Arrrr');
    expect(scope.emitSoundIfPirate(false)).toBe('');
  });
});
