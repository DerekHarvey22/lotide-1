const assertEqual = require('./assertEqual');

const findKey = function (object, callback) {
  let keyHolder = '' 
  for(let names in object){
    if (callback(object[names])){
      keyHolder = names
      break;
    } else {
      keyHolder = undefined
    }
  }
  return keyHolder;
};

module.exports = findKey; 