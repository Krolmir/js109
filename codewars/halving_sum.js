// Problem: Write a function that takes a positive integer and calclates
//          the sum of the element being halfed continuously until it equals 1;

// Rules: We are taking the floor of the division

// Input: Number
// Output: Sum of the Number halved until it reaches 0

// Steps:

// could use recursion here. When 1 is returned end the function
// when n === 1 return 1
// else call halvingSum(n)
//   Math.floor(n / 2);


function halvingSum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + halvingSum(Math.floor(n / 2));
  }
}

console.log(halvingSum(25)); //,47);
console.log(halvingSum(127)); //,247);