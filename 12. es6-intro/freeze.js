const employee = {
  name: "Shahed",
  passion: "Web Developer",
  salary: 25000,
  experience: "1+ yrs",
  age: 17,
};
// freez
Object.freeze(employee);

// delete employee.salary;
delete employee.experience;
console.log(employee);

employee.salary = employee.salary + 5000;
employee.location = "Dhaka";
console.log(employee);
