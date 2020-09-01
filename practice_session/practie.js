function checkFirstNonDouble(string) {
  let double = [];

  for (let idx = 0; idx < string.length; idx++) {
    if (string.slice(idx + 1, string.length).includes(string[idx]) ||
        double.includes(string[idx])) {
      double.push(string[idx]);
    } else {
      return string[idx];
    }
  }

  return '';
}

console.log(checkFirstNonDouble('string'));
console.log(checkFirstNonDouble('sstrings'));
console.log(checkFirstNonDouble('strintgs'));
console.log(checkFirstNonDouble('sttrings'));
