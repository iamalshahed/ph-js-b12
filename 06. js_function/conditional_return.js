function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isEven(5));
// console.log(isEven(50));

function isOdd(num){
    if(num % 2 === 1){
        return true;
    }
    return false;
}
console.log(isOdd(2));
console.log(isOdd(5));