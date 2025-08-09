/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function ifEvenOrOdd(num) {
  if (num % 2 === 1) {
    const odd = num * 2;
    return odd;
  } else {
    const even = num / 2;
    return even;
  }
}
const result = ifEvenOrOdd(65);
console.log(result);
