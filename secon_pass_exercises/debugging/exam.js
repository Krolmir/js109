// WRite a function that taskes a string with numbers and returns the same string
// with the numbers reversed

// Input: String
// Output: String

// Steps:
// Regex to strip the alphacharacters and hav an array of numbers
// getNumberArray
// itterate over the string
//   when char is number replace it with numArray.pop();
// return string

function getNumberArray(string) {
  let regex = new RegExp('[a-z]', 'gi');
  return string.replace(regex, '');
}

function numberReverser(string) {
  let numArray = getNumberArray(string).split('');
  return string
    .split('')
    .map(char => {
      if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
        return char;
      } else {
        return numArray.pop();
      }
    })
    .join('');
}

console.log(numberReverser('thies412dmkd1212do123'));