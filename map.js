const words = [3, 4, 5, 6, 7];

const map = function(array, callback){
  const results = []
  for (let item of array) {
    results.push(callback(item))
  }
  return results
}
const results1 = map(words, word => word*2);


module.exports = map;

