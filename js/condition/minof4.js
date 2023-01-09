let a = 120,
  b = 33,
  c = 10,
  d = 12,
  min;

if (a <= b && a <= c && a <= d) {
  //b,c,d > a
  min = a;
} else if (b <= c && b <= d) {
  //a> b,c,d --> a> c,d > b
  min = b;
} else if (c <= d) {
  // a>b> c,d
  min = c;
} else {
  min = d;
}

console.log("numbers:", a, b, c, d);
console.log("min:",min);
