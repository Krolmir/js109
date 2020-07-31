// Problem: Write a function that takes 2 arguments, array of strings and a number
//          The number determines how many strings we will take from the array and combine
//          we want to return the strings in consecutive order as 1 long string.

// Rules: if n=0 or k > n or k <= 0 return ''

// Input: array of strings and a number
// Output: String

// Steps:

// declare a result variable with k lengths
// itterate over the strarr and check if current itteration string is > than string
// at result array[k], if it is then assign array[k] to current itteration
// sort the array before next itteration based on string length

// itterate over the array and find the longest string and delete it from the array
// itterate over the string again and find the longest string
// combine them

function longestConsec(strarr, k) {
  if (k > strarr.length || k <= 0 || strarr.length === 0) return '';
  let result = new Array(k);

  for (let idx = 0; idx < k; idx += 1) {
    for (let stringIdx = 0; stringIdx < strarr.length; stringIdx += 1) {
      if (result[idx] === undefined) {
        result[idx] = strarr[stringIdx];
      } else if (strarr[stringIdx] === undefined) {
        continue;
      } else if (strarr[stringIdx].length > result[idx].length) {
        result[idx] = strarr[stringIdx];
      }
    }
    strarr.splice(result[idx]);
  }

  return result.join('');
}

// function longestConsec(strarr, k) {
//   if (k > strarr.length || k <= 0 || strarr.length === 0) return '';
//   let result = new Array(k);

//   strarr.forEach(string => {
//     if (result[k - 1] === undefined) {
//       result[k - 1] = string;
//     } else if (string.length > result[k - 1].length) {
//       result[k - 1] = string;
//     }
//     result.sort(function(a, b){
//       return b.length - a.length;
//     });
//   });

//   return result.join('');
// }



console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); //, "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))//, "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3))//, "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))//, "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2))//, "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))//, "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))//, "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))//, "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0))//, "")