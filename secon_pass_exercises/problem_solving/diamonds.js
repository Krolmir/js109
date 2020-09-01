// Write a program that displays a diamond based on an odd integer argument

// Input: Odd Integer
// Output: String representation of a diamond

// Rules: Input Has to be Odd

// Steps:
// Initalize a result array = []
// initailzie frontCount = count / 2 . floor, backCount = 0
// itterate front coutn times decrementing until 0 backcount + 2
//  result.push frontCount * ' ' + backCount * '*'
// itterate over ther areray
// console log each time

function diamond(count) {
  if (count === 1) return console.log('*');

  let result = [];
  let frontCount = Math.floor(count / 2);
  let backCount = 1;
  while (frontCount > 0) {
    result.push(' '.repeat(frontCount) + '*'.repeat(backCount));
    backCount += 2;
    frontCount--;
  }

  result.push('*'.repeat(count));

  result = result.concat(result.slice(0, result.length - 1).reverse());
  result.forEach(diamond => {
    console.log(diamond);
  });
}

diamond(1);
// logs
// *
diamond(3);
// logs
//  *
// ***
//  *
diamond(9);
// logs
//    *
//   ***
//  *****
// *******
//*********
// *******
//  *****
//   ***
//    *