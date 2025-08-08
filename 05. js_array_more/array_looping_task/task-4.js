/**
 * Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
 */

const statement = "I am a hard working person";
let spliteStat = statement.split(" ");
let reversed = [];

for (let i = spliteStat.length - 1; i >= 0; i--) {
  reversed.push(spliteStat[i]);
}
console.log(reversed.join(" "));