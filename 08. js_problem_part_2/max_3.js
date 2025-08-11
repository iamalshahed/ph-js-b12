let jim = 55;
let tim = 95;
let kim = 90;

if (jim > tim && jim > kim) {
  console.log("Jim is the best");
} else if (tim > jim && tim > kim) {
  console.log("tim is the best");
} else {
  console.log("kim is the best");
}

const max = Math.max(25, 545, 86, 289);
console.log("max using math:", max);

// using function
function getMax(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}
const maxNumber = getMax(86, 45, 20);
console.log('max number is:', maxNumber);
