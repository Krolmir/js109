// Write a function that takes a string of numbers = to the weights of people
// at the ffc gym and returns a string of numbers in the order based on the sum
// of the digits.

// Rules: Equal sums will be sorted based on alphabetical ordering
// strings can be empty.
// there may be trailing and leading whitespaces and more than a unique whitespace
// between 2 consecutive numbers
// Dont modify input

// Input: String
// Output: String

// Example: ("22 5 24 30")
//         = "30 22 5 24"

// Steps:
// initalize a str and assign it to the string
// eliminate trailing and leading whitespace,
// elminate multiple white spaces to = 1 space inbettwen numbers

// itterate over the string by splitting it iby ' '
// .map the str = val
// return val.split('').reduce((a, b) => Number(a) + Number(b))

// write a string compare function that compares 1 number at a time

function stringSum(num) {
  return num.split('').reduce((c, d) => Number(c) + Number(d));
}

function orderWeight(string) {
  let str = string.replace(/\s+/g,' ').trim().split(' ');

  str.sort((a, b) => {
    if (stringSum(a) === stringSum(b)) return a.localeCompare(b);
  });

  return str.join(' ');
}

console.log(orderWeight(" 103   123 4444  99 2000")); //, "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
// , "11 11 2000 10003 22 123 1234000 44444444 9999")
