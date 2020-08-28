// Write a functyion that takes an array of numbers and returns if we can give
// all the people in line change.

// If my doller bill counts go negative I can not give change

// Input: Array of numbers equaling bill values
// Output: String YES or NO

// Steps:
// Initialize result variable and assign it value YES
// Initialize and assign 2 varibales - twentyFiveBills, fiftyBills
// itterate over the array with for Each
// increment our counters 25 and 50 depending what we get
// when we get a 50 bill decrement the 25 counter - 1
// when we get a 100 bill decrement the 50 counter if > 1 - decrement - 1
//   else decrement 25 counte - 3
// Conditions - if 25 or 50 ever go below 0 return NO, else return YES
//

function tickets(peopleInLine){
  let result = 'YES';
  let twentyFiveBills = 0;
  let fiftyBills = 0;
  peopleInLine.forEach(val => {
    if (val === 25) {
      twentyFiveBills += 1
    } else if (val === 50) {
      twentyFiveBills -= 1;
      fiftyBills += 1;
    } else if (val === 100) {
      if (fiftyBills > 0) {
        fiftyBills -= 1;
        twentyFiveBills -= 1;
      } else {
        twentyFiveBills -= 3;
      }
    }

    if (twentyFiveBills < 0 || fiftyBills < 0) result = 'NO';
  });

  return result;
}

console.log(tickets([25, 25, 50, 50])); // "YES");
console.log(tickets([25, 100])); // "NO");
console.log(tickets([25, 25, 50])); // => YES
console.log(tickets([25, 25, 50, 50, 100])); // => NO.