/**
 * 1. const --> value not going to change
 * 2. let --> value might change
 * 3. should not change
 */

const price = 2025;
// console.log(price);

const name = "kirkir ali khan";
const isPoor = false; // boolean

const friends = ["Elon", "Mark", "Bill", "Jeff"];
const student = {
  name: "Shahed",
  class: 11,
  age: 17,
  address: "kochu khet",
};

// slice & splice
const arrOne = [1, 2, 3, 4, 5];
// console.log(arrOne.slice(0, 4)); // slice(): eikhane ek theke char porjnto dekhabe
// console.log(arrOne.splice(1, 2)); // buji nai

// condition
if (price >= 1000) {
  console.log("too expensive.. not for me");
} else if (price >= 500) {
  console.log("may be i can buy this");
} else {
  console.log("within my budget");
}

// loop
let pushUp = 1;
while(pushUp <= 10){
    console.log(pushUp + '. ' + 'Push Up' + '-' + pushUp);
    pushUp++;
}

// for
for(let i = 1; i <= 5; i++){
    console.log(i);
}