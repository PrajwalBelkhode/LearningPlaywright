// Real time example

function OpenChrome(callback){
    console.log("Starting the tests");
    setTimeout(function (){
        console.log("Step 1: Opening google chrome.");
        callback();
    }, 500);
}

function goToLoginPage(callback){
    setTimeout(function (){
        console.log("Step 2: Opening login page.");
        callback();
    }, 500);
}

function enterCredentials(callback){
    setTimeout(function (){
        console.log("Step 3: Entering the credentials");
        callback();
    }, 500);
}

function clickOnSumbit(callback){
    setTimeout(function (){
        console.log("Step 4: Clicking on submit");
        callback();
    }, 500);
}

OpenChrome(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickOnSumbit(function(){
                console.log("Test run completed!!!");
            })
        })
    })
})