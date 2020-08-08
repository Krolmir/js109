// Write a function that takes 3 parameters height of building, bounc height, and
// where the window height is. The goal is to determine how many times the ball
// will bounce above the window.

// Rules: h = height
//        bouce = how high the ball bounces
//        window = window height

// Input: 3 Integers
// Output: Amount of times the ball will be  visible by the window

// Steps:

// initialize a totalPasses = 0;
// loop until updated heigght < window
//   divide height by 0.66
//   totalPasses += 1

function bouncingBall(h,  bounce,  windowHeight) {
  if (h < windowHeight || h < 0 || (bounce <= 0 && bounce >= 1)) return -1;
  let totalUps = 0;
  let totalDowns = 0;


  while (h > windowHeight) {
    totalDowns += 1;
    h = parseFloat(h) * bounce;
    if (h > windowHeight) {
      totalUps += 1;
    }
  }

  return totalUps + totalDowns;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); //, 3);
console.log(bouncingBall(30.0, 0.66, 1.5)); //, 15);
