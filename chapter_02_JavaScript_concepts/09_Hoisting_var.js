console.log(Greetings);
var Greetings = "Hello, Good Afternoon!";
console.log(Greetings);


/**
 * Behind the scenes
 * var Greetings; --> hoisted with undefined
 * console.log(Greetings); --> undefined
 * var Greetings = "Hello, Good Afternoon!"; --> Assignment stays in place
 * console.log(Greetings); --> Hello, Good Afternoon!
 */