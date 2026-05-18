// Link 1 Deliberate Practice BASIC REVIEW -  Write number and string variables with built-in methods

// 1 Write a program that uses a variable to store a number, then prints that number plus 10.

// let number = 21;
// console.log(number + 10);


// 2 Write a program that uses a variable to store a word, then prints that word with all capital letters.

// let word = "hello";
// console.log(word.toUpperCase());


// 3 Write a program that uses variables to store two numbers, then prints the numbers added together.

// let firstNumber = 222;
// let secondNumber = 2;

// console.log(firstNumber + secondNumber);


// Write a program that uses a variable to store a word, then prints that word in reverse order.

// let word = "basketball";
// console.log(word.split("").reverse().join(""));


// Write a program that uses a variable to store a number, then prints the number times 10.

// let number = 1;
// console.log(number * 10);



// Write a program that uses variables to store two words, then prints both words on the same line in all capital letters.

// let wordOne = "never";
// let wordTwo = "OK";
// console.log(wordOne.toUpperCase() + wordTwo.toUpperCase());


// Write a program that uses a variable to store a word, then prints the number of letters in the word.

// let word = "Bottle";
// console.log(word.length);



// Write a program that uses a variable to store a number with decimals, then prints the number as an integer.

// let number = 56.3923;
// console.log(Math.round(number));



// Write a program that uses a variable to store two numbers, then prints the two numbers multiplied together.

// let numberOne = 99;
// let numberTwo = 65;

// console.log(numberOne * numberTwo);


// Write a program that uses a variable to store a word, then prints the word with all lowercase letters.

// let word = "apPLe";
// console.log(word.toLowerCase());


// Deliberate Practice Link 2 BASIC refresh - Write if statements with valid syntax

// Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

// let number = 10;

// if (number === 10) {
//   console.log(0);
// }  else {
//   console.log(-1);
// }
 
// Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

// let number = 212;

// if (number < 10) {
//   console.log(-1);
// } else if (number > 10) {
//   console.log(1);
// } else {
//   console.log(0);
// }
 

// Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

// let numberOne = 33;
// let numberTwo = 21;

// if (numberOne < 10 && numberTwo < 10) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

// let number = 21;

// if (number > 9000) {
//   console.log(1);
// } else {
//   console.log(-1);
// }

// Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

// let number = 93;

// if (number < 10) {
//   console.log(9);
// } else if (number < 20) {
//   console.log(19);
// } else if (number < 30) {
//   console.log(29);
// } else {
//   console.log(-1);
// }


// Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

// let numberOne = 23;
// let numberTwo = 45;

// if (numberOne > 10 || numberTwo > 10) {
//   console.log(100);
// } else {
//   console.log(-100);
// }

// Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

// let number = 45;

// if (number < 0) {
//   console.log(1776);
// } else {
//   console.log(1979);
// }

// Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

// let number = 94;

// if (number === 100) {
//   console.log(100);
// } else if (number === 99) {
//   console.log(99);
// } else {
//   console.log(0);
// }


// Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

// let numberOne = 43;
// let numberTwo = 3;

// if (numberOne < 0 && numberTwo > 0) {
//   console.log(1);
// } else {
//   console.log(0);
// }


// Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).


// let number = 8;

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


// Deliberate Practice Link 3 BASICS refresher - Write a loop which modifies a variable each time the loop runs

// Write a while loop to print the numbers 1 through 10.

// let number = 1;
// while (number <= 10) {
//   console.log(number);
//   number += 1;
// }

// Write a while loop that prints the word "hello" 5 times.

// let x = 0;
// while (x < 5) {
//   console.log("hello");
//   x += 1;
// }


// Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

//  NOT POSSIBLE / RECOMMENDED TO USE WHILE LOOP -> FUNCTION REQUEIRED TO USE READLINE MODULE TO GET USERS INPUT IN JAVASCRIPT

// Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

// let x = 0;

// while (x <= 100) {
//   console.log(x);
//   x += 5;
// }

// Write a while loop that prints the number 9000 ten times.

// let x = 0;

// while (x < 10) {
//   console.log(9000);
//   x += 1;
// }

// Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

// const prompt = require("prompt-sync")();

// while (true) {
// const input = prompt("Please Enter A Number: ");
//   if (input < 10) {
//     console.log(input);
//   } else {
//     break;
//   }
// }



