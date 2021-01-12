const eqArrays = require('./eqArrays');

const assertArrayEqual = require('./assertArrayEqual');

const letterPositions = function(sentence) {
  let newString = sentence.toLowerCase()
  let counter = {}; 

  for (let i = 0; i < newString.length; i++){
    newString[i] === ' ' ? i++ : 
      counter[newString[i]] === undefined ? counter[newString[i]] = [i] : 
      counter[newString[i]].push(i)
    }
    return counter; 
  };

  module.exports = letterPositions; 
