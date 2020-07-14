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

// // 11
// var currDate = new Date();
// var hours = currDate.getHours();
// var aheadDate = new Date("July 12, 2020 15:40:00");
// document.write("Current Date: " + currDate);
// document.write("</br>1 hour ago, it was " + aheadDate);

// // 12
// var currDate = new Date();
// var yearsBack = new Date("July 12, 1920");
// document.write("Current Date: " + currDate);
// document.write("</br>100 years back, it was " + yearsBack);

// // 13
// var age = prompt("Enter your age");
// var age1 = parseInt(age);
// var currDate = new Date();
// var year = currDate.getFullYear();
// var diff = year - age1;
// document.write("Your age is " + age1);
// document.write("</br>Your birth year is " + diff);

// 14
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var name = prompt("Enter customer name");
// var units = 410;
// var charge = 16;
// var lateCharge = 350;
// var currDate = new Date();
// var monthNow = currDate.getMonth();
// document.write("Customer Name: " + name);
// document.write("</br>Month: " + month[monthNow]);
// document.write("</br>Number of Units: " + units);
// document.write("</br>Charges per unit: " + charge);
// document.write("</br></br>Net Amount Payable (within Due Date): " + units*charge);
// document.write("</br>Late payment surcharge: " + lateCharge);
// document.write("</br>Gross Amount Payable (after Due Date): " + ((units*charge)+lateCharge));

// Chap 35-38
// // 1
// today();
// function today() {
//     var currDate = new Date();
//     document.write(currDate);
// }

// 2
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// greet(firstName,lastName);
// function greet(a,b) {
//     alert("Greetings " + a + " " + b);
// }

// // 3
// add();
// function add() {
// var firstNum = +prompt("Enter first number");
// var secondNum = +prompt("Enter last number");
//     var c =  firstNum + secondNum;
//     alert(c)
// }

// // 4
// var firstNum = +prompt("Enter first number");
// var operator = prompt("Enter your operator");
// var secondNum = +prompt("Enter last number");
// calc(firstNum, operator, secondNum);
// function calc (a, b, c) {
//     if (b === "+") {
//         alert(a+c);
//     } else if (b === "-") {
//         alert(a-c);
//     } else if (b === "*") {
//         alert(a*c);
//     } else if (b === "/") {
//         alert(a/c);
//     } else {
//         alert("Invalid input");
//     }
// }

// // 5
// var num = prompt("Enter a number");
// sqr(num);
// function sqr(a) {
//     alert(a*a);
// }

// // 6
// var num = +prompt("Enter a number to compute factorial");
// factorial(num);
// function factorial(num) {
//     var answer = 1;
//     if ( num === 0 || num === 1 ) {
//         document.write("Factorial of number is 1");
//     } else {
//     for(var i=num; i>=1; i--) {
//          answer = answer*i;
//     }
//     document.write("Factorial is " + answer);
// }
// }

// // 7
// var start = +prompt("Enter number to begin counting");
// var end = +prompt("Enter number to end counting");
// counting(start,end);
// function counting (start,end) {
//     for (var i = start; i<=end; i++) {
//         document.write(i + "</br>");
//     }
// }

// // 8
// var perp = +prompt("Enter Perpendicular");
// var base = +prompt("Enter Base");
// calculateHypotenuse(perp,base);
// function calculateHypotenuse(perp,base) {
//     var a=1;
//     var b=1;
//    function perpSquare(perp) {
//         a = perp*perp;
//         return a;
//     }
//     perpSquare(perp);
//    function baseSquare(base) {
//       b = base*base;
//       return b;
//     }
//     baseSquare(base);
//    var hyper = (a) + (b);
//    document.write("Hypotenuse is " + Math.sqrt(hyper));
// }

// // 9
// // i
// area(4,3);
// function area(a,b) {
//     var area = a*b;
//     document.write("Area of rectangle is " + area);
// }

// // ii
// var width = +prompt("Enter width of rectangle");
// var height = +prompt("Enter height of rectangle");
// area(width,height);
// function area(a,b){
//     var rectArea = a*b;
//     document.write("Area of given rectangle is " + rectArea);
// }

// // 10
// var str = prompt("Enter a word to check whether it is palindrome or not");
// palindrome(str);
// function palindrome(str) {
//     var array1 = str.split("");
//     var rev = array1.reverse();
//     var str2 = rev.join("");
//     if (str === str2) {
//         document.write("Given word is palindrome");
//     } else {
//         document.write("Given word is not a palindrome");
//     }
// }

// // 11
// var str = prompt("Enter a string")
// upper(str);
// function upper(str) {
//     var a = [];
//     var array1 = str.split(" ");
//     for (var i=0; i<array1.length; i++) {
//         var b = array1[i];
//         a.push(b.charAt(0).toUpperCase() + b.slice(1,b.length).toLowerCase());
//     }
//     document.write(a.join(" "));
// }

// // 12
// var str = prompt("Enter a string to determie the longest word")
// longest(str);
// function longest(str) {
//     var array = str.split(" ");
//     var array1 = array.sort(function(a,b) {return a.length - b.length})
//     var b = array1.pop();
//     document.write("Longest word is " + b);
// }

// // 13
// var str = prompt("Enter the string");
// var charc = prompt("Enter the character you wish to find");
// find(str,charc);
// function find(str,char) {
//     var count = (str.split(char).length-1); 
//     document.write(char + " appeared " + count + " times in the string")  
// }

// // 14
// var pi=3.142;
// var radius = prompt("Enter radius of a circle");
// circumference(radius);
// area(radius);
// function circumference(rad) {
//     var circum = 2*pi*rad;
//     document.write("Circumference of the circle is " + circum);
// }
// function area(rad) {
//     var area1 = pi*rad*rad;
//     document.write("</br>Radius of the circle is " + area1);
// }