// Write a function that takes a string and capitalizes all the words and lower
// cases anything else

// Rules: a word is any sequence of non=whitespace characters

// Input: String
// Output: String

// Steps:
// itterate overs the string split to an array
//  return string(0) caps, return rest of string lowercase
// join

function wordCap(string) {
  return string.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'