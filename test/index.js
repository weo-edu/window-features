var assert = require('assert');
var wndFeatures = require('..');

describe('window-features', function() {
  it('should work', function() {
    assert.equal(wndFeatures({width: 100, height: 100}), 'width=100,height=100');
    assert.equal(wndFeatures({width: 420, height: 230, resizable: true, scrollbars: true, status: 1}), 'width=420,height=230,resizable=yes,scrollbars=yes,status=1')
  });
});