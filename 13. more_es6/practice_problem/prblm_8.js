/**
 * একটা word-এর array দেওয়া আছে। প্রতিটা word-এর length (কত অক্ষর) আছে সেটা print করতে হবে।
 */

const words = [
  "programmer",
  "developer",
  "software",
  "artificial",
  "ai",
  "designer",
];

const wordLengths = words.forEach((x) => {
  console.log(`${x} length is ${x.length}`);
});
