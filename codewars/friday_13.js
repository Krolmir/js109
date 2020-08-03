// Problem: Write a function that takes a year and returns the amount of friday
//          the 13ths that fall in that year

// Input: Year as integer
// Output: number of black fridays

// Note: Date uses 0 - 11 for months

// Steps:

// Itterate over the months
// check if the 13th lands on a friday
// Use Date

function unluckyDays(year){
  let blackFridayCounter = 0;

  for (let month = 0; month < 12; month += 1) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      blackFridayCounter += 1;
    }
  }

  return blackFridayCounter;
}


console.log(unluckyDays(1586)); //, 1, "should be: 1");
console.log(unluckyDays(1001)); //, 3, "should be: 3");
console.log(unluckyDays(2819)); //, 2, "should be: 2");
console.log(unluckyDays(2792)); //, 2, "should be: 2");
console.log(unluckyDays(2723)); //, 2, "should be: 2");
console.log(unluckyDays(1909)); //, 1, "should be: 1");
console.log(unluckyDays(1812)); //, 2, "should be: 2");
console.log(unluckyDays(1618)); //, 2, "should be: 2");
console.log(unluckyDays(2132)); //, 1, "should be: 1");
console.log(unluckyDays(2065)); //, 3, "should be: 3");
