console.log(1);
console.log(2);

let count = 10;
const intervalId = setInterval(() => {
  console.log(count--);
  if (count === 0) {
    clearInterval(intervalId);
  }
}, 1000);

console.log(4);
console.log(5);
