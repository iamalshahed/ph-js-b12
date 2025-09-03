/*
console.log("Explore API");

const person = {
  name: "Shahed",
  fruit: "dalim",
  dish: "halim",
  friends: ["oshan", "bokchoy", "mazharul", "mewoya"],
  isRich: false,
  money: 320000,
};
console.log(person, typeof person);

/**
 * JSON --->> JavaScript Object with notation
 * JSON.stringify()
 * JSON.parse()
 */
/*
const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);
*/

// ===================================

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
