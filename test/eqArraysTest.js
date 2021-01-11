const assert = require('../node_modules/chai').assert;
const eqArrays = require('../eqArrays');

describe("#EqArrays", () => {
  it('Should return true when 2 arrays are the same', () => {
    assert.deepEqual(eqArrays([2,3,4], [2,3,4]), true); 
  })
  it('Should return true when there are identical nested Arrays', () => {
    assert.deepEqual(eqArrays([[1],[2],[3]],[[1],[2],[3]]), true)
  })
})
