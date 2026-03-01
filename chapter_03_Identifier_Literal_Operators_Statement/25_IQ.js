console.log(0 == "");
console.log(0 == "0");

// Strict check
console.log(0 === false);
console.log(null == undefined);
console.log(" \t\n ") == 0;

// Rule breakers - below all are false

console.log(null == 0);
console.log(null == "");
console.log(null == undefined);
// Strict check
console.log(null === undefined);
console.log(0 === false);

console.log(0 == false);
console.log("0" == false); //true
console.log("" == "0");  //false

let name = null;
let age;

name = "Prajwal";

// var p = NaN;
// p = p +10;

var a = 0 / 0;
var a1 = 0.0 / 0.0;
console.log(a);


let a2;
console.log(a2);

let a3 = null;
console.log(a3);

let red = "#880808";
let green = '#248F35'

console.log(red);
console.log(green);

let inputAge = "true";


if (inputAge == false) {
    console.log("Age is empty/invalid");  // WRONG! "0" == false is true
}