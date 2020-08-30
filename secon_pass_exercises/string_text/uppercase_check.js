// Rules: Ignore non alphaetical chjaracters

// Inpuit: String
// Output: Boolean

// Steps:
// write regex stripping all non alpha characters
// itterate over string and check if every case of it is Uppercase
//   char === char.toUpperCase()

function isUppercase(string) {
  let regex = new RegExp('[^a-z]', 'gi');

  return string.replace(regex, '').split('').every(char => {
    return char === char.toUpperCase();
  });
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true