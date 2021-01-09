const min = function (numbers) {
  let a = numbers[0];
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < a) {
      a = numbers[i];
    }
  }
  return a;
}

module.exports = min; 