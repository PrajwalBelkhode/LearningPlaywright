import {test, expect} from '@playwright/test'

function OpenTTALogin(callback){
    setTimeout(() =>{
        console.log("Step 1: Open TTA");
        callback();
    }, 1000);
}

function LoginTTA(callback){
    setTimeout(() =>{
        console.log("Step 2: Enter username & password");
        callback();
    }, 1000);
}

function ClickSubmit(callback){
    setTimeout(() =>{
        console.log("Step 3: Submitted username & password");
        callback();
    }, 1000)
}

function ViewDashboard(callback){
    setTimeout(() =>{
        console.log("Step 4: View Student dashboard");
        callback();
    }, 1000)
}

OpenTTALogin(function(){
    LoginTTA(function(){
        ClickSubmit(function(){
            ViewDashboard(function(){
                console.log("Sequence completed")
            })
        })
    })
})