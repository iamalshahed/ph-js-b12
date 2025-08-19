// document.getElementById('players_contaiiner').childNodes[1].parentNode

// create element and set innerText or innerHTML
const newChild = document.createElement("li");
newChild.innerText = "pessi kaka";

// find the parent where i will add the child
const playerList = document.getElementById("players_list");

// append the child to the parent
playerList.appendChild(newChild);
