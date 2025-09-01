function pakhiBhai(callmeBack, patro, patri) {
  console.log("value of patro", patro);
  //   console.log("callmeback", callmeBack, patro);
  if (patri) {
    // console.log(callmeBack);
    callmeBack(patro);
  } else {
    console.log("tor kopale biya nai");
  }
}

function callSomeOne(person) {
  console.log(`calling ${person}`);
}

// callSomeOne("jodu");
pakhiBhai(callSomeOne, "jodu", "modu");
