/**
 * একটা নাম্বারের array দেওয়া আছে। নতুন একটা array বানাতে হবে যেখানে প্রতিটা নাম্বারের square থাকবে।
 */

const numbers = [54, 28, 92, 69, 12, 60];
const squared = numbers.map((x) => x * x);
console.log(numbers); // numbers
console.log(squared);
