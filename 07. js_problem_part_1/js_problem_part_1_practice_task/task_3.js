/**
 * এই টাস্কে তোমাকে যা করতে হবে—

একটা function বানাতে হবে যেটা ইনপুট হিসেবে একটা string নেবে।

সেই string-এর মধ্যে কয়টা vowel (a, e, i, o, u — ছোট ও বড় দুই ধরণের) আছে সেটা গুনে বের করতে হবে।

শেষে সেই সংখ্যা রিটার্ন বা প্রিন্ট করতে হবে।

📌 উদাহরণ:

Input: "Hello World"

Vowels: e, o, o → মোট 3 টা

Output: 3
 */

function findVowel(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

const result = findVowel('rachel kaka');
console.log('the number of vowles are:', result);