// Write a while loop that prints the numbers 50 to 70.

// let number = 50;

// while (number <= 70) {
//   console.log(number);
//   number += 1;
// }


// Write a while loop that prints the phrase "Around the world" 144 times.


// let x = 0;
// while (x < 144) {
//   console.log("Around the world");
//   x += 1;
// }


// Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

// const prompt = require("prompt-sync")();

// while (true) {
//   input = prompt("Please Enter A Word: ");
//   if (input.length < 5) {
//     console.log(input);
//   } else {
//     break;
//   }
// }


// Write a while loop that prints the even numbers from 2 to 40.

// let number = 2;
// while (number <= 40) {
//   console.log(number);
//   number += 2;
// }



// Deliberate Practice BASIC refresher Link 4 - Write an array, read items from an array, and add new items to existing array

// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

// let words = ["happy", "birthday", "brother"];

// words.push("nothing");
// words.push("not");
// console.log(words);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

// let letters = ["f", "a", "q", "p"];

// letters[1] = "t";
// console.log(letters);


// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

// let numbers = [3, 2, 1, 9];

// let x = 0;
// while (x < numbers.length) {
//   console.log(numbers[x]);
//   x += 1;
// }


// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

// const number = [2];
// number.push(3, 90, 12);
// console.log(number);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

// const strings = ["hello", "nope", "yup"];

// strings[2] = strings[2].toUpperCase();
// console.log(strings);


// Create an array to store 3 names. Then print out each name on separate lines with a while loop.


// const names = ["Billy", "John", "Norman"];
// let index = 0;

// while (index < names.length) {
//   console.log(names[index]);
//   index += 1;
// }

// Create an array to store 2 strings. Then add one string to the array and print the array on one line.

// const strings = ["Table", "coffee"];

// strings.push("chair");
// console.log(strings);


// Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

// const numbers = [21, 45, 323, 3];

// numbers[0] = numbers[0] * 10;
// console.log(numbers);

// Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

// const numbers = [333, 444];
// let index = 0;

// while (index < numbers.length) {
//   console.log(numbers[index]);
//   index += 1;
// }


// Create an array to store names of 3 different countries. Then add one more country and print the array one line.

// const countries = ["Unite States", "Canada", "Israel"];

// countries.push("Spain");
// console.log(countries);

// Deliberate Practice Link 5 - Write a hash, read items from a hash, and add new items to existing hash

// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

// const person = {firstName: "Larry", lastName: "Bird", email: "lbird@gmail.com"};

// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["email"]);

// let person = {firstName: "Mike", lastName: "Jordan", email: "mj@gmail.com"};

// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["email"]);

// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

// const people = [
//   {firstName: "George", lastName: "Matt"}, 
//   {firstName: "Ash", lastName: "Johnson"}, 
//   {firstName: "Mike", lastName: "Phillips"}
// ];

// console.log(people[0].firstName);

// Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.


// const menuItems = [
//   {item: "cake", price: 10},
//   {item: "fries", price: 32},
//   {item: "burger", price: 12}
// ];

// menuItems.push({item: "ice cream", price: 13});
// console.log(menuItems);

// Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

// const book = {title: "Harry Potter", author: "James", numberOfPages: 300, language: "English"};

// console.log(book["title"]);
// console.log(book["author"]);
// console.log(book["numberOfPages"]);
// console.log(book["language"]);

// Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

// const books = [
//   {title: "Hunger Games", author: "Mitch"}, 
//   {title: "Coffee", author: "Joe"}, 
//   {title: "Tech", author: "Adam"}
// ];

// console.log(books[2].author);
// Make a hash to store 3 different states and their capitals. Then add a new state and capital and print the hash to see the result.

// const states = {Cali: "Los Angelos", Illiois: "Springfield", Florida: "Jacksonville"};

// states["Washington"] = "DC";
// console.log(states);


// Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

// const laptop = {brand: "HP", model: "g7", year: 2020};

// console.log(laptop["brand"]);
// console.log(laptop["model"]);
// console.log(laptop["year"]);

// Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

// const laptops = [
//   {brand: "HP", model: "g7"},
//   {brand: "Apple", model: "m2"},
//   {brand: "Dell", model: "V2"}
// ];

// console.log(laptops[1].model);


// Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

// const words = {bike: "Pedaling device", notebook: "collection of paper to write on"};

