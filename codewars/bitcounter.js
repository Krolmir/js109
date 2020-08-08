// Problem: Write a function that takes a digit and returns the amount of digits
//          it will have in the form of a binary number

// Rules: a binary number is found by taking the remainder of number / 2
//         8 in binary = 8 % 2 = 0, 4 % 2 = 0,  2 % 2 = 0  , 1 % 2 = 1
//        = 1000

// Input: Number
// Output: Length of the binary numbers

// Steps:

// Make the input into b9inary
//


function getBinary(num) {
  if (num === 0) return '0';
  let binary = '';
  while (num !== 0) {
    // console.log(`Binary number is ${binary}`);
    // console.log(`num is ${num}`);
    binary += num % 2;
    num = Math.floor(num / 2);
  }
  return binary.split('').reverse().join('');
}


function countBits(n) {
  return getBinary(n).split('').filter(number => {
    return number === '1';
  }).length;
}

console.log(countBits(0)); //, 0);
console.log(countBits(4)); //, 1);
console.log(countBits(7)); //, 3);
console.log(countBits(9)); //, 2);
console.log(countBits(10)); //, 2);