// // BASIC DELIBERATE PRACTICE LINK1

// // 1 // Write a program that uses a variable to store a number, then prints that number plus 10.

// // var number = 2; //this is how you write a variable in javascript
// // console.log(number + 10); //this is how you write the value of the variable plus an integer, 'console.log()' prints results in javascripts console

// // var x = 300;
// // console.log(x * 2);

// // 2 // Write a program that uses a variable to store a word, then prints that word with all capital letters.

// var word = 'hello';
// console.log(word.toUpperCase()); // this is the capital letters method used in javascript

// var definition = 'chronological';
// console.log(definition.toUpperCase());

// // 3 // Write a program that uses variables to store two numbers, then prints the numbers added together.

// var x = 30;
// var y = 23;
// console.log(x + y);

// // 4 // Write a program that uses a variable to store a word, then prints that word in reverse order.

// console.log(word.split("").reverse().join(""));
// console.log(word.split("").reverse().join(""));
// console.log(word.split("").reverse().join(""));
// console.log(word.split("").reverse().join(""));

// var word = "hello";
// console.log(word.split("").reverse().join("")); // this is the 3 javascript methods you must add to print your word in reverse order

// // 5 // Write a program that uses a variable to store a number, then prints the number times 10.

// var number = 2;
// console.log(number * 10);

// var x = 30;
// console.log(x * 30);

// var number = 2;
// console.log(number * 10);

// // 6 // Write a program that uses variables to store two words, then prints both words on the same line in all capital letters.

// var word1 = "proper";
// var word2 = "very nice";
// console.log(word1.toUpperCase() + " "  + word2.toUpperCase());

// var definition1 = "google";
// var definition2 = "is a very useful resource";
// console.log(definition1.toUpperCase() + " " + definition2.toUpperCase());

// // 7 // Write a program that uses a variable to store a word, then prints the number of letters in the word.

// var word = "city";
// console.log(word.length);

// var word2 = "techincallity";
// console.log(word2.length);

// // 8 // Write a program that uses a variable to store a number with decimals, then prints the number as an integer.

// var number = 3.6356;
// console.log(parseInt(number));

// var number3 = 4.9;
// console.log(parseInt(number3)); // 'parseInt()' converts decimals to integers but always round down

// // 9 // Write a program that uses a variable to store two numbers, then prints the two numbers multiplied together.

// var number1 = 23;
// var number2 = 45;
// console.log(number1 * number2);

// // 10 // Write a program that uses a variable to store a word, then prints the word with all lowercase letters.

// var word = "BECAUSE";
// console.log(word.toLowerCase());

// var word1 = "BASKETBALL";
// console.log(word1.toLowerCase());

// var word2 = "MAGICIAN";
// console.log(word2.toLowerCase());

// var word3 = "JAVASCRIPT";
// console.log(word3.toLocaleLowerCase());  // this is also another way of writing this function to print everything in lower case letters

// // BASIC DELIBERATE PRACTICE LINK2

// // 1 // Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

// var number = 46;
// if (number === 10) {
//   console.log(0);
// } 
// else {
//   console.log(-1);
// }

// var number = 10;       // this is how you write 'if statements for javascript, apparently you need 3 '=' signs to set a variable equal to something in javascript + you use paranthesis and hashes when writing 'if statements'
// if (number === 10) {
//   console.log(0);
// }
// else {
//   console.log(-1);
// }

// var number = 90;
// if (number === 10) {
//   console.log(0);
// }
// else {
//   console.log(-1);
// }

// var number = 10;
// if (number === 10) {
//   console.log(0);
// }
// else {
//   console.log(-1);
// }

// // 2 // Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.

// var number = 77
// if (number < 10) {       
//   console.log(-1);
// }
// else if (number > 10) {   // when writing 'elsif' in javascript must write it like this 'else if' (spaced)
//   console.log(1);
// }
// else {
//   console.log(0);
// }                   // i think the hashes kind of represent the 'end' for javascript


// var number = 10;
// if (number < 10) {
//   console.log(-1);
// }
// else if (number > 10) {
//   console.log(1);
// }
// else {
//   console.log(0);
// }

