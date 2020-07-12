// // Chap 21-25
// // 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert("Greetings " + firstName + " " + lastName);

// // 2
// var mobile = prompt("Enter your favorite mobile phone brand");
// document.write("My favorite phone is: " + mobile);
// document.write("</br>Length of string is: " + mobile.length);

// // 3
// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write("String: " + str);
// document.write("</br>Index of 'n': " + n);

// // 4
// var str = "Hello World";
// var n = str.lastIndexOf("l");
// document.write("String: " + str);
// document.write("</br>Index of 'l': " + n);

// // 5
// var str = "Pakistani";
// var n = str.charAt(3);
// document.write("String: " + str);
// document.write("</br>Character at index 3: " + n);

// // 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var str = firstName.concat(" " + lastName);
// alert("Greetings " + str);

// // 7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("City: " + city);
// document.write("</br>After replacement: " + newCity);

// // 8
// var str = "Ali and Sami are best friends. They play cricket and football together.";
// var newStr = str.replace(/and/g, "&");
// document.write("Text: " + str);
// document.write("</br>After replacement: " + newStr);

// // 9
// var str = "472";
// var num = Number(str);
// document.write("Value: " + str +  "</br>")
// document.write("Type: " + typeof str + "</br>");
// document.write("Value: " + num +  "</br>")
// document.write("Type: " + typeof num);

// // 10
// var input = prompt("Enter a dry fruit");
// document.write("User input: " + input);
// input = input.toUpperCase();
// document.write("</br>Uppercase: " + input);

// // 11
// var input = prompt("Enter a dry fruit");
// document.write("User input: " + input);
// var firstChar = input.slice(0,1)
// firstChar = firstChar.toUpperCase();
// var otherChar = input.slice(1);
// otherChar = otherChar.toLowerCase();
// var input1 = firstChar + otherChar;
// document.write("</br>Titlecase: " + input1);

// // 12
// var num = 35.36;
// document.write("Number: " + num);
// num = num.toString();
// var newNum = num.replace(".", "");
// document.write("</br>Result: " + newNum);

// // 13
// var name = prompt("Enter your username");
// for (var i=0; i<name.length; i++) {
//     var j = name.charCodeAt(i);
//     if (j == 33 || j == 44 || j == 46 || j ==64) {
//         alert("Enter valid username with characters like !,.@")
//     }  
// }

// // 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Enter item you want to search in the list");
// input = input.toLowerCase();
// var index = A.indexOf(input);
// if (index === -1) {
//     alert("We are sorry. " + input + " is not available in our bakery")
// } else {
//     alert(input + " is available at index " + index + " in our bakery");
// }

// // 15
// var pass = prompt("Enter a new password six characters long that must contain both numbers and alphabets, and it should start with alphabet");
// var value = pass.charCodeAt(0);
// if (pass.length >= 6) {
//     if (value > 57) {
//         for (var i=0; i<pass.length; i++) {
//             var j = pass.charCodeAt(i);
//             if ((j > 96 && j < 123) || (j > 64 && j < 91) || (j > 47 && j < 58) ) {
//                 alert("Hello World")
//             }
//         }        
//     } else if (value > 47 && value < 58) {
//         alert("Password could not start with a number");
//     }
// } else {
//     alert("Password must be six characters long");
// }

// // 16
// var university = "University of Karachi";
// var uniArray = university.split("");
// for (var i=0; i<uniArray.length; i++) {
//     document.write(uniArray[i] + "</br>");
// }

// // 17
// var userInput = prompt("Enter a string");
// var last = userInput.slice(userInput.length-1, userInput.length);
// document.write("User Input: " + userInput);
// document.write("</br>Last character of input: " + last);

// // 18
// var str = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + str);
// str = str.toLowerCase();
// var count = str.match(/the/g);
// document.write("</br>There are " + count.length + " occurence(s) of word 'the'");

