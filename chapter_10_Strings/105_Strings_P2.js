// Extracting substrings

let str = "Login_Test_Pass_001";

// Slice (start, end) - negative indexes supported

console.log(str.slice(0, 5));
console.log(str.slice(0, 6));

console.log(str.slice(11));
console.log(str.slice(-3));
console.log(str.slice(-9, -1));

// Substring(start, end) - no negatives, treats as 0

console.log(str.substring(6, 10));

// at() for single chars
console.log(str.at(0));   // "L"
console.log(str.at(-10));  // "1"