const eqArrays = require('./eqArrays');


const assertArrayEqual = require('./assertArrayEqual'); 

const without = function (source, exclude) {
  newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!exclude.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};


console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))

module.exports = without; 