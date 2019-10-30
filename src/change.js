const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.");
} else {
    const quarters = Math.floor(amount / 0.25);
    let change = amount - (quarters * 0.25);

    const dimes = Math.floor(change / 0.1);
    change = change - (dimes * 0.1);

    const nickels = Math.floor(change / 0.05);
    change = change - (nickels * 0.05);

    const pennies = Math.round(change / 0.01);
    console.log(quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies.");
}
