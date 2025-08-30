const numbers = [56, 78, 2, 54];
console.log(numbers);
console.log(...numbers);

const max = Math.max(...numbers);
console.log(max);

const first = [5, 4, 8, 5];
const second = [...first];
const third = [12, ...first, 8456, 594, 548];
second.unshift(568);
console.log(first);
console.log(second);
console.log(third);

const ages = [17, 20, 15, 14];
const prices = [100, 80, 65];
const all = [...ages, 4555, ...prices];
console.log(all);

const person = {
  name: "Shahed",
  age: 18,
};

const employee = {
  degignation: "Web Developer",
  ...person,
};
console.log(employee);
