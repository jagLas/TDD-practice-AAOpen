function isFive(num) {
  if (num === 5) {
    return true;
  }
  return false;
}

function isOdd(number) {
  if (typeof number !== 'number') {
    throw Error('Input is not a number');
  }

  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function myRange(min, max, step = 1) {
  let newNums = [];

  while (min <= max) {
    newNums.push(min);
    min += step;
  }

  return newNums;
}


module.exports = { isFive, isOdd, myRange };