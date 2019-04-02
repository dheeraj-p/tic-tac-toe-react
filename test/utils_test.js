const assert = require('assert');
const { isSubset } = require('../src/models/utils');

describe('isSubset', function() {
  it('should return true if a given set is subset of a given super set', function() {
    const subsetCandidate = [1, 2, 3];
    const superSet = [1, 2, 3, 5, 6];

    assert.equal(true, isSubset(subsetCandidate, superSet));
  });

  it('should return false if a given set is not a subset of a given super set', function() {
    const subsetCandidate = [1, 4, 3];
    const superSet = [1, 2, 3, 5, 6];

    assert.equal(false, isSubset(subsetCandidate, superSet));
  });
});
