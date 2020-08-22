// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "(" if that character
// appears only once in the original string, or ")" if that character
// appears more than once in the original string. Ignore
// capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes

// Assertion messages may be unclear about what they display in
// some languages. If you read "...It Should encode XXX", the
// "XXX" is the expected result, not the input!

// Rules: Space counts as a character

// Input: String
// Output: String

// Steps:
// create characterObject
//   Will itterate over the string passed and return an object
//   that has char as keys and values as the amount of time that
//   character shows up
//   example: characterObject('helloo')
//   should return { h: 1, e: 1, l: 2, o: 2 }
// initialize a resultString
// itterate over the original string (thinking map)
// if obj.char > 1 return ')'
// else return '('

function characterObject(string) {
  let object = {};
  string.split('').map(chr => chr.toLowerCase()).forEach(char => {
    if (object[char] >= 1) {
      object[char] += 1;
    } else {
      object[char] = 1;
    }
  });

  return object;
}

function duplicateEncode(string) {
  let obj = characterObject(string);
  return string.split('').map(char => {
    if (obj[char.toLowerCase()] > 1) {
      return ')';
    } else {
      return '(';
    }
  }).join('');
}

console.log(duplicateEncode("din")); //,"(((");
console.log(duplicateEncode("recede")); //,"()()()");
console.log(duplicateEncode("Success")); //,")())())","should ignore case");
console.log(duplicateEncode("(( @")); //,"))((");


