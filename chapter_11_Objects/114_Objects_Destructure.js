const user = {
    name: "John Cena",
    age: 40,
    email: "john@example.com",
    city: "LA"
};

// Basic destructuring
const { name, age } = user;
console.log(name);
console.log(age);

// Rename variables

const {name: userName, age: UserAge} = user;
console.log(userName);
console.log(UserAge);

// Default values
const {country = "USA"} = user;
console.log(country);

const data = { user: { name: "John", address: { city: "NYC" } } };
const { user: { address: { city } } } = data;