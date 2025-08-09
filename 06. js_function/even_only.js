/**
 * create function that will return only even numbers
 * return the sum of even numbers
 */

function evenNumbersOnly(numbers) {
  console.log(numbers);
  console.log('--------');
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log('even number: ' + number);
      sum += number;
    }
  }
  console.log('---------');
  return sum;
}

const arr = [1, 2, 3, 8, 5];
const evenNum = evenNumbersOnly(arr);
console.log('sum of even numbers are: ' + evenNum);