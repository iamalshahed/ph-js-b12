console.log(1);
console.log(2);

const timeoutId = setTimeout(() => {
  console.log(3);
}, 3000);
console.log("timeout", timeoutId);

console.log(4);
console.log(5);
