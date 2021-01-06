const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let newString = string.toLowerCase().split(' ').join('') // making sure the string is just a string of lowercase letters
  let counter = {};
  for (let str of newString){
    counter[str] === undefined ? counter[str] = 1 : counter[str] = counter[str] + 1
    // if (counter[str] === undefined){
    //   counter[str] = 1; 
    // } else {
    //   counter[str] = counter[str] + 1 
    // }
  }
  return counter; 
  // console.log(newString); 
  // console.log(counter)
}


console.log(countLetters('This is it'))



//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

//Therefore countLetters("lighthouse in the house") would return:

// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
