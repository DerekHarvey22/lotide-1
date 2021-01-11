const eqArrays = function(arr1, arr2) {
  let value = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++){
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
        value = eqArrays(arr1[i], arr2[i])
      } else if (arr1[i] === arr2[i]){
        value = true
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return value;
};

const assertEqual = require('./assertEqual');

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) 
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) 

module.exports = eqArrays; 