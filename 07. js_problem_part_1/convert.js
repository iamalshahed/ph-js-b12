/**
 * 12 inch = 1 feet
 */

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

const myHeight = inchToFeet(75);
// console.log(myHeight);

// ignore this one
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + "ft " + inchRemaining + "inc";
  return result;
}
const setHeight = inchToFeet2(65);
// console.log(setHeight);

function mileToKm(mile) {
  const kilo = mile * 1.609344;
  return kilo + " km";
}
// console.log(mileToKm(8));

function kmToMile(km) {
  const mile = km * 0.621371192;
  return mile + " mile";
}
console.log(kmToMile(7));