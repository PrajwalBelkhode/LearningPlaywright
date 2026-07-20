function getString(name: string): string{
    return "Hello world!";
}


function getFirstResult<T>(results:T[]): T{
    return results[0]!;
}

let firstCode = getFirstResult<number>([200, 400, 500]);
let firstTest = getFirstResult<string>(["login", "Signup", "Cart"]);

console.log("First code", firstCode);
console.log("First Test:",firstTest);