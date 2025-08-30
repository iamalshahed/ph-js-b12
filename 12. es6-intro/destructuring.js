/*
const product = {
  name: "shirt",
  price: 500,
  quantity: 7,
};
*/

const {
  price,
  quantity,
  tax = 7, // default value
} = {
  name: "shirt",
  price: 500,
  quantity: 7,
};
console.log(price, quantity, tax);

// price = product.price;

/*
const discount = (product.price * 20) / 100;
const youPay = product.price - discount;
const payVat = (product.price * 7) / 100;
const totalAmmount = youPay + payVat;
console.log(payVat);
*/

const discount = (price * 20) / 100;
const youPay = price - discount;
const payVat = (price * 7) / 100;
const totalAmmount = youPay + payVat;
// console.log(payVat);

// array ------------------
const numbers = [56, 45, 457, 23];
const [first, second] = numbers;

const [math, physics] = [56, 70];
console.log(physics);