// var number = 2
// if (number < 10) {
//   console.log(-1);
// }
// else if (number > 10) {
//   console.log(1);
// }
// else {
//   console.log(0);
// }

// // 3 // Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.

// var number1 = 55;
// var number2 = 70;

// if (number1 && number2 < 10) {
//   console.log(1);
// }
// else {
//   console.log(0);
// }

// var number1= 2;
// var number2 = 3;
// if (number1 && number2 < 10) {
//   console.log(1);
// }
// else {
//   console.log(0);
// }

// // OR I can write it like this below

// var number1 = 5;
// var number2 = 8;
// if (number1 < 10 && number2 < 10) {
//   console.log(1);
// }
// else {
//   console.log(0);
// }

// // 4 // Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

// var number = 2;
// if (number > 9000) {
//   console.log(1);
// }
// else {
//   console.log(-1);
// }

// // 5 // Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

// var number = 9;
// if (number < 10) {
//   console.log(9);
// }
// else if (number < 20) {
//   console.log(19);
// }
// else if (number < 30) {
//   console.log(29);
// }
// else {
//   console.log(-1);
// }

// // 6 // Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

// var number1 = 45;
// var number2 = 33;
// if (number1 || number2 > 10) {
//   console.log(100);
// }
// else {
//   console.log(-100);
// }

// // 7 // Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

// var pop = 77;
// if (pop < 0) {
//   console.log(1776);
// }
// else {
//   console.log(1979);
// }

// // 8 // Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

// var javascriptVariable = 99;
// if (javascriptVariable === 100) {
//   console.log(100);
// }
// else if (javascriptVariable === 99) {
//   console.log(99);
// }
// else {
//   console.log(0);
// }

// // 9 // Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

// var numbero1 = 17;
// var numbero2 = 33;
// if (numbero1 < 0 && numbero2 > 0) {
//   console.log(1);
// }
// else {
//   console.log(0);
// }

// // 10 // Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

// var number1 = 78;
// if (number1 > 80) {
//   console.log(5);
// }
// else if (number1 > 60) {
//   console.log(4);
// }
// else if (number1 > 40) {
//   console.log(3);
// }
// else if (number1 > 20) {
//   console.log(2);
// }
// else {
//   console.log(1);
// }

// var number = 2;
// if (number > 80) {
//   console.log(5);
// }
// else if (number > 60) {
//   console.log(4);
// }
// else if (number > 40) {
//   console.log(3);
// }
// else if (number > 20) {
//   console.log(2);
// }
// else {
//   console.log(1);
// }


// // DELIBERATE PRACTICE LINK3

// // 1 // Write a while loop to print the numbers 1 through 10.

// var number = 1;
// while (number <= 10) {
//   console.log(number);
//   number = number + 1;
// }

// // 2 // Write a while loop that prints the word "hello" 5 times.

// var number = 0;
// while (number < 5) {
//   console.log("hello");
//   number = number + 1;
// }

// // 3 // Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

// while (true) {
//   var input = window.prompt("Enter a word: ");  // 'window.prompt' is = to 'gets.chomp from Ruby
//   if (input === "stop") {                       // Remember whatever statement/method you're using always make sure you got you '()' and '{}' after
//     break;
//   }
// }

// while (true) {
//   var input = window.prompt("Enter a word: "); //Also the 'window.prompt' method is written outside and before the parenthesis
//   if (input === "stop") {
//     break;
//   }
// }

// // NOT SURE IF ^ IS THE CORRECT SYNTAX / NEXT WILL BE QUESTION 4 LINK3 DELIBERATE PRACTICE BELOW

// // 4 // Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

// var number = 0;
// while (number <= 100) {
//   console.log(number);
//   number = number + 5;
// }

// 5 // Write a while loop that prints the number 9000 ten times.

// var number = 0;
// while (number < 10) {
//   console.log(9000);
//   number = number + 1;
// }
// var number = 0;
// while (number < 10) {
//   console.log(9000);
//   number = number + 1;
// }

// 6 // Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

// while (true) {
//   var input = window.prompt("Enter a number: ");  // THIS ONLY WORKS IN JAVASCRIPT CONSOLE
//   if (parseInt(input) > 10) {
//     break;
//   }
// }


