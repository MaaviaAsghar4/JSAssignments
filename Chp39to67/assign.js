// // Chap 38-42
// // 1
// var num = +prompt("Enter a number");
// var exp = +prompt("Enter power");
// power(num,exp);
// function power(a,b) {
//     var c=1;
//     for(var i=0; i<b;i++) {
//         c = c*a;
//     }
//     document.write("Answer is " + c);
// }

// // 2
// var year = prompt("Enter Year to finds whether it is a leap year");
// leap(year);
// function leap(year) {
//     var leapYear = 4;
//     if (year%leapYear === 0) {
//         alert("It is a leap year");
//     } else {
//         alert("It is not a leap year");
//     }
// }

// // 3
// alert("Enter sides of the triangle");
// var a = +prompt("Enter length for side a");
// var b = +prompt("Enter length for side b");
// var c = +prompt("Enter length for side c");
// var s = perimeter(a,b,c);
// area(a,b,c,s);
// function perimeter(a,b,c) {
//     var s = (a+b+c)/2;
//     return s;
// }
// function area(a,b,c,s) {
//     var area = s*(s-a)*(s-b)*(s-c);
//     document.write("Area of triangle with sides " + a + " " + b + " " + c + " is " + area);
// }

// // 4
// mainFunction();
// function mainFunction() {
//     var a = +prompt("Enter marks for subject 1");
//     var b = +prompt("Enter marks for subject 2");
//     var c = +prompt("Enter marks for subject 3");

//     var average1 = average(a,b,c);
//     var percentage1 = percentage(a,b,c);

//     document.write("The average marks of the student is " + average1);
//     document.write("</br>The percentage is " + percentage1);
// }
// function average(a,b,c) {
//     var avg = (a+b+c)/3;
//     return avg;
// }
// function percentage(a,b,c) {
//     var per1 = ((a+b+c)/300)*100;
//     return per1;
// }

// // 5
// var input = prompt("Enter a string");
// var index = prompt("Enter word to finds its index");
// indexing(input,index);
// function indexing(input, index) {
//     var array = input.split(index);
//     var select = array.shift();
//     document.write("Index of " + index + " is " + select.length);
// }

// // 6
// var input = prompt("enter a string to delete vowels");
// del(input);
// function del(input) {
//     input = input.toLowerCase();
//     var vowel = input.replace(/a/g, "");
//     var vowel1 = vowel.replace(/e/g, "");
//     var vowel2 = vowel1.replace(/i/g, "");
//     var vowel3 = vowel2.replace(/o/g, "");
//     var vowel4 = vowel3.replace(/u/g, "");
//     document.write(vowel4);
// }

// // 7
// var find = findOccurence();
// document.write("Total number of consecutive vowels in the string are " + find);
// function findOccurence() {
//     var str = "Pleases read this application and give me gratuity";
//     var str1 = str.toLowerCase().split("");
//     var count = 0;
//     for (var i=0; i < str1.length - 1; i++) {
//         var vowel = str1[i];
//         var vowelNext = str1[i + 1];

//         if (countVowel(vowel) && countVowel(vowelNext)) {
//             count++
//         }
//     }
//     return count;
// }

// function countVowel(v) {
//     switch (v) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }

// 8
// var distance = +prompt("Enter distance in Km");
// convert(distance);
// function convert(d) {
//     var m = d*1000;
//     var ft = feet(d);
//     var inc = inch(d);
//     var cm = centimeter(d);
//     document.write("Distance in meters is " + m);
//     document.write("</br>Distance in feet is " + ft);
//     document.write("</br>Distance in inches is " + inc);
//     document.write("</br>Distance in centimeters is " + cm);
// }
// function feet(d) {
//     return d*3280.84;
// }
// function inch(d) {
//     return d*39370.1;
// }
// function centimeter(d) {
//     return d*100000;
// }

// // 9
// var workingHour = +prompt("Enter your working hour");
// pay(workingHour);
// function pay(workingHour) {
//     var overtime = workingHour - 40;
//     if (overtime === 0) {
//         document.write("You will recieve a base salary this month");
//     } else if (overtime < 0) {
//         document.write("You will recieve a salary deduction this month");
//     } else if (overtime > 0) {
//         var salary = overtime*12;
//         document.write("You will recieve an overtime of " + salary + " Rs this month");
//     }
// }

// // 10
// var input = +prompt("Enter total amount of cash");
// cash(input);
// function cash(input) {
//     var hund = input/100;
//     var hundred = Math.floor(hund);
//     var remain1 = input%100;
//     var fif = remain1/100;
//     var fifty = Math.floor(fif);
//     var remain2 = remain1%100;
//     var ten = remain2/10;
//     var tenn = Math.floor(ten);
//     var remain3 = remain2%10;
//     document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes and " + tenn + " ten notes");
// }

// // Chap 43-48
// // 1
// function show() {
//     var hi = document.getElementById("show");
//     hi = alert("Greetings")
// }

// // 2
// function call() {
//     alert("Thanks for purchasing the phone");
// }

// // 3
// function del(a) {
//     var del = a.parentNode.parentNode.rowIndex;
//     document.getElementById("delete").deleteRow(del);
// }

