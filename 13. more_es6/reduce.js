const numbers = [4, 5, 6, 7, 12, 45];

let sum = 0;

for (let num of numbers) {
  sum += num;
}
console.log(sum);

let total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(total);
