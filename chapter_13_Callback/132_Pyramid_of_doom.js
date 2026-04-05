function StartBrowser(callback){
    console.log("Step1 → Start the browser");
    callback();
}

function OpenLoginPage(callback){
    console.log("Step2 → Open login page");
    callback();
}

function EnterValidCredentials(callback){
    console.log("Step3 → Enter valid Email ID and password");
    callback();
}

function Submit(callback){
    console.log("Step4 → Submit the details");
    callback();
}

function ViewafterLogin(callback){
    console.log("Step5 → Dashboard page");
    callback();
}

StartBrowser(function(){
    OpenLoginPage(function(){
        EnterValidCredentials(function(){
            Submit(function(){
                ViewafterLogin(function(){
                    console.log("Done!!")
                })
            })
        })
    })
});