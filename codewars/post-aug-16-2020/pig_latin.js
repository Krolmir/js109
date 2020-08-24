// Write a function that takes a string and returns a new string with the first
// letter of eachword to the end of it followed by 'ay'. punctuation goes untouched

// Example: test this out! Yes!
//          esttay histay utoay! esYay!

// Input: string
// Output: new String

// Steps:
// Split the string into an array of words
// itterate over the array of words with map
//   return slice(1, string.length) + first char + ay
// join the array to a string

let regex = new RegExp(/[^a-z0-9]/, 'gi');

function pigIt(str){
  let result = str.split(' ').map(word => {
    console.log(word.match(regex));
    if (word.match(regex) !== null) return word;
    return word.slice(1, word.length) + word.slice(0, 1) + 'ay';
  });

  return result.join(' ');
}

console.log(pigIt('Pig latin is cool !')); //'igPay atinlay siay oolcay')
console.log(pigIt('This is my string')); //'hisTay siay ymay tringsay')