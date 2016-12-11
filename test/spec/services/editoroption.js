'use strict';

describe('Service: editorOption', function () {

  // load the service's module
  beforeEach(module('primeApp'));

  // instantiate service
  var editorOption;
  beforeEach(inject(function (_editorOption_) {
    editorOption = _editorOption_;
  }));

  it('should do something', function () {
    expect(!!editorOption).toBe(true);
  });

});
