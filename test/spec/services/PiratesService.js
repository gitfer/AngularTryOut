'use strict';

describe('Service: PiratesService', function () {

  // load the service's module
  beforeEach(module('AngularTryOutApp'));

  // instantiate service
  var PiratesService;
  beforeEach(inject(function (_PiratesService_) {
    PiratesService = _PiratesService_;
  }));

  it('should do something', function () {
    expect(!!PiratesService).toBe(true);
  });

  it('should attach a list of N pirates', function () {
    expect(PiratesService.getPirates().length).toBe(3);
  });
});
