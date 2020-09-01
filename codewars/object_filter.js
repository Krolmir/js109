
// Problem 3: Product search
// PRODUCTS = [
//   { name: "Thinkpad x210", price: 220},
//   { name: "Thinkpad x230", price: 250},
//   { name: "Thinkpad x250", price: 979},
//   { name: "Thinkpad x230", price: 300},
//   { name: "Thinkpad x230", price: 330},
//   { name: "Thinkpad x230", price: 350},
//   { name: "Thinkpad x240", price: 700},
//   { name: "Macbook Leopard", price: 300},
//   { name: "Macbook Air", price: 700},
//   { name: "Macbook Pro", price: 600},
//   { name: "Macbook", price: 1449},
//   { name: "Dell Latitude", price: 200},
//   { name: "Dell Latitude", price: 650},
//   { name: "Dell Inspiron", price: 300},
//   { name: "Dell Inspiron", price: 450}
// ]
// query = {
//   price_min: 240,
//   price_max: 280,
//   q: "thinkpad"
// }
// query2 = {
//   price_min: 300,
//   price_max: 450,
//   q: 'dell'
// }
// def search(query)
//   # implementation goes here
// end
// search(query)
// # => [ { name: "Thinkpad x220", price: 250} ]
// search(query2)
// #  => [ { name: "Dell Inspiron", price: 300}, { name: "Dell Inspiron", price 450} ]

// Write a function that takes a query as an argument and returns objects in an array based on specific query parameters

// Rules: Our query is in format pricemin, price max and brand. Brand is all lowercase
//        Price is inclusive

// Input: Query Object with 3 key value pairs
// Output: Our Product Array Filtered to meet query needs

// Steps:
// Use query to compare while itterateing over our Products constant

const PRODUCTS = [
  { name: "Thinkpad x210", price: 220},
  { name: "Thinkpad x230", price: 250},
  { name: "Thinkpad x250", price: 979},
  { name: "Thinkpad x230", price: 300},
  { name: "Thinkpad x230", price: 330},
  { name: "Thinkpad x230", price: 350},
  { name: "Thinkpad x240", price: 700},
  { name: "Macbook Leopard", price: 300},
  { name: "Macbook Air", price: 700},
  { name: "Macbook Pro", price: 600},
  { name: "Macbook", price: 1449},
  { name: "Dell Latitude", price: 200},
  { name: "Dell Latitude", price: 650},
  { name: "Dell Inspiron", price: 300},
  { name: "Dell Inspiron", price: 450}
];

let query = {
  price_min: 240,
  price_max: 280,
  q: "thinkpad"
};
let query2 = {
  price_min: 300,
  price_max: 450,
  q: 'dell'
};

// compare all quesry cases
// pricemin < object.price
// && pricemax > object.price
// && object.name.toLowerCase().include(q.name)


function search(query) {
  return PRODUCTS.filter(object => {
    return (query.price_min <= object.price &&
            query.price_max >= object.price &&
            object.name.toLowerCase().includes(query.q));
  });
}

console.log(search(query));
// # => [ { name: "Thinkpad x220", price: 250} ]
console.log(search(query2));
// #  => [ { name: "Dell Inspiron", price: 300}, { name: "Dell Inspiron", price 450} ]