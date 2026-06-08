let TestResults = ["Pass", "Fail", "Pass", "skip"];

TestResults.forEach((result, index) =>{
    console.log(`Test ` + index + " -> " + result);
});