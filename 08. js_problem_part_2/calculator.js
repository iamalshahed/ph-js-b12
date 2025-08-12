function add(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function devide(n1, n2) {
  return n1 / n2;
}

function calculator(a, b, operator) {
  if (operator === "add") {
    const result = add(a, b);
    return result;
  }else if(operator === 'sub'){
    return sub(a, b);
  }else if(operator === 'multiply'){
    return multiply(a, b);
  }else if(operator === 'devide'){
    return devide(a, b);
  }else{
    return "only 'add', 'substract', 'multiply', and 'devide' operator allowed.";
  }
}

const result = calculator(5, 2, 'devide');
console.log(result);