'use strict';

describe('Controller: EdittimelineCtrl', function () {

  // load the controller's module
  beforeEach(module('primeApp'));

  var EdittimelineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EdittimelineCtrl = $controller('EdittimelineCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EdittimelineCtrl.awesomeThings.length).toBe(3);
  });
});
