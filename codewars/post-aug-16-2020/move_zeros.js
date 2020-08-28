// Write a function that takes an array and returns the array with all 0's to the
// end, preserving the order of the other elements

// Rules: Order must be preserved .
//        0's moved to the end

// Input : array of elements
// Output: array

// Steps:
// initial;ize zero counter
// while loop while idx < array.length
//   if val = 0 remove it and dont incrtemenet idx. zeroCounter++
//   else idx ++
// itterate zerpCounter times and keeppushing 0's to the array

function moveZeros(arr) {
  let zeroCounter = 0;
  let idx = 0;
  while (idx < arr.length) {
    if (arr[idx] === 0) {
      zeroCounter++;
      arr.splice(idx, 1);
    } else {
      idx++;
    }
  }

  while (zeroCounter > 0) {
    arr.push(0);
    zeroCounter--;
  }

  return arr;
}

console.log(moveZeros([0, 1, 3, 0, 4]));
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
//([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
