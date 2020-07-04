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

// 5
var num = prompt("Enter number to display table");
for (var i=1; i<11; i++) {
    document.write(num + "x" + i + "=" + num*i + "</br>");
}