/**
 * নামের array দেওয়া আছে। প্রতিটা নামের সামনে "Hello, " লিখে print করতে হবে।
 */

const names = ["shahed", "jihad", "rashel", "oshan", "bokchoy"];
const name = names.forEach((x) => {
  console.log(`Hello, ${x}`);
});
