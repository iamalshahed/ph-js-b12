/**
 * class --> template
 * properties
 * method (a special type od function inside a class without the function keyword)
 *
 * object
 */

class Player {
  constructor(name, age) {
    // console.log("calling the construtor method", name);
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
  }
  goal() {
    console.log("score a goal");
  }

  getTeamName() {
    return "Barca";
  }
}

const player1 = new Player("Tomada", 56);
const player2 = new Player("Shahed", 17);
// player1.goal();
console.log(player1 instanceof Player);
console.log(player1);
console.log(player2);
