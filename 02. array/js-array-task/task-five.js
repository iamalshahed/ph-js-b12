/* 
5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/

const friends = ['shahed', 'mazharul', 'shamim', 'oshan', 'opurbo'];
const teachers = ['lingcan', 'harun', 'jhankar', 'eshan', 'tutul'];

// new array
let concatArray = friends.concat(teachers);

// console
console.log(friends);
console.log(teachers);
console.log(concatArray);

// .join() methode
concatArray = friends.concat(teachers).join(' | ');
console.log(concatArray);