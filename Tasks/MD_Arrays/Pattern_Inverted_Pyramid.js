let n = 7;
for (let i = 1; i< n; i++){
    let row = "";
    for (let j = 1; j<i; j++){
        row += " ";
    }
    for (let j = i; j<= 2 *(n - i) + 1; j++){
        row += "*";
    }
    console.log(row);
}