let bigNum = parseInt(prompt("Enter starting number")),
    smallNum = parseInt(prompt("Enter ending number"));

if (smallNum > bigNum) {
    let temp = smallNum;
    smallNum = bigNum;
    bigNum = temp;
}

let ranNum = Math.floor(Math.random() * (bigNum - smallNum + 1) + smallNum);
alert("From " + smallNum + " and " + bigNum + " you randomly get " + ranNum);

