// Write a function that takes a non negative integer and returns the time in
// the following format

// Format: HH:MM:SS

// Rules: Takes non negative integers
//        Always padded to 2 digits with  00
//        Maximum time nevberf exceeds 359999

// Input: Number in Seconds
// Output: String time format HH:MM:SS

// Steps:
// Break up the number into second minutes and hours
// return formatResult

// Function findSeconds
// sec % 60 = sec

// Function formatResult
//

function addLeadingZeros(val) {
  while (String(val).length < 2) {
    val = '0' + val;
  }
  return val;
}

function formatResult(hour, minutes, seconds) {
  return `${addLeadingZeros(hour)}:${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)}`;
}

function findSeconds(seconds) {
  return seconds % 60;
}

function findMinutes(seconds) {
  return (seconds / 60) % 60;
}

function findHours(minutes) {
  return minutes / 60;
}

function humanReadable(seconds) {
  let resultSeconds = findSeconds(seconds);
  let resultMinutes = findMinutes(seconds - resultSeconds);
  let resultHours = findHours(((seconds - resultSeconds) / 60) - resultMinutes);
  return formatResult(resultHours, resultMinutes, resultSeconds);
}



console.log(humanReadable(0)); // 00:00:00', 'humanReadable(0)');
console.log(humanReadable(5)); // 00:00:05', 'humanReadable(5)');
console.log(humanReadable(60)); // 00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399)); // 23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999)); // 99:59:59', 'humanReadable(359999)');

