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

// 7
