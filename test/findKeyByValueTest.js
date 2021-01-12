const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe(`#findKeyByValue`, () => {
  it(`Should give 'age' when given the value 21`, () => {
    const obj = {
      name: 'name',
      age : 21,
      gender: 'gender'
    };
    assert.strictEqual(findKeyByValue(obj, 21), 'age')
  })
})