// Arrays iterate
let tests = ["login", "checkout", "search"];

for (let i = 0;i < tests.length; i++){
    console.log(tests[i]);
}
console.log("\n------");
// for...of

for (let test of tests){
    console.log (test);
}
console.log("\n------");
// forEach

tests.forEach((test, index) =>{
    console.log(`${index}:${test}`);
})

console.log("\n------");

tests.forEach((test) =>{
    console.log(`${test}`);
})

console.log("\n------");

for (let [i, test] of tests.entries()){
    console.log(`${i}:${test}`);
}

console.log("\n------");

let students = ["John", "Dylan", "Ross", "Christine"];

for (let student in students){
    console.log(student, ":", students[student]);
}