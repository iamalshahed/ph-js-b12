/**
 * Write a JavaScript code to reverse the array colors without using the reverse method.
 */

const colors = ["red", "blue", "green", "yellow", "orange"];
const reversedColors = [];

// using unshift() methode
for (let i = 0; i < colors.length; i++) {
  reversedColors.unshift(colors[i]);
}
console.log(reversedColors);
// console.log(colors);



// using push() methode for better performance
/*
for(let i = colors.length-1; i >= 0; i--){
    reversedColors.push(colors[i]);
}
console.log(reversedColors);
*/