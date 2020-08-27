// Write a function that takes 2 arrays and returns the first array with all
// the values that apopear in array two removed.

// Rules: if there is a 2 in array 2 and 5 2's in array 1 you remove all cases

// Input: 2 Arrays
// Output: first Array

// Steps:
// itterate over the second array.
//   filter over the first array returning all non matches
// return array

function array_diff(arrOne, arrTwo) {
  arrTwo.forEach(arrTwoValue => {
    arrOne = arrOne.filter(arrOneValue => {
      return arrOneValue !== arrTwoValue;
    });
  });

  return arrOne;
}

console.log(array_diff([1,2], [1]))//, [2], "a was [1,2], b was [1], expected [2]")
console.log(array_diff([1,2,2], [1]))//, [2,2], "a was [1,2,2], b was [1], expected [2,2]")
console.log(array_diff([1,2,2], [2]))//, [1], "a was [1,2,2], b was [2], expected [1]")
console.log(array_diff([1,2,2], []))//, [1,2,2], "a was [1,2,2], b was [], expected [1,2,2]")
console.log(array_diff([], [1,2]))//, [], "a was [], b was [1,2], expected []")
