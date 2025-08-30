/*
spread operator ব্যবহার করে একটি অ্যারে কপি করো, তারপর নতুন অ্যারেতে আরও কিছু ভ্যালু যোগ করো।
*/

const arr1 = [54, 86, 20, 45];
const arr2 = [...arr1];
arr2.push(6, 4, 8, 75);

console.log(arr1);
console.log(arr2);
