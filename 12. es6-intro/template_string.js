const poem = `am pata jora joa
marbo chabuk chorbo ghora
ore bubu sore dara
asche amr pagla ghora`;

console.log(poem);

function sum(a = 0, b = 0) {
  const total = a + b;
  const output = `Sum of ${a} and ${b} is equal to ${total}`;
  console.log(output);
}
sum(5, 7);

// discount price
const price = 50;
const discountedPrice = `Discount price of ${price} tk is after 20% of ${
  price * 0.8
} tk.`;

console.log(discountedPrice);
