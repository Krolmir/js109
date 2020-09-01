// Write a function that computes the difference betteween the square of the sum of the
// first count positive intergers and the sum of the suqares of the first count

// Example : 3 = (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
//             = 22

// Input : Intger
// Output: Integer

// Steps:
// for loop count times
//   2 running totals varibles
//   sumSquare and squareSum
//   return difference

function sumSquareDifference(num) {
  let [sumSquare, squareSum] = [0, 0];

  for (let count = 1; count <= num; count++) {
    sumSquare += count;
    squareSum += count**2;
  }

  return sumSquare**2 - squareSum;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150