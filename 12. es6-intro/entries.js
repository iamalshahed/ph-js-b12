const employee = {
  name: "Shahed",
  passion: "Web Developer",
  salary: 25000,
  experience: "1+ yrs",
};

// keys
console.log(Object.keys(employee));

// values
console.log(Object.values(employee));

// full object (Traditional)
console.log(employee.experience);

// entries
console.log(Object.entries(employee));

delete employee.passion;
console.log(employee);
