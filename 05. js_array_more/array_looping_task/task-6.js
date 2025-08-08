/**
 * Given an array of student objects, print each student’s name and marks.
 */

const student = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

for (const result of student) {
  console.log(result.name + " scored " + result.marks);
}