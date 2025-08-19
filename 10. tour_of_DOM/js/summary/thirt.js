console.log("third file");

// get parent
const thirdList = document.getElementById("third_list");

// create element
let li = document.createElement("li");
li.innerText = "brand new list";

// add parent
thirdList.appendChild(li);
