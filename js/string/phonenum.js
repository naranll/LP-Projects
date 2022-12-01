let phoneNumber = prompt("Enter phone number:"), 
    results;

if (phoneNumber.length == 8) {
    let headDigits = Number(phoneNumber.charAt(0) + phoneNumber.charAt(1));
    switch (headDigits) {
        case 99:
        case 95:
        case 94:
        case 85:
            results = "Mobicom";
            break;
        case 90:
        case 91:
        case 96:
        case 76:
            results = "Skytel";
            break;
        case 80:
        case 86:
        case 88:
        case 89:
            results = "Unitel";
            break;
        case 83:
        case 93:
        case 97:
        case 98:
            results = "G-Mobile";
            break;
        default: 
            results = "Not a mobile phone";
            break;
    }
} 

else {
    results = "Wrong number";
}

console.log(results);
alert(results);