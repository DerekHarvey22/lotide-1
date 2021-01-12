const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = function (object1, object2) {
  boolean = true;
  let key1 = Object.keys(object1).sort();
  let key2 = Object.keys(object2).sort();
  const digger = function (object) {
    let array = ''
    for (let el in object) {
      if (typeof object[el] === 'object') {
        array += digger(object[el]);
      } else if (typeof object[el] === 'number') {
        array += object[el];
      }
    }
    return array;
  }
  if (eqArrays(key1, key2)) {
    if (digger(object1) === digger(object2)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = eqObjects; 


