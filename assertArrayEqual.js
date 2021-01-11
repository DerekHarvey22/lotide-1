const eqArrays = require('./eqArrays');
 

const assertArrayEqual = function(arr1, arr2, expected) {
  let actual = eqArrays(arr1,arr2)
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};
module.exports = assertArrayEqual;



