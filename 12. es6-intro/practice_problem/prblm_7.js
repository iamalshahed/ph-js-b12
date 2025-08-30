/*
একটি অবজেক্ট { a: 1, b: 2 } এবং আরেকটি { c: 3, d: 4 } আছে। spread operator দিয়ে একসাথে merge করো।
*/

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

const objFinal = {
  ...obj1,
  ...obj2,
};

console.log(obj1);
console.log(obj2);
console.log(objFinal);
