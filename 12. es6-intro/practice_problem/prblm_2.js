/*
একটি arrow function বানাও যেটা দুইটা সংখ্যা নিয়ে তাদের গুণফল (multiply) রিটার্ন করবে।
*/

const multiply = (a = 1, b = 1) => {
  const mult = a * b;
  return mult;
};

const result = multiply(3, 2);
console.log(result);
