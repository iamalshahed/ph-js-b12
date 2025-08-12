function multiply(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "please provide a number!";
  }
  const mult = n1 * n2;
  return mult;
}
const result = multiply("5", "seven");
// console.log(result);

function fullName(first, last) {
  if (typeof first !== "string" || typeof last !== "string") {
    return "Please enter your valid name";
  }
  const full = first + " " + last + ".";
  return full;
}
const full = fullName("al", "shahed");
console.log(full);
