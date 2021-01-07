const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  let value = false;
  if (arr1.length !== arr2.length){
    return false; 
  }
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


const eqObjects = function (object1, object2) {
  let boolean = true; 
  let key1 = Object.keys(object1);
  
  let key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    boolean = false; 
  }

  for (let key of key1) {
    if (Array.isArray(object1[key]) && Array.isArray([object2[key]])) {
      boolean = eqArrays(object1[key], object2[key]);
      
    } else if (object1[key] !== object2[key] && object1[key].length !== object2[key].length) {
      boolean = false
    }
  }
  return boolean 
}


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}; 

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false