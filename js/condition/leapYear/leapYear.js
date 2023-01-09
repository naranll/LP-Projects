let thisYear = prompt("Enter a year to check leap year: ");

if(thisYear > 0 && thisYear % 4 == 0){
    if((thisYear % 100 == 0) && (thisYear % 400 != 0) ) {
        alert("not a leap year");
    } else {
        alert("is a leap year");
    }
} else {
    alert("not a leap year");
}