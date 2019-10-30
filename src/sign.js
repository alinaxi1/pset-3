const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const number = Number(readlineSync.question("\nEnter a number: "));

if (number > 0) {
  console.log("\nPositive.");
} else if (number < 0) {
  console.log("\nNegative");
} else if (number == 0) {
  console.log("\nZero");
} else {
  console.log("\nInvalid");
}
