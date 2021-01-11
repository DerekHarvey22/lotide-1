const eqArrays = require('./eqArrays');

const assertArrayEqual = require('./assertArrayEqual');

const middle = function(arr){
  let midValue = []; 
  arr.length === 1 ? midValue = midValue :
  arr.length === 2 ? midValue = midValue : 
  arr.length % 2 === 0 ? midValue.push(arr[(arr.length/2)-1], arr[arr.length/2]) :
  midValue.push(arr[Math.floor(arr.length/2)])

  return midValue; 
};

console.log(middle([1,2,3]))
module.exports = middle; 
