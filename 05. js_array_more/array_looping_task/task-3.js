/**
 * Use a for...of loop to concatenate all the elements of an array into a single string.
 */

var numbers = ["Tom", "Tim", "Tin", "Tik"];
var finalResult = "";

for (const single of numbers) {
  finalResult += single;
}
console.log(finalResult);
