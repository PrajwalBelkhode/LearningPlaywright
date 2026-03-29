/**
 * ✅ Pure functions: A pure function always returns same ouput for the same input and has no side effects
 */

function calculatePassRate(total, passed){
    return ((passed/total) * 100).toFixed(2);
}

console.log(calculatePassRate(10,8));

// ❌ Impure function: Depends on the external state.
let Threshold = 70;

function isPassing(score){
    return score > Threshold;
}

console.log(isPassing(80));
console.log(isPassing(67));