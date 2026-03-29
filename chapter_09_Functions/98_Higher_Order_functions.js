/**
 * Higher order functions:
 * A function which takes a function as an argument or returns a function.
 */

function runWithLogging(testfn, testName){
    console.log(`Starting ${testName}`);
    let result = testfn();
    console.log(`finished: ${testName} → ${result}`);
    return result;
}

function loginTest(){
    return "pass";
}

function DashboardTestFAILED(){
    return "fail";
}

runWithLogging(loginTest,"Login Test");
runWithLogging(DashboardTestFAILED, "Dashboard Failed Test");