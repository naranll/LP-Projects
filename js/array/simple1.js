let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//1. print array
console.log(""+ itCompanies);
console.log("=============================");

//2.print array companies' length + 4. print each company
for(let i = 0; i < itCompanies.length; i++) {
    let output= "";
    output += itCompanies[i] + " - " +itCompanies[i].length;
    console.log(output);    
}
console.log("=============================");

//3. print first, mid, last
let mid = parseInt(itCompanies.length /2);
console.log(itCompanies[0] + "  " + itCompanies[mid] + "    " + itCompanies[itCompanies.length-1]);
console.log("=============================");

//6. print in sentence
let sentence = "- зэрэг томоохон компаниуд.";
console.log("".concat(itCompanies,sentence));
console.log("=============================");

//5. write all in uppercase
for(let i = 0; i< itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase();
    console.log(itCompanies[i]);
}