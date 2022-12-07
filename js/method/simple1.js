let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//reverse
const reversed = itCompanies.reverse();
console.log(reversed + "\n");

//remove first
let removed = itCompanies.shift();
console.log(itCompanies);

//remove last
removed = itCompanies.pop();
console.log(itCompanies);

//remove middle
let mid = Math.floor(itCompanies.length/2);
console.log((itCompanies.slice(0,mid)).concat(itCompanies.slice(mid + 1, itCompanies.length)));

//remove all
console.log(itCompanies.slice(itCompanies.length));

