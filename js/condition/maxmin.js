let a = 20,
  b = 20,
  c = 22;
let max, min;

if (a >= b && a >= c) {
  // a > b,c
  max = a;
  min = b >= c ? c : b;
} else if (b >= c) {
  // b>c>a
  max = b;
  min = a;
} else {
  //c>b>a
  max = c;
  min = a;
}

console.log("a=" + a, "b=" + b, "c=" + c);
console.log("Max:", max);
console.log("Min:", min);
