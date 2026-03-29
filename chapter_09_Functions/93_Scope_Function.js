// Scope in functions

let env = "staging";
function setupconfig(){
    let timeout = 300;
    console.log(env);
    console.log(timeout);
}
setupconfig();
console.log(env);
// console.log(timeout); // ❌ ReferenceError - not accessible out of the scope

// Nested scope
function outer(){
    let x = 10;
    function inner(){
        let y = 20;
        console.log(x); // ✅ Inner function can access outer function's variables
    }   

    inner();
    console.log(y); // ❌ Outer function can access outer function's variables - ReferenceError
}

outer();