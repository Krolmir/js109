// Problem: Write a function that takes an array of integers. They will either be
//          all odd excerpt for one or all even except for one. Your job is to
//          return that outlier.

// Rules: array will always be atleast 3 in length

// Input: Array of integers
// Output: Iteger outlier

// Steps:

// assign 2 count variables. one for odd one for even
// check first 3 numbers and check if theey are odd or even and assign to counts

// if 2 or more of one take that condition and search the array for the first opposite number

function findOutlier(array) {
  let oddCount = 0;
  let evenCount = 0;
  for (let count = 0; count < 3; count += 1) {
    if (array[count] % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }

  if (oddCount > 1) {
    return array.filter(num => num % 2 === 0)[0];
  } else {
    return array.filter(num => Math.abs(num) % 2 === 1)[0];
  }
}
console.log(findOutlier([12308796,-55454244,54933802,25474892,139510158,-170677960,41317970,109322108,-149477676,39180410,187374712,-52233722,104949742,-44398,-111439668,-110918193,-53246446,54251408,4577578,21967046,133758532,161199862,-142555632]));
console.log(findOutlier([0, 1, 2])); //, 1)
console.log(findOutlier([1, 2, 3])); //, 2)
console.log(findOutlier([2,6,8,10,3])); //, 3)
console.log(findOutlier([0,0,3,0,0])); //, 3)
console.log(findOutlier([1,1,0,1,1])); //, 0)