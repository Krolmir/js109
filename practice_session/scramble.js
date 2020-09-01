// write a function that returns true if a portion of str1 can be
// rearanged to match str2

// Rules: looks like case insensitive

// Input: 2 Strings
// Output: boolean

// Steps:
// initialize an array assign it to string1.split
// itterate over string 2
// if string2 char is inside string 1
//   delete it from string 1 continue
//  else return false

function scramble(string1, string2) {
  let array = string1.split('');

  for (let idx = 0; idx < string2.length; idx++){
    if (array.indexOf(string2[idx]) === -1) return false;
    array.splice(array.indexOf(string2[idx]), 1);
  }

  return true;
}

console.log(scramble('javaass', 'jjss')); // == false
console.log(scramble('rkqodlw', 'world')); // == true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // == true
console.log(scramble('katas', 'steak')); // == false
console.log(scramble('scriptjava', 'javascript')); // == true
console.log(scramble('scriptingjava', 'javascript')); // == true
