let results = ["pass", "fail", "pass", "error", "fail"];

console.log(results.indexOf("fail"));
console.log(results.indexOf("error"));
console.log(results.indexOf("blocked")); // Returns -1 if not found

console.log(results.lastIndexOf("fail")); // searches from end

console.log(results.includes("error")); // returns boolean
console.log(results.includes("blocked")); 

// find - retuns first element matching

let nums = [10, 35, 25, 40, 45];
console.log(nums.find(x => x >30));
console.log(nums.findIndex(x => x > 25));
console.log(nums.findLast(x => x >30));
console.log(nums.findLastIndex(x => x >30));