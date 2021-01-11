const assertArrayEqual = require('../assertArrayEqual');
const eqArrays = require("../eqArrays");
// const assertEqual = require("../assertEqual")

assertArrayEqual(eqArrays([2,3,4],[2,3,4]), true)
assertArrayEqual(eqArrays(['a','b','c'], ['a','d','c']), false);