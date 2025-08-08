const numbers = [3, 5, 2, 8, 6, 4];
// console.log(numbers);
numbers.sort();
// console.log(numbers);

const friends = [
  "sakib",
  "nokib",
  "akib",
  "rakib",
  "bakib",
  "aaabul",
  "taaabul",
];
friends.sort();
// console.log(friends);

const ages = [1, 5, 100, 15, 12, 8, 2, 28];
// console.log(ages);
ages.sort();
// console.log(ages);

// complex-vabe

// ascending (asc) choto theke boro er dike
const sorted_ages_asc = ages.sort(function (a, b) {
  return a - b;
});
console.log(sorted_ages_asc);

// descending (dsc) boro theke choto er dike
const sorted_ages_dsc = ages.sort(function (a, b) {
  return b - a;
});
console.log(sorted_ages_dsc);
