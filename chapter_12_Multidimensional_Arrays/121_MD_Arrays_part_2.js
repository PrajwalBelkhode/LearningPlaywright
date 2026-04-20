const { default: test } = require("playwright/test");

let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

console.log(grid [2][0]);
// grid [2][1] -> 80
// grid [1][2] -> 60

console.log(grid.length); // number of rows
console.log(grid[0].length); // number of columns

// last element
console.log(grid[grid.length - 1][grid[0].length - 1]);
console.log("------");

let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

// Column like
for (let i = 0; i < testMatrix.length; i++){
    for (let j = 0; j < testMatrix[i].length; j++){
        console.log(testMatrix[i][j] + " ");
    }
    console.log("******");
    console.log(" ");
}

console.log("------");

// Matrix like
for (let i = 0; i < testMatrix.length; i++){
    for (let j = 0; j < testMatrix[i].length; j++){
        process.stdout.write(testMatrix[i][j] + " ");
    }
    console.log(" ");
}

console.log("------");

// forEach

testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
});

console.log("------")