// // 4
// function pic() {
//     var img = document.getElementById("main");
//     img.src = "images.jpeg"
// }

// function picchange() {
//     var img = document.getElementById("main");
//     img.src = "download.jpeg"
// }

// // 5
// var inc = 0;
// var increment = document.getElementById("inc");
// function increase() {
//     inc++;
//     increment.innerHTML = inc;
// }
// function decrease() {
//     inc--;
//     increment.innerHTML = inc;
// }

// // Chap 49-52
// // 1
// function getData() {
//     var first = document.getElementById("fname").value;
//     var last = document.getElementById("lname").value;
//     var eaddress = document.getElementById("email").value;
//     document.write("First Name: " + first);
//     document.write("</br>Last Name: " + last);
//     document.write("</br>Email Address: " + eaddress);
// }

// // 2
// function read() {
// var paragraph = "Read more works"
// var texting = document.getElementById("text");
// texting.innerHTML = paragraph;
// }

// // 3
// function getData() {
//     var table = document.getElementById("table");
//     var name = document.getElementById("fname");
//     var classes = document.getElementById("classes");
//     var email = document.getElementById("email");
//     var tr = table.insertRow(-1);
//     var cellName = tr.insertCell(0);
//     var cellClass = tr.insertCell(1);
//     var cellEmail = tr.insertCell(2);
//     cellName.innerHTML = name.value;
//     cellClass.innerHTML = classes.value;
//     cellEmail.innerHTML = email.value;
//     var cellDel = document.createElement("Button");
//     cellDel .setAttribute("onclick", "del(this)");
//     var text1 = document.createTextNode("Delete");
//     cellDel.appendChild(text1);
//     tr.appendChild(cellDel);
//     var cellEdit = document.createElement("Button");
//     cellEdit .setAttribute("onclick", "edit(this)");
//     var text2 = document.createTextNode("Edit");
//     cellEdit.appendChild(text2);
//     tr.appendChild(cellEdit);
//     name.value = "";
//     classes.value = "";
//     email.value = "";
// }
// function del(a) {
//     var del = a.parentNode.parentNode.rowIndex;
//     document.getElementById("table").deleteRow(del+1);
// }

// function edit(a) {
//     var edit = a.parentNode.parentNode.rowIndex;
//     console.log(edit)
//     document.getElementById("fname").value = document.getElementById("table").rows[edit].cells[0].innerHTML;  
//     document.getElementById("classes").value = document.getElementById("table").rows[edit].cells[1].innerHTML;  
//     document.getElementById("email").value = document.getElementById("table").rows[edit].cells[2].innerHTML;  
// }

// // Chap 53-58
// // 1
// var array = ["others/1.jpg", "others/6.jpg", "others/3.jpg", "others/5.jpg"]
// for (var i=0; i<array.length; i++) {
//     var a = document.getElementById("images");    
// }
// function image() {
//    var modal = document.getElementById("modal");
//    modal.classList.add("Modal-open");
//    modal.style.display = "block";
//    modal.src = "others/1.jpg";
// }

// // 2
// var size = 20;
// function zoomIn() {
//     size = size + 10;
//     var para = document.getElementById("para");
//     para.style.fontSize = size + "px";
// }
// function zoomOut() {
//     size = size - 10;
//     var para2 = document.getElementById("para");
//     para2.style.fontSize = size + "px";
// }

// // Chap 58-67
// // 1
// // i,ii
// var element = document.getElementById("main-content");
// var a = element.childNodes;
// var text = "";
// for (var i=0; i<a.length; i++) {
//     text = text + a[i].nodeName + " "
// }
// document.write(text);

// // iii
// var y = document.getElementsByName("main-content");
// var b = document.getElementsByClassName("render");
// for (var j=0; j<b.length; j++) {
//     document.write(b[j].innerHTML + "<br>");
// }

// // iv, v
// var y = document.getElementById("first-name");
// y.setAttribute("value", "John Doe");
// var b = document.getElementById("last-name");
// b.setAttribute("value", "Michael");
// var y = document.getElementById("email");
// y.setAttribute("value", "john@yahoo.com");

// 2
// i,ii,iii
// var a = document.getElementById("form-content");
// var b = a.nodeType
// var c = a.nodeName
// document.write(b + " " + c)
// var d = document.getElementById("lastName");
// var e = d.nodeType;
// document.write("</br>" + e + " " + d.childNodes[0]);
// var upd = document.createElement("li")
// d.childNodes[0] = upd;
// d.appendChild(upd)
// document.write("<br>" + d.childNodes[1]);

// // iv
// var a = document.getElementById("main-content");
// var b = a.firstChild.nodeName;
// var c = a.lastChild.nodeName;
// document.write("First and Last child are " + b + " " + c);

// // v
// var a = document.getElementById("lastName");
// var b = a.nextSibling.nodeName;
// var c = a.previousSibling.nodeName;
// document.write("Next and Previous siblings are " + b + " " + c);

// // vi
// var a = document.getElementById("email");
// var b = a.parentNode.nodeName;
// var c = a.nodeType;
// document.write("Parent node and nodetype are " + b + " " + c);
