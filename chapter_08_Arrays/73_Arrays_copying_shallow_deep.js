let original = [17891, 90124, 65120, 31908];

let copy1 = [...original]; // spread
console.log("copy1:",copy1);

let copy2 = original.slice();
console.log("copy2:",copy2);

let copy3 = Array.from(original);
console.log("copy3:",copy3);

let copy4 = original.concat();
console.log("copy4:",copy4);

// Shallow copy
copy1.push(781234);
console.log(original);
console.log(copy1);

// Deep copy
let org1 = original;
console.log(org1);
org1.push(1278901);
console.log("Original altered:",original);