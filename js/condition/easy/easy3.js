let number = Number(prompt("Enter number to check"));

if(number % 3 == 0 || number % 7 == 0){
    alert(number + " is either dividable by 3 or 7");
} else {
    alert(number + " is neither dividable by 3 nor 7");
}