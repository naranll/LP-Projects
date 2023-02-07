let a = parseInt(prompt("Enter a side of triangle: "));
let b = parseInt(prompt("Enter b side of traingle "));
let c = (Math.sqrt(Math.pow(a,2) + Math.pow(b,2))).toFixed(1);

alert("hypotenuse of triangle:" + c);
console.log("hypotenuse of triangle(" + a + ',', b + ') is', c);
