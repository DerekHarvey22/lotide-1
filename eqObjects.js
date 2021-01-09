const assertEqual = require('./assertEqual');
const eqArrays = require(',/eqArrays');


const eqObjects = function (object1, object2) {
  let boolean = true; 
  let key1 = Object.keys(object1);
  console.log(key1)
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

module.exports = eqObjects; 