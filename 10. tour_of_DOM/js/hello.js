const mySelf = {
  name: "Shahed",
  age: 17,
  myFunc: function (experience) {
    // console.log("my experience: ", experience);
  },
};

const listCollection = document.getElementsByTagName("li");
// console.log(listCollection);

for (let list of listCollection) {
  //   console.log(list.innerText);
}

const headingEelm = document.getElementsByTagName("h1");
for (let heading of headingEelm) {
  //   console.log(heading.innerText);
}

// get element by id
const foodH1 = document.getElementById("food_title");
// console.log(foodH1.innerText);
// foodH1.innerText = "foods i love it";

let band = document.getElementById("band");
// band.innerText = "rachel kaka.. jalali set";

// get element by className
let foreign = document.getElementsByClassName("foreign");
// console.log(foreign);
// loop through
for (let item of foreign) {
  // console.log(item.innerText);
}

// query selector all
const spanElem = document.querySelectorAll("#old_dhaka p span");
// console.log(spanElem);
for (let span of spanElem) {
  // console.log(span.innerText);
}
