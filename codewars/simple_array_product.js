// Write a function that takes a multidimensional array and returns the max
// product of taking 1 element from each array

// Rules: Find max product by taking 1 number from each array.

// Input: Multidimensional array
// Output: Number

// Steps:

// find all combinations of numbers
// get product
// return highest

// Find all combinations
// [1, 2], [3, 4] = [1, 3] [1, 4], [2, 3], [2, 4]
// itterate over the first subarray
// itterate over the next subarray



function solve(array) {
  let result = [];

  for (let subIndex = 0; subIndex < array[0].length; subIndex += 1) {
    for (let index = 0; index < array[1].length; index += 1) {
      result.push([array[0][subIndex], array[1][index]]);
    }
  }

  return result;
}

console.log(solve([[1, 2],[3, 4]]));//,8);
console.log(solve([[10,-15],[-1,-3]]));//,45);
// console.log(solve([[-1,2,-3,4],[1,-2,3,-4]]));//,12);
console.log(solve([[-11,-6],[-20,-20],[18,-4],[-20, 1]]));//,17600);
console.log(solve([[14,2],[0,-16],[-12,-16]]));//,3584);
console.log(solve([[-3,-4],[1,2,-3]]));//,12);
