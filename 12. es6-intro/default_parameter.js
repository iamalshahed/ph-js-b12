function sum(a = 0, b = 0) {
  const total = a + b;
  return total;
}

let sumNumber = sum(20, 12);
console.log(sumNumber);

// multiply
function mult(a = 1, b = 1) {
  const multiply = a * b;
  console.log(multiply);
}
mult();

function fullName(first = "", last = "") {
  const fullName = first + " " + last;
  console.log(fullName);
}
fullName("AL Shahed");
fullName("AL Shahed", "Biswas");

// some thumbrule of default value maby useful
/**
 * add, sunstract --> 0
 *
 * multiply --> 1
 *
 * string --> ''
 *
 * array --> []
 *
 * object --> {}
 */
