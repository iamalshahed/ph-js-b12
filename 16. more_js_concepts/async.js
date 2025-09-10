console.log("one");
console.log("two");

setTimeout(callThree, 5000);

setTimeout(() => {
  console.log("new three inside setTimeOut");
}, 4000);

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

console.log("four");

function callThree() {
  console.log("three");
}
