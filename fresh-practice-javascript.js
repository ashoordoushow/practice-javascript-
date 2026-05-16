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

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
}
}

const person = new Person("Jay", 25);

console.log(person);

// Write a Location class with attributes for latitude and longitude.

class Location {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

const location = new Location(32.2, 43.2);
console.log(location);

// Write an Account class with attributes for name and balance.

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

const account = new Account("Chase", 500);
console.log(account);


// Write a Movie class with attributes for title, director, and year.

class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
}

const movie = new Movie("Remember the Titans", "Bobby", 2013);

console.log(movie);


// Write a Car class with attributes for make, model, year, and color.

class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
}

const car = new Car("Honda", "Accord", "black");
console.log(car);


// Write a Point class with attributes for x, y, and z coordinates.

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const coordinates = new Point(21.3, 12.1, 99.2);
console.log(coordinates);

// Write a Book class with attributes for title, author, and year.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

const book = new Book("Bible", "JESUS CHRIST", 1384);
console.log(book);


// Write a Plant class with attributes for name, size, and price.

class Plant {
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this. price = price;
  }
}

const plant = new Plant("Dandelion", "Large", 34);

console.log(plant);






