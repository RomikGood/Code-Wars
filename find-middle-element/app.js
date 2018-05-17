var gimme = function (inputArray) {
  let sortedArray = inputArray.slice().sort(function(a, b){return a - b});
  return inputArray.indexOf(sortedArray[1]);
};