/*
3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/

const books = [
  "html 5",
  "css-3",
  "rich dad poor dad",
  "easy math",
  "it-1",
  "it-2",
  "computer application",
];

// checking javascript book ache kina using general methode
console.log(books.includes('javascript'));

// checking javascript book ache kina using if-else or includes methode
if (books.includes("javascript")) {
  console.log("Yup, javascript book is in the list");
} else {
  console.log("Nope, javascript book is not in the list");
}
