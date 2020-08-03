// Problem: Write a function that takes a jumbod string and does 3 things. First
//          splits the words based on our menu of 8 words. Capitalizes the words
//          and then orders them based on where they appear in the menu.

// Input: String
// Output: Organized string with spaces capitailizations and ordering

// Steps:

// initialize a const array that we have all our menu items stored.
// split the string into all the different words.
// Maybe some regex- maybe we dont split but we itterate over the menu array
// and we return all matches

// itterate over menuArray
// compare each element to the original string and find how many matches there are
// if 3 then put 3 of whatever in the result array

const MENU_ARRAY = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich',
                    'Onionrings', 'Milkshake', 'Coke'];

function getOrder(input) {
  let result = [];

  MENU_ARRAY.forEach(menuItem => {
    let regex = new RegExp(menuItem, 'gi');
    if (input.match(regex) !== null) {
      result.push(input.match(regex).join(' '));
    }
  });
  return result.join(' ').split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1, word.length);
  }).join(' ');
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"));
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"));
// "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");