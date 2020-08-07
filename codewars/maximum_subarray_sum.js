// Problem: Write a function that takes an array of numbers and determines
//          the greatest sum of a subsection of the array. Contiguous subsequence

// Rules: [1, -4, 9, 2] == 11 [9, 2]
//       I think the main rule here is that as your calculating the sum of the
//       array, the second it gets into the negative you reset the counter to zero

// INput: array
// Output: greatest total

// Steps:

// initialize result array
// initiliza a total varibale and assign to 0
// itteratee over the array with for each and add the current value to total
//   if total < 0 reset total to 0 before next itteration
//   push total to result array
// retrun Math.max(resultArray)

function maxSequence(arr) {
  if (arr.length === 0) return 0;
  let result = [];
  let total = 0;

  arr.forEach(value => {
    total += value;
    result.push(total);
    if (total < 0) total = 0;
  });

  if (Math.max(...result) < 0) return 0;
  return Math.max(...result);
}

console.log(maxSequence([])); //, 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //, 6);
