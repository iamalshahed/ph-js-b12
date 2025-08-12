const mobiles = [
  {
    name: "ChamChung",
    price: 20000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "chawmi",
    price: 18000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "ifun",
    price: 100000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "oops",
    price: 45000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "honor",
    price: 60000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "walton",
    price: 31000,
    camera: "12mp",
    color: "black",
  },
];

function getCheapestPhn(phones) {
  let sosta = phones[0];
  for (const phn of phones) {
    if (phn.price > sosta.price) {
      sosta = phn;
    }
  }
  return sosta;
}
const cheap = getCheapestPhn(mobiles);
console.log("cheapest phone is:", cheap);
