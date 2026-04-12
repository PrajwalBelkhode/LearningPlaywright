const user = {
    name: "John Cena",
    age: 40,
    email: "john@example.com"
};

console.log(user);

// Accessing properties

console.log(user.name);
console.log(user["age"]);

// Dynamic property access
const key = "age";
console.log(user[key]);

// Adding / Modifying properties

user.city = "Los Angeles";
user.age = 42;

console.log(user);