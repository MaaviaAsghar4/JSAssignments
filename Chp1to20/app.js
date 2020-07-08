// //Chapter 1
// // 1
// alert('Greetings')

// // 2
// alert('Error! Please Enter a valid Password')

// // 3
// alert('Welcome to JS Land.. \nHappy Coding!')

// // 4
// alert('Welcome to JS Land..');
// alert('Happy Coding! \n ');

// // 5
// alert("Hello.. I can run JS through my web browser's console");
// console.log("Hello.. I can run JS through my web browser's console");

// //Chapter 2
// // 1
// var username;

// // 2
// var myName = "Maavia Asghar";
// console.log(myName);

// // 3
// var message = "Hello World";
// alert(message);

// // 4
// var studentName = "John Doe";
// var studentAge = "15 Years old";
// var studentCourse = "Certified Mobile and Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

// // 5
// var food = "PIZZA";

// for (var i=0; i < food.length; i++) {
//     var element = food.slice(0,-i);
//         alert(element);
// }

// // 6
// var email = "example@example.com";
// alert('My Email address is' + " " + email);

// // 7
// var book ="A smarter way to learn JavaScript";
// alert('I am trying to learn from the Book' + " " + book);


// // 8
// document.write("<p>Yah! I can write HTML content through JavaScript </p>");

// // 9
// var str = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(str);

// //Chapter 3
// // 1
// var age = 22;
// alert("I am" + " " + age + " " + "Years old");

// 2

// // 3
// var birthYear = 1997;
// document.write("My birth year is " + birthYear);
// document.write("</br> Date type of my declared variable is number");

// // 4
// var name = prompt("Enter Your Name");
// var product = prompt("Enter Your Desired Product");
// var quantity = prompt("How many" + " " + product + " " + "do you want");
// alert(name + " " + "ordered" + " " + quantity + " " + product  + "(s)" + " " + "on XYZ Clothing store");


// // Chapter 4
// // 1
// var x=1,y=2,z=3;

// // 2
// var x=1,y=2,z=3,a=4,b=5;
// var 1alert=1, 123test=2, 2result=1, 3x=2, 4f=4;

// // 3
// document.write("<h1>Rules for naming JS Variables</h1>");
// document.write("</br></br> Variables name can only contain numbers, $, and _. For example $my_1stVariable");
// document.write("</br> Variables name can only contain numbers, $, and _. For example $my_1stVariable");
// document.write("</br> Variables names are case sensitive");
// document.write("</br> Variables names should not be JS keywords");

// // Chapter 5
// // 1
// var num1 = +prompt("Enter number 1");
// var num2 = +prompt("Enter number 2");
// var total = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + total);

// // 2
// alert("Enter numbers for subtraction")
// var num1 = +prompt("Enter number 1");
// var num2 = +prompt("Enter number 2");
// var total = num1 - num2;

// alert("Enter numbers for multiplication")
// var num3 = +prompt("Enter number 1");
// var num4 = +prompt("Enter number 2");
// var total1 = num3 * num4;

// alert("Enter numbers for division")
// var num5 = +prompt("Enter number 1");
// var num6 = +prompt("Enter number 2");
// var total2 = num5 / num6;

// document.write("Difference of " + num1 + " and " + num2 + " is " + total);
// document.write("</br> Product of " + num3 + " and " + num4 + " is " + total1);
// document.write("</br> Quotient of " + num5 + " and " + num6 + " is " + total2);

// // 3
// var num;
// document.write("Value after variable declaration is " + num);
// num = 5;
// document.write("</br> Initial Value is " + num);
// num++;
// document.write("</br> Value after increment is " + num);
// num = num + 7;
// document.write("</br> Value after addition is " + num);
// num--;
// document.write("</br> Value after decrement is " + num);
// num = num/3;
// document.write("</br> The remainder is is " + num);

// // 4
// var ticketPrice = prompt("Cost of one movie ticket");
// var quantity = prompt("number of tickets");
// var total = ticketPrice*quantity;
// document.write("Total cost to buy " + quantity + " tickets to a movie is " + total + "PKR");

// // 5
// var num = prompt("Enter number to display table");
// for (var i=1; i<11; i++) {
//     document.write(num + "x" + i + "=" + num*i + "</br>");
// }

// // 6
// var tempCelsius = +prompt("Enter Temperature in Celsius");
// var tempFahrenHeit = +prompt("Enter Temperature in Fahrenheit");
// var convC = ((tempCelsius * 9)/5)+32;
// var convF = ((tempFahrenHeit - 32) * 5)/9;

