// Problem: Write a function that takes a positive integer and returns its
//          multiplivative persistence, which is the number of times you must
//          multiply the digits in the number until you reach a single digit

// Rules: If we have 39 we do 3 * 9 = 27 then 2 * 7 = 14 then 4 * 1 = 4
//        single digit reached took 3 times .

// Input: number
// Output: Number of times we were persistent

// Steps:

// lets assign a persistent counter = 0;
// start a loop that itterates as long as num > 9
// String(number).split('')
// call reduce *
// reasign number
// return count

function persistence(num) {
  let counter = 0;
  while(num > 9) {
   num = String(num).split('').reduce((a, b) => a * b);
   counter += 1;
  }

  return counter;
}

console.log(persistence(39)); //3);
console.log(persistence(4)); //0);
console.log(persistence(25)); //2);
console.log(persistence(999)); //4);