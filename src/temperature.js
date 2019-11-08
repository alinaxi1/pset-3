const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const temperature = Number(readlineSync.question("\nEnter a temperature: "));
const scale = readlineSync.question("Enter a scale: ").toUpperCase();

if (scale === "F" && temperature <= 32) {
  console.log("\nSolid.");
} else if (scale === "F" && temperature > 32 && temperature < 212) {
  console.log("\nLiquid.");
} else if (scale === "F" && temperature >= 212) {
  console.log("\nGas.");
} else if (scale === "C" && temperature <= 0) {
  console.log("\nSolid.");
} else if (scale === "C" && temperature > 0 && temperature < 100) {
  console.log("\nLiquid.");
} else if (scale === "C" && temperature >= 100) {
  console.log("\nGas.");
} else if (scale === "K" && temperature <= 273.15) {
  console.log("\nSolid.");
} else if (scale === "K" && temperature > 273.15 && temperature < 373.15) {
  console.log("\nLiquid.");
} else if (scale === "K" && temperature >= 373.15) {
  console.log("\nGas.");
} else {
  console.log("\nInvalid.");
}
