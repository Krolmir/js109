// Write a function that returns true or false based on if the string of
// parentheses passed is valid

// Rules: Valid Para = () (())
//        Invalid )()
//        string length will be bnetween 0 and 100

// input: string
// Output: Boolen

// Steps:
// initialize counter
// itterate over string
//   if '(' count += 1
//   else count -= 1
//   if count < 0 return false

function validParentheses(parens){
  let valid = true;
  let counter = 0;
  parens.split('').forEach(para => {
    if (para === '(') {
      counter += 1;
    } else if (para === ')') {
      counter -= 1;
    }

    console.log(counter);
    if (counter < 0) {
      valid = false;
    }
  });

  return valid;
}

console.log(validParentheses("()")); //=>  true
console.log(validParentheses(")(()))")); //=>  false
console.log(validParentheses("(")); //=>  false
console.log(validParentheses("(())((()())())")); //=>  true