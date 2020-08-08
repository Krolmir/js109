// Problem: Write a function that takes a string and checks if its a panagram

// Rules: Panagram is any string that contains all character a-z case insensitive

// Input: String
// Output: Boolean

// Steps:

// Use .every to check if every character in the alphabet is included in a string
//

const ALPHA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' , 'm',
               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y' ,'z'];

function isPangram(string){
  return ALPHA.every(char => {
    return string.toLowerCase().includes(char);
  });
}

let string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string)); //, true)
string = "This is not a pangram."
console.log(isPangram(string)); // , false)
