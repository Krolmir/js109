function zero(operation = null) {
  if (operation === null) {
    return 0;
  } else {
    let result = operation;
    if (result[0] === '*') {
      return 0 * Number(result[1]);
    } else if (result[0] === '/') {
      return Math.floor(0 / Number(result[1]));
    } else if (result[0] === '+') {
      return 0 + Number(result[1]);
    } else if (result[0] === '-') {
      return 0 - Number(result[1]);
    }
  }
}
function one(operation = null) {
  if (operation === null) {
    return 1;
  } else {
    let result = operation;
    if (result[0] === '*') {
      return 1 * Number(result[1]);
    } else if (result[0] === '/') {
      return Math.floor(1 / Number(result[1]));
    } else if (result[0] === '+') {
      return 1 + Number(result[1]);
    } else if (result[0] === '-') {
      return 1 - Number(result[1]);
    }
  }
}
function two(operation = null) {
  if (operation === null) {
    return 2;
  } else {
    let result = operation;
    if (result[0] === '*') {
      return 2 * Number(result[1]);
    } else if (result[0] === '/') {
      return Math.floor(2 / Number(result[1]));
    } else if (result[0] === '+') {
      return 2 + Number(result[1]);
    } else if (result[0] === '-') {
      return 2 - Number(result[1]);
    }
  }
}
function three(operation = null) {
    if (operation === null) {
    return 3;
  } else {
    let result = operation;
    if (result[0] === '*') {
      return 3 * Number(result[1]);
    } else if (result[0] === '/') {
      return Math.floor(3 / Number(result[1]));
    } else if (result[0] === '+') {
      return 3 + Number(result[1]);
    } else if (result[0] === '-') {
      return 3 - Number(result[1]);
    }
  }
}
function four(operation = null) {
  if (operation === null) {
    return 4;
  } else {
    let result = operation;
    if (result[0] === '*') {
      return 4 * Number(result[1]);
    } else if (result[0] === '/') {
      return Math.floor(4 / Number(result[1]));
    } else if (result[0] === '+') {
      return 4 + Number(result[1]);
    } else if (result[0] === '-') {
      return 4 - Number(result[1]);
    }
  }
}
function five(operation = null) {
  if (operation === null) {
    return 5;
  } else {
    let result = operation;
    if (result[0] === '*') {
      return 5 * Number(result[1]);
    } else if (result[0] === '/') {
      return Math.floor(5 / Number(result[1]));
    } else if (result[0] === '+') {
      return 5 + Number(result[1]);
    } else if (result[0] === '-') {
      return 5 - Number(result[1]);
    }
  }
}

function six(operation = null) {
  if (operation === null) {
    return 6;
  } else {
    let result = operation;
    if (result[0] === '*') {
      return 6 * Number(result[1]);
    } else if (result[0] === '/') {
      return Math.floor(6 / Number(result[1]));
    } else if (result[0] === '+') {
      return 6 + Number(result[1]);
    } else if (result[0] === '-') {
      return 6 - Number(result[1]);
    }
  }
}

function seven(operation = null) {
  if (operation === null) {
    return 7;
  } else {
    let result = operation;
    if (result[0] === '*') {
      return 7 * Number(result[1]);
    } else if (result[0] === '/') {
      return Math.floor(7 / Number(result[1]));
    } else if (result[0] === '+') {
      return 7 + Number(result[1]);
    } else if (result[0] === '-') {
      return 7 - Number(result[1]);
    }
  }
}
function eight(operation = null) {
  if (operation === null) {
    return 8;
  } else {
    let result = operation;
    if (result[0] === '*') {
      return 8 * Number(result[1]);
    } else if (result[0] === '/') {
      return Math.floor(8 / Number(result[1]));
    } else if (result[0] === '+') {
      return 8 + Number(result[1]);
    } else if (result[0] === '-') {
      return 8 - Number(result[1]);
    }
  }
}

function nine(operation = null) {
  if (operation === null) {
    return 9;
  } else {
    let result = operation;
    if (result[0] === '*') {
      return 9 * Number(result[1]);
    } else if (result[0] === '/') {
      return Math.floor(9 / Number(result[1]));
    } else if (result[0] === '+') {
      return 9 + Number(result[1]);
    } else if (result[0] === '-') {
      return 9 - Number(result[1]);
    }
  }
}

function plus(num) {
  return '+' + num;
}

function minus(num) {
  return '-' + num;
}

function times(num) {
  return '*' + num;
}

function dividedBy(num) {
  return '/' + num;
}


console.log(seven(times(five())));  // , 35);
console.log(four(plus(nine())));  // , 13);
console.log(eight(minus(three())));  // , 5);
console.log(six(dividedBy(two())));  // , 3);