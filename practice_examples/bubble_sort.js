// Write a function that uses bubble sort algorithm to sory an array

// RUles: Constantly itterating through the array comparing 2 elements.
//        swapping when element1 > element2 and finished when it goes through
//        a whole pass with no swaps

// Input: Array
// Output: Same Array sorted

// Steps:
// initialize a swap variable, set to true
// itterating over the array until a condition of no swaps made is met
// while (swap){
//   swap = false;
//   for (let index = 0; indewx < array.length - 1; index ++ )
//     if (array[index] > array[index + 1])
//        [array[index], array[index + 1]] = [array[index + 1], array[index]
//        swap = true
//    }
//}


function bubbleSort(array) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let index = 0; index < array.length; index++) {
       if (array[index] > array[index + 1]) {
         [array[index], array[index + 1]] = [array[index + 1], array[index]];
         swap = true;
       }
    }
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]