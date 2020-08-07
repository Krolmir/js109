// Problem: Write a funtion that takes an array of directions, and returns if
//          they lead to a 10 Minute walk.

// Rules: directions are given in n for north s for south e east and w for west
//        each direction = 1 minute
//        need to start and end in same spot

//       array.lenght !== 10 then false
//

// input: array of directions
// Output: boolen determining walk

// Steps:
// Put guard clause for array length not being 10
// now figure out how we know if start and end are the same
// norths and souths have to cancel out
// easts and wests have to be even as well

// assign 2 counters.
// horizontal, vertical
// increment by 1 per north decrement by 1 per south
// return false if counters are anything but 0

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let vertical = 0;
  let horizontal = 0;

  walk.forEach(direction => {
    if (direction === 'n') {
      vertical += 1;
    } else if (direction === 's') {
      vertical -= 1;
    } else if (direction === 'e') {
      horizontal += 1;
    } else if (direction === 'w') {
      horizontal -= 1;
    }
  });

  if (horizontal !== 0 || vertical !== 0) return false;
  return true;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); //, 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); //, 'should return false');
console.log(isValidWalk(['w'])); //, 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); //, 'should return false');
