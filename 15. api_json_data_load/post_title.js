// select elements
const dptc = document.getElementById("dptc");

const loadPostTitle = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      displayPostTitle(data);
    });
};

const displayPostTitle = (posts) => {
  // empty the container
  dptc.innerHTML = "";

  posts.forEach((post) => {
    // 1. create an element
    let li = document.createElement("li");
    li.innerText = post.title;

    // 2. appendChild
    dptc.appendChild(li);
  });
};