// document.write(tempCelsius + "&#8451 in Fahrenheit is " + convC + "&#8457");
// document.write("</br>" + tempFahrenHeit + "&#8457 in Celsius is " + convF + "&#8451");

// // 7
// var price1 = +prompt("Enter the price of Item 1");
// var quantity1 = +prompt("Enter the quantity of Item 1");
// var price2 = +prompt("Enter the price of Item 2");
// var quantity2 = +prompt("Enter the quantity of Item 2");
// var shipping = 100;
// var total = (price1*quantity1) + (price2*quantity2) + (shipping);

// document.write("Price of Item 1 is " + price1);
// document.write("</br>Quantity of Item 1 is " + quantity1);
// document.write("</br>Price of Item 2 is " + price2);
// document.write("</br>Quantity of Item 2 is " + quantity2);
// document.write("</br>Shipping Charges are " + shipping);
// document.write("</br> </br>Total cost of your order is " + total);

// // 8
// var totalMarks = +prompt("Enter Your Total Marks");
// var obtainedMarks = +prompt("Enter Your Obtained Marks");
// var percentage = ((obtainedMarks/totalMarks)*100);

// document.write("Total Marks: " + totalMarks);
// document.write("</br>Marks Obtained: " + obtainedMarks);
// document.write("</br>Percentage: " + percentage);

// // 9
// var usd = 10;
// var sar = 25;
// var pkr = (usd*104.80) + (sar*28);
// document.write("<h1>Currency in PKR</h1>");
// document.write("</br>Total Currency in PKR: " + pkr);

// // 10
// var num = 1;
// var calc = ((num + 5)*10)/2;
// document.write(calc);

// // 11
// var currYear = prompt("Enter current Year");
// var birthYear = prompt("Enter birth Year");
// var age = currYear - birthYear;
// document.write("Current Year: " + currYear);
// document.write("</br>Birth Year: " + birthYear);
// document.write("</br>Your Age is: " + age);

// // 12
// var radius = +prompt("Enter radius of a circle");
// var pi = 3.142;
// var circumference = 2*pi*radius;
// var area = pi*radius*radius;
// document.write("Radius of a circle: " + radius);
// document.write("</br>The circumference is: " + circumference);
// document.write("</br>The area is: " + area);

// // 13
// var snack = prompt("Enter your favorite snack");
// var currAge = +prompt("Enter your current age");
// var maxAge = +prompt("Enter your assumed maximum age");
// var quantity = +prompt("Enter number of " + snack + " you take daily");
// var lifeTime = (((maxAge-currAge)*365)*quantity);

// document.write("Favorite Snack: " + snack);
// document.write("</br> Current age: " + currAge);
// document.write("</br> Estimated maximum age: " + maxAge);
// document.write("</br> Amount of " + snack + " per day: " + quantity);
// document.write("</br>You will need " + lifeTime + " " + snack + " to last you until you ripe the old age of " + maxAge);

// // Chapter 6-9
// // 1
// var num = +prompt("Enter a number");
// document.write("Result </br> The value of a is: " + num);
// document.write("</br><br>The value of ++a is: " + ++num + " </br> Now the value of a is: " + num);
// document.write("</br><br>The value of a++ is: " + num++ + " </br> Now the value of a is: " + num);
// document.write("</br><br>The value of --a is: " + --num + " </br> Now the value of a is: " + num);
// document.write("</br><br>The value of a-- is: " + num-- + " </br> Now the value of a is: " + num);

// // 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// //           (1)    (1)  (1 )  (0)
// document.write("a is " + a + "</br>b is " + b + "</br>result is " + result);

// // 3
// var name = prompt("Enter Your Name");
// alert("Greetings " + name);

// // 5
// var num = +prompt("Enter number to display table");
// for (var i=1; i<11; i++) {
//     document.write(num + "x" + i + "=" + num*i + "</br>");
// }

// // 6
// var subject1 = prompt("Enter first subject");
// var subject2 = prompt("Enter second subject");
// var subject3 = prompt("Enter third subject");
// var totalMarks = 100;
// var markSubject1 = +prompt("Enter marks obtained for " + subject1);
// var markSubject2 = +prompt("Enter marks obtained for " + subject2);
// var markSubject3 = +prompt("Enter marks obtained for " + subject3);
// var percentage1 = (markSubject1/totalMarks)*100;
// var percentage2 = (markSubject2/totalMarks)*100;
// var percentage3 = (markSubject3/totalMarks)*100;
// var total = 300;
// var totalObtained = markSubject1 + markSubject2 + markSubject3;
// var percentage = (totalObtained/total)*100;

// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Perentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + markSubject1 + "</td><td>" + percentage1 + "%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + markSubject2 + "</td><td>" + percentage2 + "%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + markSubject3 + "</td><td>" + percentage3 + "%</td></tr>");
// document.write("<tr><th></th><th>" + total + "</th><th>" + totalObtained + "</th><th>" + percentage + "%</th></tr>");
// document.write("</table>");

// // Chapter 9-11
// // 1
// var city = prompt("Enter your City");
// if (city === "Karachi") {
//     alert("Welcome to the City of Lights");
// } else {
//     alert("Welcome to " + city);
// }

// // 2
// var gender = prompt("Enter your gender");
// if (gender === "Male") {
//     alert("Good Morning Sir");
// } else if (gender === "Female") {
//     alert("Good Morning Ma'am");
// } else {
//     alert("Please enter your gender either as 'Male' or 'Female'");
// }

// // 3
// var color = prompt("What is the color of traffic light");
// if (color === "Red") {
//     alert("Must Stop");
// } else if (color === "Yellow") {
//     alert("Ready to Move");
// } else if (color === "Green") {
//     alert("Move Now");
// } else {
//     alert("Invalid traffic light color");
// }

// // 4
// var fuel = +prompt("Please state the amount of fuel remaining in the car");
// if (fuel < 0.25) {
//     alert("Please refill the fuel in the car");
// } else {
//     alert('You are good to go');
// }

// // 5
// a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// } // true

// b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } //false

// c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// } // true
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// } // true due to no break statement

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } // true

// e
// if (true){
//     alert("True");
//     }
//     if (false) {
//     alert("False");
// } // true

// f
// if("car" < "cat"){
//     alert("car is smaller than cat");
// } //true

// 6
// var subject1 = +prompt("Enter marks of subject 1");
// var subject2 = +prompt("Enter marks of subject 2");
// var subject3 = +prompt("Enter marks of subject 1");
// var total = +prompt("Enter total marks");
// var totalMarks = subject1 + subject2 + subject3;
// var percentage = (totalMarks/total)*100;

// document.write("<h1>Marks Sheet</h1></br>");
// document.write("</br>Total Marks : " + total);
// document.write("</br>Marks Obtained : " + totalMarks);
// document.write("</br>Percentage : " + percentage + "%");
// if (percentage >= 80) {
// document.write("</br>Grade : A-one</br>Remarks: Excellent");
// } else if (percentage >= 70) {
// document.write("</br>Grade : A</br>Remarks: Good");
// } else if (percentage >= 60) {
//     document.write("</br>Grade : B</br>Remarks: You need to improve");
// } else if (percentage < 60) {
//     document.write("</br>Grade : Fail</br>Remarks: Sorry");
// } else {
//     alert("Enter valid marks");
// }

// 7
// var num = 5;
// var num1 = +prompt("Enter a number");
// if (num === num1) {
//     alert("Bingo! Correct Answer");
// } else if (num1 === 4) {
//     alert("Close enough");
// } else {
//     alert("Try Again Next Time");
// }

// // 8
// var num = prompt("Enter a number");
// if (num%3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("Not divisible by 3");
// }

// // 9
// var num = prompt("Enter a number");
// if (num%2 === 0) {
//     alert("The number is an even");
// } else {
//     alert("The number is odd");
// }

// // 10
// var num = prompt("Enter a number");
// if (num > 40) {
//     alert("It is too hot outside.");
// } else if (num > 30) {
//     alert("The Weather today is Normal.");
// } else if (num > 20) {
//     alert("Today's Weather is Cool.");
// } else if (num > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("Enter valid temperature");
// }

// // 11
// var num1 = +prompt("Enter number 1");
// var operator = prompt("Enter operation");
// var num2 = +prompt("Enter number 2");
// if (operator === "+") {
//     alert(num1+num2);
// } else if (operator === "-") {
//     alert(num1-num2);
// } else if (operator === "*") {
//     alert(num1*num2);
// } else if (operator === "/") {
//     alert(num1/num2);
// } else if (operator === "%") {
//     alert((num1/num2)*100 + "%");
// } else {
//     alert("Invalid number or operator");
// }

