// Problem: Write a function that takes a number and returns the sum of all
//          multiples of 3 and 5 exclusive of the Number
// Rules: If we take 10 as our number multiples would be 3 6 5 9 but not 10
//        If the number is a multiple of both it only copunter once
// Input: Number
// Output: Sum of Multiples (number)

// Steps:

// Assign a total variable array or number
// ittarate with a for loop up to number
// check if the number is a multipl oif 3 or 5 if so add it
// return total

function multiplesThreeFive(number) {
  let total = 0;

  for (let count = 1; count < number; count += 1) {
    if (count % 3 === 0 || count % 5 === 0) {
      total += count;
    }
  }

  return total;
}

console.log(multiplesThreeFive(10)); // 23
