console.log("hanlder file added");

// event handler / update title
const pageTitle = document.getElementById("page__title");
const btnUpdateTitle = document.getElementById("btn__update__title");

btnUpdateTitle.addEventListener("click", function () {
  // console.log(pageTitle);
  pageTitle.innerText = "Updated Page Title";
});

// user info
const userInfo = document.getElementById("user__info");
const btnLogin = document.getElementById("btn__login");

btnLogin.addEventListener("click", function () {
  userInfo.innerText = "user login successfully";
  document.body.style.background = "#2dba4e";
  document.body.style.color = "#fff";
  btnLogin.innerText = "Logout";
});

// display user input
const userName = document.getElementById("user__name");
const text = document.getElementById("text");
const btnAddName = document.getElementById("btn__add__name");

// set eventlistener
btnAddName.addEventListener("click", function () {
  if (text.value.trim() === "") {
    alert("Input feild is required!");
  } else {
    // get the text from the input field
    const inputValue = text.value;
    console.log("name:", inputValue);

    // set the name
    userName.innerText = inputValue;
  }
});
