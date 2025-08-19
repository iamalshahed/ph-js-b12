// 1. parent node
let mainContainer = document.getElementById("main_container");

// create child node
let services = document.createElement("section");

// create h1
let h1 = document.createElement("h1");
h1.innerText = "Our Services";

// add services h1
services.appendChild(h1);

// create ul
let ul = document.createElement("ul");

// create li
let li1 = document.createElement("li");
li1.innerText = "home";

ul.appendChild(li1);

// second
let li2 = document.createElement("li");
li2.innerText = "About";

ul.appendChild(li2);

// 3rd
let li3 = document.createElement("li");
li3.innerText = "contact";

ul.appendChild(li3);

services.appendChild(ul);

// 3. append services section to the mainContainer
mainContainer.appendChild(services);

// book section
const bookSec = document.createElement("section");

bookSec.innerHTML = `
    <h1 id="food_title">logo</h1>
    <ul>
        <li>home</li>
        <li>about</li>
        <li>service</li>
        <li>portfolio</li>
        <li class="foreign">blog</li>
        <li class="foreign">pricing</li>
        <li class="foreign">contact</li>
    </ul>`;

mainContainer.appendChild(bookSec);
