const inputField = document.getElementById("inputField");
const btnDelete = document.getElementById("btn__delete");
const text = document.getElementById("text");

inputField.addEventListener("keyup", function (e) {
  const userInptValue = e.target.value;
  if (userInptValue === "github.com/iamalshahed/my-repo") {
    console.log("matched", userInptValue);
    btnDelete.removeAttribute("disabled");
  } else {
    console.log("something went wrong");
    btnDelete.setAttribute("disabled", true);
  }
});
