let openBrowser = () =>{
    return new Promise(function(resolve){
        resolve("Browser opened");
    });
}

let openLoginPage = () =>{
    return new Promise(function(resolve){
        resolve("Login page loaded");
    });
}

let enterCredentials = () =>{
    return new Promise(function(resolve){
        resolve("Creds entered successfully")
    });
};

let clickSubmit = () =>{
    return new Promise(function(resolve){
        resolve("Submited successfully");
    });
};

async function Loginrun(){
    let msg_1 = await openBrowser();
    console.log("Step 1:", msg_1);

    let msg_2 = await openLoginPage();
    console.log("Step 2:",msg_2);

    let msg_3 = await enterCredentials();
    console.log("Step 3:",msg_3);

    let msg_4 = await clickSubmit();
    console.log("Step 4:",msg_4);
};

Loginrun();