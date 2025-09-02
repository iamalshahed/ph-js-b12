/**
 * product-এর array আছে যেখানে price দেওয়া আছে। সেখান থেকে শুধু সেই product গুলো নিতে হবে যেগুলোর দাম ১০০ এর বেশি।
 */

const productPrice = [15, 28, 206, 101, 56, 78, 158];

const pPriceHundred = productPrice.filter((x) => x > 100);
console.log(productPrice); // original product price
console.log(pPriceHundred); // price > hundred product price
