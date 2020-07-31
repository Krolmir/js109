// Problem: Write a function that takes a string and returns the string with the same
//          characters, but with each characters it duplicates itself by 1.

// Rules: repeat the characters by the index +1 it sits at.
//        seperate each character with a '-'
//        capitalize the first character

// Input: String
// Output: String

// Steps:

// split the string into an array
// itterate over it with an index counter
// push the current charcter multioplied by the index to a results array
// capitalize each string in the array
// join it with '-'


function accum(string) {
  let result = [];
  string.split('').forEach((char, index) => {
    result.push(char.toLowerCase().repeat(index + 1));
  });

  return result.map(str => {
    return str[0].toUpperCase() + str.slice(1, str.length);
  }).join('-');
}

console.log(accum("ZpglnRxqenU")); //, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB")); //, "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU")); //, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM")); //, "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC")); //, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
