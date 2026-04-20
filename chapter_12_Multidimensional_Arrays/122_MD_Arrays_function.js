let scores = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 92]
]

let rowSums = scores.map(row => row.reduce((a,b) => a + b, 0));
console.log(rowSums);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]
]

let count_of_failure = 0;
for (let i = 0; i < suiteResults.length; i++){
    for (let j = 0; j < suiteResults[i].length; j++){
        if(suiteResults[i][j].includes("fail")){
            console.log(suiteResults[i],j);
            count_of_failure++;
        }
    }
    
}
console.log(count_of_failure);


let execTimes = [
    [120, 340, 89, 450],
    [200, 410, 100, 520],
    [180, 390, 95, 490]
];

total_time_taken = execTimes.map(row => row.reduce((a, b) => a + b, 0));
console.log(total_time_taken);