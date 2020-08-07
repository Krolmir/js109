// Write a function that takes a string argument and returns the same string
// with all the even indexed character uppercased and oddd lower cased

// Rules: A string can have multiple words
//        if it has multiple words each word is treated independently when dealing with index

// Input; String
// Output: String with alternating caps

// Steps:

// Create a suubmethod that just handles a word
//

function weirdItUp(string) {
  let arr = string.split('');
  return arr.map((char, index) => {
    if (index % 2 === 0) return char.toUpperCase();
    return char.toLowerCase();
  }).join('');
}

function toWeirdCase(string){
  if (string.split(' ').length === 1) {
    return weirdItUp(string);
  } else if (string.split(' ').length > 1) {
    return string.split(' ').map(word => {
      return weirdItUp(word);
    }).join(' ');
  }
}

console.log(toWeirdCase('This')); // 'ThIs');
console.log(toWeirdCase('is')); //), 'Is');
console.log(toWeirdCase('This is a test')); //), 'ThIs Is A TeSt');
