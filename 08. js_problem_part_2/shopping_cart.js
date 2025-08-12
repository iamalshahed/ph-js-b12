const products = [
  {
    name: "shampo",
    price: 300,
    quantity: 2,
  },
  {
    name: "chiruni",
    price: 100,
    quantity: 3,
  },
  {
    name: "shirt",
    price: 700,
    quantity: 5,
  },
  {
    name: "pant",
    price: 1200,
    quantity: 1,
  },
];

function cartTotal(products) {
  let total = 0;
  for (const pro of products) {
    const thisProductCost = pro.price * pro.quantity;

    total += thisProductCost;
  }
  return total;
}
const shoppingCost = cartTotal(products);
console.log("total shopping cost:", shoppingCost);
