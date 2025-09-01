let data;
data = 0; // false
data = ""; // empty string is false
data = " "; // has an white space
data = "0";
data = false;
data = true;
data = null;
data = undefined;
data = {};
data = [];
console.log(data);
data = true;
data = [];

if (data) {
  console.log("value of data is truthy", data);
} else {
  console.log(data, "data is falsy");
}

// capture all positive value
// dobule not !!
// capture any value to boolean (true false)
if (!!data === true) {
  console.log("only true inside the double not");
}
