// Write a function that cipers strings based on 13 chars ahead

// Input: String
// Output: String

// Rules: a = n etc

// Steps:
// Create an array of the alphabet
// itterate over the string
// return index + 13 % 24

function rot13(string) {
  console.log(string);
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let alphabetCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return string
    .split('')
    .map(char => {
      console.log(`index of alpha${alphabet.indexOf(char)}`);
      console.log((alphabet.indexOf(char) + 13) % 23);
      if (char >= 'a' && char <= 'm') {
        return alphabet[(alphabet.indexOf(char) + 13)];
      } else if (char >= 'n' && char <= 'z') {
        return alphabet[((alphabet.indexOf(char) + 11) % 24)];
      } else if (char >= 'A' && char <= 'M') {
        return alphabetCaps[(alphabetCaps.indexOf(char) + 13)];
      } else if (char >= 'N' && char <= 'Z') {
        return alphabetCaps[((alphabetCaps.indexOf(char) + 11) % 24)];
      } else {
        return char;
      }
    })
    .join('');
}

console.log(rot13("testnn"));
// "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
console.log(rot13("Test"));
// "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))
