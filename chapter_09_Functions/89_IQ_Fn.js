// Returns a value
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

console.log(getStatus(204));
console.log(getStatus(400));
console.log(getStatus(502));


function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}
let result = logTest("Login");
console.log(result);


greet("Alice");

function greet(name) {
    return `Hello, ${name}!`;
}

// ❌ Expression — NOT hoisted

// sayHi("Bob");

// const sayHi = function (name) {
//     return `Hi, ${name}!`;
// };