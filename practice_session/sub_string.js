function substrings(string) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      result.push(string.slice(i, j));
    }
  }
  return result.filter(str => {
    if (str.length > 1) {
      return str;
    }
  });
}


console.log(substrings("band")); // == ['ba', 'ban', 'band', 'an', 'and', 'nd']
console.log(substrings("world")); // == ['wo', 'wor', 'worl', 'world', 'or', 'orl', 'orld', 'rl', 'rld', 'ld']
console.log(substrings("ppop")); // == ['pp', 'ppo', 'ppop', 'po', 'pop', 'op']