// 7 // Write a while loop that prints the numbers 50 to 70.

// var number = 50;
// while (number <= 70) {
//   console.log(number);
//   number = number + 1;
// }

// 8 // Write a while loop that prints the phrase "Around the world" 144 times.

// var x = 0;
// while (x < 144) {
//   console.log("Around the world");
//   x = x + 1;
// }

// 9 // Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

// while (true) {
//   var input = window.prompt("Enter a word: ");
//   if (input.length > 5) {
//     break;
//   }
// }

// 10 // Write a while loop that prints the even numbers from 2 to 40.

// var number = 2;
// while (number <= 40) {
//   console.log(number);
//   number = number + 2;
// }

// DELIBERATE PRACTICE LINK4

// 1 // Create an array to store 3 words. Then add two more words to the array and print the array on one line.

// const array = ["bobby", "teleport", "coolio"];
// array.push("fruit");
// array.push("orange");
// console.log(array);

// 2 // Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

// const array = ["w", "s", "a", "p"];
// array[1] = 23;
// console.log(array);

// 3 // Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

// const array = [23, 12, 2, 3, 3];
// var number = 0;
// while (number < array.length) {
//   console.log(array[number]);
//   number = number + 1;
// }

// DELIBERATE PRACTICE LINK4

// 4 // Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

// var array = [23];
// array.push(2);
// array.push(33);
// array.push(22);
// console.log(array);

// 5 // Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

// var array = ["bobby", "cool", "wow"];


// var strings = ["hello", "hello", "hello"];
// strings[2] = strings[2].toUpperCase();
// console.log(strings);

// 6 // Create an array to store 3 names. Then print out each name on separate lines with a while loop.

// var names = ["bobby", "michael", "jordan"];
// var index = 0;
// while (index < names.length) {   // so what this code block is doing is setting a variable for the while loop to print out each of the slots(positions are slot 0, 1, 2 = total 3 slots) in the array to print each string on a line, then increasing the value of the variable so the next string prints out on another line until all strings are printed out. 
//   console.log(names[index]);
//   index = index + 1;
// }

// var names = ["honda", "toyota", "mercadez"];
// var index = 0;
// while (index < names.length) {
//   console.log(names[index]);
//   index += 1;
// }

// 7 // Create an array to store 2 strings. Then add one string to the array and print the array on one line.

// var strings = ["hello", "world"];
// strings[2] = "happy";             // this is how i wrote the code block to answer the question
// console.log(strings);

// var strings = ["remote", "hybrid"];
// strings.push("on-site");     // Methods are functions that belong to the object that performs an action on it by calling methods with parenthesis
// console.log(strings);       // properties are attributes that describe the object (no paranthesis/not calling a method) || The object is the array with strings

// 8 // Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

// var numbers = [4, 23, 3, 76, 2];
// numbers[0] *= 10;
// console.log(numbers);

// 9 // Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

// var numbers = [23, 45];
// var index = 0;                           //meaning of 'index' - position or location of an element within a collection (such as an array)
// while (index < numbers.length) {
//   console.log(numbers[index]);
//   index += 1;
// }

// 10 // Create an array to store names of 3 different countries. Then add one more country and print the array one line.

// var countries = ["United States", "Russia", "India"];
// countries.push("Mexico");
// console.log(countries);

// DELIBERATE PRACTICE LINK 5

// 1 // Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

// var firstPerson = { firstname: "bob", lastname: "michael", email: "bobmichael@hotmail.com"};
// console.log(firstPerson);

// 2 // Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

// var people = [
//   { firstname: "bob", lastname: "michael" },
//   { firstname: "john", lastname: "jackson" },
//   { firstname: "kane", lastname: "bubbly" }
// ];
// console.log(people[0]);

// 3 // Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

// var menuitems = { hamburger: "$4.00", hotdog: "$3.00", pepsi: "$2.00" };
// menuitems["fries"] = "$2.50";                      // the better way is just to put the numbers without it being a string and $ sign, and decimals
// console.log(menuitems);

// var menu = { coleslaw: 5, cake: 10, chicken: 2};
// menu["onion rings"] = 4;      // 
// console.log(menu);

