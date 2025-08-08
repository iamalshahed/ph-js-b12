const numbers = [1, 2, 3, 4, 5];
const players = [{}, {}, {}];

// array of object
const employees = [
  {
    name: "Shahed",
    designation: "Web Developer",
    salary: 25000,
    address: 'Trump er bari',
  },

  {
    name: "Rashel",
    designation: "Digital Marketer",
    salary: 60000,
    address: 'Kochu khet',
  },

  {
    name: "Jihad",
    designation: "Web Developer",
    salary: 25000,
    address: 'Honlulu',
  },
];

// console.log(employees[1].designation);

// loop
for(let employee of employees){
    // console.log(employee.name, employee.salary);
}


// hudai

// change array of object value using index
employees[1].designation = 'Web Developer';

for(const emp of employees){
    const person = emp;
    const personInfo = person.name + ': ' + person.designation;
    console.log(personInfo);
}