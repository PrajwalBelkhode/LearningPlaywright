let scores = [45, 82, 91, 60, 73];

// map — transforms every element, returns NEW array
let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

// filter — keeps elements that pass the condition
let passing = scores.filter(s => s >= 70);
console.log(passing);

// reduce - accumulates a single value
let total = scores.reduce((sum,s) => sum + s,0);
console.log(total);

let average = scores.reduce((sum,s) => (sum + s),0) / scores.length;
console.log(average);


// flat - flatenes nested arrays

let nested = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];
console.log(nested.flat());