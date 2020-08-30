// Write a function that takes a string and returns an object with the 3
// key value pairs seen in the example

// Input: string
// Output: Object

// Steps:
// Write 3 regex
// alpha characters, numbers, anything else
// initialize and assign an object to { lowercase: 0, ....}
// lower case = string.replace(regex, '').length

function letterCaseCount(string) {
  let regexLower = new RegExp('[^a-z]', 'g');
  let regexUpper = new RegExp('[^A-Z]', 'g');
  let regexAll = new RegExp('[a-z]', 'gi');

  let obj = { lowercase: string.replace(regexLower, '').length,
              uppercase: string.replace(regexUpper, '').length,
              neither: string.replace(regexAll, '').length }

  return obj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }