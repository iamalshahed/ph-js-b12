// const mySec = document.getElementsByTagName("section");
// for (let my of mySec) {
//   my.style.background = "#2dba4e";
//   my.style.padding = "1rem";
//   my.style.borderRadius = "1rem";
//   my.style.marginBlock = "1rem";
// }

const sections = document.querySelectorAll("section");
// console.log(sections);
for (let section of sections) {
  section.classList.add("card_bg");
}
