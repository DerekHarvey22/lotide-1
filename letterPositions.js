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

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
  }
};

const letterPositions = function(sentence) {
  let newString = sentence.toLowerCase()
  let counter = {}; 

  for (let i = 0; i < newString.length; i++){
    newString[i] === ' ' ? i++ : 
      counter[newString[i]] === undefined ? counter[newString[i]] = [i] : 
      counter[newString[i]].push(i)
    }
    return counter; 
  }
