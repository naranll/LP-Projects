let str = prompt("Enter a sentence");

function parameterizeStr (words) {
    return (words.split(' ')).join('-');
}

console.log(parameterizeStr(str));
alert(parameterizeStr(str));

