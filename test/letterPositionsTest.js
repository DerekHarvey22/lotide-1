const assert = require('../node_modules/chai').assert;
const letterPositions = require('../letterPositions');

describe(`#LetterPositions`, () => {
  it(`Should provide { c: [ 0 ], a: [ 1 ], t: [ 2 ] }, when given the word cat`, () => {
    assert.deepEqual(letterPositions('cat'), { c: [ 0 ], a: [ 1 ], t: [ 2 ] })
  })
  it(`Should provide { c: [ 0 ], a: [ 1, 9 ], t: [ 2, 10 ], n: [ 5 ], d: [ 6 ] } when given cat and hat`, () => {
    assert.deepEqual(letterPositions('cat and hat'), { c: [ 0 ], a: [ 1, 9 ], t: [ 2, 10 ], n: [ 5 ], d: [ 6 ] })
  } )
})