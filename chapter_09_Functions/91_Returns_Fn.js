// Return values

function getStatusCode(StatusCode){
    if (StatusCode >= 200 && StatusCode < 300) return "Success";
    if (StatusCode >= 400 && StatusCode < 500) return "Client Error";
    if (StatusCode >= 500 && StatusCode < 600) return "Internal server error";
}

console.log(getStatusCode(202)); // succcess
console.log(getStatusCode(403)); // succcess
console.log(getStatusCode(500)); // succcess

function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}


logTest("This is a log");

function retunanArray(){
    return [1, 2, 3, 4, 5, 6];
}

console.log(retunanArray());