function multiplicationTable(size) {
  let result = new Array(size);
  result = result.map(v => []);
  console.log(result);
  for (let count = 0; count < size; count++) {
    for (let countTwo = count + 1, counter = 0; counter < size; countTwo * 2, counter++) {
      result[count][counter] = (countTwo);
    }
  }

  return result;
}

console.log(multiplicationTable(3)); //, [[1,2,3], [2,4,6], [3,6,9]]);