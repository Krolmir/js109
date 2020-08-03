// Problem: Write a function that takes a string number and then a second number
//          that determines how many commas we will use to split the string number

// Rules:

// Input: String integer, Number
// Output: Biggest Number

// Steps:

// find all combinations of splitting the string
// If given '1234', 1 then break string up into ('1', '234') ('12', '34') ('1', '234')
// try using slice to break up the string through itteration

// If given 1234, 2 then (1,2,34) (1,23,4) (12,3,4)

function getArrayOfResults(string, num) {
  let result = [];

  if (num === 1) {
    for (let index = 1; index < string.length; index += 1) {
      result.push(string.slice(0, index) + ',' + string.slice(index, string.length));
    }
  } else if (num === 2) {
    let i = 0;

    while (i < string.length - 1) {
      let n = i + 1;
      while (n < string.length - 1) {
        let temp = string.split('');
        temp[i] = temp[i] + ',';
        temp[n] = temp[n] + ',';
        n++;
        result.push(temp.join(''));
      }

      i++;
    }
  }  else if (num === 3) {
    let i = 0;

    while (i < string.length - 1) {
      let n = i + 1;
      while (n < string.length - 1) {
        let m = n + 1;
        while (m < string.length - 1) {
          let temp = string.split('');
          temp[i] = temp[i] + ',';
          temp[n] = temp[n] + ',';
          temp[m] = temp[m] + ',';
          m++;
          result.push(temp.join(''));
        }

        n++;
      }

      i++;
    }
  } else if (num === 4) {
    let i = 0;

    while (i < string.length - 1) {
      let n = i + 1;
      while (n < string.length - 1) {
        let m = n + 1;
        while (m < string.length - 1) {
          let j = m + 1;
          while (j < string.length - 1) {
            let temp = string.split('');
            temp[i] = temp[i] + ',';
            temp[n] = temp[n] + ',';
            temp[m] = temp[m] + ',';
            temp[j] = temp[j] + ',';
            result.push(temp.join(''));
            j++;
          }

          m++;
        }

        n++;
      }

      i++;
    }
  }

  return result;
}

function flattenResult(array) {
  return array.map(str => {
    return str.split(',');
  }).flat();
}

function solve(string, num) {
  let result = getArrayOfResults(string, num);
  result = flattenResult(result);

  console.log(result);
  result.sort((a, b) => b - a);
  return result[0];
}

console.log(solve('123',1)); // 23));
console.log(solve('1234',1)); // 234));
console.log(solve('1234',2)); // 34));
console.log(solve('1234',3)); // 4);
