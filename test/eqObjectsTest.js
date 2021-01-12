const eqObjects = require('../eqObjects');
const assert = require('chai').assert

describe(`#eqObjects`, () => {
it("Should return true when two objects are the same", () => {
    let object1 = {
      a: {
        z: 1
      },
      b: 2
    }
    let object2 = {
      a: {
        z: 1
      },
      b: 2
    }
    assert.strictEqual(eqObjects(object1, object2), true)
  })
  it("Should return false when they are not the same", () => {
    let object1 = {
      a: {
        z: 3
      },
      b: 2
    }
    let object2 = {
      a: {
        z: 1
      },
      b: 2
    }
    assert.strictEqual(eqObjects(object1, object2), false)
  })
})
