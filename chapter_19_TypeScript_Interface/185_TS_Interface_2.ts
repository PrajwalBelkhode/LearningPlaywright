interface APIResponse{
    readonly statusCode: number;
    body: string;
    headers?: object; //optional
    responseTime?: number
}

// Readonly - can't modify the readonly
// ? - optional

let response: APIResponse = {
    statusCode: 200,
    body: '{"user": "admin"}'
}

console.log(response.statusCode);
console.log(response.body);
console.log(response.headers);

console.log(" ---------------------------");

interface Point{
    readonly X: number;
    readonly Y: number;
}

const point: Point = {X : 10, Y: 40};
console.log(point.X);
console.log(point.Y);
// point.X = 5; This is not possible. 

//Read Only Array
interface Data{
    readonly items: readonly number[];
}