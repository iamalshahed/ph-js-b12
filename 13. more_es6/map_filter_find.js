const students = [
  {
    id: 1,
    name: "shahed",
    marks: 35,
  },

  {
    id: 2,
    name: "oshan",
    marks: 66,
  },

  {
    id: 3,
    name: "bokchoy",
    marks: 12,
  },

  {
    id: 4,
    name: "akhi",
    marks: 70,
  },

  {
    id: 5,
    name: "toma",
    marks: 50,
  },

  {
    id: 6,
    name: "alomer pola",
    marks: "56",
  },
];

// using map
const names = students.map((x) => `${x.name} ${x.marks} marks`);
// console.log(names);

// using filter
const goodStudents = students.filter((student) => student.marks >= 40);
// console.log(goodStudents);

// using find
const firstStudent = students.find((student) => student.marks >= 40);
console.log(firstStudent);
