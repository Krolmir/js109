console.log(formatWords(['ninja', 'samurai', 'ronin'])); // should return "ninja, samurai and ronin"
console.log(formatWords(['ninja', '', 'ronin'])); // should return "ninja and ronin"
console.log(formatWords([])); // should return ""


function formatWords(arr) {
  let newArr = arr.filter(val => val);


  if (newArr.length > 0) {
    return newArr.slice(0,newArr.length - 1).join(", ") + ' and ' + newArr.slice(-1);
  } else {
    return '';
  }
}
