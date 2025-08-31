const student = {
  name: "Shahed",
  1: 50,
  "home address": "kochu khet",
  marks: 70,
};

// dot notation
const studentNmae = student.name;

// bracket notation
const studentOne = student["home"];
console.log(student["home address"]);

for (const key in student) {
  const value = student[key];
  console.log(value);
}

const propName = "marks";
console.log(student[propName]);
