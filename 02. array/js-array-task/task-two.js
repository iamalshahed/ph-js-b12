/*
2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/

const touristPlace = ['cox-bazar', 'rangamati', 'sundorban'];

// add new place
touristPlace.push('rajshahi');

// add more 2 place
touristPlace.push('safari-park', 'fantasi-kingdom');

// remove last array
touristPlace.pop();

// console.log final array
console.log(touristPlace);