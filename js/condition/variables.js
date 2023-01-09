//1. sum of variables greater than 80
let a =85, b=75, c=92, d=103;
let sum = 0;

if(a > 80) {
    sum = sum + a;
} 
if(b > 80) {
    sum = sum + b;
}
if(c > 80) {
    sum = sum + c;
} 
if(d > 80) {
    sum = sum +d;
}

console.log("a =", a, "b =", b, "c =", c, "d =",d);
console.log("Sum of variables greater than 80: ", sum);