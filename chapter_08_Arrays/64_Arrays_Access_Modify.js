let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]); // First element
console.log(statuses[2]); // Last element
console.log(statuses.at(-1)); // Last element

// Modify
statuses[1] = "blocked";
console.log(statuses);

// Array length
console.log(statuses.length);