// 1. Comments can make code readable
// 2. Javascript lesson begin
/* 3. comments can 
make code
readable*/

//6.
let utgagui;

//7.
let utgatai = "to be";

//8.
let firstName8 = "John";
let lastName8 = "Storm";
let mstatus8 = "Married";
let country8 = "U.K";
let age8 = "36";
console.log("First Name " + firstName8);
console.log("Last Name " + lastName8);
console.log("Marraige status " + mstatus8);
console.log("Country " + country8);
console.log("Age " + age8);
console.log("==========================================");

//9.
let firstName9 = "John", lastName9 = "Storm", mstatus9 = "Married", country9 = "U.K", age9 = "36";
console.log("First Name " + firstName9);
console.log("Last Name " + lastName9);
console.log("Marraige status " + mstatus9);
console.log("Country " + country9);
console.log("Age " + age9);
console.log("==========================================");

//10.
let myAge, yourAge;
myAge = 39;
console.log("==========================================");

//11. traingle perimetre
let s1, s2, s3;
s1 = 4;
s2 = 3;
s3 = 5;
let p = s1 + s2 + s3;
console.log("==========================================");

//12. circle area
let radius = 3;
const pi = 3.14;
let area = pi * radius * radius;

console.log("Perimetre of the triangle:", p);
console.log("Circle area with radius 3:", area.toFixed(2));
console.log("==========================================");

//13. 
let m, x1, x2, y1, y2;
x1 = 4;
x2 = 19;
y1 = 5;
y2 = 24;
m = (y2 - y1) / (x2 - x1);
console.log("m=" + m.toFixed(2));
console.log("==========================================");

//14.
let a, gtoByte;
a = 15;
gtoByte = a * (Math.pow(10, 9));
console.log("15 GB equals to " + gtoByte + "B");
console.log("==========================================");

//15.  
let mtoByte, bitRate;
mtoByte = a * (Math.pow(10, 6)); //q14 and q15 have the same initial number
bitRate = (mtoByte / 3) * 8;
console.log("15MB can be downloaded in 3 seconds, bitrate is " + bitRate + "B/s");
console.log("==========================================");

//16
let side1 = 14, side2 = 19, side3 = 20, semi, triArea;
semi = (side1 + side2 + side3) / 2;
triArea = Math.sqrt(semi * (semi - side1) * (semi - side2) * (semi - side3));
console.log("Area of triangle(14,19,20) is " + triArea.toFixed(2));
console.log("==========================================");

//19.
let num1, num2;
num1 = 12;
num2 = 5;

console.log("addition of given 2 numbers is", num1 + num2);
console.log("subtraction of given 2 numbers is", num1 - num2);
console.log("product of given 2 numbers is", num1 * num2);
console.log("quotient of given 2 numbers is", num1 / num2);
console.log("remainder of given 2 numbers is ", num1 % num2);
console.log("==========================================");

//23. baby shark

let baby = "Baby Shark";
let mommy = "Mommy Shark";
let daddy = "Daddy Shark";
let grandma = "Grandma Shark";
let grandpa = "Grandpa Shark";
let hunt = "Let's go hunt";
let doo = "doo-doo, doo-doo";

console.log(baby + ", " + doo);
console.log(baby + ", " + doo);
console.log(baby + ", " + doo);
console.log(baby);

console.log(mommy + ", " + doo);
console.log(mommy + ", " + doo);
console.log(mommy + ", " + doo);
console.log(mommy);

console.log(daddy + ", " + doo);
console.log(daddy + ", " + doo);
console.log(daddy + ", " + doo);
console.log(daddy);

console.log(grandma + ", " + doo);
console.log(grandma + ", " + doo);
console.log(grandma + ", " + doo);
console.log(grandma);

console.log(grandpa + ", " + doo);
console.log(grandpa + ", " + doo);
console.log(grandpa + ", " + doo);
console.log(grandpa);

console.log(hunt + ", " + doo);
console.log(hunt + ", " + doo);
console.log(hunt + ", " + doo);
console.log(hunt);


