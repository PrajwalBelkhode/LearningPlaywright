function logResults(suiteName, ...results){
    console.log(`Suite:${suiteName}`);
    console.log(`Results: ${results.join('|')}`);
}

logResults("Auth suite", "pass", "fail", "pass", "skip");