const student = {
  name: "Shahed",
  1: 50,
  family: {
    title: "Mondal",
    /*
    mother: {
      name: "Rasheda",
      age: 35,
    },
    */
  },
  "home address": "kochu khet",
  marks: 70,
};

console.log(student.family.mother?.age); // optional chain '?'
