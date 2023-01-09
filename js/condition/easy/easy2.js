let month = Number(prompt("Enter month")),
  dayNum;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayNum = 31;
    break;
  case 2:
    dayNum = "28 or 29";
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayNum = 30;
    break;
  default:
    dayNum = "Input Error! Enter right month value";
    break;
}

console.log(dayNum);
alert("Month no." + month + " has " + dayNum + " days");
