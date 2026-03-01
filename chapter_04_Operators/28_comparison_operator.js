/**
 * Comparison operator includes <, >, ==, !=, >=, <=
 */

console.log(7 > 16);
console.log(7 < 16);
console.log(7 >= 7);
console.log(16 <= 26);

console.log(5 == "5");
console.log(5 != "5"); // false , 5 = int, "5" string, both of them are not equal? - lose couple
console.log(5 !== "5"); // true
//console.log(5 !=== "5"); This doesn't excit

// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.