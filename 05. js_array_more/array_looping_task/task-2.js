/**
 * Write a JavaScript code to get the even numbers from an array using any looping technique.
 */
const numbers = [12, 98, 5, 41, 23, 78, 46];
const result = [];
for (const evenNum of numbers) {
  if (evenNum % 2 === 0) {
    result.push(evenNum);
  }
}
console.log(result);