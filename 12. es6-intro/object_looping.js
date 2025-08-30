const numbers = [56, 45, 25, 75, 91];
for (let number of numbers) {
  // console.log(number);
}

const employee = {
  name: "Shahed",
  passion: "Web Developer",
  salary: 25000,
  experience: "1+ yrs",
  age: 17,
};

for (let emp in employee) {
  // console.log(employee[emp])
  console.log(`${emp}: ${employee[emp]}`);
}
