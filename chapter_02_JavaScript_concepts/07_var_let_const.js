// var, let and const

// var - Function scoped
// let - block scoped

// var Example
function printHello1(){
    console.log(`Hello - Today's date is 28/02/2026 and time is ${Date.now()}`);
    var a =20;
    console.log(a);
    if(true){
        var a = 80;
        console.log(a);
    }
    console.log("Value is ->",a);
}

printHello1();


// let example:

function printHello2(){
    console.log(`Hello - Today's date is 28/02/2026 and time is ${Date.now()}`);
    let b =50;
    console.log(b);
    if(true){
        let b = 780;
        console.log(b);
    }
    console.log("Value is ->",b);
}

printHello2();

// const -->

const pi = 3.14;
console.log(pi);
// pi = 3.14159;

// If you re-assign value to a constant, you will get the TypeError: Assignment to constant variable.