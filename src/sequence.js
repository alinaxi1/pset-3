const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const number1 = Number(readlineSync.question("\nEnter three numbers.\n\n"));
const number2 = Number(readlineSync.question(""));
const number3 = Number(readlineSync.question(""));

if (number1 < number2 < number3) {
  console.log("\nStrictly increasing.");
} else if (number1 <= number2 <= number3) {
  console.log("\nIncreasing.");
} else if (number1 == number2 == number3) {
  console.log("\nEqual.");
} else if (number1 >= number2 >= number3) {
  console.log("\nDecreasing.");
} else if (number1 > number2 > number3) {
  console.log("\nStrictly decreasing.");
} else if (!(Number(number1) || Number(number2) || Number(number3)) || !(MIN) || !(MAX)) {
  console.log("\nInvalid.");
} else {
  console.log("\nUnordered.");
}
