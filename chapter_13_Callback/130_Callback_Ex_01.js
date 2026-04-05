function greetTester(name, callback){
    console.log(`Hello ${name}`);
    callback();
}

greetTester("Dev", function(){
    console.log("Let's start testing");
});

// Callback with parameters

function runTest(testName, callback){
    let status1 = "Pass", status2 = "Fail";
    callback(testName, status1);
    callback(testName, status2);
}

// runTest("Login test", function(name, result){
//     console.log(name + " → " + result);
// });

runTest("View users", function(name, result){
    console.log(name + " → " + result );
});

let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function(bug, i){
    console.log("Bug #" + (i + 1) + bug);
})

console.log("Total bugs:" +bugs.length);