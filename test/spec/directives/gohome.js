'use strict';

describe('Directive: gohome', function () {
  beforeEach(module('AngularTryOutApp'));

  var element;

  it('should make element gohome with a text', inject(function ($rootScope, $compile) {
    element = angular.element('<gohome testo="aaa"></gohome>');
    element = $compile(element)($rootScope);
    debugger;
    expect($rootScope.testo).toBe('aaa');
  }));
});
