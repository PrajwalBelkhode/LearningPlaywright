/**
 * Arrow functions (ES6)
 */

const greet1 = function(name1){
    return `Hello ${name1}`;
}

/**
 * If you want to make normal function to arrow function, remove the keyword function
 */

const greet2 = (name2) => `Hello ${name2}`;

console.log(greet1("Prajwal"));
console.log(greet2("Prajwal"));

// Arrow functions generally works whenever you have a single line

const doubleIt = n => n * 2;
console.log(doubleIt(78));

const getEnv = () => "staging";
console.log(getEnv());

// Multi line arrow functions

const getResult = (score) =>{
    if (score >= 70) return "pass";
    else{
        return "fail";
    }
}

console.log(getResult(89));