const commentBoxContainer = document.getElementById("comment__box__container");
const commentBox = document.getElementById("comment__box");
const btnComment = document.getElementById("btn__comment");

// step: 1
btnComment.addEventListener("click", function () {
  if (commentBox.value.trim() !== "") {
    // step: 2
    const newComment = commentBox.value.trim();

    // step: 3
    const postCmt = document.createElement("p");
    postCmt.classList.add("cmt");
    postCmt.innerText = newComment;

    // step: 4
    commentBoxContainer.appendChild(postCmt);

    // step: 5
    commentBox.value = "";
  } else {
    alert("Comment field is empty!");
  }
});
