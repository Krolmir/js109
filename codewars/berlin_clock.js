// WRite a function that takes a time and returns a string version of the berlin
// Clock

// Example: "07:24:12"
//          = Y
//            ROOO
//            RROO
//            YYRYOOOOOOO
//            YYYY

// Input: Time String
// OutPUt: Berlin String

// Steps:
// split the stirng :
// array of 3 numbers assign
//   hours = array[0]
//   minutes = array[1]
//   seconds = array[2]

// initialize SecondString, fiveHour, hour, fiveMinute, minute
// check if seconds is even return Y or O
// hours % 5 = new hours
// Math.floor(hours / 5) == first row of lights
//  quadCount = 4
//  quadHourString = 'R'.repeat(quadHour) + 'O'.repeat(quadCount - quadHour)
//


function berlinClock(timeStamp) {
  let arr = timeStamp.split(':');
  let hours = Number(arr[0]);
  let minutes = Number(arr[1]);
  let seconds = Number(arr[2]);

  let secondString, fiveHourString, hourString, fiveMinuteString, minuteString;
  let fiveHour = Math.floor(hours / 5);
  let fiveMinutes = Math.floor(minutes / 5);
  let leftOverMinute = minutes % 5;

  if (seconds % 2 === 0) {
    secondString = 'Y';
  } else {
    secondString = 'O';
  }

  fiveHourString = 'R'.repeat(fiveHour) + 'O'.repeat(4 - fiveHour);
  hourString = 'R'.repeat(hours % 5) + 'O'.repeat(4 - (hours % 5));

  let fiveMinuteArray = [];
  for (let idx = 1; idx <= fiveMinutes; idx++) {
    if (idx % 3 === 0) {
      fiveMinuteArray.push('R');
    } else {
      fiveMinuteArray.push('Y');
    }
  }

  fiveMinuteString = fiveMinuteArray.join('') + 'O'.repeat(11 - fiveMinutes);
  minuteString = 'Y'.repeat(leftOverMinute) + 'O'.repeat(4 - leftOverMinute);

  console.log(secondString);
  console.log(fiveHourString);
  console.log(hourString);
  console.log(fiveMinuteString);
  console.log(minuteString);
}

berlinClock("12:56:01"); //, "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO")
berlinClock("00:00:00");//,"Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO")
berlinClock("22:32:45")//,"O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO")