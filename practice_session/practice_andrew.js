// Fibonacci Number Location By Length

// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

// Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// Examples:

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

// Don't try any higher values until you read the solution Discussion

// [1, 1, 2, 3, 5, 8, 13, 21,]

// Problem: Write a function that takes a number and returns the index of the first Fib number that has the same number of digits.

// Rules: A fib number is the 2 numbers before sumed, 1 and 2 are always 1

// Input: Number of digits
// Output: the index of that number

// Steps:

// itterate until condition met. we found a fib number === to the amount of digits in the argument
// initiaalize an array that stores all our fib numbers.
// keep adding until condition of digits === String(fib).length

// Fibonacci Seq
// fib = fib(n - 1) + fib(n - 2)
// fib 3 = 1 + 1 = 2
// fib 4 = 2 + 1 = 3


function fib(array) {
  return array[array.length - 1] + array[array.length - 2];
}

function findFibonacciIndexByLength(fibNumberLength) {
  let fibNumbers = [1, 1];
  let counter = 3;


  while(true) {
    fibNumbers.push(fib(fibNumbers));
    if (checkCondition(fibNumbers, fibNumberLength)) {
      break;
    }

  counter += 1;
  }

  return array[array.length - 1];
}

function checkCondition(array, length) {
  String(array[array.length - 1]).length < length;
}


// Solution

// function findFibonacciIndexByLength(length) {
//   let first = 1;
//   let second = 1;
//   let index = 2;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     index += 1;
//     first = second;
//     second = fibonacci;
//   } while (String(fibonacci).length < length);

//   return index;
// }