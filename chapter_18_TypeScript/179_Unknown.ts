let unknown: unknown = 12345;

if (typeof unknown === "string"){
    console.log("Hi");
}

let message:string = "Hello";
console.log(message);
console.log(typeof(message));

// Function Annotations

function greet(name:string):string {
    return `Hello, ${name}!`;
}

// Arrow functions annotations

const multiply = (a: number, b: number): number => a * b;

// Object annotations
let user:{name: string; age: number} = {
    name: "John",
    age: 30
};