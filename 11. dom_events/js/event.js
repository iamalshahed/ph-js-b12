console.log("extarnal file");

// option 2 to hanlde js click event
function makeYellow() {
  document.body.style.background = "yellow";
  document.body.style.color = "#000";
}

function makeRed() {
  document.body.style.background = "red";
  document.body.style.color = "#fff";
}

function makeBlack() {
  document.body.style.background = "black";
  document.body.style.color = "#fff";
}

// option 3 getElementById and then set onclick
const btnMakeBlue = document.getElementById("btn_make_blue");
// console.log(btnMakeBlue)
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.background = "blue";
  document.body.style.color = "#fff";
};

/**
 * option 4: addEventListener
 * document.getElementById().addEventListener('even name', handle);
 */
const btnMakeGreen = document.getElementById("btn__make__green");
btnMakeGreen.addEventListener("click", function () {
  document.body.style.background = "#2dba4e";
  document.body.style.color = "#fff";
  // btnMakeGreen.innerText = 'hoye gese';
});
