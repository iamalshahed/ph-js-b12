/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

/**
 * 1. put odd numbers in an array
 */

function oddAvg(nums) {
  const odds = [];
  for (const number of nums) {
    if (number % 2 === 1) {
      // console.log(number);
      odds.push(number);
    }
  }
  // odds id the array that contains only the array numbers
  let sum = 0;
  // console.log(odds);
  for (const numbr of odds) {
    sum += numbr;
  }
  const count = odds.length;
  console.log(sum, count);
  const average = sum / count;
  return average;
}

const numbers = [42, 13, 58, 65, 81, 7, 105];
const avg = oddAvg(numbers);
console.log("avegare of the odd number is:", avg);
