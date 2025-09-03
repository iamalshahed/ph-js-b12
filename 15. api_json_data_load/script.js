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

/** notes --->>
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
  fetch("https://jsonplaceholder.typicode.com/todos/1") // promise of response
    .then((res) => res.json()) // promise of json data
    .then((data) => console.log(data));
};

const loadPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayPosts(data);
    });
};

const displayPosts = (posts) => {
  posts.forEach((post) => {
    console.log(post.title);
  });
};
