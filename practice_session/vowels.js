// Write a method that returns the array of string passed as an argument with all the
// vowels removed.

//

let regex = new RegExp('[aeiou]','gi')

function removeVowels(array) {
  return array.map(string => {
    return string.replace(regex, '');
  });

}

console.log(removeVowels(['hello', 'green', 'black']));

const regex = /[^a-z0-9]/gi;
'aseqw2y[xcv]3,...fef3'.replace(regex, '');
