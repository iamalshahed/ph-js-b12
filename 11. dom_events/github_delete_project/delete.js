const githubRepo = document.getElementById("github__repo");
const btnDelete = document.getElementById("btn__delete");

githubRepo.addEventListener("keyup", function (e) {
  // step: 1
  const text = e.target.value;

  // step: 2
  if (text === "delete") {
    console.log("deleted");
    btnDelete.removeAttribute("disabled");
  } else {
    console.log("something else!");
    btnDelete.setAttribute("disabled", true);
  }
});
