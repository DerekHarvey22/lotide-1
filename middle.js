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

const middle = function(arr){
  let midValue = []; 
  arr.length === 1 ? midValue = midValue :
  arr.length === 2 ? midValue = midValue : 
  arr.length % 2 === 0 ? midValue.push(arr[(arr.length/2)-1], arr[arr.length/2]) :
  midValue.push(arr[Math.floor(arr.length/2)])

  return midValue; 
};

middle([1]) // => []
console.log(middle([1, 2, 3, 4, 5, 6]))


assertArrayEqual(middle([1, 2, 3, 4, 5, 6], [3, 4]))