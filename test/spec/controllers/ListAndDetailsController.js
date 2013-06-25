'use strict'

decribe('ListAndDetailsCtrl', function () {

	beforeEach(module("AngularTryOutApp"))
	var scope, $listAndDetailsConstructor,mockPiratesService;
	beforeEach(function (inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		mockPiratesService = sinon.stub({pirati: function () {
			// body...
		}});
		$listAndDetailsConstructor = $controller;
	})
			    ));
			    it('should load pirates by service', function () {
				    var mockPirates = {};
				    mockPiratesService.getPirates().returns(pirati[10])
				    var listAndDetailsCtrl = $listAndDetailsConstructor(scope, mockPiratesService)
				    {scope: "primo", mockPiratesService }

				    expect(scope.pirate).toBe(mockPirates);
			    })
})