// // Chapter 12-13
// // 1
// var character = prompt("Enter an alphabetic character");
// var ascii = character.charCodeAt();
// if (ascii < 91 && ascii > 64) {
//     alert(character + " is in Uppercase");
// } else if (ascii > 96 && ascii < 122) {
//     alert(character + " is in Lowercase");
// } else {
//     alert("Not an alphabet");
// }

// // 2
// var integer1 = +prompt("Enter integer 1");
// var integer2 = +prompt("Enter integer 2");
// if (integer1 > integer2) {
//     alert(integer1 + " is greater");
// } else if (integer1 < integer2) {
//     alert(integer2 + " is greater");
// } else {
//     alert("Both integers are equal");
// }

// // 3
// var integer1 = prompt("Enter integer 1");
// if (integer1 > 0) {
//     alert(integer1 + " is positive");
// } else if (integer1 < 0) {
//     alert(integer2 + " is negative");
// } else {
//     alert("Number is 0");
// }

// // 4
// var charc = prompt("Enter a character");
// charc = charc.toLowerCase();
// if (charc == "a" || charc == "e" || charc == "i" || charc == "o" || charc == "u") {
//         alert("It is a vowel");
// } else {
//     alert("it is not a vowel");
// }

// // 5
// var pass = prompt("Set Your Password");
// var pass2 = prompt("Confirm Your Password");

// if (pass === pass2) {
//     alert("Correct! Password Set");
// } else {
//     alert("Please Enter Your Password");
// }

// // 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// console.log(greeting);}
// else {
// greeting = "Good evening";
// console.log(greeting);}

// // 7
// var time = prompt("Enter Your Time in given 24 hour format like \n1900 (for 07pm)");
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening");
// } else if (time >= 2100 && time < 2359) {
//     alert("Good Night");
// } else {
//     alert("Please input time like this 0900");
// }

// // Chapter 14-16
// // 1
// var studentName = [];

// // 2
// var studentName = new Array();

// // 3
// var studentName = ["myname", "yourname"];

// // 4
// var num = [1,2,4];

// // 5
// var boolean = [true, false];

// // 6
// var mixedArray = [1, "five", "wow", true];

// // 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<ol>");
// for (var i = 0; i < qualifications.length; i++){
// document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");

// // 8
// var studentName = [];
// var studentScore = [];
// var studentPercentage = [];
// var total = 500;
// for (var i = 0; i < 3; i++) {
//     studentName.push(prompt("Enter Students name"));
//     studentScore.push(prompt("Enter Students Score"));
// }
// for (var j = 0; j < studentName.length; j++) {
//     studentPercentage.push((studentScore[j]/500)*100);
// }

// for (k = 0; k < studentName.length; k++){
//     document.write("Score of " + studentName[k] + " is " + studentScore[k] + ". Percentage: " + studentPercentage[k] + "%</br>");
// }

// // 9
// var colors = ["Red", "Blue", "Green"];
// display(colors);
// colors.unshift(prompt("What color do you want to add in the beginning"));
// display(colors);
// colors.push(prompt("What color do you want to add in the end"));
// display(colors);
// colors.splice(0,0,prompt("Enter Another color to add in start"), prompt("Enter Another color to add in start"));
// display(colors);
// colors.shift();
// display(colors);
// colors.pop();
// display(colors);
// var ind = prompt("At which index you want to add color");
// var indColor = prompt("What color you want to add");
// colors.splice(ind,0,indColor);
// display(colors);
// var ind1 = prompt("At which index you want to delete color");
// var indColor1 = prompt("How many color you want to delete");
// colors.splice(ind1,indColor1);
// display(colors);

// function display (colors) {
// document.write("<ol>");
// for (var i = 0; i < colors.length; i++){
// document.write("<li>" + colors[i] + "</li>");
// }
// document.write("</ol>");
// }

// // 10
// var studentScore = [];
// var j = 5;
// document.write("Scores of Student : ")
// for (var i = 0; i < 5; i++) {
//     studentScore.push(+prompt("Enter Score of Students. " + j-- + " remaining"));
//     document.write(studentScore[i] + ",");
// }
// studentScore.sort((a,b) => a-b);
// document.write("</br>Ordered Scores of Student : ")
// for (var k = 0; k < studentScore.length; k++){
//     document.write(studentScore[k] + ",");
// }

// // 11
// var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities List: ");
// for (var i = 0; i < cityNames.length; i++) {
//     document.write(cityNames[i] + ", ")
// }
// document.write("</br>Selected Cities List: ");
// var selectedCities = cityNames.slice(2,4)
// for (var j = 0; j < selectedCities.length; j++) {
//     document.write(selectedCities[j] + ", ")
// }

