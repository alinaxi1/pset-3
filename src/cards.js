const readlineSync = require("readline-sync");
const card = readlineSync.question("\nEnter a playing card: ").toUpperCase();

let number = card.charAt(0);
let suit = card.charAt(1);

if (suit === "S" && number === "A") {
  console.log("\nAce of Spades.");
} else if (suit === "S" && number === "2") {
  console.log("\nTwo of Spades.");
} else if (suit === "S" && number === "3") {
  console.log("\nThree of Spades.");
} else if (suit === "S" && number === "4") {
  console.log("\nFour of Spades.");
} else if (suit === "S" && number === "5") {
  console.log("\nFive of Spades.");
} else if (suit === "S" && number === "6") {
  console.log("\nSix of Spades.");
} else if (suit === "S" && number === "7") {
  console.log("\nSeven of Spades.");
} else if (suit === "S" && number === "8") {
  console.log("\nEight of Spades.");
} else if (suit === "S" && number === "9") {
  console.log("\nNine of Spades.");
} else if (suit === "S" && number === "T") {
  console.log("\nTen of Spades.");
} else if (suit === "S" && number === "J") {
  console.log("\nJack of Spades.");
} else if (suit === "S" && number === "Q") {
  console.log("\nQueen of Spades.");
} else if (suit === "S" && number === "K") {
  console.log("\nKing of Spades.");
} else if (suit === "C" && number === "A") {
  console.log("\nAce of Clubs.");
} else if (suit === "C" && number === "2") {
  console.log("\nTwo of Clubs.");
} else if (suit === "C" && number === "3") {
  console.log("\nThree of Clubs.");
} else if (suit === "C" && number === "4") {
  console.log("\nFour of Clubs.");
} else if (suit === "C" && number === "5") {
  console.log("\nFive of Clubs.");
} else if (suit === "C" && number === "6") {
  console.log("\nSix of Clubs.");
} else if (suit === "C" && number === "7") {
  console.log("\nSeven of Clubs.");
} else if (suit === "C" && number === "8") {
  console.log("\nEight of Clubs.");
} else if (suit === "C" && number === "9") {
  console.log("\nNine of Clubs.");
} else if (suit === "C" && number === "T") {
  console.log("\nTen of Clubs.");
} else if (suit === "C" && number === "J") {
  console.log("\nJack of Clubs.");
} else if (suit === "C" && number === "Q") {
  console.log("\nQueen of Clubs.");
} else if (suit === "C" && number === "K") {
  console.log("\nKing of Clubs.");
} else if (suit === "D" && number === "A") {
  console.log("\nAce of Diamonds.");
} else if (suit === "D" && number === "2") {
    console.log("\nTwo of Diamonds.");
} else if (suit === "D" && number === "3") {
    console.log("\nThree of Diamonds.");
} else if (suit === "D" && number === "4") {
    console.log("\nFour of Diamonds.");
} else if (suit === "D" && number === "5") {
    console.log("\nFive of Diamonds.");
} else if (suit === "D" && number === "6") {
    console.log("\nSix of Diamonds.");
} else if (suit === "D" && number === "7") {
    console.log("\nSeven of Diamonds.");
} else if (suit === "D" && number === "8") {
    console.log("\nEight of Diamonds.");
} else if (suit === "D" && number === "9") {
    console.log("\nNine of Diamonds.");
} else if (suit === "D" && number === "T") {
    console.log("\nTen of Diamonds.");
} else if (suit === "D" && number === "J") {
    console.log("\nJack of Diamonds.");
} else if (suit === "D" && number === "Q") {
    console.log("\nQueen of Diamonds.");
} else if (suit === "D" && number === "K") {
    console.log("\nKing of Diamonds.");
} else if (suit === "H" && number === "A") {
  console.log("\nAce of Hearts.");
} else if (suit === "H" && number === "2") {
    console.log("\nTwo of Hearts.");
} else if (suit === "H" && number === "3") {
    console.log("\nThree of Hearts.");
} else if (suit === "H" && number === "4") {
    console.log("\nFour of Hearts.");
} else if (suit === "H" && number === "5") {
    console.log("\nFive of Hearts.");
} else if (suit === "H" && number === "6") {
    console.log("\nSix of Hearts.");
} else if (suit === "H" && number === "7") {
    console.log("\nSeven of Hearts.");
} else if (suit === "H" && number === "8") {
    console.log("\nEight of Hearts.");
} else if (suit === "H" && number === "9") {
    console.log("\nNine of Hearts.");
} else if (suit === "H" && number === "T") {
    console.log("\nTen of Hearts.");
} else if (suit === "H" && number === "J") {
    console.log("\nJack of Hearts.");
} else if (suit === "H" && number === "Q") {
    console.log("\nQueen of Hearts.");
} else if (suit === "H" && number === "K") {
    console.log("\nKing of Hearts.");
} else {
  console.log("\nInvalid.");
}
