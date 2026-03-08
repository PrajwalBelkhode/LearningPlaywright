let isloggedIn = true;
let userRole = 'admin';

if (isloggedIn){
    if (userRole == "admin"){
        console.log("Admin can do all things");
    }
    else if (userRole == "editor"){

        console.log("Welcome Editor - Edit access granted");
    }
    else if (userRole == "viewer"){
        console.log("Welcome Viewer - Read only access");
    }
    else{
        console.log("Unknown user role.");
    }
}
else{
    console.log("You are not logged in!!")
}