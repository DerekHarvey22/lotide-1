const eqArrays = function (arr1, arr2) {
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


const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
  }
};


const flatten = function (array) {
  newArr = [];

  for (let arr of array) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
      }
    } else {
      newArr.push(arr);
    }
  }
  console.log(newArr);
}

flatten([1, 2, [3, 4], 5, [6]]);
