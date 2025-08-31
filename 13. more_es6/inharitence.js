class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eate() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is baring`);
  }
}

// cat
class Cat extends Animal {
  constructor(name, color, age) {
    super(name, age);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} is baring`);
  }
}

const dog1 = new Dog("vola", "deshi", 5);
dog1.eate();
console.log(dog1.age);

// cat
const cat1 = new Cat("Zola", "white", 5);
// cat1.eate();
