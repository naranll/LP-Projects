let numbers = [5,6,4,12,19,121,7,1,9,63];
let even = 0, odd = 0;
for(let i = 0; i<numbers.length; i++) {
    if(numbers[i]%2==0) {
        even++;
    } else {
        odd++;
    }
}

console.log("Even numbers: " + even);
console.log("Odd: " + odd);
