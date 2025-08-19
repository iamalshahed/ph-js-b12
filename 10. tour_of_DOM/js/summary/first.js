console.log("first file");

// all sections
const allSec = document.getElementsByTagName("section");
console.log(allSec);
for (let section of allSec) {
  console.log(section);
}
// eita amra beshi use korbo na

const sectionTitle = document.getElementById("section_title");
console.log(sectionTitle.innerText);
sectionTitle.innerText = "Heading - 1";
// getelementbyid eita amra prochur use korbo
