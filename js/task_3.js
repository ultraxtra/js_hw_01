let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
let password = prompt("Please enter your password");

if (password === null) {
    alert("Cancelled by user");
}

else if(password === ADMIN_PASSWORD){
    alert("Welcome");
}

 else{
    alert("Access denied!");
}

alert(message);