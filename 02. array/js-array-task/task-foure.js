/* 
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/

const friends = ["shahed", "mazharul", "bokchoy", "oshan", "opurbo", "fahad"];

let country = "Bangladesh";
const cars = [];
const sponsors = "[]";
let roll = [12, 54, 65, 20, 45, 84];
let isStudent = true;

// checking is every variable are array?
console.log(Array.isArray(friends));
console.log(Array.isArray(country));
console.log(Array.isArray(cars));
console.log(Array.isArray(sponsors));
console.log(Array.isArray(roll));
console.log(Array.isArray(isStudent));

// using if-else
if (Array.isArray(friends)) {
  console.log(`Yup, it's and array`);
} else {
  console.log(`Nope, it's not an array`);
}
