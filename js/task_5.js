let country = prompt("Enter destination");
let price = 0;

switch(country.toLowerCase()){
    case "china":
        price = 100;
    break;

    case "chili":
        price = 250;
    break;

    case "australia":
        price = 170;
    break;

    case "india":
        price = 80;
    break;

    case "jamajka":
        price = 120;
    break;

    default:
        alert("Delivery is not possible");
}

if(price){
    alert(`Delivery to ${country} will cost ${price}`);
}