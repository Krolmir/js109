// Write a function that takes 2 integers and returns a number that when
// multiplied by the first given number will = the sum of each digit to the power
// of the second given number + 1 as we move accross in digits

// Example; Given (123, 4)
//          1**4  + 2**5 + 3**6 = 762 = -1

// Rules: If no solution is possible return -1

// Input: 2 Integers
// Output: Integer

// Steps:
// Break up the number into single digits
// Find the total of those digits to the power of our second argument + 1 as we
// itterate over our single digits
// divide the total by our orginal number.
//   if number has a decimal return -1 (isInteger)
//   else return number

// breakupnumber
// Change the number into a string and split it
// ionitialze a total variable
// itterate over the array with for loop. increment our second argument by 1 every itteration
//   keep adding to our total varibale first element ** second argument
// divide total by original number and check if it is Integer.
//   return result or -1 if its not integer

function digPow(n, p){
  let total = 0;
  let array = String(n).split('');
  for (let idx = 0; idx < array.length; idx++) {
    total += Number.parseInt(array[idx]) ** p;
    p++;
  }

  if (!Number.isInteger(total / n)) return -1;
  return total / n;
}

console.log(digPow(89, 1)); //, 1)
console.log(digPow(92, 1)); //, -1)
console.log(digPow(46288, 3)); //, 51)
console.log(digPow(695, 2));// should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