// words["table"] = "platform to place items on";
// console.log(words);

// Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

// const shirt = {brand: "nike", color: "black", size: "Large"};

// console.log(shirt["brand"]);
// console.log(shirt["color"]);
// console.log(shirt["size"]);


// Deliberate Practice Link 6 BASIC refresher - Write a custom method with valid syntax

// Write a method that takes in a number and returns the number times two. Then run the method and print the result.

// function numberTimesTwo(number) {
//   return number * 2;
// }

// console.log(numberTimesTwo(10));

// Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

// function stringToUpperCase(string) {
//   return string.toUpperCase();
// }

// console.log(stringToUpperCase("hello"));

// Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

// function numberSubtract(x, y) {
//   return x - y;
// }

// console.log(numberSubtract(10, 5));

// Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

// function numberDoubled(number) {
//   return number * number;
// }

// console.log(numberDoubled(10));

// Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

// function firstLetter(string) {
//   return string = string[0];
// }

// console.log(firstLetter("basketball"));

// Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

// function combineSpace (string1, string2, string3) {
//   return `${string1} ${string2} ${string3}`;
// }

// console.log("How", "are", "you");

// Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

// function numberToString(number) {
//   return number.toString();
// }
// const number = numberToString(23);
// console.log(number);
// console.log(typeof number);

// Write a method that takes in a string and returns the string repeated 5 times. Then run the method and print the result.

// function stringRepeatedTimesFive(string) {
//   let x = 0;
//   while (x < 5) {
//     console.log(string);
//     x += 1;
//   }
// }

// stringRepeatedTimesFive("batman");


// Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

// function numberAverage(x, y, z) {
//   return (x + y + z) / 3;
// }

// console.log(numberAverage(10, 5, 2));

// Write a method that takes in a number and returns the number times 10 plus 30. Then run the method and print the result.

// function numberTimesTenPlusThirty(number) {
//   return number * 10 + 30;
// }

// console.log(numberTimesTenPlusThirty(5));

// Deliberate Practice BASIC refresher Link 7 - Write a custom class with valid syntax

// Write a Song class with attributes for name, artist, and duration.

// class Song {
//   constructor(name, artist, duration) {
//     this.name = name;
//     this.artist = artist;
//     this.duration = duration;
//   }
// }

// let song = new Song("hi", "drake", "5 minutes");
// console.log(song);



// Write a Rectangle class with attributes for width and height.

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }

// let rectangle = new Rectangle(34, 2);
// console.log(rectangle);

// Write a Person class with attributes for name and age.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
// }
// }

// const person = new Person("Jay", 25);

// console.log(person);

// Write a Location class with attributes for latitude and longitude.

// class Location {
//   constructor(latitude, longitude) {
//     this.latitude = latitude;
//     this.longitude = longitude;
//   }
// }

// const location = new Location(32.2, 43.2);
// console.log(location);

// Write an Account class with attributes for name and balance.

// class Account {
//   constructor(name, balance) {
//     this.name = name;
//     this.balance = balance;
//   }
// }

// const account = new Account("Chase", 500);
// console.log(account);


// Write a Movie class with attributes for title, director, and year.

// class Movie {
//   constructor(title, director, year) {
//     this.title = title;
//     this.director = director;
//     this.year = year;
//   }
// }

// const movie = new Movie("Remember the Titans", "Bobby", 2013);

// console.log(movie);


// Write a Car class with attributes for make, model, year, and color.

// class Car {
//   constructor(make, model, color) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//   }
// }

// const car = new Car("Honda", "Accord", "black");
// console.log(car);


// Write a Point class with attributes for x, y, and z coordinates.

// class Point {
//   constructor(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }
// }

// const coordinates = new Point(21.3, 12.1, 99.2);
// console.log(coordinates);

// Write a Book class with attributes for title, author, and year.

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
// }

// const book = new Book("Bible", "JESUS CHRIST", 1384);
// console.log(book);


// Write a Plant class with attributes for name, size, and price.

// class Plant {
//   constructor(name, size, price) {
//     this.name = name;
//     this.size = size;
//     this. price = price;
//   }
// }

// const plant = new Plant("Dandelion", "Large", 34);

// console.log(plant);


// Deliberate Practice INTERMEDIATE level - Link 1 - Insert a variable into a string using either concatenation or interpolation

// Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

// let firstName = "John";
// let lastName = "Jones";

// console.log(firstName + lastName);


// Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

// let firstName = "Sonny";
// let lastName = "Brodie";

// console.log(firstName + lastName);

// Write a program that asks the user to input a word. If the word is "marco", print "polo".

// const prompt = require("prompt-sync")();


// while (true) {
//   let input = prompt("Please Enter A Word: ");
//   if (input === "marco") {
//     console.log("polo");
//     break;
//   } else {
//     console.log(input);
//   }
// }

// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

// let color1 = "blue";
// let color2 = "green";
// let color3 = "orange";

// console.log("I like the colors " + color1 + ", " + color2 + ", and " + color3 + ".");


// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

// let color1 = "yellow";
// let color2 = "orange";
// let color3 = "purple";

// console.log(`Three colors = ${color1}, ${color2}, and ${color3}`);



// Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."


// const prompt = require("prompt-sync")();

// while (true) {
//   input = prompt("Please Enter A Name: ");
//   if (input != "Santa") {
//     console.log("You're not Santa!");
//   } else {
//     break;
//   }
// }

// Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

// let title = "Sports";
// let author = "James";

// console.log(title + " " + author);

// Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

// let title = "Sports";
// let author = "James";

// console.log(`${title} ${author}`);

// Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

// const prompt = require("prompt-sync")();

// while (true) {
//   password = prompt("Please Enter A Password: ");
//   if (password === "Joshua") {
//     console.log("Shall we play a game?");
//     break;
//   } else {
//     console.log("Access denied!");
//     break;
//   }
// }

// Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

// let city1 = "Chicago";
// let city2 = "Houston";
// let city3 = "LA";

// console.log("I went to " + city1 + ", " + city2 + ", and " + city3);


// Deliberate Practice INTERMEDIATE level - link 2 - Map an array to a new array with some computation performed on each item

// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

// const numbers = [2, 3, 1];
// const newNumbers = [];

// numbers.forEach((number) => {
//   return newNumbers.push(number * 3);
// });

// console.log(newNumbers);


// Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

// const strings = ["hello", "goodbye"];
// const newStrings = [];

// strings.forEach((string) => {
//   return newStrings.push(string.toUpperCase());
// });

// console.log(newStrings);

// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// const people = [
//   {name: "Roger", age: 22},
//   {name: "Mitch", age: 12}
// ];
// const name = [];

// people.forEach((people) => {                               .forEach ((parameter) =>(arrow function) {rule/defined}) - this is a built-in array method
//   return name.push(people["name"]);
// });

// console.log(name);

// Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].

//  let ex. = x.map(function (parameter) {              Example of .map is a built in method
      // rule/defined
// });

// const numbers = [2, 32, 12];

// let newNumbers = numbers.map(function (number) {
//   return number + 7;
// });
// console.log(newNumbers);

// Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].

// const strings = ["nope", "yessir", "ok"];

// const stringsLength = strings.map(function (string) {
//   return string.length;
// });

// console.log(stringsLength);


// Start with an array of hashes and create a new array of number values from each hash's :age key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// const people = [
//   {name: "Todd", age: 13},
//   {name: "frank", age: 45}
// ];

// const peopleAge = people.map(function (people) {
//   return people["age"];
// });

// console.log(peopleAge);

// Start with an array of numbers and create a new array with each number divided by 2.
// For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// const numbers = [32, 12, 11];
// const numberDividedByTwo = [];

// numbers.forEach((number) => {
//   return numberDividedByTwo.push(number / 2);
// });

// console.log(numberDividedByTwo);

// Start with an array of strings and create a new array with each string's first letter only.
// For example, ["hello", "goodbye"] becomes ["h", "g"].

// const strings = ["good", "bad", "UGLY"];
// const firstLetter = [];

// strings.forEach((string) => {
//   return firstLetter.push(string[0]);
// });

// console.log(firstLetter);


// Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// const people = [
//   {name: "Doug", age: 54}, 
//   {name: "Mitch", age: 21}
// ];
// let ageTimesTwo = [];
// let index = 0;

// while (index < people.length) {
//   ageTimesTwo.push(people[index].age * 2);
//   index += 1;
// }

// console.log(ageTimesTwo);

