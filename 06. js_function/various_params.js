/**
 *
 *
 */

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even size");
    return true;
  } else {
    console.log("odd size");
    return false;
  }
}

// evenSizedString("Dhaka");
// evenSizedString("Faka");

function doubleOrTripple(num, doNum) {
  if (doNum === true) {
    const result = num * 2;
    return result;
  } else {
    const result = num * 3;
    return result;
  }
}

// console.log(doubleOrTripple(5, true));
// console.log(doubleOrTripple(2, false));


function numberOfElem(numbers){
    const len = numbers.length;
    return len;
}
console.log(numberOfElem([15, 20, 84, 92, 26, 49]));



function personAge(setAge){
    const age = setAge.age;
    return age;
}
console.log(personAge({age: 45}));