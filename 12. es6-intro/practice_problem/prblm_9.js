/*
নিচের nested অবজেক্ট থেকে destructuring করে city বের করো:
const user = { id: 1, info: { name: "Shahed", city: "Dhaka" } };
*/

const user = {
  id: 1,
  info: {
    name: "Shahed",
    city: "Dhaka",
  },
};

const {
  id,
  info: { name, city },
} = user;
console.log(city);
