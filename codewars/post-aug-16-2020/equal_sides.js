// You are going to be given an array of integers. Your job is
// to take that array and find an index N where the sum of the
// integers to the left of N is equal to the sum of the integers
// to the right of N. If there is no index that would make this
// happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}: Your
// function will return the index 3, because at the 3rd position
// of the array, the sum of left side of the index ({1,2,3}) and
// the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}: Your function
// will return the index 1, because at the 1st position of the
// array, the sum of left side of the index ({1}) and the sum of
// the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal
// to 0 in this problem)
// Index 0 is the place where the left side and right side are
// equal.

// Note: Please remember that in most programming/scripting
// languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in
// the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal
// to the side to the right of N. If you do not find an index that
// fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the
// lowest correct index.

// Rules: return -1 if no index suffices
//        return the first index if multiple answers

// Input: Array of Numbers
// Output: Number based on Index

// Steps:
// itterate over the array starting at index 1
//   compare the sum of index 0 - currentItterationIndex
//   to curentItterattionIndex - array.length
//   If === return index
// if we itterate over the whole array - 1 with no luck
// return -1

function findEvenIndex(array) {
  if (array.length === 0) return -1;
  for (let index = 1; index < array.length - 2; index++) {
    // console.log(array.slice(0, index));
    // console.log(array.slice(index + 1, array.length));

    if (array.slice(0, index).reduce((a, b) => a + b) ===
        array.slice(index + 1, array.length).reduce((a, b) => a + b)) {
          return index;
    }
  }
  console.log(array.slice(1, array.length - 1).reduce((a, b) => a + b));
  if (array.slice(1, array.length).reduce((a, b) => a + b) === 0) {
    return 0;
  } else if (array.slice(0, array.length - 1).reduce((a, b) => a + b) === 0) {
    return array.length - 1;
  }
  return -1;
}

// console.log(findEvenIndex([1,2,3,4,3,2,1]));
// //,3, "The array was: [1,2,3,4,3,2,1] \n");
// console.log(findEvenIndex([1,100,50,-51,1,1]));
// //,1, "The array was: [1,100,50,-51,1,1] \n");
// console.log(findEvenIndex([1,2,3,4,5,6]));
// //,-1, "The array was: [1,2,3,4,5,6] \n");
// console.log(findEvenIndex([20,10,30,10,10,15,35]));
//,3, "The array was: [20,10,30,10,10,15,35] \n");
console.log(findEvenIndex([20,10,-80,10,10,15,35] ));