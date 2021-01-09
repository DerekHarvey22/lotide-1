const eqArrays = function(arr1, arr2) {
  let value = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      value = true;
    } else {
      value = false;
      break;
    }
  }
  
  return value;
};

const assertEqual = require('./assertEqual');


module.export = eqArrays; 