const data = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  console.log("hello");
  const json = await res.json();
  console.log(json);
  console.log(true);
};

data();
