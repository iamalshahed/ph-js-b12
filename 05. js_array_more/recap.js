/**
 * 
 */

const books = ['physics', 'javascript', 'css', 'math'];
for(let i = 0; i < books.length; i++){
    // console.log(books[i])
}

const revBooks = books.reverse();
// console.log(revBooks);

const sortedBooks = books.sort();
console.log(sortedBooks);

// array of object
const employees = [
  {
    name: "Shahed",
    designation: "Web Developer",
    salary: 25000,
    address: 'Trump er bari',
  },

  {
    name: "Rashel",
    designation: "Digital Marketer",
    salary: 60000,
    address: 'Kochu khet',
  },

  {
    name: "Jihad",
    designation: "Web Developer",
    salary: 25000,
    address: 'Honlulu',
  },
];

// array of array / two diamentional array / 2D array
const examMarks = [
  [98, 87, 45, 12, 63],
  [54, 89, 74, 23, 11],
  [45, 87, 12, 56, 45],
  [78, 65, 32, 87, 54],
];