// Start with an array of numbers and create a new array with each number converted into a string.
// For example, [1, 2, 3] becomes ["1", "2", "3"].

// const numbers = [43, 1, 21];
// const numberToString = [];

// numbers.forEach((number) => {
//   return numberToString.push(number.toString());
// });

// console.log(numberToString);





// Deliberate Practice INTERMEDIATE level refresher link3 - Select items from an array into a new array with items that match a certain condition

// Start with an array of numbers and create a new array with only the numbers less than 20.
// For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

// const numbers = [32, 12, 1];
// const numbersLessThanTwenty = [];

// numbers.forEach((number) => {
//   if (number < 20) {
//     numbersLessThanTwenty.push(number);
//   }
// });

// console.log(numbersLessThanTwenty);

// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

// const strings = ["board", "bill", "wreck"];
// const stringStartWithW = [];

// strings.forEach((string) => {
//   if (string[0] === "w") {
//     stringStartWithW.push(string);
//   }
// });

// console.log(stringStartWithW);

// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

// const items = [
//   {item: "chair", price: 3}, 
//   {item: "car", price: 4000}
// ];
// const priceGreaterThanFive = [];

// items.forEach((item) => {
//   if (item["price"] > 5) {
//     priceGreaterThanFive.push(item);
//   }
// });

// console.log(priceGreaterThanFive);


// Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

// const numbers = [65, 43, 42, 30, 2];
// const evenNumbers = [];

// numbers.forEach((number) => {
//   if (number % 2 === 0 ) {                            // % 2 === 0  <-- this is the way to check if a number is even in JavaScript
//     evenNumbers.push(number);
//   }
// });
// console.log(evenNumbers);


// Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

// const strings = ["hello", "goodbye", "tomorrow", "no", "yes"];
// const fourLetterString = [];

// strings.forEach((string) => {
//   if (string.length < 4) {
//     fourLetterString.push(string);
//   }
// });

// console.log(fourLetterString);


// Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].
// you write a method inside of .map(making it a built-in array method, with function inside of it )

// const items = [
//   {name: "book", price: 20},
//   {name: "phone", price: 1000}
// ];
      
// let nameShorterThanSixLetters = 
//   items.map(function (item) {        
//     if (item["name"].length < 6) {
//       return (item);
//     }
//   });

// console.log(nameShorterThanSixLetters);

// Start with an array of numbers and create a new array with only the numbers greater than or equal to 23.
// For example, [8, 23, 0, 44, 1980, 3] becomes [23, 44, 1980].


// const numbers = [76, 43, 2];
// let greaterThanOrEqualTwentyThree = [];
// let index = 0;

// while (index < numbers.length) {
//   if (numbers[index] >= 23) {
//     greaterThanOrEqualTwentyThree.push(numbers[index]);
//   }
//   index += 1;
// }

// console.log(greaterThanOrEqualTwentyThree);

// Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

// const strings = ["cool", "ok", "natural", "brave"];
// const noLetterB = [];
// let index = 0;

// while (index < strings.length) {
//   if (strings[index][0] !== "b") {
//     noLetterB.push(strings[index]);
//   }
//   index += 1;
// }

// console.log(noLetterB);



// Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

// const items = [
//   {item: "building", price: 30000}, 
//   {item: "shirt", price: 5}
// ];
// const itemLessThanTen = [];

// items.forEach((item) => {
//   if (item["price"] < 10) {
//     itemLessThanTen.push(item);
//   }
// });

// console.log(itemLessThanTen);



// Start with an array of numbers and create a new array with only the odd numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].
// .filter() is a JavaScript array method used to: go through a collection and keep ONLY the items that match a condition.
// .map() and .forEach() both loop through every item in an array, .map() returns a NEW array containing one result for every item, .forEach() simply runs code for each item and does not return a new array.
// const numbers = [87, 54, 34];

// const oddNumbers = numbers.filter(function
// (number) {
//   return number % 2 !== 0;
// });

// console.log(oddNumbers);


// Deliberate Practice INTERMEDIATE level - Link 4 - Reduce an array to a single value based on some computation.

// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.


// const numbers = [32, 1, 5];
// let sum = 0;

// numbers.forEach(function (number) {
//   return sum = sum + number;
// });

// console.log(sum);


// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// const strings = ["hello", "goodbye", "never"];
// let stringsCombined = "";

