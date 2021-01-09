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
  console.log(newArr);
}

flatten([1, 2, [3, 4], 5, [6]]);

module.exports = flatten; 