let arr = [1, 2, 3, 4, 5];

// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
console.log(arr.slice(1,4));
console.log(arr.slice(-3)); // Starts from -1 i.e. last till 3

let a = [1, 2];
let b = [3, 4];

let c = a.concat(b);
console.log(c);

// Spread - ... -> Modern concatenation

let d = [...a, ...b, ...c];
console.log(d);

// Join

let status = ["pass", "fail", "skip"].join(" | ");
console.log(status);