let grades = ["A++", "A", "A-", "B++", "B", "B-","C++", "C", "C-","D++", "D", "D-","F"];
console.log(Array.isArray(grades));
console.log("\n-----");
let marks = 78;
console.log(Array.isArray(marks));
console.log("\n-----");

// Every and some

console.log([156, 178, 120].every(s => s >= 100));
console.log([156, 178, 120].every(s => s > 120));
console.log("\n-----");
//Some
console.log([156, 178, 120].some(s => s >= 100));
console.log([156, 178, 120].some(s => s > 120));
