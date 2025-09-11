const addNumToLS = () => {
  const num = Math.ceil(Math.random() * 100);
  console.log(num);
  localStorage.setItem("number", num);
};

const getNumberFromLS = () => {
  const number = localStorage.getItem("number");
  console.log(`from saved localstorage ${number}`);
};

const setObjectToLS = () => {
  const customer = {
    name: "Shahed",
    age: 17,
    address: "Dhaka",
  };
  localStorage.setItem("person", JSON.stringify(customer));
};

const readObjectFromLS = () => {
  const customerJSON = localStorage.getItem("person");
  const customer = JSON.parse(customerJSON);
  console.log(customer.name);
};
