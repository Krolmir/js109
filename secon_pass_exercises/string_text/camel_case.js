// Write a function that takes a string as an argument and returns that string
// with all forms of upper and lower case swapped

// Rules: ALl non alpha characters remain unchanged

// Input: String
// Output: String

// Steps:
// Split and itterate over the string with map
// if char = uppercase {swap}
// if char = lowercase {swap}
// else return char

function swapCase(string) {
  return string.split('').map(char => {
    if (char.toUpperCase() === char) {
      return char.toLowerCase();
    } else if (char.toLowerCase() === char) {
      return char.toUpperCase();
    }
    // } else {
    //   return char;
    // }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"