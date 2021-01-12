const assert = require('../node_modules/chai').assert;
const countOnly = require('../countOnly');

describe(`#countOnly`, () => {
  it("Returns 2 when we count Fang in an object", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    });
    assert.strictEqual((result1['Fang']), 2)
  })

  it("Should return Undefined if we call on a name that isn't there", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    });
    assert.strictEqual((result1['Karima']), undefined)
  })

  it("Should return undefined if we aren't wanting to call the name", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    });
    assert.strictEqual((result1["Agouhanna"]), undefined)
  })
})