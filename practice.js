// 1 // Write a program that uses a variable to store a number, then prints that number plus 10.

// var number = 23;
// console.log(number + 10);

// 2 // Write a program that uses a variable to store a word, then prints that word with all capital letters.

// var word = "Basketball";
// console.log(word.toUpperCase());

// 3 // Write a program that uses variables to store two numbers, then prints the numbers added together.

// var number1 = 23;
// var number2 = 3;

// console.log(number1 + number2);

// 4 // Write a program that uses a variable to store a word, then prints that word in reverse order.

// var word = "Iphone";
// console.log(word.split("").reverse().join("")); // <--- this is not a single BUILT-IN METHOD! YOU combined built in methods to perform this operation!

// 5 // Write a program that uses a variable to store a number, then prints the number times 10.

// let number = 400;
// console.log(number * 10);

// 6 // Write a program that uses variables to store two words, then prints both words on the same line in all capital letters.

// let word1 = "Pen";
// let word2 = "Pencil";

// console.log(word1.toUpperCase() + " " + word2.toUpperCase());

// 7 // Write a program that uses a variable to store a word, then prints the number of letters in the word.

// let word = "Technoligy";
// console.log(word.length); // <--- NOT a BUILT-IN METHOD, THIS IS A BUILT-IN PROPIERTY!

// 8 // Write a program that uses a variable to store a number with decimals, then prints the number as an integer.

// let decimalNumber = 3.9231;
// console.log(decimalNumber.toFixed()); // <--- this outputs your number to a string even though it rounds your number for you properly

// let decimalNumber = 6.932;
// console.log(parseInt(decimalNumber)); // <--- this built-in method DOES NOT round at all! all this is doing is removing the extra decimal numbers

// THE PROPER BUILT-IN-METHOD TO USE IN THIS CASE IS :

// let decimalNumber = 9.934214;
// console.log(Math.round(decimalNumber)); // This is the proper way to round AND turn a decimal number to a single INTEGER!

// 9 // Write a program that uses a variable to store two numbers, then prints the two numbers multiplied together.

// let number1 = 234;
// let number2 = 92943;
// console.log(number1 * number2);

// 10 // Write a program that uses a variable to store a word, then prints the word with all lowercase letters.

// let word = "Laptop";
// console.log(word.toLowerCase());

// LINK 2

// 1 // Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

// let number = 100;
// if (number === 10) {    // the paranthesis are used as a condition CONTAINER , and the curly brackets are the code block CONTAINERS
//   console.log(0);
// } else {
//   console.log(-1);
// }

// 2 // Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

// let number = 2;

// if (number < 10) {
//   console.log(-1);
// } else if (number > 10) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// 3 // Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

// let number1 = 1;
// let number2 = 2;

// if (number1 && number2 < 10) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// 4 // Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise. 

// let number = 12;

// if (number > 9000) {
//   console.log(1);
// } else {
//   console.log(-1);
// }

// 5 // Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

// let number = 29;

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

// let number1 = 44;
// let number2 = 34;

// if (number1 || number2 > 10) {
//   console.log(100);
// } else {
//   console.log(-100);
// }

// 7 // Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

// let number = 12;

// if (number < 0) {
//   console.log(1776);
// } else {
//   console.log(1979);
// }

// 8 // Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

// let number = 90;

// if (number === 100) {
//   console.log(100);
// } else if (number === 99) {
//   console.log(99);
// } else {
//   console.log(0);
// }

// 9 // Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

// let number1 = -2;
// let number2 = 2;

// if (number1 < 0 && number2 > 0) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// 10 // Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

// let number = 55;

// if (number > 80) {
//   console.log(5);
// } else if (number > 60 ) {
//   console.log(4);
// } else if (number > 40) {
//   console.log(3);
// } else if (number > 20) {
//   console.log(2);
// } else {
//   console.log(1);
// }

// LINK 3

// 1 // Write a while loop to print the numbers 1 through 10.

// let number = 1;

// while (number <= 10) {
//   console.log(number);
//   number += 1;
// }

// 2 // Write a while loop that prints the word "hello" 5 times.

