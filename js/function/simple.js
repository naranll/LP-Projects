//print name with function
console.log("1. Print my name");
let myName = "Josh George";
function printName(name) {
    console.log(name);
}

printName(myName + "\n");


//return full name
console.log("2. Print full name");
let myFirstName = "Red", myLastName = "Liir"
function fullN(firstn, lastn) {
    return firstn + " " + lastn;
}

console.log(fullN(myFirstName, myLastName + "\n"));

//return sum 
console.log("3. Find sum");
let number1 = 67, number2 = 98;
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(number1, number2 + "\n"))


//calculate triangle area
console.log("4. Rectangle area");
let leng = 10, wid = 28;
function area(h, a) {
    return h * a;
}
console.log(area(leng, wid + "\n"));


//triangle perimeter
console.log("5. Triangle perimeter");
let side1 = 14, 
    side2 = 17,     
    side3 = 16;
function triperi(s1,s2,s3) {
    return s1+s2+s3;
}
console.log(triperi(side1,side2,side3));