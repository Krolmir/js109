// Problem: Write a function that splits the string into suub strings of 2 char
// Rules: if the string is odd length the last pair should end with an underscore _

// Input: String
// Output: Array of 2char strings

// Steps:

// initalize a results array
// itterate with a for loop. incretment counter by +2
// slice(index, index + 2)

// if string.length % 2 === 1
//   result[result.length] = result[result.length] + '_'

function solution(str){
  let result = [];

  for (let idx = 0; idx < str.length; idx += 2) {
    result.push(str.slice(idx, idx + 2));
  }

  if (str.length % 2 === 1) {
    result[result.length - 1] = result[result.length - 1] + '_';
  }

  return result;
}

console.log(solution("abcdef")); // ["ab", "cd", "ef"]);
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]);
console.log(solution("")); // []);
