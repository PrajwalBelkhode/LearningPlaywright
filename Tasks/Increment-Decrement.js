// Initial Value assigned
let a = 5;
// b = 5+1 + 1+5 = = 12 (Value of a becomes 5 + 1 -> 6 & ++6 -> 1+6 =-> 7)
let b = a++ + ++a;
/* value of a becomes = 7 (7 + 1) -> (1 + 8) -> (1 + 9) -> (1 + 10) -> 11 (11 + 1)
c = 7 + 9 + 10 + 11 + 11
 */
let c = a++ + ++a + ++a + ++a + a++;
console.log(a); 
console.log(b);
console.log(c);