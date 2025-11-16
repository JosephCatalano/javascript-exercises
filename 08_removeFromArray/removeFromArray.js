const removeFromArray = function (array, num) {
  for (let i = array.length; i >= 0; i--) {
    if (array[i] == num) {
      array.splice(i, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
