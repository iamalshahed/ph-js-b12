/**
 * একটা নাম্বারের array থেকে প্রথম সেই নাম্বারটা বের করতে হবে যেটা ৭ দিয়ে বিভাজ্য (divisible)।
 */

const numbers = [82, 14, 15, 21, 52, 28, 20];
const divisibleBySeven = numbers.find((x) => x % 7 === 0);
console.log(divisibleBySeven);
