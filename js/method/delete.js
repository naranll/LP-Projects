let arr = [2,6,5,3,7];

function removeArrayElement(array, element) {
    return (array.slice(0, array.indexOf(element))).concat(array.slice(array.indexOf(element)+1, array.length));
}

console.log(removeArrayElement(arr, 3));