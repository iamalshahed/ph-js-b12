/**
 * একটা নাম্বারের array থেকে শুধু even number গুলো আলাদা করে বের করতে হবে।
 */

const numbers = [45, 51, 86, 59, 28, 50];
const evenNum = numbers.filter((x) => x % 2 === 0);
console.log(evenNum);
