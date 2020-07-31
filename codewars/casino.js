// Problem: write a function solve that takes an array of 3 numbers which will
//          tell us how many chips are in each stack and then tell us how many
//          days we can last by taking away 2 chips a day but not from the same
//          pile.

// Rules: 3 stacks white chips: green chips: black chips:
//      : Can only take 1 chip perstack perday

// Input: Array of 3 numbers
// Output: Number of days we will last before our chips run out

// Steps:

// initilize a result variable to 0;
// run a while loop until 2 indexs opf the array = 0
// check which stacks have highest chips and takes away 1 from each then result + 1

function solve(array){
  let result = 0;
  while(true) {
    array.sort((a, b) => a - b);
    if ((array.includes(0, 0)) && (array.includes(0, 1))) break;
    array[2] -= 1;
    array[1] -= 1;
    result += 1;
  }

  return result;
}

console.log(solve([1,1,1]));//, 1
console.log(solve([1,2,1]));//, 2
console.log(solve([4,1,1]));//, 2
console.log(solve([8,2,8]));//, 9
console.log(solve([8,1,4]));//, 5
console.log(solve([7,4,10]));//, 10
console.log(solve([12,12,12]));//, 18
console.log(solve([1,23,2]));//, 3
