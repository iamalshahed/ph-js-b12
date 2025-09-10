async function loadData() {
  console.log("one");
  console.log("two");

  /*
  fetch("https://jsonplaceholder.typicode.com/comments/1")
    .then((res) => res.json())
    .then((data) => console.log("data got"));
    */

  const res = await fetch("https://jsonplaceholder.typicode.com/comments/1");
  const data = await res.json();
  console.log("data got await", data);

  console.log("three");
  console.log("four");
}

// loadData();

// try{

// }
// catch(err)

const loadData2 = async () => {
  console.log("1");
  console.log("2");
  try {
    const res = await fetch("https://jsonplaceholder.tycode.com/comments/1");
    const data = await res.json();
    console.log("got data", data);
  } catch (err) {
    console.log("error happend!");
  }
  console.log("4");
  console.log("5");
};

loadData2();
