const assertArrayEqual = require('../assertArrayEqual');
const eqArrays = require("../eqArrays");
// const assertEqual = require("../assertEqual")

assertArrayEqual([2,3,4],[2,3,4], true)
assertArrayEqual(['a','b','c'], ['a','d','c'], false);