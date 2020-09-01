// Write a function that take a rational number and returns an array with
// all denominators of an egyptian fraction

// Example: Fraction 2 / 1 will 1  1  1  1 = 2 therefor return = [1, 2, 3, 6]
//                              1  2  3  6

// Input: Fraction Rational Number
// Output: Array of Denominators

// Steps:
// itterate untill our fraction is === to total
// for (let index = 0; ;index++)
//   if (Fraction(1, index) + total > fraction) NEXT
//   else  total = Fraction(1, index) + total


var Fraction = require('fraction.js');

// function egyptian(fraction) {
//   let total = 0;
//   let index = 1;
//   let result = [];
//   while (true) {
//     if (Fraction(1, index) + total > fraction) {
//       index++
//     } else {
//       total += Fraction(1, index);
//       result.push(index);
//       index++
//     }
//     if (total >= fraction) break;
//   }

//   return result;
// }

function egyptian(targetValue) {
  let denominators = [];
  let unitDenominator = 1;
  while (targetValue > 0) {
    let unitFraction = new Fraction(1, unitDenominator);
    if (unitFraction <= targetValue) {
      targetValue = targetValue.sub(unitFraction);
      denominators.push(unitDenominator);
    }
    unitDenominator += 1;
  }
  return denominators;
}

// console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
// console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
// console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

// Write a function that takes an array of numbers and calculaties the resultin
// rational number

// Example: [1, 2, 3, 6] = 2

// Input: Array of denominatprs
// Output: Rational number

// Steps:
//

function unegyptian(array) {
  let total = 1 / array[0];
  for (let index = 1; index < array.length; index++) {
    total += (1 / array[index]);
  }

  return total;
}
console.log(egyptian(new Fraction(39, 20))); // logs 1.95)
console.log(egyptian(new Fraction(1, 2)));
console.log(egyptian(new Fraction(3, 4)));
console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3