// // 12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array</br>");
// for (var i=0; i<arr.length; i++) {
//     document.write(arr[i] + ",");
// }
// document.write("</br>" + arr.join(" "));

// // 13
// var arr = [];
// var j = 5;
// document.write("Devices </br>");
// for (var i = 0; i < 5; i++){
//     arr.unshift(prompt("Enter a Devices. " + j-- + " remaining"));
// }
// arr.reverse();
// for (var j = 0; j < 5; j++){
//     document.write(arr[j] + " ,")
// }
// arr.reverse();
// document.write("</br>Out:");
// out(arr);
// document.write("</br>Out:");
// out(arr);
// document.write("</br>Out:");
// out(arr);
// document.write("</br>Out:");
// out(arr);
// document.write("</br>Out:");
// out(arr);
// function out (arr) {
//     var array = arr.pop();
//     document.write("</br>" + array)
// }

// // 14
// var arr = [];
// var j = 5;
// document.write("Devices </br>");
// for (var i = 0; i < 5; i++){
//     arr.unshift(prompt("Enter a Devices. " + j-- + " remaining"));
// }
// arr.reverse();
// for (var j = 0; j < 5; j++){
//     document.write(arr[j] + " ,")
// }
// document.write("</br>Out:");
// out(arr);
// document.write("</br>Out:");
// out(arr);
// document.write("</br>Out:");
// out(arr);
// document.write("</br>Out:");
// out(arr);
// document.write("</br>Out:");
// out(arr);
// function out (arr) {
//     var array = arr.pop();
//     document.write("</br>" + array)
// }

// // 15
// var manufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (var i=0; i<manufacturer.length; i++) {
//     document.write("<option>" + manufacturer[i] + "</option>");
// }
// document.write("</select>");

// // Chapter 17-20
// // 1
// var activities1 = [1,2,3]; //1D Array
// var activities2 = ["1","2","3"]; //1D Array
// var activities3 = [1,2,3]; //1D Array
// var multiArray = [activities1, activities2, activities3]; // multidimensional array

// // 2
// var arr1 = [0,1,2,3];
// var arr2 = [1,0,1,2];
// var arr3 = [2,1,0,1];

// var arr = [arr1,arr2,arr3];

// // 3
// for (var i=1; i<11; i++) {
//     document.write(i + "</br>")
// }

// // 4
// var num = +prompt("Enter number to display table");
// var length = +prompt("Enter length to which table should be displayed");
// document.write("Multiplication table of " + num + " Length " + length + " </br>")
// for (var i=1; i<=length; i++) {
//     document.write(num + "x" + i + "=" + num*i + "</br>");
// }

// // 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i=0; i<fruits.length; i++) {
//     document.write(fruits[i] + "</br>");
// }
// for (var j=0; j<fruits.length; j++) {
//     document.write("Elements at index " + j + " is " + fruits[j] + "</br>");
// }

// // 6
// document.write("Counting: ");
// for (var i=1; i<16; i++) {
//     document.write(i + ", ");
// }
// document.write("</br>Reverse Counting: ");
// for (var j=10; j>0; j--) {
//     document.write(j + ", ");
// }
// document.write("</br>Even: ");
// for (var k=0; k<21; (k=k+2)) {
//     document.write(k + ", ");
// }
// document.write("</br>Even: ");
// for (var l=1; l<20; (l=l+2)) {
//     document.write(l + ", ");
// }
// document.write("</br>Even: ");
// for (var m=2; m<21; (m=m+2)) {
//     document.write(m + "k, ");
// }

// // 7
// var A = ["cake", "apple pie", "cookies", "chips", "patties"];
// var search = prompt("Enter an item to search in the bakery");
// var num = A.indexOf(search);
// if (num === -1) {
//     alert(search + " is not available in the bakery");
// } else {
//     alert(search + " is available at index " + num + " in our bakery");
// }

// // 8
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: ")
// for (var i=0; i<A.length; i++) {
//     document.write(A[i] + " ,");
// }
// A.sort((a,b) => a-b)
// var last = A.pop();
// document.write("</br> The largest number is " + last);

// // 9
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: ")
// for (var i=0; i<A.length; i++) {
//     document.write(A[i] + " ,");
// }
// A.sort((a,b) => a-b)
// var last = A.shift();
// document.write("</br> The smallest number is " + last);

// // 10
// for (var i=5; i<101; (i=i+5)) {
//     document.write(i + " ,")
// }