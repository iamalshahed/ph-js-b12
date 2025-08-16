const nayok = {
  name: "Sakib Khan",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friends: ["apu", "raz", "salman", "amir"],
  movies: [
    {
      name: "no. 1",
      year: 2015,
    },

    {
      name: "king khan",
      year: 2018,
    },
  ],
  act: function () {
    console.log("act like sakib khan");
  },
  car: {
    brand: "Lamborghini",
    price: 150000000,
    made: 2025,
    model: "Veneno",
    manufacturer: {
      name: "Lambo",
      ceo: "amr vaista",
    },
  },
};

// console.log(student["friends"][2]);
console.log(nayok.act);
nayok.act();
