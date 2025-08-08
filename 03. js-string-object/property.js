const person = {
  name: "sodor uddin",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  'fav places': ['cox-bazar', 'kua-kata', 'london'],
};

// console.log(person);
console.log(person.profession); // dot notation

const income = person.salary;
console.log(income);

// bracket notation
console.log(person['name']);
let personAge = person['age'];
console.log(personAge);
console.log(person["fav places"].join(', '));