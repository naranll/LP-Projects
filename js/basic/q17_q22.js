//17. C to F
let cels1, farn1;
cels1 = parseFloat(prompt("Enter celsius"))
farn1 = (cels1 * 9 / 5) + 32;
alert(cels1 + "°C = " + farn1 + "°F");

//18. F to C
let cels2, farn2;
farn2 = parseFloat(prompt("Enter farenheit"))
cels2 = (farn2 - 32) * 5 / 9;
alert(farn2 + "°F = " + cels2 + "°C");

//20. cm to inch
let cm, inc, ctoi, itoc;
cm = parseFloat(prompt("Lenght in cm: "));
ctoi = cm / 2.54;
alert(cm + "cm = " + ctoi + "inch");

inc = parseFloat(prompt("Lenght in inch: "));
itoc = inc * 2.54;
alert(inc + "inch = " + itoc + "cm");

//21. 
let radius, p, v;
const pi = 3.14;
radius = parseFloat(prompt("Enter circle radius: "));
v = pi * Math.pow(radius, 3) * 4 / 3;
p = 2 * pi * radius;
alert("Volume = " + v.toFixed(2));
alert("Perimetre = " + p);

//22. 
let threeDig, firstDig, temp;
threeDig = parseFloat(prompt("Enter a three digit number: "));
temp = (threeDig - (threeDig % 10)) / 10;
firstDig = (temp - (temp % 10)) / 10;
alert("First digit " + firstDig);
