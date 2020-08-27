// Write a function that takes an array of 10 integers between 0 and 9 and then
// returns a string version of a phone number

// Rules: Format '(xxx) xxx-xxxx'

// Input: Array
// Output: String

// Steps:

// return '(' with slice.join + ) + slice.join + - + slice.join

function createPhoneNumber(array) {
  return '(' + array.slice(0, 3).join('') + ')'
         + ' ' + array.slice(3, 6).join('') + '-'
         + array.slice(6, array.length).join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //, "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //, "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //, "(123) 456-7890");