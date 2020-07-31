// Problem: Given an array find the integer that appears an odd number of times

// Rules: There will always be only one integer that appears an odd number of times
//        Odd is 1 3 5 7 .......

// Input: Array of Integers
// Output: Number

// Steps:

// find the integer that appears an odd number of times
// Itterate over the array until you find the odd integer
// call .every on the array and put the current number in
// check the resulting array length, if its odd return the number

function findOdd(array) {
  let result;

  array.forEach(number => {
    if (array.filter(curValue => curValue === number).length % 2 === 1) {
      result = number;
    };
  });
  return result;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));//, 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));//, -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));//, 5);
console.log(findOdd([10]));//, 10);
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));//, 10);
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));//, 1);
