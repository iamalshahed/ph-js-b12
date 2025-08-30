/*
একটি অবজেক্ট থেকে destructuring করে title আর author বের করো।
const book = { title: "JS Basics", author: "Shahed", year: 2025 };
*/

const book = {
  title: "JS Basics",
  author: "Shahed",
  year: 2025,
};

const { title, author } = book;
console.log(`Book title is ${title} and author name is ${author}.`);