// strings.forEach(function (string) {
//   return stringsCombined = stringsCombined + string;
// });

// console.log(stringsCombined);

// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// const items = [
//   {item: "chair", price: 20},
//   {item: "couch", price: 10}
// ];
// let sum = 0;

// items.forEach(function (item) {
//   return sum = sum + item["price"];
// });
// console.log(sum);

// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

// const numbers = [21, 22, 1, 3];
// let minNumber = numbers[0];

// numbers.forEach(function (number) {
//   if (number < minNumber) {
//     minNumber = number;
//   }
// });
// console.log(minNumber);


// Start with an array of strings and compute the total length of all the strings.
// For example, ["volleyball", "basketball", "badminton"] becomes 29.

// const strings = ["LORD", "food", "bread", "blue"];
// let stringsLength = 0;

// strings.forEach(function (string) {
//   return stringsLength = stringsLength + string.length;
// });

// console.log(stringsLength);

// Start with an array of hashes and find the hash with the lowest price (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.


// const items = [
//   {item: "air", price: 5}, 
//   {item: "tire", price: 15}, 
//   {item: "table", price: 2}
// ];
// let lowestPrice = items[0].price;

// items.map((item) => {
//   if (item["price"] < lowestPrice) {
//     lowestPrice = item["price"];
//   }
// });
// console.log(lowestPrice);


// Start with an array of numbers and compute product of all the numbers.
// For example, [5, 10, 8, 3] becomes 1200.

// const numbers = [21, 2, 2, 10];
// let numbersProduct = numbers[0]; // 42, 84 , 840
// let index = 1; // 2 , 3, 4

// while (index < numbers.length) {
//   numbersProduct = numbersProduct * numbers[index];
//   index += 1;
// }
// console.log(numbersProduct);

// 21 * 2 = 42
// 21 = numbers[0] && 2 = numbers[1]
// 42 * 2 = 84
// 42 = is now new value && 2 = is numbers[2]
// now 84 is new value && 10 = is final number / numbers[3]
// 84 * 10 = 840

// need loop to loop through all the numbers in the Array
// then once retreived the first value of the array I NEED TO MULTIPLY IT TO THE NEXT VALUE & 
// MAKE THE TOTAL BE MULTIPLIED TO VALUE AFTER THAT IN THE ARRAY TILL ALL VALUES IN ARRAY MULTIPLIED TOGETHER - HOW???

// *** BIGGEST CODING HACK: WRITE DOWN EVERYTHING THAT IS GOING ON IN THE CODE, EVERY SINGLE STEP AND RESULT(s) , THEN YOU WILL NOW KNOW EXACTLY WHAT IS GOING ON AND EXACLT WHAT TO ADD OR CHANGE OR REMOVE , RESULTING IN YOUR SOLUTION!***




// Start with an array of strings and combine them all into a single string, separated by dashes.
// For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// const strings = ["Honda", "acura", "Toyota"];
// let stringsDashed = "-";

// strings.forEach(function (string) {
//   return stringsDashed = stringsDashed + `${string}-`; 
// }); 

// console.log(stringsDashed);


//Notes
// i got an array of strings
// i have an empty object named stringsDashed
// then the array of strings is being looped through each individual value from the array
// and stringDashed's values becomes whatever the string in the array is being looped to until the last value in array
// First -  what is take the initial value from the array and make it -Honda- 
// Second take the second value and make it (without dash before, because already their from Honda) basketball- attached to the first value total = -Honda-basketball-
// Third take 3rd value Toyota- and add it attahed 
// final value = -Honda-basketball-Toyota-
// How?

// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// const items = [
//   {name: "tea", price: 5},
//   {name: "laptop", price: 300},
//   {name: "basketball", price: 0},
//   {name: "bu", price: 30000}
// ];
// let shortestName = items[0]; // "laptop", after first loop now value is - {name: "tea", price: 5}

// items.forEach(function (item) {
//   if (item.name.length < shortestName.name.length) {   // if 3 < 6  true
//     return shortestName = item;                      // return shortestName = {name: "tea", price: 5}
//   }
// });

// console.log(shortestName);


// Start with an array of numbers and compute the maximum number.
// For example, [5, 10, 8, 3] becomes 10.

// const numbers = [7, 4, 23, 11];
// let maxNumber = 0;

