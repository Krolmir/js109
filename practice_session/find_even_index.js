// Write a functiuon that takes an array of integers and return the index
// of the array that allows the left side to equal the right side

// Rules: if no solution satisfies the coindition return -1

// Input: Array of integers
// Output: number

// Steps:
// if array.length = 0 return 0
// Itterate over the array, start at index 1
//   take the reduce of sliced left side and reduce of sliced right side
//   compare to see if values are the same, if yes return index

function find_even_index(array) {
  if (array.length === 0) return 0;
  let leftSide = 0;
  let rightSide = 0;

  for (let idx = 1; idx < array.length - 1; idx++) {
    leftSide = array.slice(0, idx);
    rightSide = array.slice(idx + 1, array.length);
    leftSide = leftSide.reduce((a, b) => a + b);
    rightSide = rightSide.reduce((a, b) => a + b);

    if (leftSide === rightSide) {
      return idx;
    }
    // console.log(`left side = ${leftSide}`);
    // console.log(`rightSide = ${rightSide}`);
  }

  return -1;
}


console.log(find_even_index([1, 1, 2])); // == 2
console.log(find_even_index([1, 2, 3, 4, 3, 2, 1])); // == 3
console.log(find_even_index([1, 100, 50, -51, 1, 1])); // == 1
console.log(find_even_index([1, 2, 3, 4, 5, 6])); // == -1
console.log(find_even_index([20, 10, 30, 10, 10, 15, 35])); // == 3
console.log(find_even_index([30, -80, 10, 10, 15, 35, 20])); // == 6
console.log(find_even_index([-1, -2, -3, -4, -3, -2, -1])); // == 3
