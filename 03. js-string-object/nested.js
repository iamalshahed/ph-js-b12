const college = {
  name: "vnc",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 Feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      marit: "top",
    },
  },
};

// console.log(college.unique.color);
console.log(college);

console.log(college.unique.result.marit);
college.events[1] = '16 dec';
console.log(college.events);
console.log(college);

// delete property
delete college.class;
console.log(college);