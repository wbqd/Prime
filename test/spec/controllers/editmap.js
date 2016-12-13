'use strict';

describe('Controller: EditmapCtrl', function () {

  // load the controller's module
  beforeEach(module('primeApp'));

  var EditmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditmapCtrl = $controller('EditmapCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditmapCtrl.awesomeThings.length).toBe(3);
  });
});
