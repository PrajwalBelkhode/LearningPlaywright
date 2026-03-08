let username = "Dev";
let password = "secure@123";
let isAccountLocked = true;

if((username === "Dev" && password === "secure@123") && !isAccountLocked){
    console.log("Allowed to enter");
}
else{
    console.log("Not allowed to enter");
}