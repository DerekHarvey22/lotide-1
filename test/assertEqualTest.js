const assertEqual = require('../assertEqual')

const assert = require('../node_modules/chai').assert;

describe('#AssertEqual', () => {
  it('Should return false when given two different strings', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false)
  })
  it('Should return true when given two of the same strings', () => {
    assert.strictEqual(assertEqual('1', '1'), true)
  })
})
