let results = ["pass", "fail", "pass"];

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
console.log("------");

// Iterate over matrix

for(i = 0; i < 3; i++){
    for (j = 0; j < 3; j++){
        console.log(matrix[i][j]);       
    }
}