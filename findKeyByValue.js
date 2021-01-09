const assertEqual = require('./assertEqual');

const findKeyByValue = function (object, value) {
  for (var keys of Object.keys(object)) {
    if (object[keys] === value) {
      return keys
    }
  }
};

module.exports = findKeyByValue; 