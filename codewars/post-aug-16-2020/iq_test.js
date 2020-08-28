// We need to figure out if the array of numbers contains mostly evens or odds.
// Based on that return the index + 1 of the value that is different than most.

// QUestrions: Is there always goign to be number space number format?
//             Will the input string always containt only numbers?

// Rules: index + 1 is returned becuase this is a real IQ test
//        odd = i % 2 === 1
//        even = i % 2 === 0

// Input: String of numbers
// Output: Number

// Steps:
// declare & initialize an odd variable
// convert the string to an  array
// determine if the string has odd numbers or even mainly
// find the opposite of above and return its index + 1

// Function isArrayOdd
// if (out of the first 3 values 2 are odd return true)
// arr[0]isOdd && arr[1]isOdd || arr[1]isOdd && arr[2]isOdd  || arr[0]isOdd && arr[2]isOdd

// Function searchArray
// if odd === true
// for loop idx up too array length
//  if val !== isOdd return idx +1

function isOdd(num) {
  return num % 2 === 1;
}

function isArrayOdd(arr) {
  return isOdd(arr[0]) && isOdd(arr[1]) ||
         isOdd(arr[1]) && isOdd(arr[2]) ||
         isOdd(arr[0]) && isOdd(arr[2]);
}

function searchArray(odd, arr) {
  if (odd === true) {
    for (let idx = 0; idx < arr.length; idx++) {
      if (isOdd(arr[idx]) === false) return idx + 1;
    }
  } else {
    for (let idx = 0; idx < arr.length; idx++) {
      if (isOdd(arr[idx]) === true) return idx + 1;
    }
  }
}

function iqTest(numbers){
  let arr = numbers.split(' ');
  let odd = isArrayOdd(arr);

  return searchArray(odd, arr);
}

console.log(iqTest("2 4 7 8 10")); //3);
console.log(iqTest("1 2 2")); // 1);
