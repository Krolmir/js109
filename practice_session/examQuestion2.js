let regex = new RegExp('[a-z]', 'gi');
let numberRegex = new RegExp('[0-9]', 'g');

function flipNumber(string) {
  let array = string.replace(regex, '').split('');;

  return string.split('').map(char => {
    if (char.match(numberRegex)) {
      return string[string.indexOf(char)] = array.pop();
    } else {
      return char;
    }
  }).join('');
}

console.log(flipNumber('ge6tsx4324asd'));