// const assertEqual = require("./assertEqual");

const countLetters = function(string) {
  let newString = string.toLowerCase().split(' ').join('')
  let counter = {};
  for (let str of newString){
    counter[str] === undefined ? counter[str] = 1 : counter[str] = counter[str] + 1
  }
  return counter; 
}




module.export = countLetters; 