// Write a functio nthat takes an array of strings and returns an array
// of the same values with all vowels removed

// Input: array
// Output: Array

// Steps:
// write a regex to match vowels
// itterate over the array
//   strip- vowels

function removeVowels(array) {
  let regex = new RegExp('[aeiou]', 'gi');

  return array.map(word => word.replace(regex, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]