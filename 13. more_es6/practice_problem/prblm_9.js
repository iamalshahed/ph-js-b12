/**
 * Celsius temperature এর একটা array দেওয়া আছে। সেগুলোকে Fahrenheit এ convert করে নতুন একটা array বানাতে হবে।
 */

const celsiusTemperatures = [0, 10, 20, 30, 40];

const f = celsiusTemperatures.map((x) => {
  const convertF = (x * 9) / 5 + 32;
  return convertF;
});
console.log(celsiusTemperatures);
console.log(f);
