const sumAll = function (first, second) {
  let totalSum = 0;
  let highestNum, lowestNum;
  if (first > second) {
    highestNum = first;
    lowestNum = second;
  } else {
    lowestNum = first;
    highestNum = second;
  }

  if (
    (lowestNum > 0) &
    (highestNum > 0) &
    Number.isInteger(lowestNum) &
    Number.isInteger(highestNum)
  ) {
    for (let i = lowestNum; i <= highestNum; i++) {
      totalSum += i;
    }
    return totalSum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
