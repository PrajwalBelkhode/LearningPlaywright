let browsers = ["Chrome", "Firefox", "Edge"];
// Adding to end
browsers.push("Opera");
console.log(browsers);

let nums = [1, 2, 3, 4, 5];
nums.pop();
console.log(nums);

// Adding multiple elements to end using push.
browsers.push("Safari", "brave");
console.log(browsers);

// Adding to beginning

nums.unshift(29, 30);
console.log(nums);

// Remove from beginning

nums.shift();
console.log(nums);

// Splice

let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February"); // Syntax -> (Start, DeleteCount, item)
months.splice(4, 0, "May");
months.splice(6, 0, "July");
console.log(months);