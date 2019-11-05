const readlineSync = require("readline-sync");

const month = readlineSync.question("\nEnter a month: ").toLowerCase();

if (month === "april" || month === "june" || month === "september" || month === "november" || month === "apr" || month === "jun" || month === "sep" || month === "nov") {
  console.log("\n30 days.");
} else if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december" || month === "jan" || month === "mar" || month === "jul" || month === "aug" || month === "oct" || month === "dec") {
  console.log("\n31 days.");
} else if (month === "february" || month === "feb") {
  console.log("\n28 or 29 days.");
} else {
  console.log("Invalid");
}
