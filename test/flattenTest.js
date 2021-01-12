const assert = require('../node_modules/chai').assert;
const flatten = require('../flatten');

describe(`#flatten`, () => {
  it('returns [1,2,3,4,5,6], when given nested array [1,2,[3,4],5,6]', () => {
    assert.deepEqual(flatten([1,2,[3,4],5,6]), [1,2,3,4,5,6])
  })
})