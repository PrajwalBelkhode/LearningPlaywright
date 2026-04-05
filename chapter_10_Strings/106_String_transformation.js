// Transforming string

let str = " Hello, world! ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim whitespaces
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// Replace

let msg = "Test: FAIL. Retry: FAIL";
console.log(msg.replace("FAIL", "pass"));
console.log(msg.replaceAll("FAIL", "PASS"));
console.log(msg.replace(/FAIL/g, "PASS")); // replaces with regex

// String concatenation

console.log("Hello" + ", " + "World!!!!!");
console.log("Hello".concat(" ", "World!!!!!!"));
console.log(`${"Hello"} ${"World"}`);

// Splitting and Joining

console.log("pass, fail, skip".split(",")); // String to array - very important
console.log("hello".split(""));

"test_login_pass".split("_").join(" "); // "test login pass"

// Template literal - Joining with format

let date_raw = ["2026", "04", "05"];
let date_fomrat_1 = date_raw.join("-");
let date_fomrat_2 = date_raw.join("/");
console.log(date_fomrat_1,date_fomrat_2);