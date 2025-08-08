const numbers = [1, 2, 3, 4, 5];
// reverse = [5, 4, 3, 2, 1];

const reverse = [];
/*
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  reverse.unshift(numbers[i]);
}
console.log(reverse);
*/

// complex
for(let i = numbers.length-1; i >= 0; i--){
    // reverse.push(numbers[i]);
}
// console.log(reverse);

/*
for(num of numbers){
    // console.log(num);
    reverse.unshift(num);
    console.log(reverse);
}
console.log(reverse);
*/

console.log(numbers);
const results = numbers.reverse();
console.log(numbers);

console.log(results);