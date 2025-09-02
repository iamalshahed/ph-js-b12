/**
 * একটা নাম্বারের array থেকে প্রথম সেই নাম্বারটা বের করতে হবে যেটা ৫০ এর চেয়ে বড়।
 */

const numbers = [12, 84, 95, 66, 42, 75];
const bigFifty = numbers.find((x) => x > 50);
console.log(bigFifty);
