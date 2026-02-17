###### Author: Prajwal Belkhode

---



### JavaScript - Hoisting

Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their scope during compilation phase, before the code actually executes.

This means you can use variables and functions before they appear to be declared in your code.

**Example with var:**

```javascript
console.log(num); // undefined
var num = 81 // declaration of the variable
console.log(num) // 81
```


With `let` and `const` declarations are hoisted but remain in a "**Temporal Dead Zone**"

#### Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is the time period between when a variable is hoisted (moved to the top of its scope) and when it's actually initialized with a value. During this zone, the variable exists but is in an "uninitialized" state, and trying to access it results in a `ReferenceError`.

```javascript
console.log(num);
let num = 72;
console.log(num);
```

**Output:**

console.log(num);

    ^

ReferenceError: Cannot access 'num' before initialization
