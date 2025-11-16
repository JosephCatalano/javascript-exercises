const repeatString = function (string, num) {
  let newstring = "";
  if (num >= 0) {
    for (let i = 0; i <= num - 1; i++) {
      newstring = string + newstring;
    }
    return newstring;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
