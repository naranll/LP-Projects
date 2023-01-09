//1.
let i = 4 > 3; //true
let ii = 4 < 3; //false
let iii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let viii = 4 !== 4; //false 
let ix = 4 != "4"; //false 
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

//2.
let one = 4 > 3 && 10 < 12; //false
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eigth = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4"); //false

//3.
let myAge = prompt("Enter my age "),     
    yourAge = prompt("Enter your age ");
if(myAge == yourAge) {
    console.log("Бид чяцуу");
    alert("Бид чяцуу");
} else if (myAge > yourAge) {
    console.log("Би насаар ax");
    alert("Би насаар ax");
} else {
    console.log("Ta насаар ax");
    alert("Ta насаар ax");
}

//4.
let day= parseInt(prompt("Enter a day ")), dayName;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        dayName = "Workday";
        break;
    case 6:
    case 7:
        dayName = "Weekend";
        break;
    default:
        dayName = "Error";
}
alert("It's " + dayName);

//5.
let hours = prompt("Enter working hours: "), 
    ratePerHour = prompt("Enter rate per hour: ($)");
alert("Salary ($" + ratePerHour +"per hr ): $" + hours * ratePerHour);





