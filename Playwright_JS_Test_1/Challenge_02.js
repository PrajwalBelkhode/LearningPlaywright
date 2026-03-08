/**
 * Test Case Result Counter
After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
 */




let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let count_of_pass = 0; let count_of_fail = 0; let count_of_skip = 0;
testResults_length = testResults.length

for(let i=0;i < testResults_length; i++){
    if (testResults[i] == "pass"){
        count_of_pass += 1;
    }
    else if(testResults[i] == "fail"){
        count_of_fail += 1;
    }
    else{
        count_of_skip += 1;
    }

}

let passrate = ((count_of_pass / testResults_length) * 100).toFixed(2);

// Verdict
let verdict = 0;

if (count_of_fail === 0){
    verdict = "✅Ready for release";
}
else if(count_of_fail <= 2){
    verdict ="⚠️Review before release";
}
else{
    verdict = "🚫Block release";
}

// Print report

console.log("=========== TEST REPORT ===========");
console.log(`Total test cases ${testResults_length}`);
console.log(`Pass cases:${count_of_pass}`);
console.log(`Failed cases:${count_of_fail}`);
console.log(`Skipped cases:${count_of_skip}`);
console.log(`Pass percentage:${passrate}`);
console.log(`Verdict:${verdict}`);

console.log("================================");