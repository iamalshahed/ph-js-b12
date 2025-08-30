/*
দুটি অ্যারে আছে: [10, 20] এবং [30, 40, 50]। spread operator ব্যবহার করে এগুলো একসাথে নতুন অ্যারে বানাও।
*/

const arr1 = [10, 20];
const arr2 = [30, 40, 50];

const newArr = [...arr1, ...arr2];
console.log(arr1);
console.log(arr2);
console.log(newArr);
