const height = [65, 66, 95, 72, 78, 60, 65, 66];

function getMax(number) {
  let max = number[0];
  for (const num of number) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const max = getMax(height);
console.log("max number is:", max);