// 4 // Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

// var book = {title: "hunger games", author: "ben", pages: 200, language: "english"};
// console.log(book);   // this worked fine, but "proper" way is to console.log each attribute like below

// console.log(book["title"]);
// console.log(book.author);
// console.log(book.pages);
// console.log(book["language"]);

// 5 // Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

// var books = [
//   {title: "outsiders", author: "bob"},
//   {title: "baskteball", author: "jordan"},
//   {title: "soccer", author: "messi"}
// ];

// console.log(books[2].author);

// 6 // Make a hash to store 3 different states and their capitals. Then add a new state and capital and print the hash to see the result.

// var states = { California: "Sacremento", Texas: "Austin", Florida: "Tallahassee"};
// states["New York"] = "Albany";
// console.log(states);

// 7 // Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

// var laptop = {brand: "apple", model: "macbook air 2", year: 2022};
// console.log(laptop.brand);
// console.log(laptop.model);
// console.log(laptop.year);

// 8 // Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

// var laptops = [
//   {brand: "hp", model: 12},
//   {brand: "apple", model: "air"},
//   {brand: "sony", model: 3}
// ];

// console.log(laptops[1].model);

// 9 // Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

// var words = {apple: "fruit", wood: "tree like material"};
// words["shoe"] = "footware";
// console.log(words);

// 10 // Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

// var shirt = {brand: "nike", color: "purple", size: "Large"};
// console.log(shirt.brand);
// console.log(shirt.color);
// console.log(shirt.size);

// DELIBERATE PRACTICE LINK 6 BASIC

// 1 // Write a method that takes in a number and returns the number times two. Then run the method and print the result.

// function multiplyByTwo(number) {
//   return number * 2;
// }
// console.log(multiplyByTwo(10));


// - Function Declaration (function multiplyByTwo(number) { ... }):
// function: This keyword declares a function.
// multiplyByTwo: This is the name of the function.
// (number): The function has a single parameter named number. This represents the input value that the function will use.
// - return number * 2;: The function multiplies the input (number) by 2 and returns the result. The return keyword ensures that the value is sent back to the part of the code that called the function.
// - Function Call (console.log(multiplyByTwo(10));):
// multiplyByTwo(10): The function is called (or invoked) with the argument 10.
// Here, 10 is passed to the number parameter of the function.
// Inside the function, number is 10, so number * 2 evaluates to 20.
// The function returns 20.
// - console.log(...): This prints the result returned by the function (20) to the terminal or console.

// function multiplyByTwo(number) {
//   return number * 2;
// }
// console.log(multiplyByTwo(40));

// 2 // Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.

// function makeUpperCase(string) {
//   return string.toUpperCase();
// }
// console.log(makeUpperCase("schoolbus"));

// 3 // Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.

// function subtracted(number1, number2) {
//   return number1 - number2;
// }
// console.log(subtracted(25, 5));

// 4 // Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

// function multipliedByItself(number) {
//   return number * number;
// }
// console.log(multipliedByItself(5));

// 5 // Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

// function firstLetter(string) {
//   return string.charAt(0);
// }
// console.log(firstLetter("basketball"));

// OR 

// function firstLetter(string) {
//   return string[0];
// }
// console.log(firstLetter("basketball"));

// 6 // Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

// function stringsWithSpaces(string1, string2, string3) {
//   return string1 +  " " + string2 + " " + string3;
// }                                        // ALL of these answers for this link are functions! Not Methods! Method is a function that is a property of an object (arrays and hashes)
// console.log(stringsWithSpaces("I", "Love", "Sports"));

// 7 // Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

// function numberToString(number) {
//   return number.toString();
// }                                 //apparently this code is correct, but for some reason not appearing as a string in terminal
// console.log(numberToString(23));

// 8 // Write a method that takes in a string and returns the string repeated 5 times. Then run the method and print the result.

// function stringRepeated5Times(string) {
//   return string + string + string + string + string;
// }
// console.log(stringRepeated5Times("hello"));

// 9 // Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

// function averageOfTotalNumbers(number1, number2, number3) {
//   return (number1 + number2 + number3) / 3;
// }
// console.log(averageOfTotalNumbers(2, 30, 40));

