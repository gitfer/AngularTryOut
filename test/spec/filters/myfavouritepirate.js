'use strict';

describe('Filter: myfavouritepirate', function () {

  // load the filter's module
  beforeEach(module('AngularTryOutApp'));

  // initialize a new instance of the filter before each test
  var myfavouritepirate;
  beforeEach(inject(function ($filter) {
    myfavouritepirate = $filter('myfavouritepirate');
  }));

  it('should return the input prefixed with "myfavouritepirate filter:"', function () {
    var text = 'angularjs';
    expect(myfavouritepirate(text)).toBe('myfavouritepirate filter: ' + text);
  });

});
