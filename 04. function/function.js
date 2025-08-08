// console.log('today we will learning function');

function hello() {
  console.log("I am a Function");
}

hello(); // function ke call kortesi

function moneyBag() {
  var money = 4500;
  console.log("I have " + money + " Tk.");
}
moneyBag();
// console.log(money); // money is not defined.. function er vitore thaka kono var ke function er baire theke access korte parbo na;

// jok korar machine
function jogKorarMachine(input1, input2) {
  let sum = input1 + input2;
  console.log("Sum is " + sum);
  return sum;
}
// jogKorarMachine(); // kono value pass kori nai (Nan)
// jogKorarMachine(10, 40);

const result = jogKorarMachine(20, 10);
console.log(result);
