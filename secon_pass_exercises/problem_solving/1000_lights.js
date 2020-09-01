// Write a program that immplements a sqitch flipping based on a few rules.

// Rules: 1-count switches
//        first pass all lights on,
//        second pass 2, 4, 6 .... switches flipped
//        third pass  3, 6, 9 ... switches flipped
//        etc.... until count passes

// Input: Number of lights/switches
// Output: Array of lights that are on

// Steps:
// Initilize an array and set it to count length with all values of false
// itterate count times
// array = .map on our array
//   if index % count === 0
//      flip switch
//    else continue

// getOnLights
// initialize result array
//  itterate over the array
//    if true
//       result.push(index + 1)

function flipSwitch(light) {
  if (light === false) return true;
  if (light === true) return false;
}

function getOnLights(array) {
  let result = [];
  array.forEach((light, index) => {
    if (light === true) {
      result.push(index + 1);
    }
  });
  return result;
}

function lightsOn(switches) {
  let arr = [];
  for (let count = 0; count < switches; count++) {
    arr.push(false);
  }

  for (let count = 1; count <= switches; count++) {
    arr = arr.map((light, index) => {
      if ((index + 1) % count === 0) {
        console.log(`light at ${index} index is ${light}`);
        return flipSwitch(light);
      }
      return light;
    });
  }
  console.log(arr);

  return getOnLights(arr);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]