function sayHello(msg: string): void{
    console.log(msg);
}

// Function Annotations

function greet(name:string):string {
    return `Hello, ${name}!`;
}

function throwError(message: string): never{
    throw new Error(message);
}
