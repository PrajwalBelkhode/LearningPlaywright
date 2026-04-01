// Strings

let url = "https://app.vwo.com";
let status = "pass";
let message = `Test completed in ${320} ms.`;

let name = 'Prajwal';
let msg = `Hello, ${name}`;
console.log(msg);

// Multi line
let report = `
    Test: Login,
    Status: Pass,
    Duration: 160 ms
`;
console.log(report);

// String constructor

console.log(String(200));
String(true); // "true"
String(null); // "null"
String([1, 2]); // "[1,2]"