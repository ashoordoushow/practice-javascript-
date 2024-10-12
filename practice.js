// BASIC DELIBERATE PRACTICE LINK1

// 1 // Write a program that uses a variable to store a number, then prints that number plus 10.

// var number = 2; //this is how you write a variable in javascript
// console.log(number + 10); //this is how you write the value of the variable plus an integer, 'console.log()' prints results in javascripts console

// var x = 300;
// console.log(x * 2);

// 2 // Write a program that uses a variable to store a word, then prints that word with all capital letters.

var word = 'hello';
console.log(word.toUpperCase()); // this is the capital letters method used in javascript

var definition = 'chronological';
console.log(definition.toUpperCase());

// 3 // Write a program that uses variables to store two numbers, then prints the numbers added together.

var x = 30;
var y = 23;
console.log(x + y);

// 4 // Write a program that uses a variable to store a word, then prints that word in reverse order.

console.log(word.split("").reverse().join(""));
console.log(word.split("").reverse().join(""));
console.log(word.split("").reverse().join(""));
console.log(word.split("").reverse().join(""));

var word = "hello";
console.log(word.split("").reverse().join("")); // this is the 3 javascript methods you must add to print your word in reverse order

// 5 // Write a program that uses a variable to store a number, then prints the number times 10.

var number = 2;
console.log(number * 10);

var x = 30;
console.log(x * 30);

var number = 2;
console.log(number * 10);

// 6 // Write a program that uses variables to store two words, then prints both words on the same line in all capital letters.

var word1 = "proper";
var word2 = "very nice";
console.log(word1.toUpperCase() + " "  + word2.toUpperCase());

var definition1 = "google";
var definition2 = "is a very useful resource";
console.log(definition1.toUpperCase() + " " + definition2.toUpperCase());

// 7 // Write a program that uses a variable to store a word, then prints the number of letters in the word.

var word = "city";
console.log(word.length);

var word2 = "techincallity";
console.log(word2.length);

// 8 // Write a program that uses a variable to store a number with decimals, then prints the number as an integer.

var number = 3.6356;
console.log(parseInt(number));

var number3 = 4.9;
console.log(parseInt(number3)); // 'parseInt()' converts decimals to integers but always round down

// 9 // Write a program that uses a variable to store two numbers, then prints the two numbers multiplied together.

var number1 = 23;
var number2 = 45;
console.log(number1 * number2);

// 10 // Write a program that uses a variable to store a word, then prints the word with all lowercase letters.

var word = "BECAUSE";
console.log(word.toLowerCase());

var word1 = "BASKETBALL";
console.log(word1.toLowerCase());

var word2 = "MAGICIAN";
console.log(word2.toLowerCase());

var word3 = "JAVASCRIPT";
console.log(word3.toLocaleLowerCase());  // this is also another way of writing this function to print everything in lower case letters

// BASIC DELIBERATE PRACTICE LINK2

// 1 // Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

var number = 46;
if (number === 10) {
  console.log(0);
} 
else {
  console.log(-1);
}

var number = 10;       // this is how you write 'if statements for javascript, apparently you need 3 '=' signs to set a variable equal to something in javascript + you use paranthesis and hashes when writing 'if statements'
if (number === 10) {
  console.log(0);
}
else {
  console.log(-1);
}

var number = 90;
if (number === 10) {
  console.log(0);
}
else {
  console.log(-1);
}

var number = 10;
if (number === 10) {
  console.log(0);
}
else {
  console.log(-1);
}

// 2 // Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

var number = 77
if (number < 10) {       
  console.log(-1);
}
else if (number > 10) {   // when writing 'elsif' in javascript must write it like this 'else if' (spaced)
  console.log(1);
}
else {
  console.log(0);
}                   // i think the hashes kind of represent the 'end' for javascript


var number = 10;
if (number < 10) {
  console.log(-1);
}
else if (number > 10) {
  console.log(1);
}
else {
  console.log(0);
}

var number = 2
if (number < 10) {
  console.log(-1);
}
else if (number > 10) {
  console.log(1);
}
else {
  console.log(0);
}

// 3 // Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

var number1 = 55;
var number2 = 70;

if (number1 && number2 < 10) {
  console.log(1);
}
else {
  console.log(0);
}

var number1= 2;
var number2 = 3;
if (number1 && number2 < 10) {
  console.log(1);
}
else {
  console.log(0);
}

// OR I can write it like this below

var number1 = 5;
var number2 = 8;
if (number1 < 10 && number2 < 10) {
  console.log(1);
}
else {
  console.log(0);
}

// 4 // Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

var number = 2;
if (number > 9000) {
  console.log(1);
}
else {
  console.log(-1);
}

// 5 // Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

var number = 9;
if (number < 10) {
  console.log(9);
}
else if (number < 20) {
  console.log(19);
}
else if (number < 30) {
  console.log(29);
}
else {
  console.log(-1);
}

// 6 // Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

var number1 = 45;
var number2 = 33;
if (number1 || number2 > 10) {
  console.log(100);
}
else {
  console.log(-100);
}

// 7 // Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

var pop = 77;
if (pop < 0) {
  console.log(1776);
}
else {
  console.log(1979);
}

// 8 // Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

var javascriptVariable = 99;
if (javascriptVariable === 100) {
  console.log(100);
}
else if (javascriptVariable === 99) {
  console.log(99);
}
else {
  console.log(0);
}

// 9 // Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

var numbero1 = 17;
var numbero2 = 33;
if (numbero1 < 0 && numbero2 > 0) {
  console.log(1);
}
else {
  console.log(0);
}

// 10 // Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

var number1 = 78;
if (number1 > 80) {
  console.log(5);
}
else if (number1 > 60) {
  console.log(4);
}
else if (number1 > 40) {
  console.log(3);
}
else if (number1 > 20) {
  console.log(2);
}
else {
  console.log(1);
}