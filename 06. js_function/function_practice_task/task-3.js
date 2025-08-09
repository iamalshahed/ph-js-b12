/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(arrs) {
  console.log("array:", arrs);
  let len = arrs.length;
  console.log("array length:", len);
  console.log("---------------");
  console.log("after looping array");

  // aarray gulor jogfol
  let arrSum = 0;
  for (const arr of arrs) {
    console.log(arr);
    arrSum += arr;
  }
  console.log("sum of arrays: " + arrSum + " and length is: " + len);

  // array er jogfolke length diye vag krlam
  let average = arrSum / len;
  console.log("Average:", average.toFixed(2));
  console.log("-------------");
  return average;
}

const result = make_avg([2, 4]);
console.log("Average value is:", result.toFixed(2));