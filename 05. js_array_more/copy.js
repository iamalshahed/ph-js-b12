let price = 25;
let com_price = price;

com_price = 15;
price = 33;

// console.log(price);
// console.log(com_price);


const productPrice = [25, 25, 25];
const new_com = [];
// const comProductPrice = productPrice;

productPrice[0] = 33;
// comProductPrice[1] = 45;

// console.log(productPrice);
// console.log(comProductPrice);

const numbers = [1, 2, 3, 4];
// const newNumbers = Array.from(numbers);
// const newNumbers = [].concat(numbers);
const newNumbers = [...numbers];


numbers.push(45);

console.log(numbers);
console.log(newNumbers);

// shallow copy vs deep copy