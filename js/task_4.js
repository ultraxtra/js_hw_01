const credits = 23580;
const pricePerDroid = 3000;

let amount = prompt("Enter amount of droids");

let totalPrice = pricePerDroid * amount;
let moneyLeft = credits - totalPrice;

if(prompt === null){
    console.log("Cancelled by user");
}
else if(credits < totalPrice){
    console.log("Not enough money");
}
else{
    console.log(`You have bought: ${amount} droids, money left: ${moneyLeft}`);
}
