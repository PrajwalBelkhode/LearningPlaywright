/**
 * let a = 10; b = ++a;
 * c = a++ + b + ++a + b++
 * console.log(c);
 * Expression and Result table
 * Line no | a | Result b
 * 2       | 10 |  11
 * 3      |10 + 1 + 11 + 12 + 11 + 1
 * 4     | 46
 */

let a = 10; b = ++a;
let c = a++ + b + ++a + b++;
let d = c++ + ++b + a++ + ++c;
console.log(c);
console.log(d);