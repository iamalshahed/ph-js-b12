// function declaration
function add(n, o) {
  return n + o;
}

// function expression
const addition = function (a, b) {
  return a + b;
};

const result = addition(5, 5);
console.log(result);

// arrow function
const sub = (a, b) => a - b;
const subResult = sub(5, 2);
console.log(subResult);

// multiline arrow function
const sumNum = (a, b) => {
  const dobuleA = a * 2;
  const doubleB = b * 2;
  const result = dobuleA + doubleB;
  const output = `Total of number ${dobuleA} and ${doubleB} is equal to ${result}`;

  return output;
};
const output = sumNum(2, 2);
console.log(output);
