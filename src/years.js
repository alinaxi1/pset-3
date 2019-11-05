const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

const grade = Number(readlineSync.question("\nEnter a year: "));

if (grade % 4 === 0) {
  console.log("\n" + grade + " is a leap year.");
} else if (grade <= MIN || grade >= MAX) {
  console.log("\nInvalid.");
} else {
  console.log("\n" + grade + " is not a leap year.");
}
