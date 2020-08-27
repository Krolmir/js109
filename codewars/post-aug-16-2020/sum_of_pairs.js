// Write a function that takes an array of integers and determines the indexes
// of the first pair of numbers that === the second parameter

// Example: [1, 2, 4, 6, 2], 10
//         = [4, 6]

// Rules: Return the first pair based on indexes

// Input: Array of integers, value
// Output: Array of 2 integers that add to the value

// Steps:
// Intialzie index Tracker to 1.
//

// for (let index1 = 1, index1 < array.length; index1 ++)
//   for(let index2 = 0; index2 < index1: index2++)
//     if(array index1 + arrayindex2 === value )
//        retun [array[index1], array[index2]]

function sum_pairs(array, value) {
  for (let idxOne = 1; idxOne < array.length; idxOne++) {
    for (let idxTwo = 0; idxTwo < idxOne; idxTwo++) {
      if (array[idxOne] + array[idxTwo] === value) {
        return [array[idxTwo], array[idxOne]];
      }
    }
  }
}

let l1= [1, 4, 8, 7, 3, 15];
let l2= [1, -2, 3, 0, -6, 1];
let l3= [20, -13, 40];
let l4= [1, 2, 3, 4, 1, 0];
let l5= [10, 5, 2, 3, 7, 5];
let l6= [4, -2, 3, 3, 4];
let l7= [0, 2, 0];
let l8= [5, 9, 13, -3];

console.log(sum_pairs(l1, 8));
//+"" == [1, 7]+"", "Basic: ["+l1+"] should return [1, 7] for sum = 8");
console.log(sum_pairs(l2, -6));
//+"" == [0, -6]+"", "Negatives: ["+l2+"] should return [0, -6] for sum = -6");
console.log(sum_pairs(l3, -7));
//== undefined, "No Match: ["+l3+"] should return undefined for sum = -7");
console.log(sum_pairs(l4, 2));
//+"" == [1, 1]+"", "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
console.log(sum_pairs(l5, 10));
//+"" == [3, 7]+"", "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
console.log(sum_pairs(l6, 8));
//+"" == [4, 4]+"", "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
console.log(sum_pairs(l7, 0));
//+"" == [0, 0]+"", "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
console.log(sum_pairs(l8, 10));
//+"" == [13, -3]+"", "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");
