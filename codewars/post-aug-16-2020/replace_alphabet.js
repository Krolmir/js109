// Write a function that given a string will replace every letter with its position
// in the alphabet.

// Rules: if it isnt a letter ignore it and don't return the character

// Input: String
// Output: new string of numbers

// Steps:
// Create a constant array of teh alphabet

// intialize result array
// split Ourstring with split('') and itterate over it (forEach)
//   if (ALPHA.includes(character))
//     result.push() our ALPHA index+ 1 of that char
// return result



function alphabetPosition(string) {
  let alpha = ('abcdefghijklmnopqrstuvwxyz').split('');
  return string.split('').map(char => {
    return (alpha.includes(char.toLowerCase()) ? alpha.indexOf(char.toLowerCase()) + 1 : '');
  }).filter(char => char !== '').join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."));
//, "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");