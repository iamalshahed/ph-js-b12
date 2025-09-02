/**
 * একটা নাম্বারের array দেওয়া আছে। তোমাকে নতুন একটা array বানাতে হবে যেখানে প্রতিটা নাম্বার দুই গুণ (double) হয়ে যাবে।
 */

const numbers = [5, 6, 8, 2, 45];

const double = numbers.map((x) => {
  const mult = x * 2;
  return mult;
});

console.log(numbers); // number array
console.log(double);
