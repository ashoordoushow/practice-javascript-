// Basic - Deliberate Practice Link 1 - Writing Numbers & String Variables With Built-In Methods

// Ex. of Built-In Method
// let word = "hello";
// console.log(word.toUpperCase()); <--- .toUpperCase() is built-in method (a function attached to a string in this case)

// 1 // Write a program that uses a variable to store a number, then prints that number plus 10.

// let number = 23;
// console.log(number + 10);

// 2 // Write a program that uses a variable to store a word, then prints that word with all capital letters.

// let word = "hello";
// console.log(word.toUpperCase());

// 3 // Write a program that uses variables to store two numbers, then prints the numbers added together.

// let number1 = 23;
// let number2 = 44;
// console.log(number1 + number2);

// 4 // Write a program that uses a variable to store a word, then prints that word in reverse order.

// let word = "bye";
// console.log(word.split("").reverse().join(""));

// JavaScript DOES NOT have a .reverse() method for strings, .reverse() only works for arrays. So, when you do .split() first it turns each character in your string into an array, then NOW .reverse() is allowed to reverse the order of your characters

// 5 // Write a program that uses a variable to store a number, then prints the number times 10.

// let number = 12;
// console.log(number * 10);

// 6 // Write a program that uses variables to store two words, then prints both words on the same line in all capital letters.

// let word1 = "happy";
// let word2 = "great";

// console.log(word1.toUpperCase() + word2.toUpperCase());

// 7 // Write a program that uses a variable to store a word, then prints the number of letters in the word.

// let word = "Dictionary";
// console.log(word.length);

// 8 // Write a program that uses a variable to store a number with decimals, then prints the number as an integer.

// vv THIS IS WRONG RETURNS STRING
// let decimalNumber = 4.73;
// console.log(decimalNumber.toFixed()); // <--- This returns number as a string, INCORRECT

// vvv THIS IS CORRECT!! RETURNS INTEGER
// let decimalNumber = 78.9123;
// let number = Math.round(decimalNumber);
// console.log(number);

// 9 // Write a program that uses a variable to store two numbers, then prints the two numbers multiplied together.

// let number1 = 34;
// let number2 = 90;

// console.log(number1 * number2);

// 10 // Write a program that uses a variable to store a word, then prints the word with all lowercase letters.

// let word = "New York";
// console.log(word.toLowerCase());

// BASIC - LINK2 - WRITING IF STATEMENTS WITH VALID SYNTAX

// 1 // Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

// let number = 321;

// if (number === 10) {
//   console.log(0);
// } else {
//   console.log(-1);
// }

// 2 // Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

// let number = 456;

// if (number < 10) {
//   console.log(-1);
// } else if (number > 10) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// 3 // Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

// let number1 = 0;
// let number2 = 0;

// if (number1 < 10 && number2 < 10) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// 4 // Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

// let number = 900;

// if (number > 9000) {
//   console.log(1);
// } else {
//   console.log(-1);
// }

// 5 // Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

// let number = 78;

// if (number < 10) {
//   console.log(9);
// } else if (number < 20) {
//   console.log(19);
// } else if (number < 30) {
//   console.log(29);
// } else {
//   console.log(-1);
// }

// 6 // Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

// let number1 = 45;
// let number2 = 2;

// if (number1 > 10 || number2 > 10) {
//   console.log(100);
// } else {
//   console.log(-100);
// }

// 7 // Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

// let number = 90;

// if (number < 0) {
//   console.log(1776);
// } else {
//   console.log(1979);
// }

// 8 // Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

// let number = 2;

// if (number === 100) {
//   console.log(100);
// } else if (number === 99) {
//   console.log(99);
// } else {
//   console.log(0);
// }

// 9 // Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

// let number1 = 3223;
// let number2 = 2;

// if (number1 < 0 && number2 > 0) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// 10 // Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

// let number = 5;

// if (number > 80) {
//   console.log(5);
// } else if (number > 60) {
//   console.log(4);
// } else if (number > 40) {
//   console.log(3);
// } else if (number > 20) {
//   console.log(2);
// } else {
//   console.log(1);
// }

// BASIC - LINK3 - Write a loop which modifies a variable each time the loop runs

// Ex. for Loop

// for (let i = 0; i < 5; i++) {
//   console.log("Hello");
// } // Prints "Hello" 5 times

// 1 // Write a while loop to print the numbers 1 through 10.

// let x = 0;

// while (x < 10) {
//   x++;
//   console.log(x);
// }

// 2 // Write a while loop that prints the word "hello" 5 times.

// let x = 0;

// while (x < 5) {
//   x++;
//   console.log("hello");
// }

// 3 // Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

// let enterWord = prompt(); {    // <-- reason for error in terminal because prompt() function only works in browser not VScode or Node.js SO TRY AGAIN BELOW
//   console.log("Please Enter A Word");
// }

// while (enterWord !== "stop") {
//   console.log("Try Again!");
// } if (enterWord === "stop") {
//   console.log("Congratulations");
// }

// const readline = require("readline");  // so this readline/ code block is incorrect too becuse readline doesn't work well with while loops since it's async which is doesn't wait the async function like rl.question() to finsh TRY AGAIN BELOW

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function askWord() {
//   rl.question("Please Enter A Word: ", (word) => {
//     while (word !== "stop") {
//       console.log("Try Again");
//       rl.close();
//     } if (word === "stop") {
//       console.log("Congratulations");
//     }
//   });
// }

// askWord();

// WHEN YOU COME BACK TO THIS YOU WILL NEED TO USE READLINE-SYNC MODULE!