// select elements
const cardContainer = document.getElementById("card_container");

const loadAllPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dpAllPost(data);
    });
};

const dpAllPost = (posts) => {
  cardContainer.innerHTML = "";

  posts.forEach((post) => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="p-4 bg-gray-100 rounded-md border border-gray-200 h-full space-y-2">
            <h2 class="text-2xl font-semibold">${post.title}</h2>
            <p class="text-zinc-900 text-justify">${post.body}</p>
        </div>`;
    cardContainer.appendChild(div);
  });
};

loadAllPosts();
