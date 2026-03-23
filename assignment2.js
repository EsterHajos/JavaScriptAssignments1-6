// Assignment lesson JS2: Keywords, String Methods, and Parse //


let input = prompt("Please enter requested price to get the 10% discount");

let removeDollar = input.replace ("$", "");

let price = parseFloat(removeDollar);

let newPrice = price * 0.10;


console.log ("Your original price:$" + input);
console.log ("Your new  discounted price is:$" + newPrice);

