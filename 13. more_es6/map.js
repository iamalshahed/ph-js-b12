const numbers = [4, 8, 2, 3, 5];

/*
const doubled = [];
for (const num of numbers) {
  const result = num * 2;
  doubled.push(result);
}
*/

/*
const doucledIt = (x) => x * 2;
const doubled = numbers.map(doucledIt);
*/

const doubled = numbers.map((x) => x * 2);

// 5 times
const fiveTimes = numbers.map((num) => num * 5);

const squared = numbers.map((num) => num * num);

console.log(doubled);
console.log(fiveTimes);
console.log(squared);

const friends = ["Shahed", "Mazharul", "Oshan", "Bokchoy", "Malu", "Shamim"];
const nameLengths = friends.map((name) => name.length);
const firstLetters = friends.map((name) => name[0].toLowerCase());

console.log(nameLengths);
console.log(firstLetters);

const result = numbers.map((num, index) => {
  console.log(num * index);
  return index;
});

console.log(result);
