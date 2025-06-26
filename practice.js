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

