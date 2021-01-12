const eqArrays = require('./eqArrays');


const assertArrayEqual = require('./assertArrayEqual');


const flatten = function (array) {
  newArr = [];

  for (let arr of array) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
      }
    } else {
      newArr.push(arr);
    }
  }
  return newArr;
}
module.exports = flatten; 