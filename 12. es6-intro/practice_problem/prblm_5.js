/*
একটি অ্যারে থেকে destructuring করে প্রথম আর শেষ ভ্যালু বের করো।
const colors = ["red", "green", "blue", "yellow"];
*/

let colors = ["red", "green", "blue", "yellow"];
let [first, second, third, fourth] = colors;
console.log(`First value is ${first} and last value is ${fourth}.`);
