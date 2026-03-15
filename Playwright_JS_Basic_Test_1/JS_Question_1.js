console.log(2 ** 3);
console.log('5'-3);
console.log(typeof('5'+3));

let arr = [1, 2, 3, 4];
console.log(typeof(arr));

console.log(true + true);

console.log(0 || 'hello');
console.log(0 ?? 'hello');

if (''){
    console.log('yes');
}
else{
    console.log('no');
}

console.log(Boolean([]));

let day = 3; 
switch (day) 
{ case 1: console.log("Mon"); 
    case 2: console.log("Tue"); 
    case 3: console.log("Wed"); 
    case 4: console.log("Thu"); 
    default: console.log("Other"); }

for (let i = 0; i < 5; i++) 
    { if (i === 3) break; } 
console.log(i);