// write a function that takes a word and an array of words and returns an array
// of all words from the arraythat are anagrams

// Rules: Anagram = words that contain the same letters
// Example: eat, ate, tea

// Input: String and array of strings
// Output: Array

// Steps:
// itterate ovcer the array and comparre
// does word.split.sort.join === currentword.split.sort.join

function anagrams(word, array) {

  console.log(word.split('').sort().join(''));

  return array
    .filter(string => {
      return word
        .split('')
        .sort()
        .join('') === string
        .split('')
        .sort()
        .join('');
    });
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])); // => []