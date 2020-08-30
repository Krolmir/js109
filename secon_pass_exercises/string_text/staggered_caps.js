// Rules: If indx is even caps, else not caps

// Input: String
// Output: String

// Steps:
// Ittereate over the string split into an array .map
// if index even return char.Caps
// else lowercase

function staggeredCase(string) {
  return string
    .split('')
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"

// Modify our function above so that it ignores non-alphabetic characters when
// determinging whether it should upper or lower case letters.

// Steps:
// initialize a counter = 0
// itterate over the array
//  if is a character
//    if is even
//      return char to upperase coutner++
//    else
//      return char to lowercase coiunt++
//  else return cahr

function staggeredCaseTwo(string) {
  let counter = 1;
  return string
    .split('')
    .map(char => {
      if (char.toLowerCase() <= 'z' && char.toLowerCase() >= 'a') {
        counter++;
        if (counter % 2 === 0) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join('');
}

console.log(staggeredCaseTwo("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCaseTwo("ALL CAPS") === "AlL cApS");
console.log(staggeredCaseTwo("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");