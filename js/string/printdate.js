let myYear = prompt("Enter year "),
    myMonth = prompt("Enter month "),
    myDay = prompt("Enter day ");

if (myDay < 10 || myMonth < 10) {
    myDay = '0'.concat(myDay);
    myMonth = '0'.concat(myMonth);
}
trueDate = myYear + '-' + myMonth + '-' + myDay;
console.log(trueDate);
alert(trueDate);