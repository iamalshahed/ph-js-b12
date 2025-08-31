// var let const
const tax = 5000;
let eta = 7;
eta = 2;

const student = {
  name: "oshan",
  marks: 70,
};

const friends = ["shamim", "bokchoy", "ami"];

// default parameter
function add(num1 = 0, num2 = 2) {
  // code
}

// template string
const dynamicText = `my tax: ${tax} marks ${student.marks} has friends ${friends[1]}`;
// console.log(dynamicText);

// arrow function
const add2 = (num1 = 0, num2 = 0) => num1 + num2;
const tenTimes = (x) => x * 10;

// spread
const newFriends = [...friends, "dabul", "malu", "vushi"];
// console.log(newFriends);

// destructuring
const { marks: totalMark } = student;
// console.log(totalMark);

const [firstFriend] = newFriends;
console.log(firstFriend);
