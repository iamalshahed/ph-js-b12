const today = new Date();
const date = new Date("2030-10-09");
console.log(today.getMonth());
console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(11);
console.log(specificDate);
console.log(specificDate.toLocaleString("en-GB"));
