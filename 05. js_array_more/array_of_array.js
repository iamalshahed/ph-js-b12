const numbers = [1, 2, 3, 4, 5, 6];
const tournament_runs = [[], [], []];

// array of array / two diamentional array
const examMarks = [
  [98, 87, 45, 12, 63],
  [54, 89, 74, 23, 11],
  [45, 87, 12, 56, 45],
  [78, 65, 32, 87, 54],
];

// console.log(numbers[2]);
// console.log(examMarks[1][0]);
for(const xm of examMarks){
    // console.log(xm[0]);
}

examMarks[2].pop();
examMarks[2].push(100);
console.log(examMarks);