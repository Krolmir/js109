// Problem: Write a function that returns all possible permutations of a given
//          string

// Rules: Permutation is all combinations of characters
//        'abc' = ['abc', 'acb, bac', 'bca', cab', 'cba']
//        'abcd' = | abcd, bcda, cdab, dabc, | abdc, bdca, dcab, cabd, | adbc,  dbca, bcad,
//                 cadb, | adcb, dcba, cbad, badc, | dacb, acbd, cbda, bdac, |
//        delete duplicates

//                                abcd
//                    a(bcd)                   b(acd)  c(abd)  d(abc)
//          ab(dc)      ac(bd)      ad(bc)
//        abcd abdc | acdb acbd | adcb adbc

// Input: String
// Output: array of permutations

// Steps:

//
let permutations = (string) => {
  if (!string || typeof string !== "string"){
    return "Please enter a string"
  } else if (string.length < 2 ){
    return string
  }

  let permutationsArray = []

  for (let i = 0; i < string.length; i++){
    let char = string[i]

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of permutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }

  let filteredArray = permutationsArray.filter(function(item, pos){
    return permutationsArray.indexOf(item)== pos;
  });

  return filteredArray;
}

// function permutations(string) {
//   if (string.length < 1) {
//     return string;
//   }

//   let permutationsArray = [];
//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

//     for (let permutation of permutations(remainingChars)) {
//       permutationsArray.push(char + permutation);
//     }
//   }

//   return permutationsArray;
// }


console.log(permutations('a')); //, ['a']);
console.log(permutations('ab')); //.sort(), ['ab', 'ba'].sort());
console.log(permutations('aabb')); //.sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