// numbers.forEach(function (number) {
//   if (number > maxNumber) {
//     return maxNumber = number;
//   }
// });
// console.log(maxNumber);


//  * computation — the process of a computer performing calculations, logic, transformations, or operations on data to produce a result/output


// Deliberate Practice INTERMEDIATE level link 5 - Write a custom class with custom methods

// Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

// class Song {
//   constructor(name, artist, duration) {
//     this.name = name;
//     this.artist = artist;
//     this.duration = duration;
//   }

//   singleSentence() {
//     return `The song is ${this.name}, by ${this.artist}, is ${this.duration} minutes long.`;
//   }
// }

// let song = new Song("Ice", "Drake", 10);
// console.log(song.singleSentence());



// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// let rectangle = new Rectangle(12, 12);
// console.log(rectangle.area());

// Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   toCapitalLetters() {
//     return this.name.toUpperCase();
//   }
// }

// let person = new Person("bob", 23);
// console.log(person.toCapitalLetters());

// Write a Coordinate class with attributes and reader/writer methods for latitude and longitude. Then write a method that prints out the latitude and longitude in a single sentence.

// class Coordinate {
//   constructor(latitude, longitude) {
//     this.latitude = latitude;
//     this.longitude = longitude;
//   }

//   singleSentence() {
//     return `${this.latitude}, ${this.longitude}`;
//   }
// }

// let coordinates = new Coordinate(21.3, 123);
// console.log(coordinates.singleSentence());

// Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.

// class Account {
//   constructor(name, balance) {
//     this.name = name;
//     this.balance = balance;
//   }

//   belowHundred() {
//     if (this.balance < 100) {
//       return "Warning balance is too low!";
//     }
//   }
// }

// let account = new Account("bob", 12);
// console.log(account.belowHundred());


// Write a Movie class with attributes and reader/writer methods for title, director, and year. Then write a method that prints out the attributes in a single sentence.

// class Movie {
//   constructor(title, director, year) {
//     this.title = title;
//     this.director = director;
//     this.year = year;
//   }

//   singleSentence() {
//     return `Movie is = ${this.title} ${this.director} ${this.year}`;
//   }
// }

// let movie = new Movie("Boom", "bob", 2012);
// console.log(movie.singleSentence());


