const list = document.getElementById("ul__list");
const btnAddNew = document.getElementById("btn__add__new");
const inputField = document.getElementById("input");

list.addEventListener("click", function (e) {
  if (e.target.matches("li")) {
    if (e.target.innerText === "সিএসএস") {
      e.target.style.backgroundColor = "yellow";
    } else {
      e.target.style.backgroundColor = "#ffdbdb";
      e.target.style.color = "red";
    }
  }
});

// create
btnAddNew.addEventListener("click", function (e) {
  if (inputField.value.trim() !== "") {
    const inptValue = inputField.value;

    // create a li tag
    const li = document.createElement("li");
    li.innerText = inptValue;

    // appendChild()
    list.appendChild(li);

    // empty input field
    inputField.value = "";
  } else {
    alert("Plz.. write a programming language name");
  }
});
