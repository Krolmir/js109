// Problem: Write a function that takes a string and returns that string
//          sorted based on the numerical values found in the individual words

// Rules: Numbers will be from 1-9
//        If string is empty return empty string

// Input: String
// Output: String ordered

// Steps:

// Initialize a results array
// Split the string into an array of words and itterate over the array
// strip the string of all non numerical characters
// put the original word at the index of whats left

// return result joined

function order(string) {
  if (string === '') return '';
  let result = [];
  let regex = /[^1-9]/g;

  return string.split(' ').sort((a, b) => {
    return a.replace(regex, '') - b.replace(regex, '');
    // result[word.replace(regex, '') - 1] = word;
  }).join(' ');

  // return result.join(' ');
}

console.log(order("is2 Thi1s T4est 3a")); //, "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //, "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order("")); //, "", "Empty input should return empty string")