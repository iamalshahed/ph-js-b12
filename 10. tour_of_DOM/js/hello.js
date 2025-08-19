const mySelf = {
  name: "Shahed",
  age: 17,
  myFunc: function (experience) {
    console.log("my experience: ", experience);
  },
};

const listCollection = document.getElementsByTagName("li");
console.log(listCollection);

for (let list of listCollection) {
  console.log(list);
}

const headingEelm = document.getElementsByTagName("h1");
for (let heading of headingEelm) {
  console.log(heading);
}
