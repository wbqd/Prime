'use strict';

describe('Controller: EditpeopleCtrl', function () {

  // load the controller's module
  beforeEach(module('primeApp'));

  var EditpeopleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditpeopleCtrl = $controller('EditpeopleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditpeopleCtrl.awesomeThings.length).toBe(3);
  });
});
