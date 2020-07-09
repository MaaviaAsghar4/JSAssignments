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

// 15
var pass = prompt("Enter a new password six characters long that must contain both numbers and alphabets, and it should start with alphabet");
if (pass.length !== 6) {
    alert("Password should be six characters only")
}

var value = pass.charCodeAt(0);
if (value < 48 && j > 57) {
    alert("password could not be start with a number");
}

for (var i=0; i<pass.length; i++) {
    var j = pass.charCodeAt(i);
    if ((j > 96 && j < 123) || (j > 64 && j < 91) && (j > 47 && j < 58) ) {
        var a = 'a';
    }
}
