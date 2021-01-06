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

const without = function (source, exclude) {
  newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!exclude.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};


console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))