// 10 // Write a method that takes in a number and returns the number times 10 plus 30. Then run the method and print the result.

// function numberTimes10Plus30(number) {
//   return number * 10 + 30;
// }
// console.log(numberTimes10Plus30(20));

// DELIBERATE PRACTICE LINK 7 BASIC

// 1 // Write a Song class with attributes for name, artist, and duration.

// class Song {
//   constructor(name, artist, duration) {
//     this.name = name;
//     this.artist = artist;
//     this.duration = duration;
//   }
// }
// var song = new Song("Gloria", "Patti Smith", "5:56");
// console.log(song);           // When you come back to this, Read the explanation below and understand this code block fully before moving on to the next question.

// Explanation:
// class Song {
// This defines a new class named Song.
// A class is like a blueprint for creating objects. It encapsulates data and methods (functions) that operate on that data.
// constructor(name, artist, duration) {
// The constructor is a special method of the class that gets called automatically when a new object of the class is created.
// It’s used to initialize the object’s properties.
// this.name = name;
// The this keyword refers to the current instance of the class (the object being created).
// This line sets the name property of the object to the name parameter passed to the constructor.
// this.artist = artist;
// This sets the artist property of the object to the value of the artist parameter passed to the constructor.
// this.duration = duration;
// This sets the duration property of the object to the value of the duration parameter passed to the constructor.
// } (Closing the constructor and class)
// Ends the constructor method and the Song class definition.
// var song = new Song("Gloria", "Patti Smith", "5:56");
// This creates a new instance of the Song class using the new keyword.
// The Song class’s constructor is called with the arguments "Gloria", "Patti Smith", and "5:56".
// A new object is created with:
// javascript
// Copy code
// {
//   name: "Gloria",
//   artist: "Patti Smith",
//   duration: "5:56"
// }
// console.log(song);
// This prints the object song to the console.
// The output will look like:
// css
// Copy code
// Song { name: 'Gloria', artist: 'Patti Smith', duration: '5:56' }
// Summary:
// The Song class defines a blueprint for creating song objects with name, artist, and duration properties.
// The constructor method initializes these properties when a new song object is created.
// The console.log statement prints the created song object to the console.
// This code block demonstrates how to use classes in JavaScript to create and manage objects with specific properties.

// 2 // Write a Rectangle class with attributes for width and height.

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }
// var rectangle =  new Rectangle(5, 6);
// console.log(rectangle);

// 3 // Write a Person class with attributes for name and age.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// var person = new Person("Bob", 24);
// console.log(person);

// 4 // Write a Location class with attributes for latitude and longitude.

// class Location {
//   constructor(latitude, longitude) {
//     this.latitude = latitude;
//     this.longitude = longitude;
//   }
// }
// var location = new Location(32, 56);
// console.log(location);

// 5 // Write an Account class with attributes for name and balance.

// class Account {
//   constructor(name, balance) {
//     this.name = name;
//     this.balance = balance;
//   }
// }
// var account = new Account("Chase", 500);
// console.log(account);

// 6 // Write a Movie class with attributes for title, director, and year.

// class Movie {
//   constructor(title, director, year) {
//     this.title = title;
//     this.director = director;
//     this.year = year;
//   }
// }
// var movie = new Movie("Fast and Furious", "Vin Diesal", 2002);
// console.log(movie);

// 7 // Write a Car class with attributes for make, model, year, and color.

// class Car {
//   constructor(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }
// var car = new Car("Honda", "Accord", 2007, "black");
// console.log(car);

// 8 // Write a Point class with attributes for x, y, and z coordinates.

// class Point {
//   constructor(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }
// }
// var point = new Point(3, 6, 23);
// console.log(point);

// 9 // Write a Book class with attributes for title, author, and year.

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
// }
// var book = new Book("Outsiders", "Einstein", 2012);
// console.log(book);

// 10 // Write a Plant class with attributes for name, size, and price.

class Plant {
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }
}
var plant = new Plant("Sunflower", "Large", 20.00);
console.log(plant);

// DELIBERATE PRATICE INTERMEDIATE LINK 1

// 1 // Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

