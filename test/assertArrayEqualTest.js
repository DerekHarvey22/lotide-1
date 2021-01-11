const assertArrayEqual = require('../assertArrayEqual');
const eqArrays = require("../eqArrays");
// const assertEqual = require("../assertEqual")
const assert = require('../node_modules/chai').assert;

describe('#AssertArrayEqual', () => {
  it('Should return true when given two identical arrays', () => {
    assert.strictEqual(assertArrayEqual([2,3,4],[2,3,4], true), true)
  })
  it('Should return false when given two different arrays', () => {
    assert.strictEqual(assertArrayEqual([2,3,5], [2,3,4], false), true)
  })
})