// // Chap 26-30
// // 1
// var num = +prompt("Enter a number");
// var a = Math.round(num);
// var b = Math.floor(num);
// var c = Math.ceil(num);
// document.write("Number: " + num);
// document.write("</br>Round off value: " + a);
// document.write("</br>Floor value: " + b);
// document.write("</br>Ceil Value: " + c);

// // 2
// var num = +prompt("Enter a negative floating number");
// var a = Math.round(num);
// var b = Math.floor(num);
// var c = Math.ceil(num);
// document.write("Number: " + num);
// document.write("</br>Round off value: " + a);
// document.write("</br>Floor value: " + b);
// document.write("</br>Ceil Value: " + c);

// // 3
// var num = +prompt("Enter a number");
// var a = Math.abs(num);
// document.write("Absolute value of " + num + " is " + a);

// // 4
// var dice = (Math.random())*6;
// var dicey = Math.ceil(dice);
// document.write("Random Dice Value: " + dicey);

// // 5
// var coin = (Math.random())*2;
// var coinage = Math.ceil(coin);
// if (coinage === 2) {
// document.write(coinage + "</br>Random coin value: Heads");
// } else {
// document.write(coinage + "</br>Random coin value: Tails");
// }

// // 6
// var random = (Math.random())*100;
// var randNum = Math.ceil(random);
// document.write("Random Number between 1 to 100: " + randNum);

// // 7
// var weight = prompt("Enter your weigh in Kilograms");
// var num = parseInt(weight);
// document.write("The weight of the user is " + num + " kilograms");

// // 8
// var random = (Math.random())*10;
// var randNum = Math.ceil(random);
// var j = 5
// for (var i=0; i<5; i++) {
//     var num = +prompt("Enter a number to begin the game. " + j-- + " turns remaining")
//     if (randNum === num) {
//         alert("You win");
//     } else {
//         alert("Try Again");
//     }
// }

// Chap 31-34
// // 1
// var rightNow = new Date();
// document.write(rightNow);

// // 2
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var rightNow = new Date();
// rightNow.toString();
// var theMonth = rightNow.getMonth();
// document.write("Month: " + month[theMonth]);

// // 3
// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var rightNow = new Date();
// rightNow.toString();
// var theDay = rightNow.getDay();
// document.write("Today is " + day[theDay]);

// // 4
// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var rightNow = new Date();
// rightNow.toString();
// var theDay = rightNow.getDay();
// if (theDay === 0 || theDay === 6) {
//     alert("It's a Fun day")
// } else {
//     alert("It's not a Fun day")
// }

// // 5
// var rightNow = new Date();
// rightNow.toString();
// var theDate = rightNow.getDate();
// if (theDate >= 0 && theDate <= 14 ) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// // 6
// var currDate = new Date();
// var mstoday = currDate.getTime();
// var minutes = mstoday/(1000*60);
// document.write("Current Date: " + currDate);
// document.write("</br> Elapsed milliseconds since January 1, 1970: " + mstoday);
// document.write("</br> Elapsed minutes since January 1, 1970: " + minutes);

// // 7
// var currDate = new Date();
// var hours = currDate.getHours();
// if (hours >= 12) {
//     alert("Its PM");
// } else {
//     alert("Its AM");
// }

// // 8
// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate);

// // 9
// var startDate = new Date("June 18, 2015");
// var currDate = new Date();
// var msRamzan = startDate.getTime();
// var rightNow = currDate.getTime();
// var diff = rightNow - msRamzan;
// var days = diff/(1000*60*60*24);
// document.write(days + " days have been passed since ramazan");

// // 10
// var startDate = new Date("December 05, 2015");
// var refDate = new Date("January 01, 2015");
// var msend = startDate.getTime();
// var msstart = refDate.getTime();
// var diff = msend - msstart;
// var sec = diff/(1000*60);
// document.write("On Reference Date: " + refDate);
// document.write("</br>" + sec + " seconds had been passed since the beginning of 2015");