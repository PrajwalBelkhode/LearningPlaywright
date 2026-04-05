// Searching and checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes()
console.log(url.includes("staging"));
console.log(url.includes("Staging"));
console.log(url.includes("production"));

// Starts with, ends with
console.log(url.startsWith("https"));
console.log(url.startsWith("http://"));
console.log(url.endsWith("true"));

// indexOf / lastIndexOf

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere")); // It returns -1 when substring is not found

// Search => accepts regex, returns index

console.log(url.search(/login/));

console.log(url.search(/\d+/));