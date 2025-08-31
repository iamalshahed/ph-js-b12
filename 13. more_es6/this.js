class Vehicle {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  getThis() {
    console.log(this);
  }
  getPrice() {
    return this.price;
  }
}

const car1 = new Vehicle("Lamborghini", "Veneno", "200000000");
const supra = new Vehicle("Toyota Supra MK5", "Pandm", 65200000);

console.log(car1);
console.log(car1.getPrice());
console.log(supra.getPrice());
