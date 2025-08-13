/**
 * এই টাস্কে তোমাকে একটা function বানাতে হবে যেটা সেলসিয়াস (°C) থেকে ফারেনহাইট (°F) এ তাপমাত্রা রূপান্তর করবে।
 * Fahrenheit = (Celsius * 9/5) + 32
 */

function convertCelsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

const celsiusTemp = 5;
const fahrenheitTemp = convertCelsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp}°F`);