// Write a Car class with attributes and reader/writer methods for make, model, year, and color. Then write a method that returns the make and model as a single sentence in all lowercase letters.

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   singleSentence() {
//     return `${this.make}${this.model}${this.year}`;
//   }
// }

// let car = new Car("honda", "accord", 2032);
// console.log(car.singleSentence());


// Write a Point class with attributes and reader/writer methods for x, y, and z coordinates. Then write a method that returns true if all 3 numbers are positive, otherwise it returns false.

// class Point {
//   constructor(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }

//   truthyOrFalsy() {
//     if (this.x % 2 === 0 && this.y % 2 === 0 && this.z % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// let point = new Point(2, 86, 12);
// console.log(point.truthyOrFalsy());


// Write a Book class with attributes and reader/writer methods for title, author, and year. Then write a method that returns "Classic" if the book is older than 2000, otherwise it returns "Modern".

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   classicOrModern() {
//     if (this.year < 2000 ) {
//       return "Classic";
//     } else {
//       return "Modern";
//     }
//   }
// }

// let book = new Book("rich", "mike", 1999);
// console.log(book.classicOrModern());


// Write a Plant class with attributes and reader/writer methods for name, size, and price. Then write a method that prints out the attributes in a single sentence.


// class Plant {
//   constructor(name, size, price) {
//     this.name = name;
//     this.size = size;
//     this.price = price;
//   }

//   singleSentence() {
//     return `${this.name}${this.size}${this.price}`;
//   }
// }

// let plant = new Plant("sunflower", "small", 900);
// console.log(plant.singleSentence());






// Deliberate practice ADVANCED level - link 1 - Write nested conditionals

// Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

// If the age is 12 years old or younger, the ticket price is $5.
// If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
// If the customer is 60 years old or older, the ticket price is $7.


// class Customer {
//   constructor(age, movieTime) {
//     this.age = age;
//     this.movieTime = movieTime;
//   }


//   priceOfMovieTicket() {
//     if (this.age <= 12) {
//       return "The ticket price is $5.";
//     } else if (this.age >= 13 && this.age <= 59 && this.movieTime <= 6) {
//       return "The ticket price is $7.";
//     } else if (this.age >= 13 && this.age <= 59 && this.movieTime >= 6) {
//       return "The ticket price is $10";
//     } else if (this.age >= 60) {
//       return "The ticket price is $7.";
//     }
//   }
// }

// let costumer = new Customer(60, 9);
// console.log(costumer.priceOfMovieTicket());




// Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. Then calculate the fine amount based on the following conditions:

// If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
// If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
// If the book is a reference book, there is no fine, regardless of the number of days overdue.
// If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.

// let daysOverdue = 10;
// let bookType = "regular";

// let fineAmount = 0;
// if (bookType === "regular") {
//   if (daysOverdue <= 7) {
//     fineAmount = daysOverdue * 1;
//   } else {
//     fineAmount = daysOverdue * 2;
//   }
// } else if (bookType === "reference") {
//   fineAmount = 0;
// } else if (bookType === "special collection") {
//   fineAmount = daysOverdue * 5;
// }

// console.log(`Fine amount: $${fineAmount}`);

// Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:

// If the total order value is less than $50, there is no discount.
// If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
// If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

// Write a Ruby program that stores the weight of a package and the destination (domestic or international). Then calculate the shipping fee based on the following conditions:

// If the destination is domestic:
// If the weight is less than or equal to 1 kg, the shipping fee is $5.
// If the weight is greater than 1 kg, the shipping fee is $10.
// If the destination is an international shipment:
// If the weight is less than or equal to 1 kg, the shipping fee is $15.
// If the weight is greater than 1 kg, the shipping fee is $25.






// Deliberate Practice ADVANCED level - link 2 - Write nested loops
//  nested — something placed inside something else

// Ex. if (age >= 13) {
//   if (time < 18) {
//     console.log("Ticket is $7");
//   }
// }
// OR 

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     consoyoule.log(i, j);
//   }
// }


// Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

// nested loop - a loop within a loop
// the inital loop loops through the array values, and the nested takes the value pairs and makes them their own individual values


// const numbers = [[21, 2], [90, 3], [1, 1]];
// const numbersFlattened = [];
// let index = 0;
// while (index < numbers.length) { // the point of while loops(nested) here is to take the value of an array and isolate the values in the value in their   
//   let numberPair = numbers[index];        // own individual value to manipulate / change the data.
//   let index1 = 0;                         // so outer loop runs
//   while (index1 < numberPair.length) {    //continues to inner loop, then inner loop runs all the way through till falsy, THEN outer loop will run again
//     let number = numberPair[index1];      // and this process will repeat until falsy through and through
//     numbersFlattened.push(number);
//     index1 += 1;
//   }
//   index += 1;
// }
// console.log(numbersFlattened);
  

// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

//so i need to take the first value of the first array and combine it with each value of the second array, then do the same with the second value of the first array, and rinse and repeat until all values in the first array are combined with every value of the second array.

// const string1 = ["a", "c", "e"];       
// const string2 = ["b", "d", "f"];
// let stringsCombined = [];
// let index = 0;
// while (index < string1.length) {                // here we want to pull the first value from the first array
//   let string = string1[index];                  // this is a -> so .lenght = 1
//   let index1 = 0;
//   while (index1 < string2.length) {           // here we want to take the first value that we pulled from the first array and loop/combine it with every
//     let stringPair = string + string2[index1];    // value in the second array  // now stringPair is "ab"
//     stringsCombined.push(stringPair);             // we add ab to the stringCombined empty array
//     index1 += 1;
//   }
//   index += 1;
// }             

// console.log(stringsCombined);



// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

const strings = ["a", "b", "c"]; 
const stringsCombined = [];
let index = 0;
while (index < strings.length) {
  let index1 = 0;
  while (index1 < strings.length) {               
    if (index !== index1) {
      stringsCombined.push(strings[index] + strings[index1]);                        
    }               
    index1 += 1;                                    //else statement is not needed here so it always runs.
  }
  index += 1;                
}
console.log(stringsCombined);





// Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.


// Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.


// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].


// Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].


// Use a nested loop to find the largest sum of any two different numbers within an array.
// For example, [1, 8, 3, 10] becomes 18.


// Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].


// Use a nested loop to convert an array of string arrays into a single string.
// For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

