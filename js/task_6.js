let input;
let total = 0;

while(input !== null){
    input = prompt("Enter number");

    if(input === null){
    alert(`Total sum is: ${total}`);
}
else if(isNaN(input)){
    alert("You have entered a wrong digit, try one more time");
}
else{
    total += +input;
}
}
