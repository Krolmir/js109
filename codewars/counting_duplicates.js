// Prroblem: Write a function that will return the count of distinct
// case-insensitive alphabetic characters and numeric digits that occur more
// than once in the input string. The input string can be assumed to contain
// only alphabets (both uppercase and lowercase) and numeric digits.

// Test Cases: 'aaabbhgffs' ==> 3 - a,b,f

// Input: String//
// Output: number of characters that occur multiple times


// intialize result
// intialize an array set it to the string split
// itterate until array is empty.
// take first element and see if the array.slice(1 - array.length) matches
//   if mataches add 1 to result and delete all occurences of the element

function duplicateCount(string) {
  let result = 0;
  let arr = string.split('').map(char => char.toLowerCase());

  while (arr.length !== 0) {
    if (arr.slice(1, arr.length).includes(arr[0])) {
      result += 1;
    }
    arr = arr.filter(char => {
      return arr[0] !== char;
    });
  }

  return result;
}

console.log(duplicateCount("")); //, 0);
console.log(duplicateCount("abcde")); //, 0);
console.log(duplicateCount("aabbcde")); //, 2);
console.log(duplicateCount("aabBcde")); //, 2,"should ignore case");
console.log(duplicateCount("Indivisibility")); //, 1)
console.log(duplicateCount("Indivisibilities")); //, 2, "characters may not be adjacent")