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

//