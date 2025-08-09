function sumOfNumbers(numbers) {
  console.log(numbers);
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum += number;
    console.log("-----------");
  }
  return sum;
}
const arr = [2, 4];
const sum = sumOfNumbers(arr);
console.log('sum of numbers: ' + sum);
