const person = {
  name: "sodor uddin",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  'fav places': ['cox-bazar', 'kua-kata', 'london'],
};

console.log(person);

person.name = 'Komur Uddin';
console.log(person['name']);
console.log(person);

let cngFavPlace = person['fav places'] = ['America', 'Canada', 'Frence', 'New Zeland'];
console.log(person);

let keyName = 'profession';
console.log(person[keyName]);

let personSalary = 'salary';
person[personSalary] = 60000;
console.log(person);