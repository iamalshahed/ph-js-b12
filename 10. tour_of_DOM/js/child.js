// document.getElementById('players_contaiiner').childNodes[1].parentNode

// 1. create element and set innerText or innerHTML
const newChild = document.createElement("li");
newChild.innerText = "pessi kaka";

// 2. find the parent where i will add the child
const playerList = document.getElementById("players_list");

// 3. append the child to the parent
playerList.appendChild(newChild);
