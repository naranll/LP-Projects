const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

//add Meat at start
let addMeat = shoppingCart.unshift("Meat");
console.log(shoppingCart);

//add Sugar at end
let addSugar = shoppingCart.push("Sugar");
console.log(shoppingCart);

//remove honey - i'm allergic
let honey = shoppingCart.indexOf("Honey");
console.log((shoppingCart.slice(0, honey)).concat(shoppingCart.slice(honey + 1, shoppingCart.length)));

//change tea to green tea
let change = shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea"); 
console.log(shoppingCart);