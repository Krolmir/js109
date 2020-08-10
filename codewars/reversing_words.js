// Write a function that takes a string of one or m,ore words and returns the
// same string but with all five or more letter words reveresed

// Rules: Strings will contain only letters and spaces

// Input: String
// Output: string with reversed words 5 or more letters

// Steps:

// Split the string .map i think
// check if current word.length > 4
//   reverse current word
// else return original word

function spinWords(string) {
  return string.split(' ').map(word => {
    if (word.length > 4) return word.split('').reverse().join('');
    return word;
  }).join(' ');
}


console.log(spinWords("Welcome")) //, "emocleW");
console.log(spinWords("Hey fellow warriors")) //, "Hey wollef sroirraw");
console.log(spinWords("This is a test")) //, "This is a test");
console.log(spinWords("This is another test")) //, "This is rehtona test");
console.log(spinWords("You are almost to the last test")) //, "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more")) //, "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one")) //, "ylsuoireS this is the last one");