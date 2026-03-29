function makeRetry(max){
    let attempts = 0;
    function tryAgain(testName){
        attempts++;
        if (attempts > max){
            return `${testName} has reached the Maximum retries ${max}`;
        }
        return `Attempt: ${attempts}/${max} for ${testName}`;
    }
    return tryAgain;
}

let retry = makeRetry(3);
console.log(retry("login"));
console.log(retry("login"));
console.log(retry("login"));
console.log(retry("login"));