function add(a, b, c){
    return a + b + c;
}

let num = [10, 20, 30];
console.log(add(...num)); // Passing array using spread


function hasErrorCodes(...codes){
    return codes.some(c = c => 400);
}
let responseCodes = [200, 400, 401, 202];
console.log(hasErrorCodes(responseCodes));