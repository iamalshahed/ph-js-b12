// select elements
const container = document.getElementById("container");

const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayTodo(data);
    });
};

const displayTodo = (todosTitle) => {
  container.innerHTML = "";

  todosTitle.forEach((todo) => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="flex items-center gap-4">
            <p>
            ${
              todo.completed === true
                ? `<i class="ri-checkbox-circle-line text-green-700"></i>`
                : `<i class="ri-close-circle-line text-red-500"></i>
            </p>`
            }
            <h2>${todo.title}</h2>
        </div>`;

    container.appendChild(div);
  });
};

loadTodo();
