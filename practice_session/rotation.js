function rotateArray(array) {
  if ((typeof array) !== 'object') return undefined;
  if (array.length === 0) return [];
  let result = array.slice();
  result.push(result.shift());

  return result;
}

function rotateRightmostDigits(number, count) {
  let array = String(number).split('');
  let front = array.slice(0, array.length - count);
  let back = array.slice(array.length - count, array.length);

  back = rotateArray(back);
  return front.join('') + back.join('');
}

// Write a function that takes a number and rotates it like so.
// Example 1234
//          [2,3,4,1]
//          [2,4,1,3]
//          [2,4,3,1]

// Input NUmber
// Output: Max rotated number

// Steps:
// initlaize a results array
// call rotateRight..... on full number , and number length
//  slice the front number of that and push it in the results array
//  slice the rest and call rotateRight.... again

function maxRotation(number) {
  let result = [];

  for (let count = String(number).length; count > 0; count--) {
    let temp = rotateRightmostDigits(number, String(number).length);
    result.push(temp.slice(0, 1));
    number = temp.slice(1, count);
  }

  return Number(result.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845