// Write a function that takes a string as an argument and returns an array
// with each word followed by a space followed by word length

// Rules: empty string or empty arguments return empty array

// Input: String of words
// Output: Array

// Steps:
// Default paramater empty string
// if empty return empty array
// itterate over the string with map
//   return word + space + word length

function wordLengths(string = '') {
  if (string === '') return [];
  return string
    .split(' ')
    .map(word => {
      return word
        + ' '
        + word.length;
    });
}
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]
console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]
console.log(wordLengths(''));      // []
console.log(wordLengths());        // []